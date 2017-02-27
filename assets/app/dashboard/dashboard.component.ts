import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {bootstrap}  from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {enableProdMode} from '@angular/core';
// import {nvD3} from 'ng2-nvd3/lib/ng2-nvd3';
import {ChartTypes, AllOptions, AllData} from './defs';
// import {ChartSelector} from './chart-selector';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html' 
})

// @NgModule({
//     declarations: [
//     	nvD3, ChartSelector
//     ],
//     imports: [
//     	BrowserModule
//     ],
//     bootstrap: [Dashboard]
// })
export class Dashboard {

  options;
  data;
  chartType;

  // selectType(e){
  //   this.chartType = e;
  //   this.options = AllOptions[this.chartType];
  //   this.data = AllData[this.chartType];
  // }
	ngOnInit(){
	  this.chartType = "multiBarChart";
	  this.options = AllOptions[this.chartType];
	  this.data = AllData[this.chartType];
	  console.log('Dashboard Log');
	}
	

}