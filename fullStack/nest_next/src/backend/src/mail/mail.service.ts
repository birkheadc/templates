import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { Injectable } from "@nestjs/common";
import { RegisterUserRequestDto } from "../users/dtos/register-user.dto";

@Injectable()
export class MailService {

  constructor(private readonly client: SESClient) {

  }

  async sendVerificationEmail(request: RegisterUserRequestDto): Promise<void> {
    // TODO: figure out how templates work
    // TODO: work out localization
    console.log(`Send verification email to ${request.emailAddress}`);
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
            Data: `Thank you for registering an account at Template Nest Next! Please click the link below, or copy and paste it into your browser, to continue the registration process. ${request.verifyUrl} (TODO: change language to ${request.language})`
          }
        }
      }
    });
    try {
      await this.client.send(command);
    } catch (error) {
      console.log('Error in sendVerificationEmail:', error);
    }
  }

  async sendSomeoneTriedToUseYourAddressEmail(emailAddress: string): Promise<void> {
    console.log(`Send warning (someone tried to register with your address) email to ${emailAddress}`);
  }
}