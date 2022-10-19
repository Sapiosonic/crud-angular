package com.entra21.crudspring.repository;

import com.entra21.crudspring.model.Curso;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CursosRepository extends JpaRepository<Curso, Long> {
    
}
