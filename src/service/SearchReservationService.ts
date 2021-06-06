import { isBefore, format } from 'date-fns';
import RoomData from '../models/RoomData';

import formatDate from '../utils/FormatDate';
import searchReservationData from '../utils/SearchReservationData';

interface RequestDTO {
    checkIn: string;
    checkOut: string;
}

class SearchReservationService {
    private checkIn: string;

    private checkOut: string;

    constructor({ checkIn, checkOut }: RequestDTO) {
        this.checkIn = checkIn;
        this.checkOut = checkOut;
    }

    public async execute(): Promise<RoomData[] | null> {
        if (!this.checkIn) {
            throw new Error('A data de check-in é obrigatória.');
        } else if (!this.checkOut) {
            throw new Error('A data de check-out é obrigatória.');
        }

        const checkIn = formatDate(this.checkIn);

        const checkOut = formatDate(this.checkOut);

        const currentDateParsed = formatDate(format(new Date(), 'dd-MM-yyyy'));

        if (isBefore(checkOut, checkIn)) {
            throw new Error(
                'A data de check-out deve ser igual ou maior que a data de check-in.',
            );
        } else if (isBefore(checkIn, currentDateParsed)) {
            throw new Error(
                'A data de check-in deve ser igual ou maior que a data atual.',
            );
        } else if (isBefore(checkOut, currentDateParsed)) {
            throw new Error(
                'A data de check-out deve ser igual ou maior que a data atual.',
            );
        }

        return searchReservationData({
            checkIn,
            checkOut,
        });
    }
}

export default SearchReservationService;
