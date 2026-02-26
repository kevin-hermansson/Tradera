import { useNavigate } from "react-router-dom"

const BackButton = () => {

  const navigate = useNavigate()

  return (
    <button onClick={() => navigate("/")}>
      Back to auctions
    </button>
  )
}

export default BackButton