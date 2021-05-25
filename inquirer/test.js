const inquirer = require('inquirer');
const chalk = require('chalk');


/**
 * 1 设置问题
 */
const quesList = [
    {
        type: 'confirm', // 确认型问题
        name: 'isInstall',
        message: '是否下载',
    },
    {
        type: 'list',// 单选型
        choices: ['npm', 'cnpm', 'yarn'],
        name: 'method',
        message: '选择下载方式',
        when(val) {// 这个val是前面问题的答案  
            // 给这个问题设定一个前提条件 就是上个问题isInstall为true
            return val.isInstall;
        }
    },
    {
        type: 'checkbox',// 单选型
        choices: ['vueRouter', 'vue', 'react', 'react-dom', 'webpack', 'eslint', 'cba', 'nba'],
        name: 'feature',
        pageSize: 5,//每页显示几个
        message: '选择初始化安装的功能',
    }
]

/**
 *  处理问题
 */
inquirer.prompt(quesList).then((answer) => {
    console.log(answer)
})

/**
 * 问题类型
 * input list checkbox confirm
 *
 * 钩子函数
 * when
 * validate
 *
 * 常用属性
 * type
 * name
 * message
 * default
 * choices
 */