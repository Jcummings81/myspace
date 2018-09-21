import axios from 'axios';
import { setFlash } from './flash';

export const fetchPages = () => {
  return (dispatch) => {
    axios.get(`/api/pages/${id}`)
      .then( res => {
        dispatch({ type: 'SET_PAGES', pages: res.data })
      })
      .catch( err => {
        console.log(err)
        dispatch(setFlash("Error fetching pages", "red"))
      })
  }
}

export const deletePage = (id) => {
  return (dispatch) => {
    axios.delete(`/api/pages/${id}`)
      .then( res => {
        dispatch({ type: 'DELETE_CHARACTER', page: res.data })
      })
      .catch( err => {
        console.log(err)
        dispatch(setFlash( "Error deleting page", "red" ))
      })
  }
}

export const updatePage = (page, id) => {
  return (dispatch) => {
    axios.put(`/api/pages/${id}`, { page } )
      .then( res => {
        dispatch({ type: 'UPDATE_PAGE', page: res.data })
      })
      .catch( err => {
        console.log(err)
        dispatch(setFlash('Error updating page', 'red'))
      })
  }
}

const pages = (state = [], action) => {
  switch(action.type) {
    case 'SET_PAGES':
      return action.pages;
    case 'DELETE_PAGE':
      return state.filter(page => page.id !== action.page.id )
    case 'UPDATE_PAGE':
      return state.map( c => {
        if (c.id === action.page.id)
          return action.page
        else
          return c
      })
    default:
      return state;
  }
}

export default pages;

