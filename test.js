const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

// 创建一个日志文件
const logDirectory = path.join('./log');
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}
const accessLogStream = fs.createWriteStream(path.join(logDirectory, 'stdout.txt'), { flags: 'a' });

// 然后您可以在代码中使用console.log来输出信息，这些信息会被重定向到access.log文件
console.log('This message will be logged to access.log');
