import {
  pluginName
} from "./constant.js"

export const helpCfg = {
  title: `${pluginName}帮助`,
  subTitle: pluginName,
  columnCount: 3,
  colWidth: 265,
  theme: 'all',
  themeExclude: [/*'default'*/],
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
      desc: '直接发送pb(elem)'
    },
    {
      icon: 71,
      title: '#pbl[JSON]',
      desc: '以长消息模式发送'
    }]
}, {
  group: '管理命令，仅主人可用',
  list: [{
      icon: 85,
      title: '#(强制)更新推送插件',
      desc: '更新插件本体(还没做)'
    }]
}]