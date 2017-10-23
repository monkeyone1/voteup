import axios from 'axios'
import shortid from 'shortid'

const state = {
  options: [
    {
      text: '鱼香肉丝',
      id: 'we34s'
    },
    {
      text: '宫保鸡丁',
      id: 'res76'
    }
  ],
  votes: [
    {
      voter: 'sad',
      optionId: 'res76',
      id: 'wes32'
    },
    {
      voter: 'billie',
      optionId: 'res76',
      id: '432de'
    }
  ]
}

const mutations = {
  addOption (state, data) {
    state.options.push(data)
  },
  voteup (state, vote) {
    state.votes.push(vote)
  },
  undo (state, voteId) {
    state.votes = state.votes.filter(t => t.id !== voteId)
  }
}

const actions = {
  undo ({ commit }, { voteId }) {
      commit('undo', voteId)
  },
  addOption ({ commit }, { text }) {
    let id = shortid.generate()
    commit('addOption', { text, id })
  },
  voteup ({ commit }, { vote } ) {
    let data = {
      ...vote,
      id: shortid.generate()
    }
    console.log(data)
    commit('voteup', data)
  }
}

export default {
  state,
  mutations,
  actions
}
