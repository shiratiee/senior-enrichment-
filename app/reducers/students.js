import axios from 'axios';

/* -----------------    ACTION TYPES ------------------ */

const GET_STUDENTS = 'GET_STUDENTS';
const CREATE_STUDENT = 'CREATE_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';


/* ------------   ACTION CREATORS     ------------------ */

const allstudents   = students => ({ type: GET_STUDENTS, students });
const add = student => ({ type: CREATE_STUDENT, student });
const remove = id  => ({ type: REMOVE_STUDENT, id });
const update = student   => ({ type: UPDATE_STUDENT, student });

/* ------------       REDUCERS     ------------------ */

export default function reducer (campuses = [], action) {
  switch (action.type) {

    case GET_STUDENTS :
    return Object.assign({}, state, {get_students: action.students});

  case CREATE_STUDENT:
    return [action.students, ...student];

  case REMOVE_STUDENT:
    return students.filter(campus => campus.id !== action.id);

  case UPDATE_STUDENT:
    return students.map(campus => (
      action.campus.id === campus.id ? action.campus : campus
    ));

    default:
      return state;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchAllStudents = () => dispatch => {
  axios.get('/api/students')
       .then(res => dispatch(init(res.data)))
       .catch(err => console.error('Fetching students unsuccessful', err));
};

export const removeCampuses = id => dispatch => {
  dispatch(remove(id));
  axios.delete(`/api/students/${id}`)
       .catch(err => console.error(`Removing student: ${id} unsuccessful`, err));
};

export const addStudent = student => dispatch => {
  axios.post('/api/campuses', student)
       .then(res => dispatch(create(res.data)))
       .catch(err => console.error(`Creating student: ${student} unsuccessful`, err));
};

export const updateStudent = (id, student) => dispatch => {
  axios.put(`/api/campuses/${id}`, student)
       .then(res => dispatch(update(student)))
       .catch(err => console.error(`Updating student: ${student} unsuccessful`, err));
};

