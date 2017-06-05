import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-estadisticas',
  templateUrl: 'estadisticas.html'
})
export class EstadisticasPage {
 btnActivo1:string = 'noActive';
  btnActivo2:string = 'noActive';
  btnActivo3:string = 'noActive';
  btnInactivo1:string = 'noActive';
  btnInactivo2:string = 'noActive';
  btnInactivo3:string = 'noActive';

  muestra:string;

  items=[
    {cuestionario:"Cuestionario1", fecha:"04/05/2017", estado:"Finalizo"},
    {cuestionario:"Cuestionario2", fecha:"04/05/2017", estado:"Finalizo"},
    {cuestionario:"Cuestionario3", fecha:"04/05/2017", estado:"Finalizo"},
    ];

  constructor(public navCtrl: NavController) {

  }

  BtnActivado(id:string){

    this.btnActivo1 = 'noActive';
  this.btnActivo2 = 'noActive';
  this.btnActivo3 = 'noActive';
  this.btnInactivo1 = 'noActive';
  this.btnInactivo2 = 'noActive';
  this.btnInactivo3 = 'noActive';

    switch (id) {
      case 'a1':
            this.muestra = "vacio";
        break;
      case 'a2':
            this.btnActivo1 = 'active';
            this.btnInactivo1 = 'active';
            this.muestra = "vista1";
        break;
      case 'b1':
          this.muestra = "vacio";
      break;
      case 'b2':
            this.btnActivo2 = 'active';
            this.btnInactivo2 = 'active';
            this.muestra = "vista2";
        break;
      case 'c1':
          this.muestra = "vacio";
      break;
      case 'c2':
            this.btnActivo3 = 'active';
            this.btnInactivo3 = 'active';
            this.muestra = "vista3";
        break;

      default:
        break;
    }
  }

  //Vista2
   // Doughnut
  public doughnutChartLabels:string[] = ['18-25', '26-30', '31-35', '36-40', '41-65'];
  public doughnutChartData:number[] = [350, 450, 100, 200, 400];
  public doughnutChartType:string = 'doughnut';

  public porcLista:Array<any> = [
    {data: [350]}, {data: [450]},{data: [100]},{data: [200]},{data: [400]},
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  //Vista 3
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55], label: 'Mujeres'},
    {data: [28, 48, 40, 19, 86, 27], label: 'Hombres'}
  ];
  
  public lineChartLabels:Array<any> = ['1°', '2°', '3°', '4°', '5°', '6°'];
  public lineChartOptions:any = {
    responsive: true
  };

  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'green',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];


  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
 

}
