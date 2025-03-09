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
    e.reply(JSON.stringify(resp, null, '  '), true)
  }
}