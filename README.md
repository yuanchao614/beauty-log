# beauty-log

#### Customize your console log!

### Installation

```bash

npm i beauty-console-log

```

### use

```js
// import by object
import beautyLog from 'beauty-console-log';

beautyLog.red('test text color!')

beautyLog.bgRed('test background color!')

beautyLog.info(logData)

beautyLog.success(logData)

beautyLog.warning(logData)

beautyLog.error(logData)



// import by function
import { red, bgRed, success } from 'beauty-console-log';

red('test text color!')

```

### text color

* black
* red
* green
* yellow
* blue
* magenta
* cyan
* gray

### background color

* bgBlack
* bgRed
* bgGreen
* bgYellow
* bgBlue
* bgMagenta
* bgCyan
* bgGray

### text style

* bold

### icon log

* info
* success
* warning
* error
