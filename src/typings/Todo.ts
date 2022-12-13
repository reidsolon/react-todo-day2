interface TodoItem {
    id?: Number,
    title: String,
    description: String,
    status?: Number,
}

interface InitialStateProps {
    todos: TodoItem[]
}

interface AddAction {
    type?: string,
    payload: TodoItem
}

export {
    AddAction,
    InitialStateProps,
    TodoItem,
}