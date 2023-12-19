import ACTIONS from '../actions'

//const token = ''
const token = null; // ou un autre état initial approprié

/*const tokenReducer = (state = token, action) => {
    console.log('Reducer called with action:', action);
    switch(action.type) {
      case ACTIONS.GET_TOKEN:
        return action.payload;
      default:
        return state;
    }
  }*/
  const tokenReducer = (state = token, action) => {
    // Filtrer les actions non désirées
    if (
      action.type === '@@redux/INIT' ||
      action.type === '@@redux/PROBE_UNKNOWN_ACTION' ||
      action.type === '@@INIT'
    ) {
      return state;
    }
  
    console.log('Reducer called with action:', action);
  
    switch (action.type) {
      case ACTIONS.GET_TOKEN:
        return action.payload;
      default:
        return state;
    }
  };

export default tokenReducer