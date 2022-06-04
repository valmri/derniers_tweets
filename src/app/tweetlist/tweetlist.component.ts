import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { map } from 'rxjs';

@Component({
  selector: 'app-tweetlist',
  templateUrl: './tweetlist.component.html',
  styleUrls: ['./tweetlist.component.scss']
})
export class TweetlistComponent implements OnInit {

  title = "Derniers tweets";
  resultat:any;

  constructor( private http: HttpClient ) { }

  ngOnInit() {
    this.getTweets();
  }

  getTweets() {

    // Configuration de l'entête
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAOsgdQEAAAAALh%2BG6qPE3gzQDz2E1nDUDNfEDp8%3DbfIxX3sgor4s9TEIgKtaOvUJiFzx4LoGYDs32USl0DAUyfa2Ah'
      })
    };

    // Requête http
    this.http.get('/2/users/858982741882351616/tweets?max_results=10', httpOptions).subscribe(data=> { 
      this.resultat = data; 
    });

    // Cas où la requête n'est pas correcte
    if(typeof(this.resultat) == 'undefined') {
      this.resultat = false;
    }

  }

}

