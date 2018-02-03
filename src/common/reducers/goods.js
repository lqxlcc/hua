import { handleActions } from 'redux-actions'

const setVisibilityInit = {
  filter: 'SHOW_ALL',
}

export const setVisibility = handleActions({
  'SET_VISIBILITY'(state, action) {
    return { ...state, ...action.payload }
  }
}, setVisibilityInit)


export const goodsList = handleActions({
  'request goodsList list'(state, action) {
    return { ...state, loading: true }
  },
  'receive goodsList list'(state, action) {
    const { res } = action.payload
    return { data: res.song_list, loading: false }
  }
}, {})