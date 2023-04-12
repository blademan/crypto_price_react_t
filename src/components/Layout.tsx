interface LayoutProps {
	children: React.ReactNode
	title?: string
}

const Layout = ({ children, title = 'Crypto Tracker' }: LayoutProps) => {
	return (
		<>
			<main className='flex min-h-screen flex-col items-center  bg-slate-900 p-5 md:p-10'>
				<header className='header'>
					<a href='/'>
						<h1 className='mb-10 text-3xl  font-extrabold tracking-tight text-white sm:text-[5rem] md:text-5xl'>
							Crypto <span className='text-[hsl(280,100%,70%)]'>Tracker</span> App
						</h1>
					</a>
				</header>
				{children}
			</main>
		</>
	)
}

export default Layout
