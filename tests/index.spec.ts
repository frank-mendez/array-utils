import {removeDuplicate, removeUndefinedNullEmpty} from '../index';

describe('removeDuplicate', () => {
    it('should remove duplicate items based on a specific property', () => {
        const originalArray = [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
            { id: 1, name: 'Item 1' },
            { id: 3, name: 'Item 3' },
            { id: 2, name: 'Item 2' },
        ];

        const expectedArray = [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
            { id: 3, name: 'Item 3' },
        ];

        const result = removeDuplicate(originalArray, 'id');
        expect(result).toEqual(expectedArray);
    });
});

describe('removeUndefinedNullEmpty', () => {
    it('should remove properties with undefined, null, or empty string values', () => {
        const originalObject = {
            prop1: 'value1',
            prop2: null,
            prop3: undefined,
            prop4: '',
            prop5: 'value5',
        };

        const expectedObject = {
            prop1: 'value1',
            prop5: 'value5',
        };

        const result = removeUndefinedNullEmpty(originalObject);
        expect(result).toEqual(expectedObject);
    });
});