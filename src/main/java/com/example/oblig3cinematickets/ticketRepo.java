package com.example.oblig3cinematickets;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ticketRepo {

    @Autowired
    private JdbcTemplate db;

    public void saveTickets (Ticket ticket){
        String sql ="INSERT INTO Ticket (movie, amount, firstname, lastname, mail, phonenumber) VALUES(?,?,?,?,?,?)";
        db.update(sql, tickets.getMovie(),
                tickets.getAmount(),
                tickets.getFirstname(),
                tickets.getLastname(),
                tickets.getMail(),
                tickets.getPhonenumber());

    }

    public List<Ticket> getAllTickets(){
        String sql ="SELECT * FROM Ticket";
        List<tickets> allTickets =  db.query(sql, new BeanPropartyRow(Ticket.class));
        return allTickets;
    }

    public void deleteAllTickets(){
        String sql = "DELETE FROM Billett";
        db.update(spl);
    }
}
