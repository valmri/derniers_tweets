import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-tweetlist',
  templateUrl: './tweetlist.component.html',
  styleUrls: ['./tweetlist.component.scss']
})
export class TweetlistComponent implements OnInit {

  title = "Derniers tweets";
  utilisateur: any;
  tweets: any;
  user: any;
  
  constructor(private http: HttpClient) { 

  }

  ngOnInit() {
    
  }

  getUser(user:any) {

    // Configuration de l'entête
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAOsgdQEAAAAA2SlY4tBqayAwOpSIsDa4gtTYxjk%3D0h7DpKNM04GuRJ17SliRFG3K5c8Vqu6jZUpGH7S5naGpfHpL0a'
      })
    };

    // Requête http
    this.http.get('2/users/by/username/'+user.value, httpOptions).subscribe(data => {
      this.utilisateur = data;

      // Appel ds derniers tweets
      this.getTweets(httpOptions, this.utilisateur.data.id);

    });

    // Cas où la requête n'est pas correcte
    if (typeof (this.utilisateur) == 'undefined') {
      this.utilisateur = false;
    }

  }

  getTweets(header: any, idUtilisateur: any) {

    // Requête http
    this.http.get('/2/users/' + idUtilisateur + '/tweets?max_results=10&tweet.fields=created_at', header).subscribe(data => {
      this.tweets = data;
    });

    // Cas où la requête n'est pas correcte
    if (typeof (this.tweets) == 'undefined') {
      this.tweets = false;
    }

  }

}

