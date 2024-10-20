import fs from "fs";
import path from "path";

export function readDirectoryRecursive(dirPath) {
  const result = [];

  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      // 如果是文件夹，递归调用
      result.push({
        name: file,
        type: "directory",
        children: readDirectoryRecursive(fullPath),
      });
    } else {
      // 如果是文件
      result.push({
        name: file,
        type: "file",
      });
    }
  });

  return result;
}

// 使用路径调用函数并返回目录结构
const directoryTree = readDirectoryRecursive("../../public/平台数据包");
console.log(JSON.stringify(directoryTree, null, 2));
