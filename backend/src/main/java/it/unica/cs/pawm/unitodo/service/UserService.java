package it.unica.cs.pawm.unitodo.service;

import java.util.Optional;
import java.util.UUID;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.unica.cs.pawm.unitodo.exceptions.UserNotFoundException;
import it.unica.cs.pawm.unitodo.model.Todo;
import it.unica.cs.pawm.unitodo.model.User;
import it.unica.cs.pawm.unitodo.repository.UserRepository;


@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;
	
	public User getUser(String userUuid) {
		Optional<User> userToReturn = userRepository.findById(userUuid);
		if(userToReturn.isEmpty()) throw new UserNotFoundException("Utente non trovato nel sistema");
		return userToReturn.get();
	}

	public User addUser(@Valid User user) {
		userRepository.save(user);
		return user;
	}

	public User editUser(@Valid User newUserData, String userUid) {
		
		Optional<User> oldUser = userRepository.findById(userUid);
		if(oldUser.isEmpty()) {
			throw new UserNotFoundException("Cannot find the user");
		}
		User user = oldUser.get();
		user.setFirstName(newUserData.getFirstName());
		user.setLastName(newUserData.getLastName());
		userRepository.save(user);
		return user;
	}
	
	
	public User addTodo(@Valid Todo todo, String userUuid) {
		Optional<User> userToReturn = userRepository.findById(userUuid);
		if(userToReturn.isEmpty()) throw new UserNotFoundException("Utente non trovato nel sistema");
		User user = userToReturn.get();
		user.getTodos().add(todo);
		userRepository.save(user);
		return user;
	}
}
