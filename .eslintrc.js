module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true,
        "cypress/globals": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "cy": true
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "plugins": [
        "cypress"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};