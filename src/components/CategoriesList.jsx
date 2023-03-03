import __ from '@/js/globals'
import Category from './Category'

const CategoriesList = ({
	categories,
	setIsShowCategoryContextMenu,
	setCategoryContextMenuItems,
	setMousePos,
	setSelectedCategory,
	setSelectedCategoryTodos,
}) => {
	return (
		<div className="w-1/4 flex flex-col">
			<div className="flex items-center justify-between px-4 py-2">
				<div className="font-semibold text-2xl">{__('Категории')}</div>
				<button
					title={__('Создать категорию')}
					className="flex items-center justify-center text-4xl leading-none w-7 h-7 bg-gradient-to-r from-sky-400  to-sky-600 rounded-full text-white font-semibold hover:scale-110 active:scale-90 transition"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						className="bi bi-plus w-6 h-6"
						viewBox="0 0 16 16"
					>
						<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
					</svg>
				</button>
			</div>
			<div className="relative overflow-y-auto">
				{categories.map((category) => {
					return (
						<Category
							category={category}
							setIsShowCategoryContextMenu={setIsShowCategoryContextMenu}
							setCategoryContextMenuItems={setCategoryContextMenuItems}
							setMousePos={setMousePos}
							setSelectedCategory={setSelectedCategory}
							setSelectedCategoryTodos={setSelectedCategoryTodos}
							key={category.id}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default CategoriesList
