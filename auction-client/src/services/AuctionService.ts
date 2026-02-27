export const getOpenAuctions = async () => {
    const url = "https://localhost:7103/api/auction/open"

    return await fetch(url).then(res => res.json())
}

export const getAuctionById = async (id: number) => {
    const url = `https://localhost:7103/api/auction/${id}`

    return await fetch(url).then(res => res.json())
}

export const createAuction = async (auction: any) => {
    
    const url = "https://localhost:7103/api/auction"

    return await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(auction)
    }).then(res => res.json())
}
export const deleteAuction = async (auctionId: number, userId: number) => {

  const url = `https://localhost:7103/api/auction/${auctionId}/${userId}`

  return await fetch(url, {
    method: "DELETE"
  })
}