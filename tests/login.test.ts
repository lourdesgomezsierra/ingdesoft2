import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config(); // Carga variables del .env

/* const BASE_URL = process.env.BASE_URL as string;
const DNI_VALIDO = process.env.DNI_VALIDO as string;
const PASS_VALIDO = process.env.PASS_VALIDO as string;
const DNI_INVALIDO = process.env.DNI_INVALIDO as string;
const PASS_INVALIDO = process.env.PASS_INVALIDO as string; */

test.describe('Pruebas de Login', () => {
    
    test('Caso exitoso: ingreso con credenciales válidas', async ({ page }) => {
        await page.goto(`https://sistemacuenca.ucp.edu.ar/alumnosnotas/`);
        await page.getByRole('textbox', { name: 'Usuario' }).fill('123');
        await page.getByRole('textbox', { name: 'clave inicial' }).fill('p123$');
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.getByRole('textbox', { name: 'Usuario' }).fill('456');
        await page.getByRole('textbox', { name: 'clave inicial' }).fill('p456$');
        await page.getByRole('button', { name: 'Submit' }).click();

    }); 

    test('Caso fallido: ingreso con credenciales inválidas', async ({ page }) => {
        await page.goto(`https://sistemacuenca.ucp.edu.ar/alumnosnotas/`);
        await page.getByRole('textbox', { name: 'Usuario' }).fill('666');
        await page.getByRole('textbox', { name: 'clave inicial' }).fill('demo');
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.getByRole('textbox', { name: 'Usuario' }).fill('abc');
        await page.getByRole('textbox', { name: 'clave inicial' }).fill('demo');
        await page.getByRole('button', { name: 'Submit' }).click();
        
});
});