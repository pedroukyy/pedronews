import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {
  principalNews: any;
  otherNews: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getTopHeadlines().subscribe(articles => {
      if (articles.length > 0) {
        this.principalNews = articles[0];
        this.otherNews = articles.slice(1);
      }
    });
  }
}
