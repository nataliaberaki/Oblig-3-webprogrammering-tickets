package com.example.oblig3cinematickets;

public class tickets {

    private Integer id;
    private String firstname;
    private String lastname;
    private String phonenumber;
    private String mail;
    private String movie;
    private Integer amount;



    public tickets(Integer id, String firstname, String lastname, String phonenumber, String mail, String movie, Integer amount){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phonenumber = phonenumber;
        this.mail = mail;
        this.movie = movie;
        this.amount = amount;
    }

    public void setId(Integer id){
        this.id = id;
    }
    public Integer getId(){
        return id;
    }

    public void setFirstname(String firstname){
        this.firstname = firstname;
    }

    public String getFirstname(){
        return firstname;
    }

    public void setLastname(String lastname){
        this.lastname = lastname;
    }

    public String getLastname(){
        return lastname;
    }

    public void setPhonenumber(String phonenumber){
        this.phonenumber = phonenumber;
    }

    public String getPhonenumber(){
        return phonenumber;
    }
    public void setMail(String mail){
        this.mail = mail;
    }

    public String getMail(){
        return mail;
    }

    public void setMovie(String movie){
        this.movie = movie;
    }

    public String getMovie(){
        return movie;
    }
    public void setAmount(Integer amount){
        this.amount = amount;
    }

    public Integer getAmount(){
        return amount;
    }
}
