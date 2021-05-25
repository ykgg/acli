
module.exports = (actionName, pramas) => {
    // console.log(actionName);
    // console.log(pramas);
    require('./' + actionName)(pramas)
}