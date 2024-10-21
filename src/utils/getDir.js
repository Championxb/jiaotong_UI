import fs from "fs";
import path from "path";

let currentId = 0;
export function readDirectoryRecursive(dirPath) {
  const result = [];

  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      // 如果是文件夹，递归调用
      result.push({
        label: file,
        id: currentId++,
        type: "directory",
        children: readDirectoryRecursive(fullPath),
      });
    } else {
      // 如果是文件
      result.push({
        label: file,
        id: currentId++,
        type: "file",
      });
    }
  });

  return result;
}

// 使用项目根目录的路径
const directoryPath = path.join(process.cwd(), "../../public/平台数据包");
const directoryTree = readDirectoryRecursive(directoryPath);

fs.writeFileSync(
  "../../public/directoryTree.json",
  JSON.stringify(directoryTree, null, 2)
);
console.log("Directory tree has been written to directoryTree.json");
