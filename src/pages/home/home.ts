import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { tap } from 'rxjs/operators';
import { FcmService } from '../../service/fcm.service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [FcmService]
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private fcm: FcmService
  ) { }

  ionViewDidLoad() {
    this.fcm.getToken()

    this.fcm.listenToNotifications().pipe(
      tap((msg: any) => {
        let toast = this.toastCtrl.create({
          message: msg.body,
          duration: 3000
        })
        toast.present()
      })
    )
      .subscribe(msg => {
        console.log('-------------------------------------------------------')
        console.log(msg.body)
      })
  }

}
