// 用户相关的状态管理

import http from '@/utils/http.js'

const state = {
  list: []
}
const actions = {
      detailList(state){
       return http.get('/api_list').then((res)=>{
          console.log(res,9999)
          // state.list = res.data.message.list
          state.commit('updateInfos',res.data.message.list)
        })
      }
}
const getters = {}
const mutations = {
  updateInfos(state,payload){
    state.list = payload
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}