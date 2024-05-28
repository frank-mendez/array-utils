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
