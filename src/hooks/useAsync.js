import React from 'react';
import { useReducer, useEffect } from 'react'

const actionTypes = {
  LOADING : 'loading',
  SUCCESS : 'data',
  ERROR : 'error',
}

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.LOADING:
      return {
        loading: true,
        data: null,
        error: null,
      }

    case actionTypes.SUCCESS: 
      return {
        loading: false,
        data: action.data,
        error: null,
      }

    case actionTypes.ERROR:
      return {
        loading: false,
        data: null,
        error: action.error,
      }
      
    default:
      return state
  }
}


function UseAsync(callback, deps=[]) {
  const [ state, dispatch ] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  })

  const fetchData = async () => {
    try {
      dispatch({type: actionTypes.LOADING})
      const data = await callback()

      dispatch({type: actionTypes.SUCCESS, data: data})
    }
    catch(err) {
      dispatch({type: actionTypes.ERROR, error: err})
    }
  }

  useEffect(() => {
    fetchData()
  }, deps)

  return state
  
}

export default UseAsync;