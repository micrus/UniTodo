package it.unica.cs.pawm.unitodo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import it.unica.cs.pawm.unitodo.model.User;
import it.unica.cs.pawm.unitodo.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class UserController {
@Autowired
private UserService userService;

@PostMapping("/user")
public User createUser(@RequestBody User user) {
	
	return userService.addUser(user);
}

@PutMapping("/user/{userUid}")
public User editUser(@RequestBody User user, @PathVariable String userUid) {
	return userService.editUser(user, userUid);
}




}
