import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  @Input()
  toggleValue: number;

  
  public doughnutChartLabels:string[] = ["Hits","Remote swapout", "Local disk swapouts"];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor() { }

  public pieChartLabels:string[] = ['Memory', 'NetworkMemory', 'Disk'];
  public pieChartData:number[] = [300, 500, 100];
  public pieChartType:string = 'pie';
 
  ngOnInit() {
  }

}
