import { Injectable, OnInit } from '@angular/core';
import { Player } from './game';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { error } from 'selenium-webdriver';

@Injectable()
export class GameService{  

  apiRoot = "//localhost:3001"  
  me: Player;

  constructor(private http: Http, private router: Router) {

    // this.login("Otto Vogrincic");

   }

  login(name: string, password: string){
    this.http.post(this.apiRoot + "/game/room/players", { name, password }).subscribe(
      data => {
        this.me = data.json();
        this.http.get(this.apiRoot + "/game/quotes").subscribe( data =>{
          this.me.quotes = data.json();
        });
        this.router.navigate(['/play']);    
      },
      err => {
        console.log(err);
      },
      () => {}

    )
  

  }

}
