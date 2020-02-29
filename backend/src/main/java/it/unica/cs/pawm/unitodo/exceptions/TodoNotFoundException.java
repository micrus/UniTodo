package it.unica.cs.pawm.unitodo.exceptions;


public class TodoNotFoundException extends RuntimeException {


	private static final long serialVersionUID = 2L;

	public TodoNotFoundException(String message) {
		super(message);
	}
}
