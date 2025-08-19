package com.example.TaskManagement.TasksPackage;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@RestController
public class TaskController {
   private TaskService taskService;

   public TaskController(TaskService taskService) {
      this.taskService = taskService;
   }
   @GetMapping(path = "/basicauth")
   public String basicAuth(){
      return "Success";
   }

   @GetMapping("/users/{username}/todos")
   public List<Task> retrieveTasks(@PathVariable String username){
      return taskService.findByUsername(username);
   }
   @GetMapping("users/{username}/todos/{id}")
   public Task retrieveTask (@PathVariable String username,@PathVariable int id){
      return taskService.findById(id);
   }
   @PutMapping("users/{username}/todos/{id}")
   public Task updateTask(@PathVariable String username,@PathVariable int id,@RequestBody Task task){
      taskService.updateTodo(task);
      return task;
   }
   @PostMapping("users/{username}/todos")
   public Task createTask(@PathVariable String username,@RequestBody Task task){
     taskService.addTodo(username,task.getDescription(),task.getTargetDate(),task.getIsDone());
      return task;
   }

   @DeleteMapping("users/{username}/todos/{id}")
   public ResponseEntity<Void> deleteTodo(@PathVariable String username ,@PathVariable int id){
      taskService.deleteTodo(id);
      return ResponseEntity.noContent().build();

   }

}
