export const placeBid = async (auctionId: number, amount: number, userId: number) => {
    const url = "https://localhost:7103/api/bid"
    return await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            auctionId,
            amount,
            userId
        })
    }).then(res => res.json())
}
export const getBidsByAuction = async (auctionId: number) => {

  const url = `https://localhost:7103/api/bid/${auctionId}`

  return await fetch(url).then(res => res.json())
}