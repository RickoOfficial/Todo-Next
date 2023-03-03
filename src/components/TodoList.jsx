import TodoItem from './TodoItem'

import __ from '@/js/globals'
import IconButton from './IconButton'

const TodoList = ({
	category,
	setIsShowCategoryContextMenu,
	setCategoryContextMenuItems,
	setMousePos,
	deleteTodo,
	createTodoItem,
}) => {
	return (
		<div className="flex-auto flex flex-col w-3/4 border-l border-sky-500">
			<div className="flex items-center justify-between px-4 py-2">
				<div className="font-semibold text-2xl">{__(category ? category.name : 'Категория не выбрана')}</div>
				{category ? (
					<IconButton
						handleClick={createTodoItem}
						title={__('Добавить задачу')}
						className="flex items-center justify-center w-6 h-6"
					>
						➕
					</IconButton>
				) : (
					<></>
				)}
			</div>
			<div className="relative flex-auto overflow-y-auto p-2 pb-0">
				{category ? (
					category.todos.length ? (
						category.todos.map((todo, index) => {
							return (
								<TodoItem
									todo={todo}
									setIsShowCategoryContextMenu={setIsShowCategoryContextMenu}
									setCategoryContextMenuItems={setCategoryContextMenuItems}
									setMousePos={setMousePos}
									deleteTodo={deleteTodo}
									key={index}
								/>
							)
						})
					) : (
						<div className="text-center px-4 py-2 text-2xl">{__('Задач нет')}</div>
					)
				) : (
					<></>
				)}
			</div>
		</div>
	)
}

export default TodoList
