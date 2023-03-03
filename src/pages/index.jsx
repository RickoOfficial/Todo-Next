import CategoriesList from '@/components/CategoriesList'
import ContextMenu from '@/components/ContextMenu'
import Layout from '@/components/layout'
import TodoList from '@/components/TodoList'

import categories from '@/js/categories'
import { useState } from 'react'

const Home = () => {
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
	const [isShowCategoryContextMenu, setIsShowCategoryContextMenu] = useState(false)
	const [categoryContextMenuItems, setCategoryContextMenuItems] = useState('')

	const [selectedCategory, setSelectedCategory] = useState(null)
	const [selectedCategoryTodos, setSelectedCategoryTodos] = useState(null)

	const handleOnClick = (event) => {
		if (event.target.closest('.context-menu') === null) {
			setIsShowCategoryContextMenu(false)
		}
	}

	const deleteTodo = (todoId) => {
		let tempCategory = selectedCategory
		tempCategory.todos = tempCategory.todos.filter((todo) => todo.id != todoId)
		setSelectedCategory(tempCategory)
		setSelectedCategoryTodos(tempCategory.todos)
	}

	const createTodoItem = () => {
		let tempCategory = selectedCategory
		tempCategory.todos.push({
			id: Math.random().toString(36).slice(2),
			status: false,
			text: 'New Todo',
		})
		setSelectedCategory(tempCategory)
		setSelectedCategoryTodos(tempCategory.todos)
	}

	return (
		<div
			className="app"
			onClick={handleOnClick}
			onContextMenu={(event) => {
				event.preventDefault()
			}}
		>
			<Layout>
				<CategoriesList
					categories={categories}
					setIsShowCategoryContextMenu={setIsShowCategoryContextMenu}
					setCategoryContextMenuItems={setCategoryContextMenuItems}
					setMousePos={setMousePos}
					setSelectedCategory={setSelectedCategory}
					setSelectedCategoryTodos={setSelectedCategoryTodos}
				/>
				<TodoList
					category={selectedCategory}
					setIsShowCategoryContextMenu={setIsShowCategoryContextMenu}
					setCategoryContextMenuItems={setCategoryContextMenuItems}
					setMousePos={setMousePos}
					deleteTodo={deleteTodo}
					createTodoItem={createTodoItem}
				/>
			</Layout>

			{/* Контекстное меню для категорий */}
			<ContextMenu
				isShow={isShowCategoryContextMenu}
				setIsShow={setIsShowCategoryContextMenu}
				mousePos={mousePos}
				categoryContextMenuItems={categoryContextMenuItems}
			/>
			{/* Контекстное меню для категорий */}
		</div>
	)
}

export default Home
