// Ваш улучшенный packBoxes
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function packBoxes (bigBoxWidth, bigBoxHeight, smallBoxes) {
  const sortedBoxes = [...smallBoxes].sort((a, b) => b.width * b.height - a.width * a.height)
  const placedBoxes = []

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function canPlaceBox (x, y, width, height) {
    return (
      x >= 0 &&
        y >= 0 &&
        x + width <= bigBoxWidth &&
        y + height <= bigBoxHeight &&
        placedBoxes.every(
          (placedBox) =>
            x >= placedBox.x + placedBox.width ||
                x + width <= placedBox.x ||
                y >= placedBox.y + placedBox.height ||
                y + height <= placedBox.y
        )
    )
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function findBottomLeftSpace (width, height) {
    for (let i = 0; i < placedBoxes.length; i++) {
      const box = placedBoxes[i]
      const nextX = box.x + box.width
      const nextY = box.y + height
      if (canPlaceBox(nextX, box.y, width, height)) {
        return { x: nextX, y: box.y }
      } else if (canPlaceBox(box.x, nextY, width, height)) {
        return { x: box.x, y: nextY }
      }
    }
    return null
  }

  for (const smallBox of sortedBoxes) {
    let placed = false

    for (let y = 0; y <= bigBoxHeight - smallBox.height; y++) {
      for (let x = 0; x <= bigBoxWidth - smallBox.width; x++) {
        if (canPlaceBox(x, y, smallBox.width, smallBox.height)) {
          const bottomLeftSpace = findBottomLeftSpace(smallBox.width, smallBox.height)
          if (bottomLeftSpace !== null) {
            for (let i = 0; i < smallBox.quantity; i++) {
              const newBox = {
                id: `${smallBox.color}_${placedBoxes.length + i}`,
                x: bottomLeftSpace.x + i * smallBox.width,
                y: bottomLeftSpace.y,
                width: smallBox.width,
                height: smallBox.height,
                color: smallBox.color
              }
              placedBoxes.push(newBox)
            }
            placed = true
            break
          }
        }
      }
      if (placed) break
    }
  }

  return placedBoxes
}

export default packBoxes
