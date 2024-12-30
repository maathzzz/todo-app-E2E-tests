import { test, expect } from '@playwright/test';

const TEST_USER = process.env.TEST_USER;
const TEST_PASSWORD = process.env.TEST_PASSWORD;
const NEXT_PUBLIC_APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://todo-app-e2e-tests.pages.dev/";

test('Login', async ({ page }) => {
  await page.goto(NEXT_PUBLIC_APP_URL);
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(`${TEST_USER}`);
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(`${TEST_PASSWORD}`);
  await page.getByRole('button', { name: 'Login' }).click();
});