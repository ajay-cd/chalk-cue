import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Component} from '@angular/core';
import {enableProdMode} from '@angular/core';
import {ChartTypes, AllOptions, AllData} from './defs';

@Component({
    selector: 'graph',
    templateUrl: './graphs.component.html' 
})


export class GraphComponent {

  options;
  data;
  chartType;

  ngOnInit(){
    this.chartType = "multiBarChart";
    this.options = AllOptions[this.chartType];
    this.data = AllData[this.chartType];
    console.log('Graphs Log');
  }
  

}