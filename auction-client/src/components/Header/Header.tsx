import { useNavigate } from "react-router-dom";

interface Props {
    user: any
    search: string
    setSearch: (search: string) => void
}

const Header = ({ user, search, setSearch }: Props) => {

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("user")
        navigate("/login")
    }

    return (
        <div>
            <h2 onClick={()=> navigate("/")}>
                Tradera
            </h2>
            <input
                placeholder="Search"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            {!user && (
                <>
                    <button onClick={() => navigate("/login")}>Login</button>
                    <button onClick={() => navigate("/register")}>Register</button>
                </>
            )}
            {user && (
                <>
                    <span>Logged in as: {user.name}</span>
                    <button onClick={() => navigate("/create")}>Create Auction</button>
                    <button onClick={handleLogout}>Logout</button>
                </>
            )}
        </div>
    )
}
    export default Header
