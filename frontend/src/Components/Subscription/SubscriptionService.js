const BASE_URL = "http://localhost:3000/api/subscription/test-payment-intent"
const testService = async (amount) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({amount})
  })
  console.log(response)
  return response
}


export default {
  testService
}