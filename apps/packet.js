import {
  Elem,
  Long,
  Send
} from '../model/PacketHelper.js'

export class sendPacket extends plugin {
  constructor() {
    super({
      name: "发送packet",
      event: "message",
      priority: 1000,
      rule: [{
        reg: "^#(pb|PB)\\s*{.*",
        fnc: "pb",
        permission: "master"
      }, {
        reg: "^#(pbl|PBL)\\s*{.*",
        fnc: "pbl",
        permission: "master"
      }, {
        reg: "^#(raw|RAW)[\\s\\S]*{.*",
        fnc: "raw",
        permission: "master"
      }]
    })
  }

  async pb(e) {
    Elem(
      e,
      e.msg.substring(3).trim()
    )
  }

  async pbl(e) {
    Long(
      e,
      e.msg.substring(4).trim()
    )
  }

  async raw(e) {
    let index = e.msg.indexOf("\n")
    const resp = await Send(
      e,
      e.msg.substring(4, index).trim(),
      e.msg.substring(index).trim()
    )
    e.reply(JSON.stringify(resp, null, '  '))
  }
}