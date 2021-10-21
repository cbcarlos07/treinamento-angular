package com.programar.todo.resources;

import com.programar.todo.domain.Todo;
import com.programar.todo.services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/todos")
public class TodoResources {
    @Autowired
    private TodoService service;

    @GetMapping(value = "/{id}")
    public ResponseEntity<Todo> findById(@PathVariable Integer id){
        Todo obj = service.findById(id);
        return  ResponseEntity.ok().body(obj);
    }

    @GetMapping(value = "/open")
    public ResponseEntity<List<Todo>> listOpen(){
        List<Todo> list = service.findAllOpen();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/close")
    public ResponseEntity<List<Todo>> listClose(){
        List<Todo> list = service.findAllClose();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping
    public ResponseEntity<List<Todo>> listAll(){
        List<Todo> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    @PostMapping
    public ResponseEntity<Todo> create(@RequestBody Todo obj){
        obj = service.create(obj);
        URI url = ServletUriComponentsBuilder.fromCurrentRequest().path("/").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(url).build();
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity remover(@PathVariable Integer id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
