/**
 * Formata o valor da data e retorna um valor numérico sem "/" ou "-".
 * @param date string
 * @returns number
 */
export default function formatDate(date: string): number {
    return Number(date.replace(/[/-]/g, ''));
}
