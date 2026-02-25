import type { Auction } from "../../types/Types"

interface Props {
  auction: Auction
}

const AuctionInfo = ({ auction }: Props) => {
  return (
    <div>
      <h1>{auction.title}</h1>
      <p>{auction.description}</p>

      <p>Start price: {auction.startPrice}</p>
      <p>Current price: {auction.currentPrice}</p>

      <p>Starts: {new Date(auction.startDate).toLocaleString()}</p>
      <p>Ends: {new Date(auction.endDate).toLocaleString()}</p>
    </div>
  )
}

export default AuctionInfo