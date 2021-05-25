module.exports = (pramas) => {
    console.log('create  执行了');
    console.log(pramas);
}


/**
 * 核心需求：执行 acli crt xxx 在本地初始化一个项目
 * 核心步骤：
 *   01 发送请求，查询平台有哪些模板
 *      提供模板列表选择
 *      提供模板版本查询
 *   02 下载指定的模板到本地
 *      下载功能
 *      缓存至本地
 *   03 处理模板内容供使用
 *      数据渲染
 *      拷贝到当前项目的下面
 *
 */