import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import FilterButtons from './filters/FilterButtons';
import './App.css';


function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>ToDo-приложение</h1>
      <TodoForm />
      <FilterButtons />
      <TodoList />
    </div>
  );
}

export default App;
