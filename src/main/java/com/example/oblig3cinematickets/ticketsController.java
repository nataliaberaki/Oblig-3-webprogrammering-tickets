package com.example.oblig3cinematickets;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ticketsController {

    @Autowired
    private ticketRepo rep;

    @PostMapping("/save")
    public void saveTicket(Ticket ticket){
        rep.saveTickets(ticket);
    }

    @GetMapping("/showAllTickets")
    public List<Ticket> showTicket(){
        return rep.getAllTickets();
    }

    @GetMapping("/deleteAllTickets")
    public void deleteAllTickets(){
        rep.deleteAllTickets();
    }

}
