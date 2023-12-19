
import ACTIONS from '../actions/index'

import {
  FORMATION_LIST_REQUEST,
  FORMATION_LIST_SUCCESS,
  FORMATION_LIST_FAIL,
  FORMATION_CREATE_REQUEST,
  FORMATION_CREATE_SUCCESS,
  FORMATION_CREATE_FAIL,
  FORMATION_CREATE_RESET,
  FORMATION_DETAILS_REQUEST,
  FORMATION_DETAILS_SUCCESS,
  FORMATION_DETAILS_FAIL,
  FORMATION_DELETE_REQUEST,
  FORMATION_DELETE_SUCCESS,
  FORMATION_DELETE_FAIL,
  FORMATION_UPDATE_REQUEST,
  FORMATION_UPDATE_SUCCESS,
  FORMATION_UPDATE_FAIL,
  FORMATION_UPDATE_RESET,
} from '../constant/formationConstant';



const formations =[]

const FormationReducer = (state = formations, action) => {
    switch(action.type){
        case ACTIONS.GET_ALL_FORMATION:
            return action.payload
        default:
            return state
    }
}

const initialFormationState = {
  formations: [],
  loading: false,
  error: null,
  success: false,
  formation: {},
};

export const formationListReducer = (state = initialFormationState, action) => {
  switch (action.type) {
    case FORMATION_LIST_REQUEST:
      return { ...state, loading: true, formations: [] };
    case FORMATION_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        formations: action.payload,
      };
    case FORMATION_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const formationDeleteReducer = (state = initialFormationState, action) => {
  switch (action.type) {
    case FORMATION_DELETE_REQUEST:
      return { ...state, loading: true };
    case FORMATION_DELETE_SUCCESS:
      return { ...state, loading: false, success: true };
    case FORMATION_DELETE_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const formationCreateReducer = (state = initialFormationState, action) => {
  switch (action.type) {
    case FORMATION_CREATE_REQUEST:
      return { ...state, loading: true };
    case FORMATION_CREATE_SUCCESS:
      return { ...state, loading: false, success: true, formation: action.payload };
    case FORMATION_CREATE_FAIL:
      return { ...state, loading: false, error: action.payload };
    case FORMATION_CREATE_RESET:
      return { ...state, success: false, formation: {} };
    default:
      return state;
  }
};

export const formationDetailsReducer = (state = initialFormationState, action) => {
  switch (action.type) {
    case FORMATION_DETAILS_REQUEST:
      return { ...state, loading: true, formation: {} };
    case FORMATION_DETAILS_SUCCESS:
      return { ...state, loading: false, formation: action.payload };
    case FORMATION_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
 

export const formationUpdateReducer = (state = { formation: {} }, action) => {
  switch (action.type) {
    case FORMATION_UPDATE_REQUEST:
      return { loading: true }
    case FORMATION_UPDATE_SUCCESS:
      return { loading: false, success: true, formation: action.payload }
    case FORMATION_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case FORMATION_UPDATE_RESET:
      return { formation: {} }
    default:
      return state
  }
}

export default FormationReducer