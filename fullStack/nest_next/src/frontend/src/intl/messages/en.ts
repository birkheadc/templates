import { Messages } from './interface';

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
    instructions: "provide your email address below, and we'll send you a link to sign up"
  },
  logout: {
    
  },
  dashboard: {
    
  },
  general: {
    signUp: 'sign up',
    signIn: 'sign in',
    submit: 'submit',
    emailAddress: 'email address',
    password: 'password',
  }
}

export default messages;