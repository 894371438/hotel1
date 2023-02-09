// 用户相关的状态管理

import http from '@/utils/http.js'

const state = {

}
const actions = {
  yzm(data){
    return http.get('/api/login_code', data)
  }
}
const getters = {}
const mutations = {
  updateyzm(state,payload){
    state.yzmj = payload
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}