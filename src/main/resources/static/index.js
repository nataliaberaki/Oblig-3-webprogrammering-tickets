let tickets = [];
function buyTickets() {
    let movies = document.getElementById("movies").value;
    let ticketAmount = document.getElementById("ticketAmount").value;
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let phonenumber = document.getElementById("phonenumber").value;
    let mail = document.getElementById("mail").value;

    let isValid = true;

    if (ticketAmount.trim() === "" || !Number(ticketAmount)) {
        document.getElementById("ticketAmountError").textContent = "Write in the amount";
        document.getElementById("ticketAmountError").style.color = "red";
        isValid = false;
    }

    if (firstname.trim() === "" || /\d/.test(firstname)) {
        document.getElementById("firstnameError").textContent = "Write in your firstname";
        document.getElementById("firstnameError").style.color = "red";
        isValid = false;
    }

    if (lastname.trim() === "" || /\d/.test(lastname)) {
        document.getElementById("lastnameError").textContent = "Write in your lastname";
        document.getElementById("lastnameError").style.color = "red";
        isValid = false;
    }

    if (phonenumber.trim() === "" || !Number(phonenumber) || phonenumber.length !== 8) {
        document.getElementById("phonenumberError").textContent = "Write your telephone number";
        document.getElementById("phonenumberError").style.color = "red";
        isValid = false;
    }

    if (mail.trim() === "" || !mail.includes("@") || !mail.includes(".")) {
        document.getElementById("mailError").textContent = "Write your mail";
        document.getElementById("mailError").style.color = "red";
        isValid = false;
    }

    if (!isValid) {
        alert("Please correct the highlighted errors before submitting.");
        return; // Stop function execution if there are validation errors
    }

    // If validation passed, create the ticket object and add to the array
    const ticket = {
        movies: movies,
        ticketAmount: ticketAmount,
        firstname: firstname,
        lastname: lastname,
        phonenumber: phonenumber,
        mail: mail
    };

    tickets.push(ticket);

    console.log("Ticket added:", ticket);
    out();
    console.log("Ticket Displayed:");

    // Clear input fields after successful submission
    document.getElementById("movies").value = "";
    document.getElementById("ticketAmount").value = "";
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("phonenumber").value = "";
    document.getElementById("mail").value = "";

    // Clear error messages
    document.getElementById("ticketAmountError").textContent = "";
    document.getElementById("firstnameError").textContent = "";
    document.getElementById("lastnameError").textContent = "";
    document.getElementById("phonenumberError").textContent = "";
    document.getElementById("mailError").textContent = "";
}
function out() {
    console.log("Rendering tickets...");
    let printOut = "<table><tr><th>Movie</th><th>Amount of Tickets</th><th>Firstname</th><th>Lastname</th><th>Phone Number</th><th>Mail</th></tr>";
    for (let i = 0; i < tickets.length; i++) {
        printOut += "<tr>";
        printOut += "<td>" + tickets[i].movies + "</td>";
        printOut += "<td>" + tickets[i].ticketAmount + "</td>";
        printOut += "<td>" + tickets[i].firstname + "</td>";
        printOut += "<td>" + tickets[i].lastname + "</td>";
        printOut += "<td>" + tickets[i].phonenumber + "</td>";
        printOut += "<td>" + tickets[i].mail + "</td>";
        printOut += "</tr>";
    }
    printOut += "</table>";
    document.getElementById("boughtTickets").innerHTML = printOut;
}

function deleteAllTickets(){
        tickets = [];
       console.log(tickets);
}