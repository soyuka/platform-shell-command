//https://github.com/nodejs/node/blob/627ecee9edd9df247e7541ee8084d925f85ede7f/lib/child_process.js#L382

const platform = require('os').platform()
const CMD_EXE = process.env.comspec || 'cmd.exe'
const BIN_SH = process.platform === 'android' ? '/system/bin/sh' : '/bin/sh'

module.exports = function(command) {
  if (platform === 'win32') {
		return {command: CMD_EXE, args: ['/d', '/s', '/c', `"${command}"`]}
  }

  return {command: BIN_SH, args: ['-c', command]}
}
