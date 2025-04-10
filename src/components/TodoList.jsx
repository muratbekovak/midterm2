import { useSelector } from 'react-redux';
import { FilterTypes } from '../features/todos/FilterTypes';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { items, filter } = useSelector((state) => state.todos);

  console.log('🔥 Задачи:', items);
  console.log('📌 Текущий фильтр:', filter);

  const filteredTodos = items.filter((todo) => {
    if (filter === FilterTypes.ACTIVE) return !todo.completed;
    if (filter === FilterTypes.COMPLETED) return todo.completed;
    return true;
  });

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
