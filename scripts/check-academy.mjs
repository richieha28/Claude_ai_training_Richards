import fs from 'fs'
import vm from 'vm'

const s = {}
vm.createContext(s)
for (const f of fs.readdirSync('js/data/academy')) {
  const code = fs.readFileSync('js/data/academy/' + f, 'utf8').replace(/\bconst /g, 'var ').replace(/\blet /g, 'var ')
  try {
    vm.runInContext(code, s)
    console.log('OK', f)
  } catch (e) {
    console.log('FAIL', f, e.message)
  }
}
console.log({
  meta: !!s.AA_META,
  notion: s.AA_NOTION?.modules?.length,
  n8n: s.AA_N8N?.modules?.length,
  integ: s.AA_INTEGRATION?.modules?.length,
  nodes: s.AA_SIM_NODES?.length,
  flows: s.AA_SAMPLE_WORKFLOWS?.length,
  badges: s.AA_BADGES?.length,
  pathQ: s.AA_PATH_QUIZZES?.pathway?.length
})
console.log('lesson keys', Object.keys(s.AA_NOTION.modules[0].lessons[0]))
console.log('module keys', Object.keys(s.AA_NOTION.modules[0]))
console.log('flow keys', Object.keys(s.AA_SAMPLE_WORKFLOWS[0]))
