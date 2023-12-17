# FlavorFindr

FlavorFindr is a Recipes Mobile app, using React Native, TypeScript, RTK Query and Edamam API.

## Installation

First, you shall signup on https://www.edamam.com/.
Then, create a .env in root project directory :

```bash
  APP_ID=your_edamam_app_id
  APP_KEY=your_edamam_app_key
```

Then, you shall start the project with expo :

```bash
npm i
npm expo start
```

## Dependencies' choice

- react native: ofc
- typescript: ofc
- react-navigation
- react-native-paper: cause I suck in design
- RTK Query to manage api call and store data
- I didn't find a cool lib to manage persistence with Expo, so I use Redux storage for likes ...

## TO DO

- Share feature
- Styled the like button
- fav screen
- ...
