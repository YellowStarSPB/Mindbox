import ControlPanel from './features/controlPanel/ui/ControlPanel/ControlPanel';
import TodoList from './features/todoList/ui/TodoList/TodoList';

function App() {
    return (
        <div className="container">
            <h1 className="title">todos</h1>

            <div className="todos-wrapper">
                <TodoList />
                <ControlPanel />
            </div>
        </div>
    );
}

export default App;
