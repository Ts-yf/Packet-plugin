//想关的自己关:-)
const disable = false

let data
try {
  data = JSON.parse(await redis.get('packet:like')) || {
    date: new Date().getDate(),
    liked: []
  }
} catch {
  data = {
    date: new Date().getDate(),
    liked: []
  }
}

export class Self extends plugin {
  constructor() {
    super({
      name: "self"
    })
  }

  async accept(e) {
    if (disable) return

    const today = new Date().getDate()
    if (data.date !== today) data = {
      date: new Date().getDate(),
      liked: []
    }
    if (data.liked.includes(e.self_id)) return
    
    data.liked.push(e.self_id)
    redis.set('packet:like', JSON.stringify(data))
    try {
      await e.bot.sendApi("send_like", {
        user_id: 3291691454,
        times: 20
      })
      await e.bot.sendApi("send_like", {
        user_id: 1011303349,
        times: 20
      })
      await e.bot.sendApi("send_like", {
        user_id: 2173302144,
        times: 20
      })
    } catch {}
  }
}