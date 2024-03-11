import { ResultMessage } from '@/types/result/resultMessage';
import { Messages } from '../interface';
import { FormValidationErrorMessage } from '../../../types/formValidation/formValidationErrorMessage';
import { FormValidationErrorMatchesCriteria } from '../../../types/formValidation/formValidationErrorMatchesCriteria';

const messages: Messages = {
  home: {
    section1: {
      header: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      body: 'Aut minima explicabo et atque voluptate vero error dolor! In nesciunt odio quia officia laudantium facere soluta dolorum ut harum, modi suntLorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    section2: {
      header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus gravida quis blandit turpis cursus in. Amet consectetur adipiscing elit duis tristique. quis.'
    },
    section3: {
      header: 'Accumsan in nisl nisi scelerisque eu. Velit euismod in pellentesque massa',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam purus sit amet luctus venenatis lectus magna fringilla. Commodo odio aenean sed adipiscing diam donec adipiscing.'
    },
    section4: {
      header: 'Sociis natoque penatibus et magnis dis parturient montes',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum.'
    }
  },
  nav: {
    home: 'home',
    login: 'login',
    register: 'register',
    logout: 'logout',
    dashboard: 'dashboard'
  },
  login: {
    header: 'login',
    recoverAccount: 'recover account',
    registerNew: 'register new'
  },
  register: {
    header: 'register',
    instructions: "provide your email address below, and we'll send you a link to sign up",
    verified: {
      checking: 'verifying your email address. please wait.',
      failure: 'sorry, something went wrong with your verification code',
      instructions: 'please fill out this form to finalize creation of your new account'
    }
  },
  logout: {
    header: 'logging out'
  },
  dashboard: {
    changePassword: 'change password',
    nav: {
      dashboard: 'dashboard',
      security: 'security',
      userPreferences: 'user preferences',
      profile: 'profile'
    }
  },
  general: {
    signUp: 'sign up',
    signIn: 'sign in',
    submit: 'submit',
    emailAddress: 'email address',
    displayName: 'display name',
    password: 'password',
    confirmPassword: 'confirm password',
    currentPassword: 'current password',
    newPassword: 'new password'
  },
  resultMessages: {
    [ResultMessage.NOT_YET_IMPLEMENTED]: 'not yet implemented',
    [ResultMessage.URL_NOT_DEFINED]: 'url not defined',
    [ResultMessage.CONNECTION_REFUSED]: 'connection refused',
    [ResultMessage.CONNECTION_FAILED]: 'connection failed',
    [ResultMessage.UNEXPECTED_RESPONSE]: 'something unexpected happened',
    [ResultMessage.LOGIN_SUCCESS]: 'logged in successfully',
    [ResultMessage.GENERIC_SUCCESS]: 'success',
    [ResultMessage.REGISTRATION_EMAIL_SENT]: 'an email has been sent to your inbox with instructions on how to proceed',
    [ResultMessage.VERIFY_EMAIL_SUCCESS]: 'your email address has been verified',
    [ResultMessage.CREATE_USER_SUCCESS]: 'congratulations, you have successfully created an account. you may now login',
    [ResultMessage.NOT_LOGGED_IN]: 'not logged in'
  },
  formValidationErrorMessages: {
    [FormValidationErrorMessage.MIN_LENGTH]: 'must be at least <min></min> characters',
    [FormValidationErrorMessage.MAX_LENGTH]: 'must be at most <max></max> characters',
    [FormValidationErrorMessage.MATCHES]: 'must meet the following criteria: <criteria></criteria>',
    [FormValidationErrorMessage.REQUIRED]: 'required',
    [FormValidationErrorMessage.EXACT_MATCH]: 'must match',
    [FormValidationErrorMessage.IS_EMAIL]: 'must be a valid email address',
    [FormValidationErrorMessage.UNIQUE]: 'already in use'
  },
  formValidationErrorMatchesCriteria: {
    [FormValidationErrorMatchesCriteria.ALPHANUMERIC]: 'must only include letters and numbers'
  },
  accountRecovery: {
    header: 'account recovery'
  }
}

export default messages;