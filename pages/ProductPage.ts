import { Page, Locator } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly productName: Locator;
  readonly quantityInput: Locator;
  readonly addToCartButton: Locator;
  readonly cartQuantity: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productName = page.getByTestId('product-name');
    this.quantityInput = page.getByTestId('quantity');
    this.addToCartButton = page.getByTestId('add-to-cart');
    this.cartQuantity = page.getByTestId('cart-quantity');
  }

  async setQuantity(quantity: number) {
    await this.quantityInput.fill(String(quantity));
  }

  async addToCart() {
    await this.addToCartButton.click();
  }
}
