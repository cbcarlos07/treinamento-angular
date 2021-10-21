package com.programar.todo.services;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.programar.todo.domain.Todo;
import com.programar.todo.repositories.TodoRepository;

@Service
public class DBService {

	@Autowired
	private TodoRepository todoRepository;

	public void instaciaBaseDeDados() throws ParseException {

		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

		Todo t1 = new Todo(null, "Estudar", "Estudar Spring Boot 2 e Angular 12",
				sdf.parse("25/03/2022"), false);
		Todo t2 = new Todo(null, "Estudar", "Ler livro de desenvolvimento pessoal",
				sdf.parse("25/04/2023"), true);
		Todo t3 = new Todo(null, "Exercicios", "Praticar exercicios fisicos",
				sdf.parse("25/12/2021"), false);
		Todo t4 = new Todo(null, "Meditar", "Meditar durante 30 minutos pela manha",
				sdf.parse("25/03/2025"), true);

		todoRepository.saveAll(Arrays.asList(t1, t2, t3, t4));
	}

}
