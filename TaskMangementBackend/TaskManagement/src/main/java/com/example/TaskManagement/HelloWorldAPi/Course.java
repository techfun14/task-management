package com.example.TaskManagement.HelloWorldAPi;

public class Course {
    private long id;
    private String description;
    private String username;

    public Course(long id, String description, String username) {
        this.id = id;
        this.description = description;
        this.username = username;
    }

    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public String toString() {
        return "Course{" +
                "id=" + id +
                ", description='" + description + '\'' +
                ", username='" + username + '\'' +
                '}';
    }
}
