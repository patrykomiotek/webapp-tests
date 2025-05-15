import { test, expect } from '@playwright/test';

test.describe('Ćwiczenie 2: Interakcja z Formularzem', () => {
  const BASE_URL = 'http://localhost:5173';

  test('Wypełnienie i wysłanie formularza dodawania pliku', async ({ page }) => {
    await page.goto(BASE_URL + '/add-file');
    await expect(page).toHaveTitle('Add File');

    // 2. Zlokalizuj i wypełnij pola formularza
    await page.getByTitle('name').fill('Testowy Plik Playwright');
    await page.getByTitle('description').fill('Opis pliku dodanego przez Playwright');
    await page.getByTitle('type').fill('e2e-test');

    // 3. Kliknij przycisk submit
    await page.getByRole('button', { name: 'submit' }).click();

    // 4. Opcjonalna weryfikacja (np. oczekiwanie na nawigację lub komunikat)
    // await page.waitForURL(BASE_URL + '/files');
    // await expect(page).toHaveTitle('Files');

    // await page.goto('http://localhost:5173/');
    // await page.getByRole('link', { name: 'Add file' }).click();
    // await page.getByRole('textbox', { name: 'name' }).fill('aaa');
    // await page.getByRole('textbox', { name: 'description' }).fill('bbb');
    // await page.getByRole('textbox', { name: 'type' }).fill('ccc');

    // await page.getByRole('button', { name: 'submit' }).click();
  });
});
