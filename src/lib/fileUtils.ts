import { randomBytes } from 'crypto'
import {
  openSync,
  closeSync,
  writeFileSync,
  existsSync,
  mkdirSync,
  statSync,
} from "node:fs";
import path from "path";

export const generateUniqueFilename = () => {
  const randomBuffer = randomBytes(4)
  const randomString = randomBuffer.toString('hex')
  const timestamp = Date.now()
  const filename = `${timestamp}${randomString}`
  return `${filename.slice(0, 16)}`
}

export function joinPath(newPath: string) {
  return path.join(__dirname, newPath);
}

export function normalizePath(filepath: string) {
  return path.normalize(filepath);
}

export function resolvePath(from: string, to: string) {
  return path.resolve(from, to);
}

export function verifyPath(directoryPath: string) {
  const normalizedPath = normalizePath(directoryPath);
  if (existsSync(normalizedPath)) {
    const stats = statSync(normalizedPath);
    if (stats.isDirectory()) {
      return true;
    } else {
      console.error(`${normalizedPath} is not a directory.`);
      return false;
    }
  } else {
    console.error(`${normalizedPath} does not exist.`);
    return false;
  }
}

export function createDir(path: string | undefined) {
  if (!path) {
    return;
  }
  if (!existsSync(path)) {
    mkdirSync(path);
    console.log("The directory has been created successfully");
  }
}

export function fileExists(filePath: string) {
  return existsSync(filePath);
}

export function writeFile(filePath: string, data: string, isJson?: boolean) {
  let fd: number = -1;
  try {
    if (fileExists(filePath)) {
      return new Error('File already exists');  
    }
    fd = openSync(filePath, "wx");
    if (isJson) {
      writeFileSync(fd, JSON.stringify(data, null, 4));
    } else {
      writeFileSync(fd, data);
    }
  } catch (err) {
    console.log(err);
  } finally {
    if (fd !== undefined && fd > 0){
      console.log(">>> fd >>> ", fd);
      closeSync(fd);
    } 
  }
}
