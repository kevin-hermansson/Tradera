import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import type { Auction } from "../types/Types"
import { getAuctionById } from "../services/AuctionService"
import { useNavigate } from "react-router-dom"
import AuctionInfo from "../components/AuctionInfo/AuctionInfo"
import BidSection from "../components/BidSection/BidSection"
import BidHistory from "../components/BidHistory/BidHistory"




const AuctionDetailsPage = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const [auction, setAuction] = useState<Auction | null>(null)
  const currentUserId = 1

  useEffect(() => {
    if (id) {
      getAuctionById(Number(id)).then(data => setAuction(data))
    }
  }, [id])

  if (!auction) return <p>Loading...</p>

  return (
    <div>
      <button onClick={() => navigate("/")}>Back to auctions</button>

      <AuctionInfo auction={auction} />

      <BidSection auction={auction} currentUserId={currentUserId} onBidPlaced={setAuction} />
      
      <BidHistory auctionId={auction.id} />
    </div>
  )
}
export default AuctionDetailsPage