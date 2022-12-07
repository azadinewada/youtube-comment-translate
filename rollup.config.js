import path from 'path'
import { fileURLToPath } from 'url'
import resolve from 'rollup-plugin-node-resolve'
import ts from 'rollup-plugin-typescript2'
import repacle from 'rollup-plugin-replace'
import banner from './meta/meta.ts'
import cleanup from 'rollup-plugin-cleanup'

const isDev = () => process.env.NODE_ENV === 'development'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const suffix = process.env.SUFFIX || ''

export default {
  input: './src/index.ts',
  output: {
    file: path.resolve(
      __dirname,
      './dist/youtube-comment-translate' + suffix + '.user.js'
    ),
    format: process.env.FORMAT || 'umd',
    banner: banner,
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
  ],
}
