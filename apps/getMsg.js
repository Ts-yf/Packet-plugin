import {
  getMsg as get,
  replacer
} from '../model/PacketHelper.js'
import common from '../../../lib/common/common.js'

export class getMsg extends plugin {
  constructor() {
    super({
      name: "取消息",
      event: "message",
      priority: 1000,
      rule: [{
        reg: "^~?取$",
        fnc: "get",
        permission: "master"
      }]
    })
  }

  async get(e) {
    if (!e.reply_id) return e.reply("请回复要取的消息")
    const data = await get(
      e,
      e.reply_id, true
    )
    const msg = [
      "pb(elem):",
      JSON.stringify(data["3"]["6"]["3"]["1"]["2"][0], replacer, 2),
      "pb(raw):",
      JSON.stringify(data, replacer, 2)
    ]
    e.reply(await common.makeForwardMsg(e, msg))
  }
}