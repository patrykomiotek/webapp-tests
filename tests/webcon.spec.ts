import { test, expect } from '@playwright/test';

test.skip('has title', async ({ page }) => {
  await page.goto('https://webcon.com');

  await expect(page).toHaveTitle(
    /Low Code Platform, Workflow Automation, Business Process Management/i,
  );
});

test('get started link', async ({ page }) => {
  await page.goto('https://webcon.com');

  // await expect(page.getByText(/the way you work/i)).toBeVisible();

  await page.waitForTimeout(2000);

  await page.getByRole('link', { name: /Explore the platform/i }).click();
  await page.waitForURL('https://webcon.com/low-code-application-platform/');

  await expect(page.getByText(/WEBCON BPS/i)).toBeVisible();
});
