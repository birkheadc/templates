import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { Injectable, UnauthorizedException, UnprocessableEntityException } from "@nestjs/common";
import { RegisterUserRequestDto } from "../users/dtos/register-user.dto";
import { JwtService } from "@nestjs/jwt";
import { EmailVerificationTokenPayload } from "./payload/emailVerificationTokenPayload";

@Injectable()
export class MailService {

  constructor(private readonly client: SESClient, private readonly jwtService: JwtService) {

  }

  async sendVerificationEmail(request: RegisterUserRequestDto): Promise<void> {
    // TODO: figure out how templates work
    // TODO: work out localization
    console.log(`Send verification email to ${request.emailAddress}`);
    const verifyCode = await this.generateVerifyCode(request);
    const command = new SendEmailCommand({
      Source: 'registration@mail.birkheadc.me',
      Destination: {
        ToAddresses: [
          request.emailAddress
        ]
      },
      Message: {
        Subject: {
          Charset: 'UTF-8',
          Data: `Template Nest Next Registration (TODO: change language to ${request.language})`
        },
        Body: {
          Text: {
            Charset: 'UTF-8',
            Data: `Thank you for registering an account at Template Nest Next! Please click the link below, or copy and paste it into your browser, to continue the registration process. ${request.verifyUrl}?code=${verifyCode} (TODO: change language to ${request.language})`
          }
        }
      }
    });
    try {
      await this.client.send(command);
    } catch (error) {
      console.log('Error in sendVerificationEmail:', error);
      throw new UnprocessableEntityException();
    }
  }

  async sendSomeoneTriedToUseYourAddressEmail(emailAddress: string): Promise<void> {
    console.log(`Send warning (someone tried to register with your address) email to ${emailAddress}`);
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

  async generateVerifyCode(request: RegisterUserRequestDto): Promise<string> {
    const payload: EmailVerificationTokenPayload = { sub: request.emailAddress };
    const token = await this.jwtService.signAsync(payload);
    return token;
  }
}