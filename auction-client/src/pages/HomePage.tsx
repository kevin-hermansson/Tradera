import AuctionList from "../components/AuctionList/AuctionList"
import type { Auction } from "../types/Types"

interface Props {
  auctions: Auction[]
}

const HomePage = ({ auctions }: Props) => {
  return (
    <div>
      <h1>Auctions</h1>
      <AuctionList auctions={auctions} />
    </div>
  )
}

export default HomePage