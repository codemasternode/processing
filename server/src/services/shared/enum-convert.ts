export function enumConvert(toConvert: any): string[] {
    const keys = Object.keys(toConvert)
    return keys.slice(keys.length / 2)
}