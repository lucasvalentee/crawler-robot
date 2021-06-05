/**
 * Retorna a URL para o crawler acessar e buscar os dados.
 * @param checkIn number
 * @param checkOut number
 * @returns string
 */
export default function baseUrl(checkIn: number, checkOut: number): string {
    return `https://myreservations.omnibees.com/default.aspx?q=5462&version=MyReservation&sid=6398e25c-f78c-4919-90cb-1325eb1f41ce#/&diff=false&CheckIn=${checkIn}&CheckOut=${checkOut}&Code=&group_code=&loyality_card=&NRooms=1&ad=1&ch=0&ag=-`;
}
