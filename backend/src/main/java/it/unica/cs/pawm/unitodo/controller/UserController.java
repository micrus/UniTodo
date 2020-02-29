package it.unica.cs.pawm.unitodo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import it.unica.cs.pawm.unitodo.model.User;
import it.unica.cs.pawm.unitodo.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@Controller
public class UserController {
@Autowired
private UserService userService;

@PostMapping
public User createUser(@RequestBody User user) {
	
	return userService.addUser(user);
}




}
