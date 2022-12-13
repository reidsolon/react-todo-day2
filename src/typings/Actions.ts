import { TodoItem } from "./Todo";

export interface AddTodoType {
    payload: TodoItem,
}

export type ActionTypes = AddTodoType