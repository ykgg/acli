const ora = require('ora');

const spinner = ora('正在下载');

spinner.start();

setTimeout(() => {
    console.log('......');
    spinner.succeed('下载成功！');
    // spinner.info('下载信息');
    // spinner.fail('下载失败！');
}, 2000)