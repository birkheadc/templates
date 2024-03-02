// import registrationEmail from './registrationEmail';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const registrationEmail_en = fs.readFileSync(path.resolve(__dirname, 'registrationEmail_en.html'), 'utf8');
const registrationEmail_jp = fs.readFileSync(path.resolve(__dirname, 'registrationEmail_jp.html'), 'utf8');
const emailAddressInUse_en = fs.readFileSync(path.resolve(__dirname, 'emailAddressInUse_en.html'), 'utf8');
const emailAddressInUse_jp = fs.readFileSync(path.resolve(__dirname, 'emailAddressInUse_jp.html'), 'utf8');


const templateConfiguration = async (serverless, options) => [{
  name: 'nestnexttemplate_RegistrationEmail_en',
  subject: 'nestnexttemplate Account Registration',
  html: registrationEmail_en,
  text: 'Thank you for your interest in nestnexttemplate!\nTo verify this email address, please click the link below, or copy and paste it into your browser.\n{{verifyLink}}',
}, {
  name: 'nestnexttemplate_RegistrationEmail_jp',
  subject: 'nestnexttemplate アカウント登録',
  html: registrationEmail_jp,
  text: 'ご登録いただき、まことにありがとうございます。\nこのメールアドレスの確認のため、下のリンクをクリック、またはブラウザーのほうにコピペしてください。\n{{verifyLink}}',
}, {
  name: 'nestnexttemplate_EmailAddressInUse_en',
  subject: 'nestnexttemplate Someone tried to register an account with your email address.',
  html: emailAddressInUse_en,
  text: "Someone tried to use your email address to create a new account.\n If this was you, you already have an account! Please visit the account recovery section to recover it. If this was not you, there's no need to panic; someone probably just made a mistake typing in their email address.",
}, {
  name: 'nestnexttemplate_EmailAddressInUse_jp',
  subject: 'nestnexttemplate 誰かがこのメールアドレスで新しいアカウントを登録しようとしました',
  html: emailAddressInUse_jp,
  text: "誰かがこのメールアドレスで新しいアカウントを登録しようとしました。\nご自分であれば、アカウントはつねに登録できています！アカウント回復をお訪ねください。ご自分でなくても、心配は要りません。間違ってこのメールアドレスを入力した可能性があります。"
}];

export default templateConfiguration;