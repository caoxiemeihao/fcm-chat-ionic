import { Injectable } from '@angular/core'
import { Firebase } from '@ionic-native/firebase'
import { Platform } from 'ionic-angular'
import { AngularFirestore } from 'angularfire2/firestore'
// import { Observable } from 'rxjs';

@Injectable()
export class FcmService {
  constructor(
    private firebase: Firebase,
    private afs: AngularFirestore,
    private platform: Platform
  ) { }

  async getToken() {
    let token: string

    // if (this.platform.is('android'))
    //   token = await this.firebase.getToken()

    // if (this.platform.is('ios')) {
    //   token = await this.firebase.getToken()
    //   await this.firebase.grantPermission() // ios 多一步申请授权
    // }
    token = await this.firebase.getToken()

    // iOS 需要明确的权限来接收推送通知
    if (this.platform.is('ios')) await this.firebase.grantPermission()

    return this.saveToken(token)
  }

  private saveToken(token: string): Promise<void> {
    // this.afs.firestore.settings({ timestampsInSnapshots: true })
    let devicesRef = this.afs.collection('devices')
      , data = { token, user_id: 'test_user_id' }

    return devicesRef.doc(token).set(data)
  }

  listenToNotifications() {
    return this.firebase.onNotificationOpen()
  }

}
