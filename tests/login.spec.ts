import { test, expect } from '@playwright/test';
require("dotenv").config({path: "./.env.local"});

const TEST_USER = process.env.TEST_USER;
const TEST_PASSWORD = process.env.TEST_PASSWORD;
const TEST_URL = process.env.TEST_URL;

test('Login', async ({ page }) => {
  await page.goto(`${TEST_URL}`);
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(`${TEST_USER}`);
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(`${TEST_PASSWORD}`);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/.*todos/);
});