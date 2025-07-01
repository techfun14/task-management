package com.example.TaskManagement;


public class User {
    private String fullName;
    private String userName;
    private String emailAddress;
    private long contactNumber;
    private String password;

    public User(String fullName, String userName, String emailAddress, long contactNumber, String password) {
        this.fullName = fullName;
        this.userName = userName;
        this.emailAddress = emailAddress;
        this.contactNumber = contactNumber;
        this.password = password;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public long getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(long contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "fullName='" + fullName + '\'' +
                ", userName='" + userName + '\'' +
                ", emailAddress='" + emailAddress + '\'' +
                ", contactNumber=" + contactNumber +
                ", password='" + password + '\'' +
                '}';
    }
}
