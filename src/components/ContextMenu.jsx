const ContextMenu = ({ isShow, setIsShow, mousePos, categoryContextMenuItems }) => {
	let hideTimeout = undefined

	return (
		<div
			className={'ContextMenu' + ' ' + (isShow ? 'block' : 'hidden')}
			style={{ top: mousePos.y + 'px', left: mousePos.x + 'px' }}
			onClick={() => {
				setIsShow(false)
			}}
		>
			{categoryContextMenuItems}
		</div>
	)
}

export default ContextMenu
