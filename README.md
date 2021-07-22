# Vanilla js - signup / login

This is basic vanilla-js signup and sign-in system that uses a JSON REST API backend to store and retrieve the users' data.

## Installation

Use the node package manager [npm](https://nodejs.org/en/download/) to install [json-server](https://github.com/typicode/json-server).

```bash
$ npm install -g json-server
```

## Usage
Create a <filename>.json file that would contain all the user data sent by the XMLHTTPRequest. For instance (db.json). Then run the following command in .vscode terminal to continually watch changes made to the database.

```javascript
$ json-server --watch db.json
```
Now we can open URL http://localhost:3000 in the browser to serve the files. :)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
