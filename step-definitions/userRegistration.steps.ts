import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { HomePage } from '../../pages/homePage';
import { UserRegistrationPage } from '../../pages/userRegistrationPage';
import { getWorldPage } from './world';

let homePage: HomePage;
let registrationPage: UserRegistrationPage;

const page = getWorldPage();

Given('the user is on the home page', async () => {
  await page.goto('https://parabank.parasoft.com');
  homePage = new HomePage(page);
});

When('I click on register link', async () => {
  await homePage.openRegistrationPage();
  registrationPage = new UserRegistrationPage(page);
});

When(
  'I enter {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}',
  async (
    firstname,
    lastname,
    address,
    city,
    state,
    zip,
    phone,
    ssn,
    username,
    password
  ) => {
    await registrationPage.registerUser(
      firstname,
      lastname,
      address,
      city,
      state,
      zip,
      phone,
      ssn,
      username,
      password
    );
  }
);

Then('the registration page is submitted successfully', async () => {
  await expect(page.locator('text=Your account was created successfully')).toBeVisible();
});