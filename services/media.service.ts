export async function generateImage(imageFile: File): Promise<string> {
  const formData = new FormData()
  formData.append("image", imageFile)

  const myHeaders = {
    Authorization: "Client-ID 983bdef3f9b0d7a",
  }

  const response = await fetch("https://api.imgur.com/3/image", {
    method: "POST",
    headers: myHeaders,
    body: formData,
  })

  const data = await response.json()
  return data.data.link
}
