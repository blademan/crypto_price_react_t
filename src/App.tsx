import { useState } from 'react'
import { useQuery } from 'react-query'
import { Coin } from './components/Card'
import CardsList from './components/CardsList'
import Layout from './components/Layout'
import ProgressBar from './components/ProgressBar'
import Search from './components/Search'
import Spinner from './components/Spinner'
import getCoins from './services/getCoins'
import { filteredCoins } from './utils'

function App(): JSX.Element {
	const [searchValue, setSearchValue] = useState<string>('')
	// const coins = data
	const { isLoading, data: coins } = useQuery<Coin[]>('coins', getCoins, {
		staleTime: 10000,
	})

	if (isLoading) {
		return (
			<Layout>
				<Spinner />
			</Layout>
		)
	}

	if (!coins) {
		return (
			<Layout>
				<h1>Something went wrong</h1>
			</Layout>
		)
	}

	const allCoins = filteredCoins(coins, searchValue)

	return (
		<Layout>
			<ProgressBar />
			<Search setSearch={setSearchValue} />
			<CardsList allCoins={allCoins} />
		</Layout>
	)
}

export default App
