import axios from 'axios';


/* -----------------    ACTION TYPES ------------------ */

const GET_CAMPUSES = 'GET_CAMPUSES';
const CREATE_CAMPUSES = 'CREATE_CAMPUSES';
const REMOVE_CAMPUSES = 'REMOVE_CAMPUSES';
const UPDATE_CAMPUSES = 'UPDATE_CAMPUSES';
const GET_ONE_CAMPUS = 'GET_ONE_CAMPUS';


/* ------------   ACTION CREATORS     ------------------ */

const get  = campuses => ({ type: GET_CAMPUSES, campuses });
const getOneCampus = (campus) => ({type: GET_CAMPUS, campus});
const create = campus => ({ type: CREATE_CAMPUSES, campus });
const remove = id  => ({ type: REMOVE_CAMPUS, id });
const update= campus   => ({ type: UPDATE_CAMPUSES, campus });

/* ------------       REDUCERS     ------------------ */

export default function reducer (state = [], action) {

  switch (action.type) {

    case GET_ONE_CAMPUS:
      return action.campuses;

    case GET_CAMPUSES :
      return  action.campuses;

    case CREATE_CAMPUSES:
      return [action.campuses, ...campuses];

    case REMOVE_CAMPUSES:
      return campuses.filter(campus => campus.id !== action.campus.id);

    case UPDATE_CAMPUSES:
      return campuses.map(campus => (
        action.campus.id === campus.id ? action.campus : campus
      ));

    default:
      return state;
  }
}

/* ------------   THUNK CREATORS     ------------------ */



export function fetchCampuses () {
  return function thunk (dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        const action = get(campuses);
        dispatch(action);
      });
};
}

export function addACampus (campus) {
  return function thunk (dispatch) {
    return axios.post('/api/campuses', campus)
        .then(res => res.data)
        .then(response => {
            const action = create(res.campus);
            dispatch(action);
            return res.campus
        })
}
}


  
export function removeCampus (campusId) {
  return function thunk (dispatch) {
    return axios.delete(`/api/campuses/${campusId}`)
      .then( res => res.data)
        .then(campus => {
      const action = remove(campus)
    dispatch(action)
  })
}
}

export function updateCampus (campus) {
  return function thunk (dispatch) {
    return axios.put(`/api/students/${campus.id}`, campus)
    .then( res => {
      const action = update(res.data)
      dispatch(action)
    })
    .catch(console.error)
  }
}

export function fetchCampus(campusId) {
  return function thunk(dispatch) {
      return axios.get(`/api/campus/${campusId}`)
          .then(res => res.data)
          .then(campus => {
              const action = getOneCampus(campus);
              dispatch(action)
          })
  }   
}




