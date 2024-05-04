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

    // Validation
    if (ticketAmount.trim() === "" || isNaN(Number(ticketAmount)) || Number(ticketAmount) < 1) {
        document.getElementById("ticketAmountError").textContent = "Please enter a valid amount";
        isValid = false;
    }
    if (firstname.trim() === "" || /\d/.test(firstname)) {
        document.getElementById("firstnameError").textContent = "Invalid firstname";
        isValid = false;
    }
    if (lastname.trim() === "" || /\d/.test(lastname)) {
        document.getElementById("lastnameError").textContent = "Invalid lastname";
        isValid = false;
    }
    if (phonenumber.trim() === "" || isNaN(Number(phonenumber)) || phonenumber.length !== 8) {
        document.getElementById("phonenumberError").textContent = "Invalid phone number";
        isValid = false;
    }
    if (mail.trim() === "" || !mail.includes("@") || !mail.includes(".")) {
        document.getElementById("mailError").textContent = "Invalid email";
        isValid = false;
    }

    if (!isValid) {
        alert("Please correct the highlighted errors before submitting.");
        return; // Prevent submission if errors
    }

    // Add ticket to the array and update display
    tickets.push({
        movies,
        ticketAmount,
        firstname,
        lastname,
        phonenumber,
        mail
    });
    updateTicketDisplay();
}

function updateTicketDisplay() {
    let printOut = `<table class="table">
                        <thead>
                            <tr>
                                <th>Movie</th>
                                <th>Amount of Tickets</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>`;
    tickets.forEach((ticket, index) => {
        printOut += `<tr>
                        <td>${ticket.movies}</td>
                        <td>${ticket.ticketAmount}</td>
                        <td>${ticket.firstname}</td>
                        <td>${ticket.lastname}</td>
                        <td>${ticket.phonenumber}</td>
                        <td>${ticket.mail}</td>
                        <td><button class="btn btn-danger" onclick="deleteTicket(${index})">Delete</button></td>
                    </tr>`;
    });
    printOut += `</tbody></table>`;
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

document.addEventListener('DOMContentLoaded', function() {
    // Optionally clear form fields or setup any initial UI state
});
