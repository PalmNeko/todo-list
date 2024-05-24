import TodoCard from "./TodoCard";


export default function TodoList() {
    const prop = { title: 'test' }
    return (
        <div className="">
            <TodoCard {...prop}></TodoCard>
        </div>
    )
}
