

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    constructor(private _http: HttpClient) {}

    getCakes(){
        return this._http.get('/api/cakes');
    }

    createCake(data){
        return this._http.post('/api/cake/create', data);
    }

    getOneCake(id){
        return this._http.get(`/api/cake/${id}`);
    }

    updateCake(data, id){
        console.log("got here") 
        console.log(id)
        console.log(data)
        return this._http.put(`/api/cake/update/${id}`, data);
    }

    createRating(data, id){
        // return this._http.get('/api/cakes');
        return this._http.post(`/api/rating/create/${id}`, data);
        // return this._http.get(`/api/ratingrating`);
    }


    // getTasks(){
    //     return this._http.get('/api/tasks');
    // }

    // getOneTask(id){
    //     return this._http.get(`/api/task/${id}`);
    // }

    // createTask(data){
    //     return this._http.post('/api/task/create', data);
    // }

    // deleteTask(id){
    //     return this._http.delete(`/api/task/destroy/${id}`);
    // }

    // markComplete(id){
    //     return this._http.get(`/api/task/complete/${id}`);
    // }

    // updateTask(id, data){
    //     return this._http.put(`/api/task/update/${id}`, data);
    // }




}