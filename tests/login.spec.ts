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
        await page.getByRole('textbox', { name: 'Usuario' }).fill('456');
        await page.getByRole('textbox', { name: 'clave inicial' }).fill('p456$');

       /* // Completar el formulario de login
        await page.fill('input[name="dni"]', DNI_VALIDO);
        await page.fill('input[name="password"]', PASS_VALIDO);
        await page.click('button[type="submit"]'); // Ajusta el selector si es diferente */
        
        /*// Verificar redirección
        await expect(page).toHaveURL(`${BASE_URL}/Proteccion/Inicio.aspx`); */
        
       /* // Verificar que el usuario correcto se muestra en la página
        await expect(page.locator('selector-del-usuario')).toHaveText('Juan Perez'); */
    }); 

    /* test('Caso fallido: ingreso con credenciales inválidas', async ({ page }) => {
        await page.goto(`${BASE_URL}`);
        
        // Completar el formulario de login con datos incorrectos
        await page.fill('input[name="dni"]', DNI_INVALIDO);
        await page.fill('input[name="password"]', PASS_INVALIDO);
        await page.click('button[type="submit"]');

        // Verificar mensaje de error
        await expect(page.locator('text="La combinación de usuario y clave no coincide"')).toBeVisible();
    });*/

});
