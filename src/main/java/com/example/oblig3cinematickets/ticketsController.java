package com.example.oblig3cinematickets;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ticketsController {

    @Autowired
    private ticketRepo rep;

    @PostMapping("/save")
    public void saveTicket(tickets ticket){
        rep.saveTickets(ticket);
    }

    @GetMapping("/showAllTickets")
    public List<tickets> showTicket(){
        return rep.getAllTickets();
    }

    @GetMapping("/deleteAllTickets")
    public void deleteAllTickets(){
        rep.deleteAllTickets();
    }

}
