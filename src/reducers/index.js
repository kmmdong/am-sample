import * as types from '../actions/actionTypes';
import { combineReducers } from 'redux';

const initialState = {
  deskTopHeader: {
    showAbout: false,
    showPort: false
  },
  mobileHeader : {
    showHam: false,
    showAbout: false,
    showPort: false
  }
}

const deskTopHeader = (state = initialState.deskTopHeader, action) => {
  switch (action.type) {
    case types.SELECT_ABOUT_DESKTOP:
      return Object.assign({}, state, {
        showAbout : !state.showAbout
      });
    case types.SELECT_PORT_DESKTOP:
      return Object.assign({}, state, {
        showPort : !state.showPort
      });
    default: 
      return Object.assign({}, state)  
  }
}

const mobileHeader = (state = initialState.mobileHeader, action) => {
  switch (action.type) {
    case types.SELECT_HAM_MOBILE:
      return Object.assign({}, state, {
        showHam : !state.showHam
      });
    case types.SELECT_ABOUT_MOBILE:
      return Object.assign({}, state, {
        showAbout : !state.showAbout
      });
    case types.SELECT_PORT_MOBILE:
      return Object.assign({}, state, {
        showPort : !state.showPort
      });

    default: 
      return Object.assign({}, state)  
  }
}

export default combineReducers({
  deskTopHeader,
  mobileHeader
});
