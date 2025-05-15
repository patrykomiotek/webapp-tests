import { test, expect } from '@playwright/test';

test.describe('Ćwiczenie 3: Testowanie Autentykacji', () => {
  const BASE_URL = 'http://localhost:5173';

  test('Przełączanie stanu zalogowania użytkownika', async ({ page }) => {
    // 1. Przejdź na stronę informacji o autentykacji
    await page.goto(BASE_URL + '/auth/info');
    await expect(page).toHaveTitle('Auth Info');

    const loginStatusText = page.locator('p', { hasText: /Is user logged?/ });
    const toggleButton = page.getByRole('button', { name: 'Toggle' });

    // 2. Sprawdź początkowy stan (oczekujemy "NO")
    await expect(loginStatusText).toContainText('Is user logged? NO');

    // 3. Kliknij przycisk Toggle
    await toggleButton.click();

    // 4. Sprawdź, czy stan zmienił się na "YES"
    await expect(loginStatusText).toContainText('Is user logged? YES');

    // 5. Kliknij przycisk Toggle ponownie
    await toggleButton.click();

    // 6. Sprawdź, czy stan powrócił do "NO"
    await expect(loginStatusText).toContainText('Is user logged? NO');
  });
});
