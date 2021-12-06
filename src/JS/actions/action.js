import {
  ADD_ITEM,
  FILTER_ITEM,
  EDIT_ITEM,
  GET_ITEM
} from "../Constants/actionTypes";

export const addItem = (task) => {
  return {
    type: ADD_ITEM,
    payload: task
  };
};
export const filterItem = (status) => {
  return {
    type: FILTER_ITEM,
    payload: status
  };
};
export const editItem = (task) => {
  return {
    type: EDIT_ITEM,
    payload: task
  };
};

export const getItem = (status) => {
  return {
    type: GET_ITEM,
    payload: status
  };
};
