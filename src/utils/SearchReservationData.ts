import puppeteer from 'puppeteer';

import RoomData from '../models/RoomData';

import baseUrl from './BaseUrl';

interface RequestDTO {
    checkIn: number;
    checkOut: number;
}

export default async function searchReservationData({
    checkIn,
    checkOut,
}: RequestDTO): Promise<RoomData[]> {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.goto(baseUrl(checkIn, checkOut));

    const result = <RoomData[]>await page.evaluate(() => {
        const reservationData: any[] = [];

        const table = <Element>document.querySelector('.maintable');

        const roomName = table.querySelectorAll('.roomName');

        // =====================================================================
        // PERCORRENDO TODOS OS QUARTOS ENCONTRADOS
        // =====================================================================
        roomName.forEach(room => {
            const classExcerpt = <Element>room.querySelector('.excerpt');

            // =================================================================
            // CAPTURANDO O NOME DO QUARTO E A DESCRIÇÃO
            // =================================================================
            const name = classExcerpt?.querySelector('h5')?.textContent || '';

            const description =
                classExcerpt?.querySelector('p')?.textContent || '';
            // =================================================================

            const sincePriceContent = <Element>(
                room.querySelector('.sincePriceContent')
            );

            // =================================================================
            // CAPTURANDO O PREÇO DA DIÁRIA DO QUARTO
            // =================================================================
            const price = sincePriceContent?.querySelector('h6')?.textContent;
            // =================================================================

            const classSlide = room.querySelectorAll('.slide');

            const image: string[] = [];

            // =================================================================
            // PERCORRENDO E CAPTURANDO TODAS AS IMAGENS DO QUARTO
            // =================================================================
            classSlide.forEach(slide => {
                image.push(
                    `https://myreservations.omnibees.com${slide
                        .querySelector('img')
                        ?.getAttribute('src')}`,
                );
            });
            reservationData.push({
                name,
                description,
                price,
                image,
            });
        });
        // =====================================================================

        return reservationData;
    });

    await browser.close();

    return result;
}
