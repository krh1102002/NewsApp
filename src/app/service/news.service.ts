import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
api_key="db6adcc3087749aa808eff01b6c44967"
  constructor(private http:HttpClient) {}
    initSources(){
      return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key);
    }
    initArticles() {
      return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.api_key);
    }
    getArticlesByID(source: String) {
      return this.http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.api_key);
    }
  
}
