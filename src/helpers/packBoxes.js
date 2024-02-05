import { v4 as uuidV4 } from 'uuid'
function packBoxes (bigBoxWidth, bigBoxHeight, smallBoxes) {
  const containers = []
  function canPlaceBox (container, x, y, width, height) {
    for (const placedBox of container.placedBoxes) {
      if (x < placedBox.x + placedBox.width && x + width > placedBox.x && y < placedBox.y + placedBox.height && y + height > placedBox.y) {
        return false
      }
    }
    return true
  }
  for (const smallBox of smallBoxes) {
    let placed = false
    for (let i = 0; i < containers.length; i++) {
      const container = containers[i]
      for (let y = 0; y <= bigBoxHeight - smallBox.height; y++) {
        for (let x = 0; x <= bigBoxWidth - smallBox.width; x++) {
          if (canPlaceBox(container, x, y, smallBox.width, smallBox.height)) {
            container.placedBoxes.push({
              x,
              y,
              width: smallBox.width,
              height: smallBox.height,
              color: smallBox.color,
              id: uuidV4(),
              extraFields: smallBox.extraFields !== undefined ? smallBox.extraFields : { borderTopLeftRadius: '0', borderTopRightRadius: '0', borderBottomLeftRadius: '0', borderBottomRightRadius: '0' }
            })
            placed = true
            break
          }
        }
        if (placed) break
      }
      if (placed) break
    }
    if (!placed) {
      const newContainer = { placedBoxes: [] }
      containers.push(newContainer)
      newContainer.placedBoxes.push({
        x: 0,
        y: 0,
        width: smallBox.width,
        height: smallBox.height,
        color: smallBox.color,
        id: uuidV4(),
        extraFields: smallBox.extraFields !== undefined ? smallBox.extraFields : { borderTopLeftRadius: '0', borderTopRightRadius: '0', borderBottomLeftRadius: '0', borderBottomRightRadius: '0' }
      })
    }
  }
  return containers
}
export default packBoxes
