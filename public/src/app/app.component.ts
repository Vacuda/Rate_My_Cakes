import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    cakes:any;
    onecake:any;
    createcake:any;
    createrating:any;

    average:any = "---"
    errors:any;

    constructor(private _httpService: TaskService){}

    ngOnInit(){
        this.createcake = {
            baker: "",
            url: ""
        }
        this.createrating = {
            stars: "",
            comment: ""
        }
        this.getCakes();
    }

    createCake(){
        this.errors = null;
        let observable = this._httpService.createCake(this.createcake)
        observable.subscribe(data => {
            if(data["results"]){
                this.getCakes();
                this.createcake = {
                    title: "",
                    description: ""
                }
            }
            else if(data["errors"]){
                this.errors = [];
                for(let item in data["errors"]){
                    this.errors.push(data["errors"][item]);
                }
            }
        });       
    }

    getCakes(){
        let observable = this._httpService.getCakes()
        observable.subscribe(data => {
            this.cakes = data['results'];
            this.onecake = null;
        });
    }

    getOneCake(id:number){
        this.errors = null;
        let observable = this._httpService.getOneCake(id)
        observable.subscribe(data => {
            var cake = data['results'];
            this.onecake = cake;

            if(cake.ratings.length != 0){
                //get average
                var ratingsum = 0;
                console.log(cake.ratings)
                for(var i=0; i<cake.ratings.length;i++){
                    ratingsum += cake.ratings[i].stars;
                }
                console.log(ratingsum)
                this.average = ratingsum / cake.ratings.length;
            }
            else{
                this.average = "---"
            }

        });
    }

    ///

    createRating(id){
        this.errors = null;
        let observable = this._httpService.createRating(this.createrating, id)
        observable.subscribe(data => {
            if(data["results"]){
                
                let observable = this._httpService.updateCake(data["results"], id)
                observable.subscribe(data => {
                    if(data["results"]){
                        this.getOneCake(id);
                        this.createrating = {
                            stars: "",
                            comment: ""
                        }
                    }
                    else if(data["errors"]){
                        this.errors = [];
                        for(let item in data["errors"]){
                            this.errors.push(data["errors"][item]);
                        }
                    }
                })
            }
            else if(data["errors"]){
                this.errors = [];
                for(let item in data["errors"]){
                    this.errors.push(data["errors"][item]);
                }
            }
        });       
    }




}



    // getOneCake(id:number){
    //     this.errors = null;
    //     let observable = this._httpService.getOneTask(id)
    //     observable.subscribe(data => {
    //         this.tasks = null;
    //         this.onetask = data['results'];
    //     });
    // }

    // createCake(){
    //     this.errors = null;
    //     let observable = this._httpService.createCake(this.createcake)
    //     observable.subscribe(data => {
    //         if(data["results"]){
    //             this.getCakes();
    //             this.createcake = {
    //                 title: "",
    //                 description: ""
    //             }
    //         }
    //         else if(data["errors"]){
    //             this.errors = [];
    //             for(let item in data["errors"]){
    //                 this.errors.push(data["errors"][item]);
    //             }
    //         }
    //     });       
    // }

    // deleteTask(id:number){
    //     //resets
    //     this.errors = null;
    //     this.updatetask = null;
    //     this.createtask = {
    //         title: "",
    //         description: ""
    //     }

    //     let observable = this._httpService.deleteTask(id)
    //     observable.subscribe(data => {
    //         this.getTasks();
    //         this.onetask = null;
    //     });
    // }

    // markComplete(id:number){
    //     //resets
    //     this.errors = null;

    //     let observable = this._httpService.markComplete(id)
    //     observable.subscribe(data => {
    //         this.getOneTask(id);
    //     });
    // }

    // editTask(){
    //     //resets
    //     this.createtask = null;
    //     this.errors = null;

    //     this.updatetask = {
    //         title: this.onetask.title,
    //         description: this.onetask.description
    //     }

    // }

    // updateTask(id:number){
    //     console.log(id)
    //     let observable = this._httpService.updateTask(id, this.updatetask)
    //     observable.subscribe(data => {
    //         if(data["results"]){
    //             this.createtask = {
    //             title: "",
    //             description: ""
    //             }
    //             this.getOneTask(id);
    //             this.updatetask = null;
    //         }
    //         else if(data["errors"]){
    //             this.errors = [];
    //             for(let item in data["errors"]){
    //                 this.errors.push(data["errors"][item]);
    //             }
    //         }
            
    //     });
    // }

