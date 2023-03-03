import ContextMenuItem from './ContextMenuItem'

const Category = ({
	category,
	setIsShowCategoryContextMenu,
	setCategoryContextMenuItems,
	setMousePos,
	setSelectedCategory,
	setSelectedCategoryTodos,
}) => {
	const handleContextMenu = (event) => {
		event.preventDefault()

		setCategoryContextMenuItems([
			<ContextMenuItem handleOnClick={updateCategory} addClass="hover:bg-green-500 hover:text-white" key={0}>
				Редактировать
			</ContextMenuItem>,
			<ContextMenuItem handleOnClick={deleteCategory} addClass="hover:bg-red-500 hover:text-white" key={1}>
				Удалить
			</ContextMenuItem>,
		])
		setMousePos({
			x: event.pageX,
			y: event.pageY,
		})
		setIsShowCategoryContextMenu(true)
	}

	const updateCategory = () => {
		console.log(`f(x) - updateCategory: ${category.name}`)
	}
	const deleteCategory = () => {
		console.log(`f(x) - deleteCategory: ${category.name}`)
	}

	return (
		<div
			onContextMenu={handleContextMenu}
			onClick={() => {
				setSelectedCategory(category)
				setSelectedCategoryTodos(category.todos)
			}}
			className="relative pl-4 pr-2 py-2 overflow-hidden hover:bg-slate-100 transition-all cursor-pointer focus-within:bg-slate-100"
		>
			<div className="text-lg font-medium">{category.name}</div>
		</div>
	)
}

export default Category
