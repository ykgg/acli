const inquirer = require('inquirer');
const chalk = require('chalk');


/**
 * 1 设置问题
 */
const quesList = [
    {
        type: 'input',
        name: 'username',
        message: '请输入您的用户名', //提示语
        // default: 'kk', // 定义默认值
        // default: chalk.yellow('kk')
        validate(val) {  //定义是否是必填项
            if (!val) {
                return '当前项为必填项'
            }
            return true;
        }
    }
]

/**
 *  处理问题
 */
inquirer.prompt(quesList).then((answer) => {
    console.log(answer.username)
})