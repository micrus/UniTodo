package it.unica.cs.pawm.unitodo.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="Todo")
public class Todo {
@Id
long id;
String description;

@JsonIgnore
@ManyToOne(fetch=FetchType.LAZY)
User user;


public Todo(long id, String description) {
	super();
	this.id = id;
	this.description = description;
}
public Todo() {
	super();
}

public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}
public User getUser() {
	return user;
}
public void setUser(User user) {
	this.user = user;
}

}
