import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import type { Auction } from "../types/Types"
import { getAuctionById } from "../services/AuctionService"
import AuctionInfo from "../components/AuctionInfo/AuctionInfo"
import BidSection from "../components/BidSection/BidSection"
import BidHistory from "../components/BidHistory/BidHistory"
import BackButton from "../components/BackButton/BackButton"




const AuctionDetailsPage = () => {

  const { id } = useParams()
  

  const [auction, setAuction] = useState<Auction | null>(null)

  const storedUser = localStorage.getItem("user")
  const currentUserId = storedUser ? JSON.parse(storedUser).id : null

  useEffect(() => {
    if (id) {
      getAuctionById(Number(id)).then(data => setAuction(data))
    }
  }, [id])

  if (!auction) return <p>Loading...</p>

  return (
    <div>
      <BackButton />

      <AuctionInfo auction={auction} />

      <BidSection auction={auction} currentUserId={currentUserId} onBidPlaced={setAuction} />
      
      <BidHistory key={auction.currentPrice} auctionId={auction.id} />
    </div>
  )
}
export default AuctionDetailsPage