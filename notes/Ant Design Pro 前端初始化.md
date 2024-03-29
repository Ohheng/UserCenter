# Ant Design Pro 前端初始化

## 创建项目

```bash
# 使用 npm
npm i @ant-design/pro-cli -g
```

```bash
pro create myapp
```



选择 umi 的版本

```shell
? 🐂 使用 umi@4 还是 umi@3 ? (Use arrow keys)
 	umi@4
❯ umi@3
```

> 如果选择了 umi@4 版本，暂时还不支持全量区块。

如果选择了 umi@3，还可以选择 pro 的模板，pro 是基础模板，只提供了框架运行的基本内容，complete 包含所有区块，不太适合当基础模板来进行二次开发

```shell
? 🚀 要全量的还是一个简单的脚手架? (Use arrow keys)
❯ simple
  complete
```

安装依赖：

```shell
$ cd myapp && npm install
// 或
$ cd myapp && tyarn
```



## 开启Umi UI

众所周知当我们在项目中开启[umi](https://so.csdn.net/so/search?q=umi&spm=1001.2101.3001.7020) UI执行

```bash
  yarn add @umijs/preset-ui -D 
```





## 启动

```shell
npm run start
```

