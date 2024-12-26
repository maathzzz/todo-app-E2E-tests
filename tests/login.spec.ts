import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {
  await page.goto('http://localhost:3000/'); // use URL domain from dotenv
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('user@example.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('!P4ssw0rdstr!');
  await page.getByRole('button', { name: 'Login' }).click();
});