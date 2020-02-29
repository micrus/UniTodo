package it.unica.cs.pawm.unitodo.exceptions;


public class WrongPermissionException extends RuntimeException {


	private static final long serialVersionUID = 3L;

	public WrongPermissionException(String message) {
		super(message);
	}
}
