// 用户相关的状态管理

import http from '@/utils/http.js'

const state = {

}
const actions = {
  yzm(context, data) {
      return http.get('/send_code', data)
  },
  enroll(context, data) {
      return http.post('/rgeister_post', data)
  },
  login(context, data){
      return http.post('/login_code', data)
  },
  loginpwd(context, data){
      return http.post('/login_pwd', data)
  },
  info(context, data){
      return http.get('/token', data)
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