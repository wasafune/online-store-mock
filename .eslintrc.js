module.exports = {
    "extends": "airbnb",
    "rules": {
      "comma-dangle": 1,
      "semi": 0,
      "react/prefer-stateless-function": 0,
      "react/jsx-filename-extension": 0,
      "arrow-body-style": 0,
      "import/no-extraneous-dependencies": 0,
      "no-underscore-dangle": [2, { "allow": ["_i", "__REDUX_DEVTOOLS_EXTENSION__"] }]
    },
    "env": {
      "browser": true,
      "node": true,
    },
};
