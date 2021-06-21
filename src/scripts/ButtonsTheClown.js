import { BookingForm } from "./BookingForm.js"
import { Reservations } from "./Reservations.js"

export const ButtonClown = () => {
    return `
    <h1>Buttons the clown</h1>
    
    <section class="bookingForm">
        ${BookingForm()}
    </section>

    <section class="reservations">
        <h2>Reservations</h2>
        ${Reservations()}
    </section>
    `
}