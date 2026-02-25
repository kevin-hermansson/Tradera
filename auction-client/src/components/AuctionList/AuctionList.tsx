import type { Auction } from "../../types/Types";
import AuctionCard from "../AuctionCard/AuctionCard";

interface Props {
    auctions: Auction[]
}

const AuctionList = ({ auctions }: Props) => {

    const list = auctions.map(auction => 
        (<AuctionCard key={auction.id} auction={auction} />
            
        ))
    

    return <div>{list}</div>
}
export default AuctionList