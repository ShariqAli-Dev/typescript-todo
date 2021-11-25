import Todo from '../models/todo';
import classes from './styles/NewItem.module.css';

const TodoItem: React.FC<{
  item: Todo;
  onRemoveTodo: (todoId: string) => void;
}> = (props) => {
  return (
    <li
      onClick={() => props.onRemoveTodo(props.item.id)}
      className={classes.item}
    >
      {props.item.text}
    </li>
  );
};

export default TodoItem;
