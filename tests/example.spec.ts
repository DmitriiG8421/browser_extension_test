import { test, expect } from '@playwright/test';



test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('has title1', async ({ page }) => {
  await page.goto('https://playwright.dev/');
await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
});

test('has title2', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
});

test('has title3', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
});

test('has title4', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
});

test('has title5', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
});

test('has title6', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
});








