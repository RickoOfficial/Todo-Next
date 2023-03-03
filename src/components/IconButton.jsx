const IconButton = ({ handleClick, className, children, ...props }) => {
	return (
		<button
			{...props}
			onClick={handleClick}
			className={'hover:scale-110 active:scale-90 transition-all ' + className || ''}
		>
			{children}
		</button>
	)
}

export default IconButton
