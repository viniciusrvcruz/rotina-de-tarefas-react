export const Todo = ({ todo, removeTodo, completeTodo }) => {


  return (
    <div className="todo">
        <div className="content" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
            <p>{todo.text}</p>
            <p className="category">({todo.category})</p>
        </div>
        <div className="todoButtons">
            <button className="complete" onClick={() => completeTodo(todo.id)}>Completar</button>
            <button className="remove" onClick={() => removeTodo(todo.id)}>x</button>
        </div>
    </div>
  )
}
