import { fetchReservations } from "./dataAccess.js"
import { ButtonClown } from "./ButtonsTheClown.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchReservations().then(
        () => {
            mainContainer.innerHTML = ButtonClown()
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)