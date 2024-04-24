let tickets = [];


function buyTickets() {
    let buyTickets = document.getElementById("movies").value;
    let ticketAmount = document.getElementById("ticketAmount").value;
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let phonenumber = document.getElementById("phonenumber").value;
    let mail = document.getElementById("mail").value;

    const ticket1 = {
        movies: buyTickets,
        ticketAmount: ticketAmount,
        firstname: firstname,
        lastname: lastname,
        phonenumber: phonenumber,
        mail: mail
    };

    tickets.push(ticket1);
    out();

    document.getElementById("movies").value = "";
    document.getElementById("ticketAmount").value = "";
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("phonenumber").value = "";
    document.getElementById("mail").value = "";


    document.getElementById("ticketAmountError").textContent = "";
    document.getElementById("firstnameError").textContent = "";
    document.getElementById("lastnameError").textContent = "";
    document.getElementById("phonenumberError").textContent = "";
    document.getElementById("mailError").textContent = "";

    let isValid = true;


    if (ticketAmount.trim() === "" || !Number(ticketAmount))  {
        document.getElementById("ticketAmountError").textContent = "write inn the amount";
        document.getElementById("ticketAmountError").style.color = "red";
        isValid = false;
    }

    if (firstname.trim() === "" || /\d/.test(firstname))  {
        document.getElementById("firstnameError").textContent = "write inn your firstname";
        document.getElementById("firstnameError").style.color = "red";
        isValid = false;
    }


    if (lastname.trim() === "" || /\d/.test(lastname)) {
        document.getElementById("lastnameError").textContent = "write inn your lastname";
        document.getElementById("lastnameError").style.color = "red";
        isValid = false;
    }


    if (phonenumber.trim() === "" || !Number(phonenumber) || phonenumber.length !==8) {
        document.getElementById("phonenumberError").textContent = "Write your telephone number";
        document.getElementById("phonenumberError").style.color = "red";
        isValid = false;
    }


    if (mail.trim() === "" || !mail.includes("@") || !mail.includes(".")) {
        document.getElementById("mailError").textContent = "write your mail";
        document.getElementById("mailError").style.color = "red";
        isValid = false;
    }

    if (!isValid) {

        return;
    }

}

function out(){
    let printOut = "<table><tr><th>Movie</th><th>Amount of tickets</th><th>Firstname</th><th>lastname</th><th>Phone Number</th><th>Mail</th></tr>";
    for(let i = 0; i < tickets.length; i++){
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

function deleteTickets(){
    tickets = [];
    console.log(tickets);
    out();
}

