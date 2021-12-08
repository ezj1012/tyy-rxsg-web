import { api } from '../plugin/vue-axios'

const path = 'coder'

export async function getModules() {
  let t = await api.post(`${path}/modules`)
  return t.data
}

export async function addModule(params) {
  let t = await api.post(`${path}/addModule`, params)
  return t.data
}

export async function getModuleInfoById(params) {
  let t = await api.post(`${path}/getModuleInfoById`, params)
  return t.data
}

export async function addTable(params) {
  let t = await api.post(`${path}/addTable`, params)
  return t.data
}

export async function queryTables(params) {
  let t = await api.post(`${path}/queryTables`, params)
  return t.data
}


export async function getTableInfoById(params) {
  let t = await api.post(`${path}/getTableInfoById`, params)
  return t.data
}