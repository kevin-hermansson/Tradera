import { useEffect, useState } from "react"
import { getOpenAuctions } from "./services/AuctionService"
import { useLocation } from "react-router-dom"
import type { Auction } from "./types/Types"
import AuctionList from "./components/AuctionList/AuctionList"
import {Routes, Route} from "react-router-dom"
import AuctionDetailsPage from "./pages/AuctionDetailsPage"
import CreateAuctionPage from "./pages/CreateAuctionPage"




function App() {

  const [auctions, setAuctions] = useState<Auction[]>([])

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
            <AuctionList auctions={auctions} />
          </div>
        }/>

        <Route path="/auction/:id" element={<AuctionDetailsPage />} />
        <Route path="/create" element={<CreateAuctionPage />} />

      </Routes>
    
  )
}

export default App
