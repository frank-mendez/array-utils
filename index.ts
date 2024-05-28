/**
 * Removes duplicates from an array based on a specific property.
 *
 * @template T - The type of the items in the array.
 * @param {T[]} originalArray - The original array from which duplicates should be removed.
 * @param {keyof T} propertyToCheck - The property to check for duplicates.
 * @returns {T[]} - The new array with duplicates removed.
 */
export function removeDuplicate<T>(originalArray: T[], propertyToCheck: keyof T): T[] {

// Create a new array for unique values
    const newArray: T[] = [];

// Iterate over the original array
    originalArray.forEach(item => {
        // Check if the property value is already in the new array
        const isDuplicate: boolean = newArray.some(newItem => newItem[propertyToCheck] === item[propertyToCheck]);

        // If it's not a duplicate, add it to the new array
        if (!isDuplicate) {
            newArray.push(item);
        }
    });

    return newArray;
}

/**
 * Removes properties with undefined, null, or empty string values from an object.
 *
 * @param {Object} obj - The original object from which properties should be removed.
 * @returns {Object} - The new object with properties removed.
 */
export function removeUndefinedNullEmpty(obj: {
    [key: string]: string | null | undefined;
}): { [key: string]: string } {
    const result: { [key: string]: string } = {};

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const value = obj[key];
            if (value !== null && value !== undefined && value !== '') {
                result[key] = value;
            }
        }
    }

    return result;
}
