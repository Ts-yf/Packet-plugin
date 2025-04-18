# Packet-plugin文档

***NOTE: 本插件仅支持以OneBot协议对接NapCat的Bot***

## 目录
| 对象 | 说明 |
| - | - |
| [Packet](#Packet) | 通过全局变量 `global.Packet` 或 `e.Packet` 获取 |
| [Proto](#Proto) | 通过 `Packet.Proto` 获取 |

## Packet
| 属性 | 值 | 说明 |
| - | - | - |
| Proto | [Proto](#Proto) | |

| 方法 | 参数 | 说明 |
| - | - | - |
| Send | e, cmd, packet(JSON) | 发送Raw Packet |
| Elem | e, packet(JSON) | 发送消息元素 |
| Long | e, packet(JSON) | 以longmsg方式发送消息元素 |

......  
剩下的一堆下次一定