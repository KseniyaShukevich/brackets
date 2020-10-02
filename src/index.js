module.exports = function check(str, bracketsConfig) {
    let bracketsMap = new Map(bracketsConfig);
    let arr = [];

    for (let i = 0; i < str.length; i++) {
        if (bracketsMap.has(str[i]) && bracketsMap.get(str[i]) !== str[i]) {
            arr.push(str[i]);
        } else if (bracketsMap.has(str[i]) && bracketsMap.get(str[i]) === str[i]) {
            if (arr[arr.length - 1] === str[i]) {
                arr.pop();
            } else {
                arr.push(str[i]);
            }
        } else {
            if (str[i] !== bracketsMap.get(arr.pop())) {
                return false;
            }
        }
    }

    if (arr.length === 0) {
        return true;
    }

    return false;
};
