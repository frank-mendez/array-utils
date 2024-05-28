import { removeDuplicate } from './index';

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