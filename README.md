# Array Utils

Array Utils is a utility package that provides various functions to manipulate arrays. It is written in TypeScript and JavaScript.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install Array Utils.

```bash
npm install @frm/array-utils
```
## Usage

```
import { removeDuplicate } from '@frm/array-utils';

const originalArray = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 1, name: 'Item 1' },
    { id: 3, name: 'Item 3' },
    { id: 2, name: 'Item 2' },
];

const result = removeDuplicate(originalArray, 'id');
console.log(result);
```

## Testing
To run the unit tests, use the following command:
```npm run test```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.  
Please make sure to update tests as appropriate. 

## License
MIT

This `README.md` includes sections for the package name, installation instructions, usage examples, testing instructions, contributing guidelines, and the license.