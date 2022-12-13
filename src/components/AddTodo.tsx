import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { add } from "../store/todo/store"

const AddTodo = () => {

    const [title, setTitle] = useState<string | null>('')
    const [description, setDescription] = useState<string | null>('')
    const dispatch = useDispatch()

    async function saveTodo(event: React.MouseEvent<HTMLButtonElement>) {
        dispatch(add({ title, description }))
        setTitle('')
        setDescription('')
    }

    return (<div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            AddTodo
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
            <input
                onChange={e => setTitle(e.target.value)}
                value={title}
                type="text"
                name="title"
                id="title"
                className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Title here"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
            </div>
        </div>
        <div className="relative mt-1 rounded-md shadow-sm">
            <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Description here"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
            </div>
        </div>
        <div className="mt-3">
            <button
                onClick={saveTodo}
                type="button"
                className="inline-flex w-full justify-center rounded-md border border-transparent bg-purple-600 w-100 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:w-auto sm:text-sm">
                Add Todo
            </button>
        </div>
    </div>)
}

export default AddTodo