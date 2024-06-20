const fs = require('fs');
const path = require('path');

// 创建一个日志文件
const logDirectory = path.join('./log');
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}
const { exec } = require('child_process');

// 执行ls命令
exec('pm2 start ./server.js --log ./log/stdout.txt', (error, stdout, stderr) => {
  if (error) {
    console.error(`pm2启动失败: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
