// 默认 ts 不认识图片 需要增加 模块声明让ts认识此模块 这就能 import 一张图片
// 正常不声明 只能使用require导入图片   取值时候加default
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';