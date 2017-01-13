Platform Shell Command
======================

Tired of having to check the platform before you can launch the correct `spawn` command? This module gives you the correct command and arguments according to your platform.

## Installation

```
npm install platform-shell-command --save
```

## Usage

```javascript
const spawn = require('child-process').spawn
const platformShellCommand = require('platform-shell-command')
const {command, args} = platformShellCommand('node foobar.js')

spawn(command, args)
```

Command and arguments will end up spawning:
- `/bin/sh -c node foobar.js` on linux
- `cmd.exe /d /s /c "node foobar.js"` on windows

## License

MIT
