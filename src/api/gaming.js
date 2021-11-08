import { api } from '../plugin/vue-axios'

const path = 'gaming'

/**
 * 查询产品和版本信息
 * @returns 产品和版本信息
 */
export async function getPlayerInfo(params) {
  let t = await api.post(`${path}/playerInfo`, params)
  return t.data
}

/**
 * 撤销申请
 * @returns id
 */
export async function cancelApply(params) {
  let t = await api.post(`${path}/cancelApply`, params)
  return t.data
}
