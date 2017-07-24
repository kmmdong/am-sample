import * as types from '../actions/actionTypes';

const initialState = {
  condition : false
}

const condition = (state = initialState.condition, action) => {
  switch (action.type) {
    case types.SELECT_SUB_MENU:
      return Object.assign({}, state)
    default: 
      return Object.assign({}, state)  
  }
}

export default condition