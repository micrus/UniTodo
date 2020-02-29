package it.unica.cs.pawm.unitodo.service;

import java.util.Optional;
import java.util.UUID;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.unica.cs.pawm.unitodo.exceptions.TodoNotFoundException;
import it.unica.cs.pawm.unitodo.exceptions.UserNotFoundException;
import it.unica.cs.pawm.unitodo.exceptions.WrongPermissionException;
import it.unica.cs.pawm.unitodo.model.Todo;
import it.unica.cs.pawm.unitodo.model.User;
import it.unica.cs.pawm.unitodo.repository.TodoRepository;
import it.unica.cs.pawm.unitodo.repository.UserRepository;


@Service
public class TodoService {
	@Autowired
	private TodoRepository todoRepository;
	@Autowired
	private UserRepository userRepository;
	
	public Todo getUserTodo(String userUuid, long todoId) {
		Optional<Todo> todo = todoRepository.findById(todoId);
		Optional<User> user = userRepository.findById(userUuid);
		
		if(todo.isEmpty()) throw new TodoNotFoundException("Todo not found");
		if(user.isEmpty()) throw new UserNotFoundException("User not found");
		if(todo.get().getUser().getId()!=user.get().getId()) throw new WrongPermissionException("You do not have the right to visualize this todo");
		
		return todo.get();
	}

	public Todo editTodo(@Valid Todo todo, String userUuid, long todoId) {
		Optional<Todo> oldTodo = todoRepository.findById(todoId);
		Optional<User> user = userRepository.findById(userUuid);
		
		if(oldTodo.isEmpty()) throw new TodoNotFoundException("Todo not found");
		if(user.isEmpty()) throw new UserNotFoundException("User not found");
		if(oldTodo.get().getUser().getId()!=user.get().getId()) throw new WrongPermissionException("You do not have the right to visualize this todo");
		
		oldTodo.get().setDescription(todo.getDescription());

		todoRepository.save(oldTodo.get());
		return oldTodo.get();
		
	}
	
}