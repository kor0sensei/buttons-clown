const applicationState = {
    reservations: []
}

const API = "http://localhost:8088"

export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
        .then(response => response.json())
        .then(
            (reservations) => {
                
                applicationState.reservations = reservations
            }
        )
}

export const getReservations = () => {
    return applicationState.reservations.map(reservation => ({...reservation}))
}

export const sendReservation = (userReservation) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userReservation)
    }

        const mainContainer = document.querySelector("#container");

        return fetch(`${API}/reservations`, fetchOptions)
            .then(response => response.json())
            .then(() => {

                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            })
}

export const deleteReservation = (id) => {
    
    const mainContainer = document.querySelector("#container");

    return fetch(`${API}/reservations/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}