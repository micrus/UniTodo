package it.unica.cs.pawm.unitodo.controller;

import java.util.List;
import java.util.UUID;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import it.unica.cs.pawm.unitodo.model.Todo;
import it.unica.cs.pawm.unitodo.model.User;
import it.unica.cs.pawm.unitodo.service.TodoService;
import it.unica.cs.pawm.unitodo.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {
	@Autowired
	private UserService userService;

	@Autowired
	private TodoService todoService;
	
	@GetMapping("/user/{userUuid}/todo")
	public List<Todo> getAllUserTodos(@PathVariable String userUuid){
		User userToGetTodo = userService.getUser(userUuid);
		return userToGetTodo.getTodos();
	}
	
	@PostMapping("/user/{userUuid}/todo")
	public User addTodo(@Valid @RequestBody Todo todo, @PathVariable String userUuid){
		User userToAddTodo = userService.addTodo(todo,userUuid);
		return userToAddTodo;
	}
	
	@PutMapping("/user/{userUuid}/todo/{todoId}")
	public Todo editTodo(@Valid @RequestBody Todo todo, @PathVariable String userUuid,@PathVariable long todoId){
		Todo editedTodo = todoService.editTodo(todo,userUuid, todoId);
		return editedTodo;
	}
	
	@GetMapping("/user/{userUuid}/todo/{todoId}")
	public Todo getTodo(@PathVariable String userUuid,@PathVariable long todoId){
		return todoService.getUserTodo(userUuid, todoId);
	}
}
