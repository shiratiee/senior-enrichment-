import axios from 'axios';

/* -----------------    ACTION TYPES ------------------ */

const GET_CAMPUSES = 'GET_CAMPUSES';
const CREATE_CAMPUSES = 'CREATE_CAMPUSES';
const REMOVE_CAMPUSES = 'REMOVE_CAMPUSES';
const UPDATE_CAMPUSES = 'UPDATE_CAMPUSES';


/* ------------   ACTION CREATORS     ------------------ */

const get  = campuses => ({ type: GET_CAMPUSES, campuses });
const create = campus => ({ type: CREATE_CAMPUSES, campus });
const remove = id  => ({ type: REMOVE_CAMPUS, id });
const updates= campus   => ({ type: UPDATE_CAMPUSES, campus });

/* ------------       REDUCERS     ------------------ */

export default function reducer (campuses = [], action) {

  switch (action.type) {

    case GET_CAMPUSES :
      return Object.assign({}, state, {get_campuses: action.campuses});

    case CREATE_CAMPUSES:
      return [action.campuses, ...campuses];

    case REMOVE_CAMPUSES:
      return campuses.filter(campus => campus.id !== action.id);

    case UPDATE_CAMPUSES:
      return campuses.map(campus => (
        action.campus.id === campus.id ? action.campus : campus
      ));

    default:
      return state;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchcampuses = () => dispatch => {
  axios.get('/api/campuses')
       .then(res => dispatch(init(res.data)))
       .catch(err => console.error('Fetching campuses unsuccessful', err));
};
export const removeCampuses = id => dispatch => {
  dispatch(remove(id));
  axios.delete(`/api/campuses/${id}`)
       .catch(err => console.error(`Removing campuses: ${id} unsuccessful`, err));
};

export const addCampus = campus => dispatch => {
  axios.post('/api/campuses', campus)
       .then(res => dispatch(create(res.data)))
       .catch(err => console.error(`Creating campus: ${campus} unsuccessful`, err));
};

export const updateCampuses = (id, campus) => dispatch => {
  axios.put(`/api/campuses/${id}`, campus)
       .then(res => dispatch(update(res.data)))
       .catch(err => console.error(`Updating campus: ${campus} unsuccessful`, err));
};



