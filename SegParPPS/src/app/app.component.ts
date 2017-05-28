import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

//Vistas
import { AboutPage } from '../pages/about/about';
import { EstadisticasPage } from '../pages/estadisticas/estadisticas';
import { CuestionarioPage } from '../pages/cuestionario/cuestionario';

//Providers
import { AuthProvider } from '../providers/auth/auth';


//Vistas
import { LoginPage } from '../pages/login/login';
//import { SigninPage } from '../pages/signin/signin';

export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;


  rootPage:any = LoginPage;

  pages: PageInterface[] = [
    { title: 'Cuestionario', name: 'TabsPage', component: TabsPage, tabComponent: CuestionarioPage, index: 0, icon: 'list-box' },
    { title: 'Estadisticas', name: 'TabsPage', component: TabsPage, tabComponent: EstadisticasPage, index: 1, icon: 'pie' },
    { title: 'About', name: 'TabsPage', component: TabsPage, tabComponent: AboutPage, index: 2, icon: 'information-circle' }
  ];

  pagesLog: PageInterface[] = [
    { title: 'Logout', name: 'LoginPage', component: LoginPage, icon: 'log-out', logsOut: true }
    //{ title: 'Signin', name: 'SigninPage', component: SigninPage, icon: 'person-add' }
  ];

  constructor(public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public auth: AuthProvider,
    public splashScreen: SplashScreen) {
    this.initializeApp();

    
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
    
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page: PageInterface) {

    this.menu.close();
    let params = {};

    
    if (page.index) {
      params = { tabIndex: page.index };
    }

    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
      console.log("LLego");
    
  } else {
      this.nav.setRoot(page.name, params).catch((err: any) => {
        console.log(err);
      });
    }

    //Logout
    if (page.logsOut === true) {
      console.log("Logout");
      this.auth.logout();
    }
    
  }


  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNav();

    // Tabs are a special case because they have their own navigation
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'danger';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return 'primary';
    }
    return;
  }

  
}
