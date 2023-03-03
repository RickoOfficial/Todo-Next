const translations = {
	en: {
		Категории: 'Categories',
		'Категория не выбрана': 'Category not selected',
		'Задач нет': 'No tasks',
		'Создать категорию': 'Create category',
		'Добавить задачу': 'Add task',
	},
}

function __(key, lang = 'ru', data = {}) {
	if (translations[lang] && translations[lang][key]) {
		let translation = translations[lang][key]
		for (let variable in data) {
			translation = translation.replace(`{{${variable}}}`, data[variable])
		}
		return translation
	}
	return key
}

export default __
