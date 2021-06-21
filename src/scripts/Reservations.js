import { getReservations, deleteReservation } from "./dataAccess.js"

export const Reservations = () => {
    const reservations = getReservations() // grab the local state of the requests data

    let html = `
        <ul>
            ${
                reservations.map(
                      (reservation) => `<li class="choice-list-item reservation--list-item">
                        <input type="hidden" value="${reservation.id}" name="reservation"> ${reservation.parentName}
                        <button class="reservation__delete" id="reservation--${reservation.id}">Delete</button>
                      </li>`).join("")
            }
        </ul>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [,reservationId] = click.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }
})