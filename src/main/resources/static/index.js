let tickets = [];

function buyTickets() {
    let movies = document.getElementById("movies").value;
    let ticketAmount = document.getElementById("ticketAmount").value;
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let phonenumber = document.getElementById("phonenumber").value;
    let mail = document.getElementById("mail").value;

    let isValid = true;

    // Clear previous error messages
    clearErrors();

    // Validate ticket amount
    if (ticketAmount.trim() === "" || isNaN(Number(ticketAmount)) || Number(ticketAmount) < 1) {
        document.getElementById("ticketAmountError").textContent = "Please enter a valid amount";
        isValid = false;
    }

    // Validate firstname
    if (firstname.trim() === "" || /\d/.test(firstname)) {
        document.getElementById("firstnameError").textContent = "Invalid firstname";
        isValid = false;
    }

    // Validate lastname
    if (lastname.trim() === "" || /\d/.test(lastname)) {
        document.getElementById("lastnameError").textContent = "Invalid lastname";
        isValid = false;
    }

    // Validate phonenumber
    if (phonenumber.trim() === "" || isNaN(Number(phonenumber)) || phonenumber.length !== 8) {
        document.getElementById("phonenumberError").textContent = "Invalid phone number";
        isValid = false;
    }

    // Validate email
    if (mail.trim() === "" || !mail.includes("@") || !mail.includes(".")) {
        document.getElementById("mailError").textContent = "Invalid email";
        isValid = false;
    }

    if (!isValid) {
        alert("Please correct the highlighted errors before submitting.");
        return;
    }

    const ticket = {
        movies,
        ticketAmount,
        firstname,
        lastname,
        phonenumber,
        mail
    };

    tickets.push(ticket);
    updateTicketDisplay();
}

function updateTicketDisplay() {
    let printOut = "<table><tr><th>Movie</th><th>Amount of Tickets</th><th>Firstname</th><th>Lastname</th><th>Phone Number</th><th>Mail</th><th>Action</th></tr>";
    tickets.forEach((ticket, index) => {
        printOut += `<tr>
                        <td>${ticket.movies}</td>
                        <td>${ticket.ticketAmount}</td>
                        <td>${ticket.firstname}</td>
                        <td>${ticket.lastname}</td>
                        <td>${ticket.phonenumber}</td>
                        <td>${ticket.mail}</td>
                        <td><button onclick="deleteTicket(${index})">Delete</button></td>
                    </tr>`;
    });
    printOut += "</table>";
    document.getElementById("boughtTickets").innerHTML = printOut;
}

function deleteTicket(index) {
    tickets.splice(index, 1);
    updateTicketDisplay();
}

function deleteAllTickets() {
    tickets = [];
    updateTicketDisplay();
}

function clearErrors() {
    document.getElementById("ticketAmountError").textContent = "";
    document.getElementById("firstnameError").textContent = "";
    document.getElementById("lastnameError").textContent = "";
    document.getElementById("phonenumberError").textContent = "";
    document.getElementById("mailError").textContent = "";
}

// Optionally, if you want to ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("movies").value = "";
    document.getElementById("ticketAmount").value = "";
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("phonenumber").value = "";
    document.getElementById("mail").value = "";
});
