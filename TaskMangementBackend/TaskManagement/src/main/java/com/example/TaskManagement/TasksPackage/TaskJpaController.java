package com.example.TaskManagement.TasksPackage;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TaskJpaController {
    private final TaskService taskService;
    private  final TaskRepository taskRepository;

    public TaskJpaController(TaskService taskService, TaskRepository todoRepository1) {
        this.taskService = taskService;
        this.taskRepository =todoRepository1;
    }
    @GetMapping(path = "/basicauth")
    public String basicAuth(){
        return "Success";
    }

    @GetMapping("/users/{username}/tasks")
    public List<Task> retrieveTasks(@PathVariable("username") String userName){
//        return taskService.findByUsername(username);
        return  taskRepository.findByUserName(userName);
    }
    @GetMapping("users/{username}/tasks/{id}")
    public Task retrieveTask (@PathVariable("username") String username,@PathVariable int id){
//        return taskService.findById(id);
        return taskRepository.findById(id).get();
    }
    @PutMapping("users/{username}/tasks/{id}")
    public Task updateTask(@PathVariable("username") String username,@PathVariable int id,@RequestBody Task task){
//        taskService.updateTodo(task);
        taskRepository.save(task);
        return task;
    }
    @PostMapping("users/{username}/tasks")
    public Task createTask(@PathVariable("username") String userName,@RequestBody Task task){
        task.setUserName(userName);
        task.setId(null);
        return taskRepository.save(task);
//        taskService.addTodo(username,task.getDescription(),task.getTargetDate(),task.getIsDone());
//        return task;
    }

    @DeleteMapping("users/{username}/tasks/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable("username") String username , @PathVariable int id){
//        taskService.deleteTodo(id);
        taskRepository.deleteById(id);
        return ResponseEntity.noContent().build();

    }
}
