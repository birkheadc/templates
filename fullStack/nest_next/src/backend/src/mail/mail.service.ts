import { SESClient, SendEmailCommand, SendTemplatedEmailCommand } from "@aws-sdk/client-ses";
import { Injectable, UnauthorizedException, UnprocessableEntityException } from "@nestjs/common";
import { RegisterUserRequestDto } from "../users/dtos/register-user.dto";
import { JwtService } from "@nestjs/jwt";
import { EmailVerificationTokenPayload } from "./payload/emailVerificationTokenPayload";
import { RequestResetPasswordLinkRequestDto } from "../users/dtos/request-reset-password-link.dto";
import { EmailAddress } from "../types/emailAddress/emailAddress";

@Injectable()
export class MailService {

  constructor(private readonly client: SESClient, private readonly jwtService: JwtService) {

  }

  async sendVerificationEmail(request: RegisterUserRequestDto): Promise<void> {
    const verifyCode = await this.generateVerifyCode(request);
    const command = new SendTemplatedEmailCommand({
      Source: 'registration@mail.birkheadc.me',
      Destination: {
        ToAddresses: [
          request.emailAddress
        ]
      },
      Template: `nestnexttemplate_RegistrationEmail_${request.language}`,
      TemplateData: JSON.stringify({
        verifyLink: `${request.verifyUrl}?code=${verifyCode}`
      })
    });
    try {
      await this.client.send(command);
    } catch (error) {
      console.log('Error in sendVerificationEmail:', error);
      throw new UnprocessableEntityException();
    }
  }

  async sendSomeoneTriedToUseYourAddressEmail(emailAddress: EmailAddress, language: string): Promise<void> {
    const command = new SendTemplatedEmailCommand({
      Source: 'registration@mail.birkheadc.me',
      Destination: {
        ToAddresses: [
          emailAddress
        ]
      },
      Template: `nestnexttemplate_EmailAddressInUse_${language}`,
      TemplateData: '{}'
    });
    try {
      await this.client.send(command);
    } catch (error) {
      console.log('Error in sendSomeoneTriedToUseYourAddressEmail:', error);
      throw new UnprocessableEntityException();
    }
  }

  async verifyCode(code: string): Promise<string> {
    try {
      const payload = EmailVerificationTokenPayload.fromJson(this.jwtService.verify(code));
      if (payload.sub == null) throw new UnauthorizedException();
      return payload.sub;
    } catch (error) {
      console.log(`Error in verifyCode: `, error);
      throw new UnauthorizedException();
    }
  }

  async generateVerifyCode(request: { emailAddress: EmailAddress}): Promise<string> {
    const payload: EmailVerificationTokenPayload = { sub: request.emailAddress };
    const token = await this.jwtService.signAsync(payload);
    return token;
  }

  async sendPasswordResetEmail(request: RequestResetPasswordLinkRequestDto): Promise<void> {
    console.log({request});
    const resetCode = await this.generateVerifyCode(request);
    const command = new SendTemplatedEmailCommand({
      Source: 'security@mail.birkheadc.me',
      Destination: {
        ToAddresses: [
          request.emailAddress
        ]
      },
      Template: `nestnexttemplate_PasswordResetEmail_${request.language}`,
      TemplateData: JSON.stringify({
        resetLink: `${request.resetUrl}?code=${resetCode}`
      })
    });
    try {
      await this.client.send(command);
    } catch (error) {
      console.log('Error in sendPasswordResetEmail:', error);
      throw new UnprocessableEntityException();
    }
  }
}