import {useState} from "react";
import { createAuction } from "../services/AuctionService";
import { useNavigate } from "react-router-dom";

const CreateAuctionPage = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [startPrice, setStartPrice] = useState(0)
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const handleCreate = async () => {

        const auction = {
            title,
            description,
            startPrice,
            startDate,
            endDate,
            userId: 1
        }
        await createAuction(auction)
        navigate("/")
        }

    return (
        <div>
            <h1>Create Auction</h1>

            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="number"
                placeholder="Start Price"
                value={startPrice}
                onChange={(e) => setStartPrice(Number(e.target.value))}
            />
            <input
                type="datetime-local"
                placeholder="Start Date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />
            <input
                type="datetime-local"
                placeholder="End Date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
            />
            <button onClick={handleCreate}>Create</button>
        </div>
    )
}

export default CreateAuctionPage