package com.programar.todo;

import com.programar.todo.domain.Todo;
import com.programar.todo.repositories.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;

@SpringBootApplication
public class TodoApplication implements CommandLineRunner {

	@Autowired
	private TodoRepository todoRepository;

	public static void main(String[] args) {
		SpringApplication.run(TodoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		DateTimeFormatter formater = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");
		Todo t1 =  new Todo(null, "Estudar", "Estudar Spring boot 2 e Angular 12.", LocalDateTime.parse("25/03/2022 16:53", formater), false);

		todoRepository.saveAll(Arrays.asList(t1));

	}
}
