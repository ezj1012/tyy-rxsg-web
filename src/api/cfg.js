import { api } from '../plugin/vue-axios'

const path = 'cfg'

export async function playerIcon() {
  let t = await api.post(`${path}/playerIcon`)
  return t.data
}
