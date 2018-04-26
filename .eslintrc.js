module.exports = {
    "extends": "airbnb",
    "rules": {
      "arrow-body-style": 0,
      "comma-dangle": 1,
      "import/no-extraneous-dependencies": 0,
      "import/prefer-default-export": 0,
      "no-underscore-dangle": [2, { "allow": ["_id", "__REDUX_DEVTOOLS_EXTENSION__"] }],
      "react/prefer-stateless-function": 0,
      "react/jsx-filename-extension": 0,
      "react/prop-types": 0,
      "semi": 0,
    },
    "env": {
      "browser": true,
      "node": true,
    },
};
