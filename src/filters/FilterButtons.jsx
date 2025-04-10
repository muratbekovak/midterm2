import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../features/todos/todoSlice';
import { FilterTypes } from '../features/todos/FilterTypes';

export default function FilterButtons() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.todos.filter);

  return (
    <div>
      {Object.entries(FilterTypes).map(([key, value]) => (
        <button
          key={key}
          onClick={() => dispatch(setFilter(value))}
          style={{
            fontWeight: filter === value ? 'bold' : 'normal',
          }}
        >
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </button>
      ))}
    </div>
  );
}
