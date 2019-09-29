// @ts-check

// @ts-ignore
const babel = require('@babel/core')

/**
 * @type babel.TransformOptions
 */
const config = {
  comments: false,
  ignore: ['**/*.d.ts', '**/__fixtures__/**'],
  presets: [
    [
      'slick',
      process.env.NODE_ENV === 'test'
        ? {
            env: { modules: 'commonjs' },
            runtime: { corejs: 2 }
          }
        : {}
    ]
  ]
}

module.exports = config
