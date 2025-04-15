import {
  ulid
} from 'ulid'
import {
  Elem
} from '../model/PacketHelper.js'

const SPECIAL = '我是可爱小南梁~ (≧▽≦)'

export class button extends plugin {
  constructor() {
    super({
      name: "button",
      dsc: "生成神奇按钮",
      event: "message",
      priority: 0,
      rule: [{
        reg: "^#(B|b)utton",
        fnc: "make",
        permission: "master",
      }, {
        reg: SPECIAL,
        fnc: "omit"
      }]
    })
  }

  async accept(e) {
    const _reply = e.reply
    if (e.bot.version.app_name === 'NapCat.Onebot') e.reply = async (msg, ...other) => {
      const buttons = (Array.isArray(msg) ? msg : [msg]).filter(i => i.type == "button")

      if (buttons.length > 0) {
        const buttonData = []
        buttons.forEach(button => {
          if (Array.isArray(button.data)) {
            buttonData.push(...button.data)
          } else {
            buttonData.push(button.data)
          }
        })
        buttonData.push([{
          text: '点击触发神秘彩蛋',
          callback: SPECIAL
        }])
        const data = {
          rows: this.makeButtons(buttonData)
        }
        const packet = this.button(data)
        Elem(e, packet)
      }

      return _reply(msg, ...other)
    }
  }

  async omit(e) {
    return true
  }

  async make(e) {
    const buttons = e.msg.substring(7).split('\n').filter(i => !!i.trim()).map(i => {
      let index = i.indexOf('#')
      let button = {
        text: i.substring(0, index).trim(),
        clicked_text: 'HDTianRu',
        callback: i.substring(index + 1).trim()
      }
      return button
    })
    const data = {
      rows: this.makeButtons(this.chunkArray(buttons))
    }
    const packet = this.button(data)
    //logger.mark(JSON.stringify(packet, null, 2))
    Packet.Elem(e, packet)
  }

  chunkArray(array, chunkSize = 3) {
    const result = []
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize))
    }
    return result
  }

  makeButton(button, style) {
    const msg = {
      id: ulid(),
      render_data: {
        label: button.text,
        visited_label: button.clicked_text,
        style,
        ...button.QQBot?.render_data,
      },
      appid: 102089849
    }

    if (button.link)
      msg.action = {
        type: 0,
        permission: {
          type: 2
        },
        data: button.link,
        ...button.QQBot?.action,
      }
    else if (button.input)
      msg.action = {
        type: 2,
        permission: {
          type: 2
        },
        data: button.input,
        enter: button.send,
        ...button.QQBot?.action,
      }
    else if (button.callback)
      msg.action = {
        type: 2,
        permission: {
          type: 2
        },
        data: button.callback,
        enter: true,
        ...button.QQBot?.action,
      }
    else return false
    return msg
  }

  makeButtons(button_square) {
    const msgs = []
    const random = Math.floor(Math.random() * 2)
    for (const button_row of button_square) {
      let column = 0
      const buttons = []
      for (let button of button_row) {
        button = this.makeButton(button,
          (random + msgs.length + buttons.length) % 2)
        if (button) buttons.push(button)
      }
      if (buttons.length)
        msgs.push({
          buttons
        })
    }
    return msgs
  }

  button(elem) {
    const content = elem
    const _content = {
      1: {
        1: content.rows.map(row => {
          return {
            1: row.buttons.map(button => {
              return {
                1: button.id,
                2: {
                  1: button.render_data.label,
                  2: button.render_data.visited_label,
                  3: button.render_data.style
                },
                3: {
                  1: button.action.type,
                  2: {
                    1: button.action.permission.type,
                    2: button.action.permission.specify_role_ids,
                    3: button.action.permission.specify_user_ids,
                  },
                  4: "err",
                  5: button.action.data,
                  7: button.action.reply ? 1 : 0,
                  8: button.action.enter ? 1 : 0
                }
              }
            })
          }
        }),
        2: content.appid
      }
    }
    return {
      53: {
        1: 46,
        2: _content,
        3: 1
      }
    }
  }
}