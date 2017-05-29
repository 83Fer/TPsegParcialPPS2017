import { Injectable } from '@angular/core';
import { Platform, App } from 'ionic-angular';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { Facebook } from 'ionic-native';
//import { GooglePlus } from '@ionic-native/google-plus';
import firebase from 'firebase';

//Vistas 

// Providers
import {DataProvider} from '../data/data';

@Injectable()
export class AuthProvider {
  user: any;

  //*********************** */
  constructor(private af: AngularFire,
              private data: DataProvider, 
              private platform: Platform,
              private app: App) {

    this.af.database.list('pushTest').push({
      teste: 'teste'
    }).then((data) => {
      console.log(data);
    });
  }

  getUserData() {
    return Observable.create(observer => {
      this.af.auth.subscribe(authData => {
        if (authData) {
          this.data.object('users/' + authData.uid).subscribe(userData => {
            console.log(userData);
            this.user = userData;
            observer.next(userData);
          });
        } else {
          observer.error();
        }
      });
    });
  }

  registerUser(credentials: any) {
    return Observable.create(observer => {
      this.af.auth.createUser(credentials).then((authData: any) => {
        this.af.database.list('users').update(authData.uid, {
          name: authData.auth.email,
          email: authData.auth.email,
          emailVerified: false,
          provider: 'email',
          image: 'https://freeiconshop.com/files/edd/person-solid.png'
        });
        credentials.created = true;
        observer.next(credentials);
      }).catch((error: any) => {
        if (error) {
          switch (error.code) {
            case 'INVALID_EMAIL':
              observer.error('Email inválido.');
              break;
            case 'EMAIL_TAKEN':
              observer.error('Este email ya está siendo utilizado.');
              break;
            case 'NETWORK_ERROR':
              observer.error('Ha ocurrido algún error al intentar conectarse al servidor, vuelva a intentarlo más tarde.');
              break;
            default:
              observer.error(error);
          }
        }
      });
    });
  }

  loginWithEmail(credentials) {
    return Observable.create(observer => {
      this.af.auth.login(credentials, {
        provider: AuthProviders.Password,
        method: AuthMethods.Password
      }).then((authData) => {
        observer.next(authData);
      }).catch((error) => {
        observer.error(error);
      });
    });
  }

  loginWithFacebook() {
    return Observable.create(observer => {
      if (this.platform.is('cordova')) {
        Facebook.login(['public_profile', 'email']).then(facebookData => {
          let provider = firebase.auth.FacebookAuthProvider.credential(facebookData.authResponse.accessToken);
          firebase.auth().signInWithCredential(provider).then(firebaseData => {
            this.af.database.list('users').update(firebaseData.uid, {
              name: firebaseData.displayName,
              email: firebaseData.email,
              provider: 'facebook',
              image: firebaseData.photoURL
            });
            observer.next();
          });
        }, error => {
          observer.error(error);
        });
      } else {
        this.af.auth.login({
          provider: AuthProviders.Facebook,
          method: AuthMethods.Popup
        }).then((facebookData) => {
          this.af.database.list('users').update(facebookData.auth.uid, {
            name: facebookData.auth.displayName,
            email: facebookData.auth.email,
            provider: 'facebook',
            image: facebookData.auth.photoURL
          });
          observer.next();
        }).catch((error) => {
          console.info("error", error);
          observer.error(error);
        });
      }
    });
  }

  sendPasswordResetEmail(email) {
    return Observable.create(observer => {
      firebase.auth().sendPasswordResetEmail(email).then(function() {
        observer.next();
        // Email sent.
      }, function(error) {
        observer.error(error);
        // An error happened.
      });
    });
  }
  LoginGit(){
      
  return Observable.create(observer => {
      this.af.auth.login({
      provider: AuthProviders.Github,
      method: AuthMethods.Popup
    }).then((authData) => {
        observer.next(authData);
      }).catch((error) => {
        observer.error(error);
      });
    });

  }
    googleauth() {
      return Observable.create(observer => {
      this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }).then((authData) => {
        observer.next(authData);
      }).catch((error) => {
        observer.error(error);
      });
    });
  }
            
  logout() {
    this.app.getRootNav();
  }
}
