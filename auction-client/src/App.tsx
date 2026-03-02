import { useEffect, useState } from "react"
import {  Routes, Route, useLocation } from "react-router-dom"

import { getOpenAuctions } from "./services/AuctionService"
import type { Auction } from "./types/Types"

import Header from "./components/Header/Header"
import HomePage from "./pages/HomePage"
import AuctionDetailsPage from "./pages/AuctionDetailsPage"
import CreateAuctionPage from "./pages/CreateAuctionPage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"



function AppContent() {

  const [auctions, setAuctions] = useState<Auction[]>([])
  const [search, setSearch] = useState("")

  const location = useLocation()

  const hideHeader = ["/login", "/register"].includes(location.pathname)

  const storedUser = localStorage.getItem("user")
  const user = storedUser ? JSON.parse(storedUser) : null


  const fetchAuctions = () => {
    getOpenAuctions().then(data => setAuctions(data))
  }

  useEffect(() => {
    fetchAuctions()
  }, [location])


  const filteredAuctions = auctions.filter(a =>
    a.title.toLowerCase().includes(search.toLowerCase())
  )


  return (
    <>
      {!hideHeader && <Header user={user} search={search} setSearch={setSearch} />}
      
      <Routes>
        <Route path="/" element={<HomePage auctions={filteredAuctions} />} />
        <Route path="/auction/:id" element={<AuctionDetailsPage />} />
        <Route path="/create" element={<CreateAuctionPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  )
}


function App() {
  return (
      <AppContent />
  )
}

export default App