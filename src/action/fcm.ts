import { Injectable } from '@angular/core'
import { FCM } from '@ionic-native/fcm'

@Injectable()
export class _FCM {
  constructor(
    private fcm: FCM
  ) { }

  init(): void {
    console.log('**** _FCM init method has been executed. ****')

    this.fcm.subscribeToTopic('all')
    this.fcm.getToken()
      .then(token => {
        console.log('fcm.getToken ->', token)
      })

    this.fcm.onTokenRefresh()
      .subscribe(token => {
        console.log('fcm.onTokenRefresh ->', token)
      })

    this.fcm.onNotification()
      .subscribe(data => {
        console.log('------------- FCM -> onNotification ---------------')
        console.log(data)
        console.log('------------- FCM -> onNotification ---------------')
      })
  }
}