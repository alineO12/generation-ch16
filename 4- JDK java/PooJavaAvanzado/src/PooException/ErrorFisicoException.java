package PooException;

public class ErrorFisicoException extends Exception {
    public ErrorFisicoException(Exception ex){
        super("\t\t\t <-- Ocurrio un Error Fisico -->", ex);


    }
}
