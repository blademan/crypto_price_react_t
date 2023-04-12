import Card, { Coin } from './Card'

interface CardsListProps {
	allCoins: Coin[]
}

const CardsList = ({ allCoins }: CardsListProps) => {
	return (
		<ul className='flex w-full flex-col gap-3'>
			{allCoins.map((coin: Coin) => (
				<Card key={coin.name} {...coin} />
			))}
		</ul>
	)
}
export default CardsList
