import React from "react";
import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";
function TaskList() {
    const task = useSelector((state) => state.contactReducers.tasks);

    return (
        <div>
            {task.map((el) => (
                <TaskCard key={el.id} el={el} />
            ))}
        </div>
    );
}

export default TaskList;