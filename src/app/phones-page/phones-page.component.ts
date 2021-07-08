import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

interface Character{
  name: string;
  image: string;
}

interface Characters {
  results: Character[];
}

@Component({
  selector: 'app-phones-page',
  templateUrl: './phones-page.component.html',
  styleUrls: ['./phones-page.component.scss']
})
export class PhonesPageComponent implements OnInit {

  characters: Characters = {results: []};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Characters>(`${environment.apiURL}`)
      .subscribe(characters => {
        this.characters = characters;
        console.log(characters)
      })
      
  }
  

}
