import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { ChatPage } from '../pages/chat/chat';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Firebase } from '@ionic-native/firebase';

export const config = {
  apiKey: "AIzaSyBoLBdKFcFY_LjxYMFh7Bib-zAhQPnzM6o",
  authDomain: "fcm-chat-ionic.firebaseapp.com",
  databaseURL: "https://fcm-chat-ionic.firebaseio.com",
  projectId: "fcm-chat-ionic",
  storageBucket: "fcm-chat-ionic.appspot.com",
  messagingSenderId: "471954033609"
};

/*
<script src="https://www.gstatic.com/firebasejs/5.8.1/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBoLBdKFcFY_LjxYMFh7Bib-zAhQPnzM6o",
    authDomain: "fcm-chat-ionic.firebaseapp.com",
    databaseURL: "https://fcm-chat-ionic.firebaseio.com",
    projectId: "fcm-chat-ionic",
    storageBucket: "fcm-chat-ionic.appspot.com",
    messagingSenderId: "471954033609"
  };
  firebase.initializeApp(config);
</script>
*/

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    ChatPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    ChatPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Firebase,
  ]
})
export class AppModule { }
