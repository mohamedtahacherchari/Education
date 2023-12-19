import ACTIONS from './index'
import axios from 'axios'
import{
    FORMATION_CREATE_FAIL, 
    FORMATION_CREATE_REQUEST, 
    FORMATION_CREATE_SUCCESS, 
    FORMATION_DETAILS_FAIL, 
    FORMATION_DETAILS_REQUEST, 
    FORMATION_DETAILS_SUCCESS, 
    FORMATION_LIST_FAIL, 
    FORMATION_LIST_REQUEST,
    FORMATION_LIST_SUCCESS,
    FORMATION_UPDATE_FAIL,
    FORMATION_UPDATE_REQUEST,
    FORMATION_UPDATE_SUCCESS,
    FORMATION_DELETE_REQUEST,
    FORMATION_DELETE_SUCCESS,
    FORMATION_DELETE_FAIL
} 
from '../constant/formationConstant'
import { toast } from 'react-toastify';
import {logout} from './userAction'

export const fetchAllFormations = async (token) => {
    const res = await axios.get('/api/formation/',

    {
        headers: {Authorization: token}
    }
    
    )
    return res

}

export const dispatchGetAllFormations = (res) => {

    return {
        type: ACTIONS.GET_ALL_FORMATIONS,
        payload: res.data
    }
   
}

export const listFormations = () => async (dispatch) => {
  try {
    dispatch({ type: FORMATION_LIST_REQUEST });

    const response = await axios.get('/api/formation/allFormation', {
     // headers: { Authorization: token },
    });

    console.log('Response:', response.data); // Log the response data
   // console.log(token)
    
    dispatch({
      type: FORMATION_LIST_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error:', error); // Log the error for debugging
     
    if (error.response) {
      // La requête a été effectuée, mais le serveur a répondu avec un code d'erreur
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
    } else if (error.request) {
      // La requête a été effectuée, mais aucune réponse n'a été reçue
      console.error('No response received');
    } else {
      // Une erreur s'est produite lors de la configuration de la requête
      console.error('Request setup error:', error.message);
    }





    dispatch({
      type: FORMATION_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteFormation = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: FORMATION_DELETE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`/api/product/${id}`, config)

    dispatch({
      type: FORMATION_DELETE_SUCCESS,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: FORMATION_DELETE_FAIL,
      payload: message,
    })
  }
}

export const updateFormation = (formation) => async (dispatch, getState) => {
    try {
      dispatch({
        type: FORMATION_UPDATE_REQUEST,
      })
      const { 
            token,
        } = getState()
        const { data } = await axios.put(
          `/api/formation/${formation._id}`,
          formation,{
              headers: {Authorization: token}
          }
        )


      console.log(data)
      dispatch({
        type: FORMATION_UPDATE_SUCCESS,
        payload: data,
      })

      toast.success('updated avec succé' , {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch({ type: FORMATION_DETAILS_SUCCESS, payload: data })
      
   

    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
     
      dispatch({
        type: FORMATION_UPDATE_FAIL,
        payload: message,
      })
    }
  }

  export const createFormation = (formation) => async (dispatch, getState) => {
    try {
      dispatch({
        type: FORMATION_CREATE_REQUEST,
      })
      const {token} = getState()


   const {data} = await axios.post('/api/formation/addFormation',formation, {headers: {Authorization: token}})
  
      dispatch({
        type: FORMATION_CREATE_SUCCESS,
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: FORMATION_CREATE_FAIL,
        payload: message,
      })
    }
  }
  export const listformationDetails = (id) => async (dispatch,getState) => {
    try {
      

      dispatch({type:FORMATION_DETAILS_REQUEST })
     
      const { 
        token,
    } = getState()

      const {data} = await axios.get(`/api/formation/${id}`,{
        headers: {Authorization: token}
    })

      dispatch({
        type: FORMATION_DETAILS_SUCCESS,
        payload: data ,
      })
    } catch (error) {
      dispatch({
        type: FORMATION_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }