module.exports = {
    extends: [
        "react-app",
        "react-app/jest",
        "plugin:es/restrict-to-es2015"
    ],
    plugins: [
        "es"
    ],
    rules: {
        'es/no-global-this': 'off',
        'no-restricted-globals': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'es/no-dynamic-import': 'off'  // Add this line to disable the rule
    },
    globals: {
        globalThis: 'writable',
        ActiveXObject: 'writable',
        Webflow: 'writable'
    }
};
