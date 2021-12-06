import React from "react";
import { useDispatch } from "react-redux";
import { Button, Card } from "semantic-ui-react";
import { filterItem, getItem } from "../JS/Actions/action";

const TaskCard = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <Card>
      <Card.Content>
        <Card.Header>{el.task}</Card.Header>
        <Card.Description>
          <strong>{el.description}</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button
            basic
            color="green"
            onClick={() => {
              dispatch(getItem(el.id));
            }}
          >
            Edit
          </Button>
          <Button
            basic
            color="red"
            onClick={() => dispatch(filterItem(el.status))}
          >
            filter
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default TaskCard;
