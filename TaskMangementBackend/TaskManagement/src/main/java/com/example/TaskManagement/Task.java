package com.example.TaskManagement;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Size;

import java.time.LocalDate;

@Entity
public class Task {

    protected Task() {
        // JPA needs a default constructor
    }

    public Task(Integer id, String username, String description, LocalDate targetDate, boolean done) {
        super();
        this.id = id;
        this.userName = username;
        this.description = description;
        this.targetDate = targetDate;
        this.done = done;
    }

    @Id
    @GeneratedValue
    private Integer id;

    private String userName;


    @Size(min = 3, message = "Enter at least 10 characters")
    private String description;

    private LocalDate targetDate;

    private boolean done;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return userName;
    }

    public void setUsername(String username) {
        this.userName = username;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getTargetDate() {
        return targetDate;
    }

    public void setTargetDate(LocalDate targetDate) {
        this.targetDate = targetDate;
    }

    public boolean getIsDone() {
        return done;
    }

    public void setDone(boolean done) {
        this.done = done;
    }

    @Override
    public String toString() {
        return "Task [id=" + id + ", username=" + userName + ", description=" + description +
                ", targetDate=" + targetDate + ", done=" + done + "]";
    }
}
