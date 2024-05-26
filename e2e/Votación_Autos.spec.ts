import { test, expect } from '@playwright/test';

test('testVotar_sinregistro', async ({ page }) => {
    await page.goto('https://buggy.justtestit.org/');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('input[name="password"]').click();
    await page.locator('.center-block').first().click();
    await page.getByRole('heading', { name: 'Popular Make' }).click();
    await page.getByRole('link', { name: 'Lamborghini' }).click();
    await page.getByRole('link', { name: 'AVENTADOR', exact: true }).click();
    await page.locator('my-model div').filter({ hasText: 'You need to be logged in to' }).nth(4).click();
    await page.getByText('You need to be logged in to').click();
    await page.getByRole('heading', { name: 'Votes:' }).click();
    await page.getByText('You need to be logged in to').click();
  });

//En este test se hacen 3 en 1, que el usuario pueda votar estando registrado, que pueda votar y comentar y que el voto sume
test('testVotar_registrado', async ({ page }) => {
    await page.goto('https://buggy.justtestit.org/');
  await page.getByPlaceholder('Login').click();
  await page.getByPlaceholder('Login').click();
  await page.getByPlaceholder('Login').fill('juansd');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('Sebas987*');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Lamborghini' }).click();
  await page.getByRole('link', { name: 'Diablo', exact: true }).click();
  await page.getByLabel('Your Comment (optional)').click();
  await page.getByLabel('Your Comment (optional)').fill('Increible');
  await page.getByRole('button', { name: 'Vote!' }).click();
  await page.getByRole('button', { name: 'Vote!' }).click();
  await page.getByText('Thank you for your vote!').click();
  await page.getByText('Thank you for your vote!').click();
  await page.getByRole('cell', { name: 'May 25, 2024, 7:56:13 PM' }).click();
  await page.getByRole('cell', { name: 'Increible', exact: true }).first().click();
  await page.goto('https://buggy.justtestit.org/make/ckl2phsabijs71623vk0');
  await page.getByRole('link', { name: 'Diablo', exact: true }).click();
  await page.getByText('Thank you for your vote!').click();
  await page.getByText('Thank you for your vote!').click();
  await page.getByRole('link', { name: 'Buggy Rating' }).click();
  await page.getByRole('heading', { name: 'Popular Model' }).click();
  await page.getByRole('link', { name: 'Lamborghini' }).click();
  await page.getByRole('link', { name: 'Reventón', exact: true }).click();
  await page.getByLabel('Your Comment (optional)').click();
  await page.getByLabel('Your Comment (optional)').fill('Gran auto');
  await page.getByRole('button', { name: 'Vote!' }).click();
  await page.locator('my-model div').filter({ hasText: 'Votes:' }).nth(4).click();
  await page.getByText('1094').click();
});
