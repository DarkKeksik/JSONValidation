export const validationJSON = (text: string) => {
  try {
    JSON.parse(text)
  } catch (error) {
    console.log(`JSON parse error: ${error}`)
    return false
  }

  return true
}
