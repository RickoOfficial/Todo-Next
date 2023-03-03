const Layout = ({ children }) => {
	return (
		<main className="layout">
			<div className="card flex h-full text-slate-700">{children}</div>
		</main>
	)
}

export default Layout
