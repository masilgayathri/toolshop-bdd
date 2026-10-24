import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly searchCaption: Locator;
  readonly searchResults: Locator;
  readonly productNames: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByTestId('search-query');
    this.searchButton = page.getByTestId('search-submit');
    this.searchCaption = page.getByTestId('search-caption');
    this.searchResults = page.getByTestId('search_completed');
    this.productNames = page.getByTestId('product-name');
  }

  async open() {
    await this.page.goto('/');
  }

  async search(term: string) {
    await this.searchInput.fill(term);
    await this.searchButton.click();
  }

  async openProduct(name: string) {
    await this.page.getByRole('heading', { name, exact: true }).click();
  }
}
