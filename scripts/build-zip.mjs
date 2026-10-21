// skills/<id>/ 폴더를 public/downloads/<id>.zip 으로 묶는다. (폴더 구조 유지)
import { execFileSync } from 'node:child_process';
import { readdirSync, mkdirSync, rmSync, statSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const out = resolve(root, 'public/downloads');
mkdirSync(out, { recursive: true });

for (const id of readdirSync(resolve(root, 'skills'))) {
  if (!statSync(resolve(root, 'skills', id)).isDirectory()) continue;
  const zip = resolve(out, `${id}.zip`);
  rmSync(zip, { force: true });
  execFileSync('zip', ['-r', '-X', zip, id], { cwd: resolve(root, 'skills') });
  console.log(`생성: public/downloads/${id}.zip`);
}
