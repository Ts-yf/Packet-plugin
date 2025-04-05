import {
  sendLong,
  recvLong
} from '../model/PacketHelper.js'

export class resid extends plugin {
  constructor() {
    super({
      name: "resid互转",
      event: "message",
      priority: 1000,
      rule: [{
        reg: "^#转id\\s*{.*",
        fnc: "send",
        permission: "master"
      }, {
        reg: "^#取id\\s*\\S*",
        fnc: "recv",
        permission: "master"
      }]
    })
  }

  async send(e) {
    const resid = await sendLong(
      e,
      e.msg.substring(4).trim()
    )
    e.reply(resid, true)
  }

  async recv(e) {
    const resp = await recvLong(
      e,
      e.msg.substring(4).trim()
    )
    const data = resp?.["2"]?.["2"]?.["1"]?.[0]?.["3"]?.["1"]?.["2"] ?? resp?.["2"]?.["2"]?.["1"]?.["3"]?.["1"]?.["2"] ?? resp
    e.reply(JSON.stringify(data, null, '  '), true)
  }
}