import { sendReservation } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitReservation") {
        const userParent = document.querySelector("input[name='reservationParent']").value
        const userKid = document.querySelector("input[name='reservationKid']").value
        const userKidAttendants = document.querySelector("input[name='reservationKidAttendants']").value
        const userAddress = document.querySelector("input[name='reservationAddress']").value
        const userDate = document.querySelector("input[name='reservationDate']").value
        const userLength = document.querySelector("input[name='reservationLength']").value

        const dataToSendToAPI = {
            parentName: userParent,
            kidName: userKid,
            kidsAttending: userKidAttendants,
            address: userAddress,
            neededBy: userDate,
            howLong: userLength
            
        }

        sendReservation(dataToSendToAPI)
    }
})

export const BookingForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="reservationParent">Parent</label>
            <input type="text" name="reservationParent" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationKid">Kid</label>
            <input type="text" name="reservationKid" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationKidAttendants">Kid Attendants</label>
            <input type="number" name="reservationKidAttendants" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationAddress">Address</label>
            <input type="text" name="reservationAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationDate">Date needed</label>
            <input type="date" name="reservationDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="reservationLength">How many hours</label>
            <input type="number" name="reservationLength" class="input" />
        </div>

        <button class="button" id="submitReservation">Submit Reservation</button>
    `

    return html
}
