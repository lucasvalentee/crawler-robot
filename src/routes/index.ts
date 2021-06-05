import { Router } from 'express';
import SearchReservationService from '../service/SearchReservationService';

const routes = Router();

routes.post('/buscar', async (request, response) => {
    try {
        const { checkIn, checkOut } = request.body;

        const searchReservationService = new SearchReservationService({
            checkIn,
            checkOut,
        });

        const roomData = await searchReservationService.execute();

        if (!roomData) {
            throw Error(
                'Desculpe-nos. Não existem apartamentos disponíveis para a pesquisa realizada.',
            );
        }

        return response.json(roomData);
    } catch (error) {
        return response.json({ error: error.message });
    }
});

export default routes;
