import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { EstadisticasPage } from '../estadisticas/estadisticas';
import { CuestionarioPage } from '../cuestionario/cuestionario';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CuestionarioPage;
  tab2Root = EstadisticasPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
