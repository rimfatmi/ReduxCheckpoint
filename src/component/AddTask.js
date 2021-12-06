import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "semantic-ui-react";

import { addItem } from "../JS/Actions/action";
const AddTask = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const dispatch = useDispatch();

  const handleTask = (e) => {
    e.preventDefault();
    const Task = {
      id: Math.random(),
      task,
      description
    };
    dispatch(addItem(task));
  };

  return (
    <Form>
      <Form.Field>
        <label> Task </label>
        <input
          value={task}
          placeholder=" Task"
          name="task"
          type="text"
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <input
          value={description}
          placeholder="description"
          name="description"
          type="text"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />

        <Button type="submit" onClick={handleTask}>
          Save
        </Button>
      </Form.Field>
      <Form.Field>
        <label>Status</label>
        <input
          value={status}
          placeholder="status"
          name="status"
          type="text"
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
      </Form.Field>
    </Form>
  );
};

export default AddTask;
