'use strict'

const { watch } = require('gulp')
const { spawn } = require('child_process')

exports.default = function () {
  watch('./src/**/*.js', { events: 'all' }, function (cb) {
    const cmd = spawn('npm run', ['lint'], { stdio: 'inherit', shell: true })
    cmd.on('close', () => cb())
  })
}
