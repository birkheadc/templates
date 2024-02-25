import { Injectable } from "@nestjs/common";

@Injectable()
export class MailService {
  async sendVerificationEmail(emailAddress: string): Promise<void> {
    console.log(`Send verification email to ${emailAddress}`);
  }

  async sendSomeoneTriedToUseYourAddressEmail(emailAddress: string): Promise<void> {
    console.log(`Send warning (someone tried to register with your address) email to ${emailAddress}`);
  }
}