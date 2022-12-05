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

export default {
  input: './src/index.ts',
  output: {
    file: isDev()
      ? path.resolve(__dirname, './dist/youtube-comment-translate-dev.user.js')
      : path.resolve(__dirname, './dist/youtube-comment-translate.user.js'),
    format: 'es',
    banner: banner
    // sourcemap: true,
  },

  plugins: [
    ts(),
    repacle({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    resolve({ jsnext: true, preferBuiltins: true, browser: true }),
    cleanup({
      extensions: ['js', 'jsx', 'mjs', 'ts']
    })
  ],
}
