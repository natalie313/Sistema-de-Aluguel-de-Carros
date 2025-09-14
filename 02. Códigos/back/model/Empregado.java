package model;

public class Empregado {
    private String nome;
    private String cargo;

    public Empregado(String nome, String cargo) {
        this.nome = nome;
        this.cargo = cargo;
    }

    public String getNome() {
        return nome;
    }

    public String getCargo() {
        return cargo;
    }
}
