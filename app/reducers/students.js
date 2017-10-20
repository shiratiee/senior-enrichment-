import axios from 'axios';

/* -----------------    ACTION TYPES ------------------ */

const GET_STUDENTS = 'GET_STUDENTS';
const CREATE_STUDENT = 'CREATE_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';
const GET_ONE_STUDENT = 'GET_ONE_STUDENT';


/* ------------   ACTION CREATORS     ------------------ */

const allstudents   = students => ({ type: GET_STUDENTS, students });
const getOneStudent = stuent => ({type: GET_ONE_STUDENT, student});
const add = student => ({ type: CREATE_STUDENT, student });
const remove = id  => ({ type: REMOVE_STUDENT, id });
const update = student   => ({ type: UPDATE_STUDENT, student });

/* ------------       REDUCERS     ------------------ */

export default function reducer (state = [], action) {
  switch (action.type) {

    case GET_STUDENTS :
    return  action.students;

    case GET_ONE_STUDENT:
    return action.campuses;

    case CREATE_STUDENT:
    return [action.students, ...student];

    case REMOVE_STUDENT:
    return students.filter(student => student.id !== action.student.id);

    case UPDATE_STUDENT:
    return students.map(student => (
    action.student.id === student.id ? action.student : student
    ));

    default:
      return state;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export function fetchStudents(){
  return function thunk (dispatch) {
    return axios.get('/api/student')
      .then(res => res.data)
      .then(students => dispatch(allstudents(students)));
  };
}

export function createStudent (student) {
  return function thunk (dispatch) {
      return axios.post('/api/students', student)
      .then( res => res.data)
      .then(student => {
        const action = add(student)
        dispatch(action)
      })
    }
  }
  
export function updateStudent (student) {
  return function thunk (dispatch) {
    return axios.put(`/api/students/${student.id}`, student)
    .then( res => {
      const action = update(res.data)
      dispatch(action)
    })
    .catch(console.error)
  }
}

  
export function removeStudent (studentId) {
  return function thunk (dispatch) {
    return axios.delete(`/api/students/${studentId}`)
    .then( res => res.data)
    .then(student => {
      const action = remove(student)
      dispatch(action)
    })
  }
}
  
export function fetchStudent(studentId) {
  return function thunk(dispatch) {
      return axios.get(`/api/students/${studentId}`)
          .then(res => res.data)
          .then(student => {
              const action = getOneStudent(student);
              dispatch(action)
          })
  }   
}
  
