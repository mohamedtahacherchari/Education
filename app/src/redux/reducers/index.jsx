import {combineReducers} from 'redux'
import {
    formationDetailsReducer,
    formationListReducer,
    formationDeleteReducer,
    formationCreateReducer,
    formationUpdateReducer,
}
from './formationReducer'

import token from './tokenReducer'
import auth from './authReducer'
import users from './UserReducer'

export default combineReducers({
    auth,
    users,
    token,
    formationDetails : formationDetailsReducer,
    formationList: formationListReducer,
    formationDelete: formationDeleteReducer,
    formationCreate: formationCreateReducer,
    formationUpdate: formationUpdateReducer,




    
})