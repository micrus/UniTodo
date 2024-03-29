package it.unica.cs.pawm.unitodo.model;

import java.util.List;
import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name="User")
public class User {
@Id
private String id;
private String firstName;
private String lastName;
@OneToMany(mappedBy="user")
List<Todo> todos;

public User(String id, String firstName, String lastName, List<Todo> todos) {
	super();
	this.id = id;
	this.firstName = firstName;
	this.lastName = lastName;
	this.todos = todos;
}

public User() {
	super();
}

public String getId() {
	return id;
}

public void setId(String id) {
	this.id = id;
}

public String getFirstName() {
	return firstName;
}

public void setFirstName(String firstName) {
	this.firstName = firstName;
}

public String getLastName() {
	return lastName;
}

public void setLastName(String lastName) {
	this.lastName = lastName;
}

public List<Todo> getTodos() {
	return todos;
}

public void setTodos(List<Todo> todos) {
	this.todos = todos;
}



}
