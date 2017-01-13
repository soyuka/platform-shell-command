const assert = require('assert')
const mock = require('mock-require')

describe('platform-shell-command', function() {
  it('should get /bin/sh -c foobar', function() {
    const platformShellCommand = require('./')
    const {command, args} = platformShellCommand('foobar')
    assert.equal(command, '/bin/sh')
    assert.deepEqual(args, ['-c', 'foobar'])
  })

  it('should get cmd.exe /d /s /c "foobar"', function() {
    mock('os', {
      platform: function() {
        return 'win32'
      }
    })

    const platformShellCommand = mock.reRequire('./')
    const {command, args} = platformShellCommand('foobar')

    assert.equal(command, 'cmd.exe')
    assert.deepEqual(args, ['/d', '/s', '/c', '"foobar"'])
  })
})
