package com.entra21.crudspring.controller;

import java.util.List;

import com.entra21.crudspring.model.Curso;
import com.entra21.crudspring.repository.CursosRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController 
@RequestMapping("/api/cursos")
@AllArgsConstructor
public class CursosController {
    
    private CursosRepository cursosRepository;

    @GetMapping
    public List<Curso> list(){
        return cursosRepository.findAll();
    }


}
