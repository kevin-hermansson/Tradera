import type {Auction} from "../../types/Types"
import { Link } from "react-router-dom"

interface Props {
    auction: Auction
}

const AuctionCard = ({auction}: Props) => {
    return (
        <Link to={`/auction/${auction.id}`}>
            <div>
                <h2>{auction.title}</h2>
                <p>{auction.description}</p>
                <p>Current price: {auction.currentPrice}</p>
                <p>Start: {new Date(auction.startDate).toLocaleString()}</p>
                <p>Ends: {new Date(auction.endDate).toLocaleString()}</p>
            </div>
        </Link>
        )
}

export default AuctionCard

            