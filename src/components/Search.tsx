import { ChangeEvent } from 'react'
interface SearchProps {
	setSearch: React.Dispatch<React.SetStateAction<string>>
}

const Search = ({ setSearch }: SearchProps) => {
	const searchHandler = (event: ChangeEvent<HTMLInputElement>): void => {
		event.preventDefault()

		const cards = document.querySelectorAll('.card')
		cards.forEach(card => {
			card.classList.remove('hidden')
		})
		localStorage.removeItem('isFavorite')

		setSearch(event.target.value.toLowerCase())
	}

	return (
		<div className=' mb-5 flex w-full flex-col justify-center bg-transparent'>
			<div className='relative w-full sm:mx-auto sm:max-w-2xl'>
				<div className='relative z-0 overflow-hidden rounded-full p-3'>
					<div role='form' className='relative z-50 flex rounded-full bg-slate-900'>
						<input
							onChange={event => searchHandler(event)}
							type='text'
							placeholder='Find your coin'
							className='flex-1 rounded-full bg-slate-900 px-6 py-4 text-purple-400 focus:outline-none'
						/>
					</div>
					<div className='glow glow-1 absolute -top-10 -left-10 z-10 h-120 w-120 animate-glow1 rounded-100 bg-indigo-400'></div>
					<div className='glow glow-2 absolute -top-10 -left-10 z-20 h-120 w-120 animate-glow2 rounded-100 bg-fuchsia-800'></div>
					<div className='glow glow-3 absolute -top-10 -left-10 z-30 h-120 w-120 animate-glow3 rounded-100 bg-blue-600'></div>
					<div className='glow glow-4 absolute -top-10 -left-10 z-40 h-120 w-120 animate-glow4 rounded-100 bg-violet-700'></div>
				</div>
			</div>
		</div>
	)
}
export default Search
