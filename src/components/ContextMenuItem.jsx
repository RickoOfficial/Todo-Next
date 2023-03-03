const ContextMenuItem = ({ handleOnClick, children, addClass }) => {
	return (
		<div
			className={`ContextMenuItem ${addClass}`}
			onClick={handleOnClick}
		>
			{children}
		</div>
	)
}

export default ContextMenuItem
