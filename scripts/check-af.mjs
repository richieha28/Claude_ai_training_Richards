import fs from 'fs'
import path from 'path'
import { pathToFileURL } from 'url'
import vm from 'vm'

const dir = 'js/data/foundations'
let fail = 0
for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.js'))) {
  const code = fs.readFileSync(path.join(dir, file), 'utf8')
  try {
    new Function(code)
    console.log('OK', file)
  } catch (e) {
    fail++
    console.log('FAIL', file, e.message)
  }
}
try {
  new Function(fs.readFileSync('js/foundations-app.js', 'utf8'))
  console.log('OK foundations-app.js')
} catch (e) {
  fail++
  console.log('FAIL foundations-app.js', e.message)
}
process.exit(fail ? 1 : 0)
