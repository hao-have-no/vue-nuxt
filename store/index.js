export const state =()=>({
  counter:0
})

export const mutations={
  increment(state){
    state.counter ++;
  }
}

export const actions={
    increment:({commit})=>{
      commit('increment');
    }
}

export const getter={
  count:state=>{
    return state.counter+"$"
  }
}
