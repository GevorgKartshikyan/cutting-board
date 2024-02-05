import { v4 as uuidV4 } from 'uuid'
function duplicateBoxes (originalBoxes) {
  const duplicatedBoxes = []
  for (const box of originalBoxes) {
    for (let i = 0; i < box.quantity; i++) {
      const newBox = { ...box, id: uuidV4() }
      duplicatedBoxes.push(newBox)
    }
  }
  return duplicatedBoxes
}
export default duplicateBoxes
