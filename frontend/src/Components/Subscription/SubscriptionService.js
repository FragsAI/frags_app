const BASE_URL = "http://localhost:3000/api/subscription/test-payment-intent"
const testService = async () => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify({amount: 999})
  })
  return response
}


export default {
  testService
}