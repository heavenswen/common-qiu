# COMMON-QIU
使用单体模式设计的基础js方法库，使用es6编写,内部也写好普通引入的兼容方式，但仍需
[转义es6](https://babeljs.cn/repl/#?babili=false&browsers=&build=&builtIns=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&lineWrap=true&presets=es2015%2Ces2016%2Ces2017%2Creact%2Cstage-0%2Cstage-2%2Ces2015-loose&prettier=false&targets=&version=6.26.0&envVersion=)


## Install
```
npm i common-qiu
```

## Usage
引入方法
```
//引入全部
import com from "common-qiu"

//单个引入
import {siblings} from "common-qiu"

```
### 方法介绍

#### 同级选择
返回一个除同级以外的数组对象
```
siblings(dom,target)
```
API
名称|类型|说明
-|-|-
dom|Node or String|目标对象
target|string|css选择器

#### 

