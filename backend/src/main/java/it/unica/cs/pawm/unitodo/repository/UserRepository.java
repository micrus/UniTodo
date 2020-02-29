package it.unica.cs.pawm.unitodo.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import it.unica.cs.pawm.unitodo.model.User;


public interface UserRepository extends JpaRepository <User, UUID>{

}
