import path from 'path'
import lodash from 'lodash'
import Cfg from './model/Cfg.js'

export function supportGuoba() {
  return {
    pluginInfo: {
      name: 'Packet-plugin',
      title: 'Packet-plugin',
      author: '@天如',
      authorLink: 'https://gitee.com/HDTianRu',
      link: 'https://gitee.com/HDTianRu/Packet-plugin',
      isV3: true,
      isV2: false,
      description: '使用napcat发送pb包',
      icon: 'mdi:stove',
      iconColor: '#6bb9dd',
    },
    configInfo: {
      schemas: [/*{
        field: 'field',
        label: 'label',
        bottomHelpMessage: 'msg',
        component: "InputNumber",
          componentProps: {
            placeholder: "msg"
          }
      }*/],
      getConfigData() {
        return Cfg.merge()
      },
      setConfigData(data, {
        Result
      }) {
        for (let [keyPath, value] of Object.entries(data)) {
          Cfg._set(keyPath, value)
        }
        Cfg.fresh()
        return Result.ok({}, '保存成功~')
      },
    },
  }
}