#! /usr/bin/env node
//上面的语句就是找到我们当前系统环境变量中的 node.exe 将它作为当前 js 文件的解析器

const { program } = require('commander')


// 1 默认情况下我们可以通过 process.argv 获取到所有的原生命令行参数，然后自己写代码让它们有一个很好的格式化输出
// 2 但是对于这种经常会用到的工具，同样会正在很多好用的开源工具包： commander  yargs ...
// console.log(process.argv)
program
    .command('create')
    .alias('crt')
    .description('创建一个项目')
    .action(() => {
        console.log('create 命令执行了');
    })

program.parse(process.argv);