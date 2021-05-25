#! /usr/bin/env node
const version = require('../package.json').version;
const { program } = require('commander')
const mainFn = require('..');

// 1. 一个数据结构来存放多条命令的信息
const actionMap = {
    create: {
        alias: 'crt',
        des: '创建项目',
        examples: ['acli create|crt <projectName>'],
    },
    config: {
        alias: 'cfg',
        des: '创建项目',
        examples: [
            'acli config|cfg set <k> <v>',
            'acli config|cfg get <k>',
        ],
    },
}

// 2. 格式化命令行参数
Object.entries(actionMap).map(([action, v]) => {
    program
        .command(action)
        .alias(v.alias)
        .description(v.des)
        .action(() => {

            // 将处理好的参数传递给具体的模块
            const params = process.argv.slice(3)
            // 调用 mainFn 将上述处理好的参数传递过去 （模块化开发）
            mainFn(action, params);
        })
})

program.on('--help', () => {
    console.log('Examples: ');
    Object.entries(actionMap).map(([action, v]) => {
        v.examples.map(item => console.log("  " + item))
    })
})



program.version(version).parse(process.argv);