import { Injectable } from '@angular/core'
import { Firebase } from '@ionic-native/firebase'

@Injectable()
export class _Firebase {
  constructor(
    private firebase: Firebase
  ) { }

  init(): void {
    console.log('---- Fire_bas init method has been executed. ----')

    this.firebase.getToken()
      .then(token => {
        console.log('firebase.getToken ->', token)
      })

    this.firebase.onTokenRefresh()
      .subscribe(token => {
        console.log('firebase.onTokenRefresh ->', token)
      })

    this.firebase.onNotificationOpen()
      .subscribe(data => {
        console.log('------------- Firebase -> onNotificationOpen ---------------')
        console.log(data)
        console.log('------------- Firebase -> onNotificationOpen ---------------')
      })
  }
}