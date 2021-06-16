import { t } from 'testcafe';
import LoginPage from '@pages/Login/loginPage';
import logger from '@config/logger';

export default class LoginPageActions {
  /**
   * Initializes a new instance of {@link LoginPageActions}
   */
  constructor() {
    this.loginPage = new LoginPage();
  }

  /**
   * Helps logging in to the system using the passed parameters
   * @param {String} user user that is already registered
   * @param {String} pass password associated to the user
   */
  async logIn(user, pass) {
    logger.info(`Logging in as [${user}]`);
    await t
      .typeText(this.loginPage.alreadyRegisteredEmailInput, user)
      .typeText(this.loginPage.alreadyRegisteredPassInput, pass)
      .click(this.loginPage.signInButton);
  }

  /**
   * Starts the new account creation process
   * @param {String} email acount to create a new account
   */
  async signUp(email) {
    logger.info(`Signing up ${email}`);
    await t
      .typeText(this.loginPage.createACcountEmailInput, email)
      .click(this.loginPage.createAccountButton);
  }

  // TODO: Forgot password?
}
