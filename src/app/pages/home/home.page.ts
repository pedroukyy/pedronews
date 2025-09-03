import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { UserService } from 'src/app/services/user.service';
import { ModalController } from '@ionic/angular';
import { NewsModalComponent } from 'src/app/shared/components/news-modal/news-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {
  principalNews: any;
  otherNews: any[] = [];
  currentCategory: string = '';

  constructor(
    private newsService: NewsService,
    private userService: UserService,
    private modalCtrl: ModalController,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Escuchar cambios en la categoría desde el sidebar
    this.route.queryParams.subscribe(async params => {
      this.currentCategory = params['category'] || '';
      await this.loadNews();
    });
  }

  /** Carga las noticias según el país del usuario y la categoría */
  private async loadNews(event?: any) {
    const user = await this.userService.getUser();
    const countryCode = user?.country?.id?.toLowerCase() || 'us';

    this.newsService.getTopHeadlines(countryCode, this.currentCategory).subscribe(articles => {
      if (articles.length > 0) {
        this.principalNews = articles[0];
        this.otherNews = articles.slice(1);
      } else {
        this.principalNews = null;
        this.otherNews = [];
      }

      if (event) {
        event.target.complete(); // Finaliza la animación del refresher
      }
    });
  }

  /** Abre el modal con la noticia seleccionada */
  async openNewsModal(news: any) {
    const modal = await this.modalCtrl.create({
      component: NewsModalComponent,
      componentProps: {
        title: news.title,
        description: news.description,
        imageUrl: news.urlToImage,
        url: news.url
      }
    });
    await modal.present();
  }

  /** Refresca las noticias al hacer pull-to-refresh */
  async refreshNews(event: any) {
    await this.loadNews(event);
  }
}


