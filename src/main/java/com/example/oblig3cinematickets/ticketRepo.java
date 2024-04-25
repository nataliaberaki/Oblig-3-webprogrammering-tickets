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

    public void saveTickets(tickets ticket) {
        String sql = "INSERT INTO Ticket (movie, amount, firstname, lastname, mail, phonenumber) VALUES(?,?,?,?,?,?)";
        db.update(sql, ticket.getMovie(), ticket.getAmount(), ticket.getFirstname(), ticket.getLastname(), ticket.getMail(), ticket.getPhonenumber());
    }

    public List<tickets> getAllTickets(){
        String sql ="SELECT * FROM Ticket";
        List<tickets> allTickets =  db.query(sql, new BeanPropertyRowMapper<>(tickets.class));
        return allTickets;
    }

    public void deleteAllTickets(){
        String sql = "DELETE FROM Ticket";
        db.update(sql);
    }
}
