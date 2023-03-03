import { useState } from 'react'
import ContextMenuItem from './ContextMenuItem'
import IconButton from './IconButton'
import AutoResizeTextarea from './AutoResizeTextarea'

const TodoItem = ({ todo, setIsShowCategoryContextMenu, setCategoryContextMenuItems, setMousePos, deleteTodo }) => {
	const [possibleTodoText, setPossibleTodoText] = useState()

	const handleContextMenu = (event) => {
		event.preventDefault()

		setCategoryContextMenuItems([
			<ContextMenuItem
				handleOnClick={() => {
					setPossibleTodoText(todo.text)
				}}
				addClass="hover:bg-green-500 hover:text-white"
				key={0}
			>
				Редактировать
			</ContextMenuItem>,
			<ContextMenuItem
				handleOnClick={() => {
					deleteTodo(todo.id)
				}}
				addClass="hover:bg-red-500 hover:text-white"
				key={1}
			>
				Удалить
			</ContextMenuItem>,
		])
		setMousePos({
			x: event.pageX,
			y: event.pageY,
		})
		setIsShowCategoryContextMenu(true)
	}

	const updateTodo = () => {
		todo.text = possibleTodoText
		setPossibleTodoText('')
	}

	return (
		<>
			{possibleTodoText ? (
				<div className="relative px-4 py-2 mb-2 rounded-md border border-slate-300 pr-20">
					<AutoResizeTextarea
						value={possibleTodoText}
						onChange={(event) => setPossibleTodoText(event.target.value)}
						placeholder="Введите текст"
						className="transition-all"
					/>
					<IconButton
						handleClick={updateTodo}
						className="absolute top-6 -translate-y-1/2 w-6 h-6 right-10 flex justify-center items-center outline-none select-none"
					>
						✔
					</IconButton>
					<IconButton
						handleClick={() => {
							setPossibleTodoText('')
						}}
						className="absolute top-6 -translate-y-1/2 w-6 h-6 right-2 flex justify-center items-center outline-none select-none"
					>
						❌
					</IconButton>
				</div>
			) : (
				<div
					onContextMenu={handleContextMenu}
					className="relative px-4 py-2 mb-2 transition-all rounded-md border border-transparent hover:shadow-md hover:shadow-slate-300 break-all cursor-default"
				>
					{todo.text}
				</div>
			)}
		</>
	)
}

export default TodoItem
