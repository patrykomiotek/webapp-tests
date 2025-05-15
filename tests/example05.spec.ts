import { test, expect } from '@playwright/test';

test.describe('Ćwiczenie 5: Mockowanie API dla Formularza Plików', () => {
  const BASE_URL = 'http://localhost:5173';
  const AIRTABLE_API_URL = 'https://api.airtable.com/v0/appbOzKPuEebvDE0e/files';

  test('Wypełnienie formularza i mockowanie odpowiedzi API (sukces)', async ({ page }) => {
    await page.route(AIRTABLE_API_URL, async (route) => {
      console.log('Przechwycono żądanie POST do:', route.request().url());
      console.log('Metoda:', route.request().method());
      if (route.request().method() === 'POST') {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ message: 'Plik dodany pomyślnie (mock)' }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } else {
        route.continue();
      }
    });

    // await page.route(AIRTABLE_API_URL, async (route) => {
    //   if (route.request().method() === 'POST') {
    //     return await route.fulfill({
    //       status: 200,
    //       contentType: 'application/json',
    //       body: JSON.stringify({ message: 'Plik dodany pomyślnie (mock)' }),
    //     });
    //   } else {
    //     return await route.continue();
    //   }
    // });

    await page.goto(`${BASE_URL}/add-file`);
    await page.getByTitle('name').fill('Testowy Plik Playwright');
    await page.getByTitle('description').fill('Opis pliku dodanego przez Playwright');
    await page.getByTitle('type').fill('e2e-test');

    await page.getByRole('button', { name: 'Send' }).click();
  });
});
