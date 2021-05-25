#! /usr/bin/env node
const { program } = require('commander')

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
            console.log(action + '执行了....')
        })
})



program.parse(process.argv);