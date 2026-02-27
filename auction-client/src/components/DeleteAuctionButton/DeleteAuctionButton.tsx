import { useNavigate } from "react-router-dom";
import { deleteAuction } from "../../services/AuctionService";
import { useState } from "react";

interface Props {
    auctionId: number
    ownerId: number
    currentUserId: number
}

const DeleteAuctionButton = ({ auctionId, ownerId, currentUserId }: Props) => {

    const navigate = useNavigate()
    const [message, setMessage] = useState("")

    if (ownerId !== currentUserId) return null

    const handleDelete = async () => {
        const deleteResponse = await deleteAuction(auctionId, currentUserId)
        
        if (!deleteResponse.ok) {
            setMessage("Auction cannot be deleted if there are active bids.")
            return
        }
        navigate("/")
    }

    return (
        <div>
            <button onClick={handleDelete}>Delete Auction</button>
            {message && <p>{message}</p>}
        </div>
    )
}
export default DeleteAuctionButton