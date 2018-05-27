import pkg from './package.json';

export default [
    {
        input: 'javascript/mxClient.js',
        name: 'jjgraph',
        intro: 'var mxLoadResources, mxForceIncludes, mxResourceExtension, mxLoadStylesheets;',
        strict: false,
        output: [
            { file: pkg.main, format: 'cjs' },
            { file: pkg.module, format: 'es' },
            { file: pkg.browser, format: 'umd' }
        ]
    }
]
