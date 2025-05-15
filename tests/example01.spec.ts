import { test, expect } from '@playwright/test';

test.describe('Ćwiczenie 1: Podstawowa Nawigacja i Weryfikacja Tytułu', () => {
  const BASE_URL = 'http://localhost:5173';

  test('Nawigacja i weryfikacja tytułów stron', async ({ page }) => {
    await page.goto(BASE_URL + '/');
    await expect(page).toHaveTitle('Home');
    await page.goto(BASE_URL + '/files');
    await expect(page).toHaveTitle('Files');
  });
});
