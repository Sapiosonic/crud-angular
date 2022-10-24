package com.entra21.crudspring.controller;

import java.util.List;

import com.entra21.crudspring.model.Curso;
import com.entra21.crudspring.repository.CursosRepository;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController 
@RequestMapping("/api/cursos")
@AllArgsConstructor
public class CursosController {
    
    private CursosRepository cursosRepository;

    @GetMapping
    public @ResponseBody List<Curso> list(){
        return cursosRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Curso> findById(@PathVariable Long id) {
        return cursosRepository.findById(id)
            .map(record -> ResponseEntity.ok(record))
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Curso create(@RequestBody Curso curso){
        //System.out.println(curso.getNome());
        return cursosRepository.save(curso);
        //return ResponseEntity.status(HttpStatus.CREATED).body(cursosRepository.save(curso));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Curso> update(@PathVariable Long id,
            @RequestBody Curso curso) {
        return cursosRepository.findById(id)
                .map(recordFound -> {
                    recordFound.setNome(curso.getNome());
                    recordFound.setCategoria(curso.getCategoria());
                    Curso updated = cursosRepository.save(recordFound);
                    return ResponseEntity.ok().body(updated);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        return cursosRepository.findById(id)
                .map(recordFound -> {
                    cursosRepository.deleteById(id);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }

}