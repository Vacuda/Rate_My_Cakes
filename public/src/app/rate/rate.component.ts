import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../task.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

    createrating:any;
    errors:any;
    // onecake:any;
    cakeforrating:any;
    @Input() cake_id:any;

    constructor(
        private _httpService: TaskService,
        private appcomponent: AppComponent
        ){}

    ngOnInit() {
        this.createrating = {
            stars: "",
            comment: ""
        }
        this.getRatingCake();
    }

    getRatingCake(){
        this.errors = null;
        let observable = this._httpService.getOneCake(this.cake_id)
        observable.subscribe(data => {
            this.cakeforrating = data['results'];

        });
    }

    changeOneCake(){
        this.appcomponent.getOneCake(this.cake_id);
    }

    createRating(){

        this.errors = null;
        let observable = this._httpService.createRating(this.createrating, this.cake_id)
        observable.subscribe(data => {
            if(data["results"]){
          
                let observable = this._httpService.updateCake(data["results"], this.cake_id)
                observable.subscribe(data => {
                    if(data["results"]){
                        this.appcomponent.getOneCake(this.cake_id);
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
