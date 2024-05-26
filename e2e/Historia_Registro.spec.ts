import { test, expect } from '@playwright/test';

test('testRegistroUsuario', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('https://buggy.justtestit.org/');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByLabel('Login').click();
  await page.getByLabel('Login').fill('carlosag');
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('Carlos');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('Garc');
  await page.getByText('Login Login is required Login cannot be more than 50 characters long First Name').click();
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('Andy#245');
  await page.getByLabel('Confirm Password').click();
  await page.getByLabel('Confirm Password').fill('Andy#245');
});

test('testRegistro_seiscarac', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/register');
  await page.getByLabel('Login').click();
  await page.getByLabel('Login').fill('juanse');
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('Juan');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('Sebas');
  await page.getByText('Password Password is required').click();
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('juan12');
  await page.getByLabel('Confirm Password').click();
  await page.getByLabel('Confirm Password').fill('juan12');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByText('InvalidPasswordException:').dblclick();
  await page.getByText('InvalidPasswordException:').click();
});

test('testRegistro_unavez', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/register');
  await page.getByLabel('Login').click();
  await page.getByLabel('Login').fill('carlosa');
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('Carlos');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('Garc');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('Andy#245');
  await page.locator('html').click();
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.getByLabel('Confirm Password').click();
  await page.getByLabel('Confirm Password').fill('Andy#245');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.locator('html').click();
  await page.getByText('UsernameExistsException: User').click();
  await page.getByText('UsernameExistsException: User').dblclick();
  await page.getByText('UsernameExistsException: User').click();
});