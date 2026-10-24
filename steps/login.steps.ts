import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage';

const { Given, When, Then } = createBdd();

Given('I am on the login page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
});

When('I log in with email {string} and password {string}', async ({ page }, email: string, password: string) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(email, password);
});

Then('I see the page title {string}', async ({ page }, title: string) => {
  await expect(page.getByTestId('page-title')).toHaveText(title);
});

Then('I see {string} in the user menu', async ({ page }, name: string) => {
  await expect(page.getByTestId('nav-menu')).toContainText(name);
});

Then('I see the login error {string}', async ({ page }, message: string) => {
  const loginPage = new LoginPage(page);
  await expect(loginPage.errorMessage).toHaveText(message);
});
