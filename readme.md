# 时间格式化工具

## 安装

`npm i simple-date-formatter`

## 使用

`import { formateDate } from "simple-date-formatter";`

`formateDate( time: Date, formate: string = 'Y年Mon月D日')`

传入两个参数，第一个为 Date 格式的时间，第二个为格式化方式，可结合占位符自由组合；默认为 `Y年Mon月D日`

### 占位符

Y:年

Mon:月

D:日

H:时

Min:分

S:秒

### eg：

```
formateDate(new Date(), 'Y年Mon月D日')
// 2023年1月4日
```
