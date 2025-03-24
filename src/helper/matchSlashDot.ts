/**
 * `Извлекает данные со строки, между "/" и "."`
 *  @example
 * - из "/static/media/30.556f8b48d60a9e400bc2.jpg"
 * - получим "30"
 */
export const matchSlashDot = (str: string | undefined) => {
    return typeof str === 'string' ? String(str.match(/(?<=\/)\d+(?=\.)/gi)) : undefined;
}