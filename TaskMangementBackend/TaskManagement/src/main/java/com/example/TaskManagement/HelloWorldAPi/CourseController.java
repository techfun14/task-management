package com.example.TaskManagement.HelloWorldAPi;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class CourseController {

    @RequestMapping("/courses")
    public List<Course> retrieveAllCourses(){
        return Arrays.asList(
                new Course(1,"learn Aws","utkarsh"),
                new Course(2,"learn Mockito","utkarsh")
        );
    }
}
