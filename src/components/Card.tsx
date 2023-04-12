import { useEffect, useState } from 'react'
import icon from '../assets/bookmark.svg'

export interface Coin {
	current_price: number
	name: string
	symbol: string
	image: string
	high_24h: number
	low_24h: number
	market_cap_change_percentage_24h: number
}
type EventType = React.MouseEvent<HTMLLIElement, MouseEvent>

interface CoinLocal {
	name: string
	isFavorite: boolean
}

const Card = ({
	current_price,
	name,
	symbol,
	image,
	high_24h,
	low_24h,
	market_cap_change_percentage_24h: perCent,
}: Coin) => {
	const [isFavorite, setIsFavorite] = useState(false)

	useEffect(() => {
		const coinString = localStorage.getItem(name)
		if (coinString) {
			const coin: CoinLocal = JSON.parse(coinString)
			setIsFavorite(coin.isFavorite)
		}
	}, [])

	const cardClass = isFavorite ? 'favorite' : ''

	const addToFavorite = (e: EventType) => {
		e.preventDefault()
		const coin = {
			name,
			isFavorite: true,
		}
		const coinString = JSON.stringify(coin)
		localStorage.setItem(name, coinString)
		setIsFavorite(true)
	}

	const removeFromFavorite = (e: EventType) => {
		e.preventDefault()
		localStorage.removeItem(name)
		setIsFavorite(false)
	}

	const cardHandler = (e: EventType) => {
		e.preventDefault()

		if (isFavorite) {
			removeFromFavorite(e)
		} else {
			addToFavorite(e)
		}
	}

	return (
		<li
			onClick={e => cardHandler(e)}
			className={`card w-full cursor-pointer flex-wrap items-center justify-between gap-5 space-y-3 rounded-md bg-slate-800 from-indigo-500 via-blue-800 to-purple-800 p-3 text-gray-300 ring-1 ring-purple-500 hover:bg-gradient-to-r sm:flex   sm:space-y-0 md:px-5 md:py-3 ${cardClass}`}
		>
			<div className='flex items-center justify-between gap-2 md:gap-5'>
				{isFavorite && <img src={icon} />}
				<div className='flex flex-1 items-center  gap-2 md:w-40'>
					<img src={image} alt='' width={30} />
					<h3 className='text-sm'>{name}</h3>
				</div>
				<div className='flex items-center gap-2  text-gray-400'>
					<p className='uppercase'>{symbol}</p>
					<p className='text-sm'>${current_price.toLocaleString()}</p>
				</div>
			</div>
			<div className='flex  items-center gap-5'>
				<p className={`${perCent > 0 ? 'text-green-700' : 'text-red-700'} flex-1 text-sm`}>{perCent.toFixed(2)}%</p>
				<div className='flex gap-2 sm:flex-col md:gap-3'>
					<div className=' flex items-end justify-between gap-3   text-[10px]  sm:text-sm'>
						<p className=' text-gray-500 '>High 24h</p>
						<p className=''>${high_24h.toLocaleString()}</p>
					</div>
					<div className='flex items-end justify-between gap-3    text-[10px]  sm:text-sm'>
						<p className=' text-gray-500'>Low 24h</p>
						<p className=''>${low_24h.toLocaleString()}</p>
					</div>
				</div>
			</div>
		</li>
	)
}

export default Card
