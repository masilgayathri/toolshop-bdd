import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';

const { When, Then } = createBdd();

When('I open the product {string}', async ({ page }, name: string) => {
  const homePage = new HomePage(page);
  await homePage.openProduct(name);
  const productPage = new ProductPage(page);
  await expect(productPage.productName).toHaveText(name);
});

When('I set the quantity to {int}', async ({ page }, quantity: number) => {
  const productPage = new ProductPage(page);
  await productPage.setQuantity(quantity);
});

When('I add the product to the cart', async ({ page }) => {
  const productPage = new ProductPage(page);
  await productPage.addToCart();
});

Then('I see the message {string}', async ({ page }, message: string) => {
  await expect(page.getByRole('alert').filter({ hasText: message }).first()).toBeVisible();
});

Then('the cart shows {int} items', async ({ page }, count: number) => {
  const productPage = new ProductPage(page);
  await expect(productPage.cartQuantity).toHaveText(String(count));
});
