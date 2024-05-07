import express from 'express';
import UserService from '../service/UserService';
import UserRepository from '../repository/UserRepository';

const userService = new UserService(new UserRepository());

export const createUser = (req: express.Request, res: express.Response) => {
    const user = req.body;
    const insertedUser = userService.createUser(user);
    res.json({message : "User Saved Successfully", data: insertedUser});
}

export const getUsers = (req: express.Request, res: express.Response) => {
    const userList = userService.getUsers();
    if(userList.length > 0) {
        res.json({message : "Users Fetched Successfully", data: userList});
    } else {
        res.json({message : "Users Not Found"});
    }
}

export const updateUser = (req: express.Request, res: express.Response) => {
    const userId = req.params["id"];
    const updatedUser = userService.updateUser(Number(userId), req.body);
    if(updatedUser === undefined || updatedUser === null) {
        res.json({message : "User Not Found"});
    } else {
        res.json({message : "User Updated Successfully", data: updatedUser});
    }   
}

export const getUser = (req: express.Request, res: express.Response) => {
    const userId = req.params["id"];
    const user = userService.getUser(Number(userId));
    if(user === undefined || user === null) {
        res.json({message : "User Not Found"});
    } else {
        res.json({message : "User Fetched Successfully", data: user});
    }
}

export const deleteUser = (req: express.Request, res: express.Response) => {
    const userId = req.params["id"];
    const deletedUser = userService.deleteUser(Number(userId));
    if(deletedUser === undefined || deletedUser === null) {
        res.json({message : "User Not Found"});
    } else {
        res.json({message : "User Deleted Successfully", data: deletedUser});
    }
}