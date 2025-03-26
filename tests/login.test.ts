import { test, expect, chromium } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config(); 

const BASE_URL = process.env.BASE_URL as string;
const DNI_VALIDO = process.env.DNI_VALIDO as string;
const PASS_VALIDO = process.env.PASS_VALIDO as string;
const DNI_INVALIDO = process.env.DNI_INVALIDO as string;
const PASS_INVALIDO = process.env.PASS_INVALIDO as string;

test.describe('Pruebas de Login', () => {
    
    test('CASO EXITOSO: ingreso con credenciales válidas', async ({ page }) => {
        const browser = await chromium.launch({
            headless: false });
        const context = await browser.newContext();

        await page.goto(`${BASE_URL}`);
        await page.getByRole('textbox', { name: 'Usuario' }).fill(DNI_VALIDO);
        await page.getByRole('textbox', { name: 'clave inicial' }).fill(PASS_VALIDO);
        await page.getByRole('button', { name: 'Submit' }).click();
        await context.close();
        await browser.close();
        /*await page.getByRole('textbox', { name: 'Usuario' }).fill('456');
        await page.getByRole('textbox', { name: 'clave inicial' }).fill('p456$');
        await page.getByRole('button', { name: 'Submit' }).click();*/

    }); 

    test('CASO FALLIDO: ingreso con credenciales inválidas', async ({ page }) => {
        const browser = await chromium.launch({
            headless: false });
        const context = await browser.newContext();

        await page.goto(`https://sistemacuenca.ucp.edu.ar/alumnosnotas/`);
        await page.getByRole('textbox', { name: 'Usuario' }).fill(DNI_INVALIDO);
        await page.getByRole('textbox', { name: 'clave inicial' }).fill(PASS_INVALIDO);
        await page.getByRole('button', { name: 'Submit' }).click();
        await context.close();
        await browser.close();        
});
});