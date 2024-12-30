import { test, expect } from '@playwright/test';
require("dotenv").config({path: "./.env"});

const TEST_USER = process.env.NEXT_PUBLIC_TEST_USER;
const TEST_PASSWORD = process.env.NEXT_PUBLIC_TEST_PASSWORD;
const NEXT_PUBLIC_APP_URL = process.env.NEXT_PUBLIC_APP_URL;

test('Login', async ({ page }) => {
  await page.goto(`${NEXT_PUBLIC_APP_URL}`);
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(`${TEST_USER}`);
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(`${TEST_PASSWORD}`);
  await page.getByRole('button', { name: 'Login' }).click();
});