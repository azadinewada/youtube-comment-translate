import path from 'path'
import { fileURLToPath } from 'url'
import resolve from 'rollup-plugin-node-resolve'
import ts from 'rollup-plugin-typescript2'
import repacle from 'rollup-plugin-replace'
import { bannerDev, bannerProd, bannerPreRelease } from './meta/meta.js'
import cleanup from 'rollup-plugin-cleanup'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

const suffix = process.env.SUFFIX || ''

const isDev = () => process.env.NODE_ENV === 'development'
const isPreRelease = () => suffix.indexOf('pre') !== -1

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getBanner = () => {
  if (isDev()) {
    return bannerDev()
  } else if (isPreRelease()) {
    return bannerPreRelease()
  } else {
    return bannerProd()
  }
}

export default {
  input: './src/index.ts',
  output: {
    file: path.resolve(__dirname, './dist/youtube-comment-translate' + suffix + '.user.js'),
    format: process.env.FORMAT || 'iife',
    banner: getBanner(),
    // sourcemap: true,
  },
  plugins: [
    ts(),
    repacle({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    resolve({ jsnext: true, preferBuiltins: true, browser: true }),
    cleanup({
      extensions: ['js', 'jsx', 'mjs', 'ts'],
    }),
    !isDev() &&
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        extensions: ['.js', '.ts'],
      }),
    !isDev() &&
      terser({
        format: {
          comments: 'all',
        },
      }),
  ],
}
