import { test, expect } from '@playwright/test';

test('homepage shows basic info', async ({ page }) => {
    await page.goto('/');

    const header = page.getByText('Simple store');
    const intro = page.getByText('A place for you to find, learn and buy coffee.');

    await expect(header).not.toBeEmpty();
    await expect(intro).not.toBeEmpty();
});
