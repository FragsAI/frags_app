const BASE_URL = "http://localhost:3000/api/subscription"

const testService = async (amount, token) => {
  const response = await fetch(`${BASE_URL}/test-payment-intent`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(amount)
  })
  return response
}


export  {
  testService
}