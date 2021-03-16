//At the top of the file, we declare but do not assign our state, so it starts off undefined.
let state;

//changeState() is executed, passing through two local variables: state and action
function changeState(state= { count: 0 }, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

//dispatch() calls the changeState() reducer.
function dispatch(action){
    state = changeState(state, action)
    render()
}

function render(){
    document.body.textContent = state.count
}

//At the bottom the file, we dispatch an action of '@@INIT'. This calls our dispatch() function and passes through our initial action
dispatch({ type: '@@INIT' })