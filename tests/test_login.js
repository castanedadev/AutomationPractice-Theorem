import { t } from 'testcafe';
import { internet } from 'faker';
import urls from '@constants/urls';
import logger from '@config/logger';
import getCredentials from '@config/users';
import BasePageActions from '@pageActions/basePageActions';
import LoginPageActions from '@pageActions/Login/loginPageActions';
import MyAccountPageActions from '@pageActions/Account/myAccountPageActions';
import AccountCreationPageActions from '@pageActions/Login/accountCreationPageActions';

const basePageActions = new BasePageActions();
const loginPageActions = new LoginPageActions();
const myAccountPageActions = new MyAccountPageActions();
const accountCreationPageActions = new AccountCreationPageActions();

const { email: existingEmail, password: existingPass } = getCredentials('testUser1');

fixture('Test - Login Page')
  .meta('smoke', 'true')
  .meta('page', 'SignIn')
  .meta('feature', 'CreateAccount')
  .page(urls.BASE_URL)
  .before(async (ctx) => {
    ctx.email = internet.email();
    ctx.password = internet.password();
  }).beforeEach(async (t) => {
    await basePageActions.goToSignIn();
    logger.info(`${existingEmail} ---- ${existingPass}`);
  });

test.meta('testCaseId', 'TC0001')('Verify new account can be created', async (t) => {
  const { email, password } = t.fixtureCtx;
  await loginPageActions.signUp(email);
  await accountCreationPageActions.fillPersonalInfo(email, { password });
  await accountCreationPageActions.fillAddress();
  await accountCreationPageActions.proceedWithRegistration();
  await myAccountPageActions.validateMyAccountHome();
});

test.meta('testCaseId', 'TC0002')('Verify that an already registered user can log in successfully', async (t) => {
  const { email, password } = t.fixtureCtx;
  await loginPageActions.logIn(email, password);
  await myAccountPageActions.validateMyAccountHome();
});
