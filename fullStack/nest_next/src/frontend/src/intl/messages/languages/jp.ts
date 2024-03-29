import { ResultMessage } from '@/types/result/resultMessage';
import { Messages } from '../interface';
import { FormValidationErrorMessage } from '../../../types/formValidation/formValidationErrorMessage';
import { FormValidationErrorMatchesCriteria } from '../../../types/formValidation/formValidationErrorMatchesCriteria';

const messages: Messages = {
  home: {
    section1: {
      'header': '私も前正しくその話人というののためを投げ出しましです',
      'body': 'これも十一月もうその発会帰りというののうちに出来ですた。初めて生涯で影響帰りはもしその汚辱たんまでが云わし切らなかっには誤解なるたなけれて、それほどには起しらしくたですな。'
    },
    section2: {
      'header': '今にはすこぶるなっけれどもできでしょずでしょたと',
      'body': 'たとい向さんを濫用個人いっそ危くがふりまいまし大名同じ他私か影響をというお教育たないないまして、その今日は私か骨他に定めるて、岡田さんの点が男の私にもしご批評と行って私腹でご吟味を考えようにもうお仕事に構わたましば、何でもかでもかつてお話しにするでからいたのがあっだろた。'
    },
    section3: {
      'header': 'はなはだとうてい見つからから生活もそう怪しいなら事ませ',
      'body': '岡田さんはこう自力をやるばしだものですたた。（また国家に願っ末たでたながらたは比べるただと、）少々するませ味に、早稲田の投なりつけ加えとしゃべっという、傍点の妨害も場合の時かも連れ駈けのを思うですて教育めしば来たというご一部分な事だ。'
    },
    section4: {
      'header': '程度はよるて行くうなかろ',
      'body': '自分の今の、こうした傍点を事実を落ちつけほど、半分ごろをまだ事実十一三カ月をありなどの国家を、私かした料簡へ考えうその間はかく怒っせるのですて、とうとうそう顔になくので、このものに思っのへ自由でないするなた。'
    }
  },
  nav: {
    home: 'ホーム',
    login: 'ログイン',
    register: '新規登録',
    logout: 'ログアウト',
    dashboard: 'ダッシュボード'
  },
  login: {
    header: 'ログイン',
    recoverAccount: 'ログインできない場合',
    registerNew: '新規登録',
    sessionExpired: 'もう一度ログインしてください'
  },
  register: {
    header: '新規登録',
    instructions: 'メールアドレスを入力してください。登録手続きのリンクをお送りいたします。',
    verified: {
      checking: '確認中。少々お待ちください。',
      failure: '申し訳ございません。メールアドレスの確認が失敗しました。',
      instructions: '引き続き以下のフォームをご記入ください。'
    }
  },
  logout: {
    header: 'ログアウト中'
  },
  dashboard: {
    changePassword: 'パスワード更新',
    nav: {
      dashboard: 'ダッシュボード',
      security: 'セキュリティ',
      userPreferences: '設定',
      profile: 'プロフィール'
    },
    profile: {
      profile: 'プロフィール',
      emailAddress: 'メールアドレス',
      displayName: 'ユーザーネーム',
      language: '言語'
    }
  },
  general: {
    signUp: '新規登録',
    signIn: 'ログイン',
    submit: '送信',
    emailAddress: 'メールアドレス',
    displayName: 'ユーザーネーム',
    password: 'パスワード',
    confirmPassword: 'パスワード再入力',
    currentPassword: '現在パスワード',
    newPassword: '新しいパスワード'
  },
  resultMessages: {
    [ResultMessage.NOT_YET_IMPLEMENTED]: '未実装',
    [ResultMessage.URL_NOT_DEFINED]: 'アドレス不定義',
    [ResultMessage.CONNECTION_REFUSED]: '切断',
    [ResultMessage.CONNECTION_FAILED]: '拒否',
    [ResultMessage.UNEXPECTED_RESPONSE]: '予定外エラー',
    [ResultMessage.LOGIN_SUCCESS]: 'ログイン成功',
    [ResultMessage.GENERIC_SUCCESS]: '成功',
    [ResultMessage.REGISTRATION_EMAIL_SENT]: '登録手続きのメールを送信しました。ご確認ください。',
    [ResultMessage.VERIFY_EMAIL_SUCCESS]: 'メールアドレスの確認が完了しました。',
    [ResultMessage.CREATE_USER_SUCCESS]: 'ありがとうございます。アカウント登録が完成しました。ログインしてください。',
    [ResultMessage.NOT_LOGGED_IN]: 'ログインしていません',
    [ResultMessage.ACCOUNT_RECOVERY_EMAIL_SENT]: '登録手続きのメールを送信しました。ご確認ください。',
    [ResultMessage.PASSWORD_RESET_SUCCESS]: 'パスワードを変更しました。再びログインしてください。'
  },
  formValidationErrorMessages: {
    [FormValidationErrorMessage.REQUIRED]: '必要',
    [FormValidationErrorMessage.MIN_LENGTH]: '<min></min>文字以上',
    [FormValidationErrorMessage.MAX_LENGTH]: '<max></max>文字以下',
    [FormValidationErrorMessage.MATCHES]: '次の条件がそろっていない：<criteria></criteria>',
    [FormValidationErrorMessage.EXACT_MATCH]: '一致していない',
    [FormValidationErrorMessage.IS_EMAIL]: '無効',
    [FormValidationErrorMessage.UNIQUE]: '現在使用中'
  },
  formValidationErrorMatchesCriteria: {
    [FormValidationErrorMatchesCriteria.ALPHANUMERIC]: 'ローマ字またはローマ数字以外禁止'
  },
  accountRecovery: {
    header: 'アカウント復元',
    instructions: '下のフォームにメールアドレスをご記入いただき、パスワードを変更するためのリンクをお送りいたします。',
    resetFormInstructions: '新しいパスワードを入力してください',
    checking: '確認中。少々お待ちください。',
    failure: '申し訳ございません。メールアドレスの確認が失敗しました。',
  }
}

export default messages;