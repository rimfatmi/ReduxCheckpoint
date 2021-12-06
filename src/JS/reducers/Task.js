import {
  ADD_ITEM,
  FILTER_ITEM,
  EDIT_ITEM,
  GET_ITEM
} from "../actionTypes/actionTypes";
const initialState = {
  tasks: [
    {
      id: Math.random(),
      name: "training",
      description: "cybersecurity",
      status: "isDone"
    },
    {
      id: Math.random(),
      name: "review trainings",
      description: "AWS",
      status: "isnotDone"
    }
  ]
};
export const contactReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case EDIT_ITEM:
      return {};
    case GET_ITEM:
      return { ...state, user: action.payload };
    case FILTER_ITEM:
      return {
        ...state,
        task: state.tasks.filter((task) => task.status !== action.payload)
      };

    default:
      return state;
  }
};
