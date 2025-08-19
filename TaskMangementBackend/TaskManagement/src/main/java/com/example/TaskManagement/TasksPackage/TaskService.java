package com.example.TaskManagement.TasksPackage;

import jakarta.validation.Valid;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

@Service
public class TaskService {

    private static List<Task> todos =new ArrayList<Task>();
    private static int todosCount=0;

    static {
        todos.add(new Task(todosCount++, "utkarsh","Learn Angular",
                LocalDate.now().plusYears(1), false ));
        todos.add(new Task(todosCount++, "utkarsh","learn Fast APi",
                LocalDate.now().plusYears(2), false ));
        todos.add(new Task(todosCount++, "utkarsh","Learn Spring data Jp",
                LocalDate.now().plusYears(3), false ));
        todos.add(new Task(todosCount++,"utkarsh","learn CSS1",LocalDate.now().plusYears(2),false));
    }
    public List<Task> findByUsername(String username){
        Predicate<Task> predicate= todo -> todo.getUsername().equalsIgnoreCase(username);
        return todos.stream().filter(predicate).toList();
    }
    public void addTodo(String username,String description,LocalDate targetDate,boolean isDone){
        Task newTodo= new Task(todosCount++,username,description,targetDate,false);
        todos.add(newTodo);
    }
    public void deleteTodo(int id){
        Predicate<Task> predicate=todo -> todo.getId()==id;
        todos.removeIf(predicate);
    }
    public void updateTodo(@Valid Task todo){
        for (int i = 0; i < todos.size(); i++) {
            if (todos.get(i).getId() == todo.getId()) {
                todos.set(i, todo); // ✅ replaces existing
                return;
            }
        }
    }

    public Task findById(int id) {
        Predicate<?super Task> predicate=todo -> todo.getId()==id;
        Task todo=todos.stream().filter(predicate).findFirst().get();
        return todo;
    }
}
