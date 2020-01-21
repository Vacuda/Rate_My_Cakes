import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

    createrating:any;
    errors:any;
    onecake:any;
    @Input() cake_id:any;

    constructor(private _httpService: TaskService) { }

    ngOnInit() {
        this.createrating = {
            stars: "",
            comment: ""
        }
        this.getOneCake();
    }

    getOneCake(){
        this.errors = null;
        let observable = this._httpService.getOneCake(this.cake_id)
        observable.subscribe(data => {
            this.onecake = data['results'];

        });
    }

    createRating(){
        this.errors = null;
        let observable = this._httpService.createRating(this.createrating, this.cake_id)
        observable.subscribe(data => {
            if(data["results"]){
                this.createrating = {
                    stars: "",
                    comment: ""
                }
                console.log("created rating")
                // let observable = this._httpService.updateCake(data["results"], id)
                // observable.subscribe(data => {
                //     if(data["results"]){
                //         this.getOneCake(id);
                //         this.createrating = {
                //             stars: "",
                //             comment: ""
                //         }
                //     }
                //     else if(data["errors"]){
                //         this.errors = [];
                //         for(let item in data["errors"]){
                //             this.errors.push(data["errors"][item]);
                //         }
                //     }
                // })
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
