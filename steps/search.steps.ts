import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { HomePage } from '../pages/HomePage';

const { When, Then } = createBdd();

When('I search for {string}', async ({ page }, term: string) => {
  const homePage = new HomePage(page);
  await homePage.search(term);
});

Then('I see the search caption {string}', async ({ page }, caption: string) => {
  const homePage = new HomePage(page);
  await expect(homePage.searchCaption).toHaveText(caption);
});

Then('every product shown contains {string}', async ({ page }, term: string) => {
  const homePage = new HomePage(page);
  await expect(homePage.searchResults).toBeVisible();
  const names = await homePage.productNames.allTextContents();
  expect(names.length).toBeGreaterThan(0);
  for (const name of names) {
    expect(name).toContain(term);
  }
});
