import {  
  pluginName  
} from "./constant.js"  
  
export const helpCfg = {  
  title: `${pluginName}帮助`,  
  subTitle: pluginName,  
  columnCount: 3,  
  colWidth: 265,  
  theme: 'all',  
  themeExclude: [],  
  style: {  
    fontColor: '#d3bc8e',  
    descColor: '#eee',  
    contBgColor: 'rgba(6, 21, 31, .5)',  
    contBgBlur: 3,  
    headerBgColor: 'rgba(6, 21, 31, .4)',  
    rowBgColor1: 'rgba(6, 21, 31, .2)',  
    rowBgColor2: 'rgba(6, 21, 31, .35)'  
  }  
}  
  
export const helpList = [{  
  group: '"[]"内为必填项,"{}"内为可选项,"|"表选择'  
}, {  
  group: 'Packet命令',  
  list: [{  
      icon: 71,  
      title: '#pb[JSON]',  
      desc: '直接发送elem pb'  
    },  
    {  
      icon: 71,  
      title: '#pbl[JSON]',  
      desc: '以长消息模式发送pb'  
    },  
    {  
      icon: 72,  
      title: '#raw[命令]\n[JSON]',  
      desc: '发送自定义命令并返回响应'  
    }]  
}, {  
  group: '资源ID命令',  
  list: [{  
      icon: 73,  
      title: '#转id[JSON]',  
      desc: '将packet转换为长消息resid'  
    },  
    {  
      icon: 73,  
      title: '#取id[资源ID]',  
      desc: '从resid获取数据'  
    }]  
}, {  
  group: '消息获取',  
  list: [{  
      icon: 74,  
      title: '#取',  
      desc: '获取消息pb'  
    }]  
}, {  
  group: '管理命令，仅主人可用',  
  auth: 'master',  
  list: [{  
      icon: 85,  
      title: '#pb更新',  
      desc: '更新插件本体'  
    },  
    {  
      icon: 85,  
      title: '#pb强制更新',  
      desc: '强制更新插件本体'  
    },  
    {  
      icon: 86,  
      title: '#pb更新日志',  
      desc: '查看插件更新日志'  
    }]  
}]