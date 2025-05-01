# Packet-plugin文档  
  
***NOTE: 本插件仅支持以OneBot协议对接NapCat的Bot***  
  
## 目录  
| 对象 | 说明 |  
| - | - |  
| [Packet](#Packet) | 通过全局变量 `global.Packet` 或 `e.Packet` 获取 |  
| [Proto](#Proto) | 通过 `Packet.Proto` 获取 |  
| [关于Button](#Button) |  |  
  
## Packet  
| 属性 | 值 | 说明 |  
| - | - | - |  
| Proto | [Proto](#Proto) | |  
| replacer | 用于JSON.stringify处理BigInt和Buffer值 | |  
  
| 方法 | 参数 | 说明 |  
| - | - | - |  
| Send | e, cmd, packet(JSON) | 发送Raw Packet |  
| Elem | e, packet(JSON) | 发送消息元素 |  
| Long | e, packet(JSON) | 以longmsg方式发送消息元素 |  
| sendLong | e, content | 上传长消息并返回资源ID |  
| recvLong | e, resid | 获取长消息内容 |  
| getMsg | e, message_id, isSeq | 通过消息ID获取消息内容 |  
| processJSON | json | 仅用于方便用户手动输入pb时使用，一般不使用 |  
  
## Proto  
| 方法 | 参数 | 说明 |  
| - | - | - |  
| encode | json | 将JSON编码为Protocol Buffer二进制数据 |  
| decode | buffer | 将Protocol Buffer二进制数据解码为JSON |  

## Button
***禁止对官方进行骑脸等行为，否则本仓库可能转为闭源！***  
本插件通过注入**e.reply**方法，支持了`{type: 'button', content: {text: string, 'callback'|'input'|'link': string}}`元素的发送，理论支持大多数插件发送的按钮，安装即食  
在代码中使用`segment.button([Button])`生成按钮元素  
e.g.  
```javascript
const buttons = [  
  segment.button([{ text: "点我", callback: "我是小南梁" }, { text: "不要点我", callback: "我是笨蛋" }]),
  segment.button({ text: "原神启动", link: "https://ys.mihoyo.com/cloud" }),
]

await e.reply([
  "请选择一个选项:",
  ...buttons
])
```
(如果你看不懂刚刚说了什么，安装好本插件就不用管了，别的插件自己搞好了按钮模板)  
(不要过于依赖，早晚会被腾讯修的)