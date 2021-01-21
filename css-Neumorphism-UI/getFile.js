const path = require('path');
const iconPath = path.resolve('./', 'icons'); // 获取绝对路径
const fs = require('fs');
const allFilesName = [];

// 使用Promise调用异步函数
new Promise((resolve, reject) => {
    // 异步函数
    fs.readdir(iconPath, function (err, items) {
        items.forEach(function (value) {
            allFilesName.push(value);
        });
        resolve(allFilesName);
    });
}).then(res => {
    console.log(res);
});
