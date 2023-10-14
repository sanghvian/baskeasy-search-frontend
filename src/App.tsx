import SearchComp from './components/SearchBar'
import './App.css'

export default function Home() {
  return (
    <main className={'app-container'}>
      <h1>BaskEasy</h1>
      <SearchComp />
    </main>
  )
}