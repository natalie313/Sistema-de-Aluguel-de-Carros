package model;

public class Rendimento {
    private double valor;
    private String fonte; 

    public Rendimento (double valor, String fonte){
        this.valor = valor;
        this.fonte = fonte;
    }

    public double getValor() {
        return valor;
    }

    public String getFonte() {
        return fonte;
    }
}
