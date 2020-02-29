package it.unica.cs.pawm.unitodo.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import it.unica.cs.pawm.unitodo.model.Todo;


public interface TodoRepository extends JpaRepository <Todo, Long> {

}

