import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { EstadisticasPage } from '../pages/estadisticas/estadisticas';
import { CuestionarioPage } from '../pages/cuestionario/cuestionario';
import { TabsPage } from '../pages/tabs/tabs';

//Graficos
import { ChartsModule } from 'ng2-charts';

//Vistas
import { LoginPage } from '../pages/login/login';
import { SigninPage } from '../pages/signin/signin';

//Plugins
import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';

// Maps
import { AgmCoreModule } from '@agm/core';

import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
//import { AuthPage } from '../pages/auth/auth';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireModule } from 'angularfire2';
import { CuestionarioServiceProvider } from '../providers/cuestionario-service/cuestionario-service';
import { PreguntasServiceProvider } from '../providers/preguntas-service/preguntas-service';
import { RespuestasServiceProvider } from '../providers/respuestas-service/respuestas-service';

export const firebaseConfig = {
  apiKey: "AIzaSyD716uvmyEsUV4tTBKT-tN9GLZSrM4tTIs",
    authDomain: "appprueba-96fa7.firebaseapp.com",
    databaseURL: "https://appprueba-96fa7.firebaseio.com",
    projectId: "appprueba-96fa7",
    storageBucket: "appprueba-96fa7.appspot.com",
    messagingSenderId: "665619278492"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    EstadisticasPage,
    CuestionarioPage,
    TabsPage,
    LoginPage,
    SigninPage,
    ForgotPasswordPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCt4ypL9y1DT_iq4m6dNaLYyIle0jX9QBg'
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: SigninPage, name: 'SigninPage', segment: 'signin' }
         ]
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    EstadisticasPage,
    CuestionarioPage,
    TabsPage,
    LoginPage,
    SigninPage,
    ForgotPasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Vibration,
    NativeAudio,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    AuthProvider,
    CuestionarioServiceProvider,
    PreguntasServiceProvider,
    RespuestasServiceProvider
  ]
})
export class AppModule {}
