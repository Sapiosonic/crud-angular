package com.entra21.crudspring;

import com.entra21.crudspring.model.Curso;
import com.entra21.crudspring.repository.CursosRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(CursosRepository cursosRepository){
		return args -> {
			cursosRepository.deleteAll();

			Curso c = new Curso();
			c.setNome("Relações Internacionais");
			c.setCategoria("Humanidades");
			cursosRepository.save(c);
		};
	};
}
