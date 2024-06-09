export const validationJSON = (text: string) => {
  try {
    JSON.parse(text)
  } catch (error) {
    console.error(`JSON parse error: ${error}`)
    return false
  }

  return true
}
