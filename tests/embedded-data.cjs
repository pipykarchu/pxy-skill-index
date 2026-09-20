const fs = require('node:fs');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const path = require('node:path');
const file = process.argv[2] || path.resolve(__dirname, '../index.html');
const html = fs.readFileSync(file, 'utf8');
const match = html.match(/<script\b[^>]*id="skill-index-data"[^>]*>([\s\S]*?)<\/script\s*>/i);
assert.ok(match, 'embedded data element exists');
let model;
try { model = JSON.parse(match[1]); } catch (e) {
  console.error('FAIL: embedded JSON terminated early or malformed. Tail:', match[1].slice(-250));
  throw e;
}
assert.ok(model.skills.length > 0);
assert.equal(model.skills.length, model.stats.skills);
assert.ok(!match[1].includes('<'), 'JSON must escape HTML opening delimiters');
let count = 0;
for (const s of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)) {
  if (/application\/json/i.test(s[1])) continue;
  new vm.Script(s[2]);
  count++;
}
console.log(JSON.stringify({result:'PASS',skills:model.skills.length,workflows:model.workflows.length,executableScripts:count}));
