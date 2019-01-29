import { Component } from '@angular/core';
import { Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

import { FcmService } from '../service/fcm.service';

@Component({
  templateUrl: 'app.html',
  providers: [FcmService]
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(
    private platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private fcm: FcmService,
    private toastController: ToastController
  ) {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      // this.notificationSetup();
    });
  }

  private notificationSetup() {
    this.fcm.getToken()
    this.fcm.listenToNotifications()
      .subscribe(msg => {
        this.platform.is('ios')
          ? this.presentToast(msg.aps.alert)
          : this.presentToast(msg.body)
      })
  }

  private async presentToast(message: string) {
    let toast = await this.toastController.create({ message, duration: 3000 })

    toast.present()
  }
}
