// import registrationEmail from './registrationEmail';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const registrationEmail_en = fs.readFileSync(path.resolve(__dirname, 'registrationEmail_en.html'), 'utf8');
const registrationEmail_jp = fs.readFileSync(path.resolve(__dirname, 'registrationEmail_jp.html'), 'utf8');


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
}];

export default templateConfiguration;