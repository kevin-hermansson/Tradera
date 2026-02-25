import { useEffect, useState } from "react"
import { getBidsByAuction } from "../../services/BidService"

interface Bid {
  id: number
  amount: number
  userId: number
}

interface Props {
  auctionId: number
}

const BidHistory = ({ auctionId }: Props) => {

  const [bids, setBids] = useState<Bid[]>([])

  useEffect(() => {
    getBidsByAuction(auctionId).then(data => setBids(data))
  }, [auctionId])

  if (bids.length === 0) return <p>No bids yet</p>

  return (
    <div>
      <h3>Bid history</h3>

      {bids.map(b => (
        <div key={b.id}>
          <p>Amount: {b.amount}</p>
          <p>User: {b.userId}</p>
        </div>
      ))}
    </div>
  )
}

export default BidHistory