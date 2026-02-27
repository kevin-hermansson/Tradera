export const registerUser = async (name: string, email: string, password: string) => {

  const url = "https://localhost:7103/api/users/register"

  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      email,
      password
    })
  }).then(res => res.json())
}

export const loginUser = async (email: string, password: string) => {

  const url = "https://localhost:7103/api/users/login"

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  })

  if (!response.ok) return null

  return await response.json()
}