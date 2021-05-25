const chalk = require('chalk');



// 1  字体颜色
console.log(chalk.red('红红火火'));
console.log(chalk.keyword('green')('绿色'));
console.log(chalk.hex('#fff')('白色的字体'));

// 2 背景颜色
console.log(chalk.bgYellow('kk'));

// 3 格式化输出
console.log(chalk.green`
   大前端
   very good
`);

