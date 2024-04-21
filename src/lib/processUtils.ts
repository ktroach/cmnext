import path from 'path'
import { cwd } from 'node:process'
import { existsSync } from 'node:fs'
import { fork } from 'node:child_process'

export const runProc = () => {
  const procPath = `${cwd()}`
  const procScript = `${procPath}\\processRunner.sh`
  const filePath = path.normalize(procScript)
  console.log('>>> filePath >>> ', filePath)
  const scriptExists = existsSync(filePath)
  console.log('>>> scriptExists >>> ', scriptExists)
  if (scriptExists) {
    console.log('>>> running fork >>> ', filePath)
    const childProcess = fork(filePath)
    childProcess.on('message', (message) => {
      console.log('>>> childProcess.on message >>> ', message)
    })
  }
}
