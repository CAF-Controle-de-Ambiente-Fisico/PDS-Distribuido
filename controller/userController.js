// const express = require('express');
import express from 'express';
import User from   '../models/User'; 
const app = express(); 

//creates a new user 
// http://127.0.0.1:3000/user
exports.createUser = (req, res, next) => {
    const {username, password, email, cpf} = req.body; 
    const user = User.create({username, password, email, cpf});

    return res.json(user);
};

//update user
// http://127.0.0.1:3000/update-user
exports.updateUser = (req, res, next) => {
    
};

//delete user
// http://127.0.0.1:3000/delete-user
exports.deleteUser = (req, res, next) => {
    
};

//get one user 
// http://127.0.0.1:3000/delete-user
exports.getUser = (req, res, next) => {
    
};

// get all users
// http://127.0.0.1:3000/user
exports.getUsers = (req, res, next) => {
    
};