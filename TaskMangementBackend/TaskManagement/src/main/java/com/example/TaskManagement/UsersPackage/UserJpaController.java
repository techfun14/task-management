package com.example.TaskManagement.UsersPackage;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserJpaController {
    private UserRepository userRepository;

    public UserJpaController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @PostMapping("/signup")
    public ResponseEntity<?> createUser(@RequestBody User user){
       if(userRepository.existsByUserName(user.getUserName())){
           return ResponseEntity.badRequest().body("UserName Already Exists");

       }
       if(userRepository.existsByEmailAddress(user.getEmailAddress())){
           return ResponseEntity.badRequest().body("Email Already Exists");
       }
       userRepository.save(user);
       return ResponseEntity.ok("User is Created");
    }
    @GetMapping
    public ResponseEntity<?> getAllUsers(){
        return ResponseEntity.ok(userRepository.findAll());
    }

}
