const state = {
    undo: null,
    doing: null,
    did: null
}

const mutations = {
    PUSH_UNDO (state, undo) {
      state.undo.push(undo)
    },
    SET_UNDO_LIST(state, list) {
      state.undo = list
    },
    GET_UNDO_LIST(state){
      return state.undo
    }

}

const actions = {
  pushUndoObject: ({commit}, undo) => {
    commit('PUSH_UNDO', undo)
  },
  setUndoObject: ({commit}, undo) => {
    commit('SET_UNDO_LIST', undo)
  },
  getUndoObject: ({commit}) => {
    commit('GET_UNDO_LIST')
  }
}

export default {
  state, mutations, actions
}
