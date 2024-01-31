import { v4 as uuidV4 } from 'uuid'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function packBoxes (bigBoxWidth, bigBoxHeight, smallBoxes) {
  // const sortedBoxes = [...smallBoxes].sort((a, b) => b.width * b.height - a.width * a.height)

  const placedBoxes = []
  const unplacedBoxes = []

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function canPlaceBox (x, y, width, height) {
    for (const placedBox of placedBoxes) {
      if (
        x < placedBox.x + placedBox.width &&
          x + width > placedBox.x &&
          y < placedBox.y + placedBox.height &&
          y + height > placedBox.y
      ) {
        return false
      }
    }
    return true
  }

  for (const smallBox of smallBoxes) {
    let placed = false

    for (let y = 0; y <= bigBoxHeight - smallBox.height; y++) {
      for (let x = 0; x <= bigBoxWidth - smallBox.width; x++) {
        if (canPlaceBox(x, y, smallBox.width, smallBox.height)) {
          placedBoxes.push({
            x,
            y,
            width: smallBox.width,
            height: smallBox.height,
            color: smallBox.color,
            id: uuidV4(),
            extraFields:
                smallBox.extraFields !== undefined
                  ? smallBox.extraFields
                  : {
                      borderTopLeftRadius: '0',
                      borderTopRightRadius: '0',
                      borderBottomLeftRadius: '0',
                      borderBottomRightRadius: '0'
                    }
          })
          placed = true
          break
        }
      }
      if (placed) {
        break
      }
    }

    if (!placed) {
      unplacedBoxes.push(smallBox)
    }
  }

  return {
    placedBoxes,
    unplacedBoxes
  }
}

export default packBoxes
