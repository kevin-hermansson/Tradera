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
  const [message, setMessage] = useState("")

  const handleBid = async () => {

  const storedUser = localStorage.getItem("user")
  const userId = storedUser ? JSON.parse(storedUser).id : null

  if (!userId) return

  try {

    await placeBid(auction.id, bidAmount, userId)

    const updated = await getAuctionById(auction.id)
    onBidPlaced(updated)

    setMessage("Bid placed!")

  } catch {
    setMessage("Bid must be higher than current price")
  }
}

  if (auction.userId === currentUserId) return null

  return (
    <div>
      <input
        type="number"
        placeholder="Your bid"
        value={bidAmount}
        onChange={e => {
          setBidAmount(Number(e.target.value))
          setMessage("")
        }}
      />

      <button onClick={handleBid}>Place bid</button>
      {message && <p>{message}</p>}

    </div>
  )
}

export default BidSection