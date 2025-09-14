package model;

import java.sql.Date;

public class Cliente {
    private int id;
    private Date data; 
    private String status;

    public Cliente (int id, Date data, String status){
        this.id = id;
        this.data = data;
        this.status = status;
    }

    public int getId() {
        return this.id;
    }

    public Date getData() {
        return this.data;
    }

    public String getStatus(){
        return this.status;
    }

    public void cadastrar(){}
    public void login(){}
    
}
