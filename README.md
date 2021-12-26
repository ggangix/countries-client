# Countries

Display a list of countries and their corresponding country code.

## Installation

1. clone this repository to your local machine.
2. run `npm install` in the root directory.
3. run `npm start` in the root directory.

## Build the project

Run `npm run build` in the root directory.

## Instructions to deploy in GH Pages

1. Create a .env file in the root directory of the project.
2. Add the PUBLIC_URL variable to the .env file with your GitHub Pages URL.
   i.e. PUBLIC_URL=https://ggangix.github.io/countries-client
3. Add the REACT_APP_API_URL variable to the .env file with your API URL.
   i.e. REACT_APP_API_URL=https://countries-api.herokuapp.com
4. Run `npm run build-deploy` to build the project and deploy to GitHub Pages.

# Future improvements

Planned features:

- [ ] Add multipage results
- [ ] Handle errors with a isolate error modal
- [ ] Improve the UI
  - [ ] Loading Spinner
  - [ ] Look for some inpiration for the UI
- [ ] Add test cases
