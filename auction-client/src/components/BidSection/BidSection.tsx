import { useState } from "react"
import type { Auction } from "../../types/Types"
import { placeBid } from "../../services/BidService"
import { getAuctionById } from "../../services/AuctionService"

interface Props {
  auction: Auction
  currentUserId: number
  onBidPlaced: (updatedAuction: Auction) => void
}

const BidSection = ({ auction, currentUserId, onBidPlaced }: Props) => {

  const [bidAmount, setBidAmount] = useState(0)

  const handleBid = async () => {
    await placeBid(auction.id, bidAmount)
    const updated = await getAuctionById(auction.id)
    onBidPlaced(updated)
  }

  if (auction.userId === currentUserId) return null

  return (
    <div>
      <input
        type="number"
        placeholder="Your bid"
        value={bidAmount}
        onChange={e => setBidAmount(Number(e.target.value))}
      />

      <button onClick={handleBid}>Place bid</button>
    </div>
  )
}

export default BidSection