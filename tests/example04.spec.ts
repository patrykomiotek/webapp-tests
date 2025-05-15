import { test, expect } from '@playwright/test';

test.describe('Ćwiczenie 4: Interakcja z Listą Todo', () => {
  const BASE_URL = 'http://localhost:5173';

  test('Weryfikacja listy zadań Todo', async ({ page }) => {
    // 1. Przejdź na stronę listy zadań
    await page.goto(BASE_URL + '/todos');
    await expect(page).toHaveTitle('Todo List');

    // 2. Poczekaj, aż zniknie komunikat "Loading..."
    await expect(page.locator('div:has-text("Loading...")').first()).not.toBeVisible({
      timeout: 10000,
    });

    // 3. Zweryfikuj, że są zadania lub komunikat "No todos found"
    const todoItems = page.locator('div > p');
    const noTodosMessage = page.getByText('No todos found');

    const hasTodos = (await todoItems.count()) > 0;
    const hasNoTodosMessage = await noTodosMessage.isVisible();

    expect(hasTodos || hasNoTodosMessage).toBe(true);

    // 4. Jeśli są zadania, sprawdź tekst pierwszego
    if (hasTodos) {
      const firstTodoText = await todoItems.first().textContent();
      console.log('Pierwsze zadanie:', firstTodoText);
      expect(firstTodoText).not.toBeNull();
      expect(firstTodoText?.length).toBeGreaterThan(0);
    } else if (hasNoTodosMessage) {
      console.log('Wyświetlono komunikat: No todos found');
    }
  });
});
