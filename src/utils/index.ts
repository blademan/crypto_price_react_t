import { Coin } from '../components/Card'

export const filteredCoins = (coins: Coin[], search: string): Coin[] => {
	return coins.filter(coin => {
		if (coin.name.toLowerCase().includes(search) || coin.symbol.toLowerCase().includes(search)) {
			return coin
		}
	})
}
