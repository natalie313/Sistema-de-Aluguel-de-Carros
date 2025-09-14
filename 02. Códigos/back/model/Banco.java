package model;

public class Banco {
    private int id;
    private String nome;

    public Banco (int id, String nome){
        this.id = id;
        this.nome = nome;
    }

    public int getId (){
        return this.id;
    }

    public String getNome(){
        return this.nome;
    }

    public void concederCredito(){}
}
