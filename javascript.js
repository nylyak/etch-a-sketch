const container = document.querySelector(".container")
const button = document.querySelector("button")
function changeGridSize(gridSize) {
    button.addEventListener("click", function () {
        let gridSize = prompt("please enter the number of squares you would like on each side of the grid")






        for (let row = 0; row < gridSize; row++) {
            const rowDiv = document.createElement("div")

            for (let column = 0; column < gridSize; column++) {
                let height = `${960 / gridSize - 3}px`
                const box = document.createElement("div")

                box.style.height = height
                box.style.width = height
                console.log(height)
                box.style.border = "solid"
                rowDiv.appendChild(box)
                box.addEventListener("mouseover", function () {
                    box.style.backgroundColor = "black"
                })
            }

            container.appendChild(rowDiv)

        }
    })
}

changeGridSize(30)


