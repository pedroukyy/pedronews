import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private loading?: HTMLIonLoadingElement;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) {}

  async showToast(message: string, color: string = 'primary', duration = 2000) {
    const toast = await this.toastCtrl.create({
      message,
      duration,
      color
    });
    await toast.present();
  }

  async showLoading(message: string = 'Cargando...') {
    this.loading = await this.loadingCtrl.create({
      message,
      spinner: 'crescent'
    });
    await this.loading.present();
  }

  async hideLoading() {
    if (this.loading) {
      await this.loading.dismiss();
      this.loading = undefined;
    }
  }
}
