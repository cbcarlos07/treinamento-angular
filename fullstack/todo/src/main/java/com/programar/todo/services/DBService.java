package com.programar.todo.services;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.programar.todo.domain.Todo;
import com.programar.todo.repositories.TodoRepository;

@Service
public class DBService {

	@Autowired
	private TodoRepository todoRepository;

	public void instaciaBaseDeDados() {

		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");

		Todo t1 = new Todo(null, "Estudar", "Estudar Spring Boot 2 e Angular 12",
				LocalDateTime.parse("25/03/2022 17:53", formatter), false);
		Todo t2 = new Todo(null, "Estudar", "Ler livro de desenvolvimento pessoal",
				LocalDateTime.parse("25/04/2023 17:53", formatter), true);
		Todo t3 = new Todo(null, "Exercicios", "Praticar exercicios fisicos",
				LocalDateTime.parse("25/12/2021 17:53", formatter), false);
		Todo t4 = new Todo(null, "Meditar", "Meditar durante 30 minutos pela manha",
				LocalDateTime.parse("25/03/2025 17:53", formatter), true);

		todoRepository.saveAll(Arrays.asList(t1, t2, t3, t4));
	}

}
