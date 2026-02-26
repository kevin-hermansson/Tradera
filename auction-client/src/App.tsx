import { useEffect, useState } from "react"
import { getOpenAuctions } from "./services/AuctionService"
import { useLocation } from "react-router-dom"
import type { Auction } from "./types/Types"
import AuctionList from "./components/AuctionList/AuctionList"
import {Routes, Route} from "react-router-dom"
import AuctionDetailsPage from "./pages/AuctionDetailsPage"
import CreateAuctionPage from "./pages/CreateAuctionPage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import LogoutButton from "./components/LogoutButton/LogoutButton"




function App() {

  const [auctions, setAuctions] = useState<Auction[]>([])
  const [search, setSearch] = useState("")
  const filteredAuctions = auctions.filter(a => a.title.toLowerCase().includes(search.toLowerCase())) 
  const storedUser = localStorage.getItem("user")
  const user = storedUser ? JSON.parse(storedUser) : null
  console.log("APP USER", user)

  const location = useLocation()

  const fetchAuctions = () => {
    getOpenAuctions().then(data => {
      setAuctions(data)
    })
  }

  useEffect(() => {
    fetchAuctions()
  }, [location])

  return (
      <Routes>
        <Route path="/" element={
          <div>
            <h1>Auctions</h1>
            <h2>{filteredAuctions.length} results</h2>
            <input
              placeholder="Search"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
              { user && <div>
                <p>Logged in as: {user.name}</p>
                
                
                <LogoutButton />
              </div>}
            <AuctionList auctions={filteredAuctions} />
          </div>
        }/>

        <Route path="/auction/:id" element={<AuctionDetailsPage />} />
        <Route path="/create" element={<CreateAuctionPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

      </Routes>
    
  )
}

export default App
