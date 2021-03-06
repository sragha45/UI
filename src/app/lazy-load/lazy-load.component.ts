import { Component, OnInit, Output } from '@angular/core';
import { ClusterType } from 'app/lazy-load/lazy-load-cluster-type';
import { AppComponent } from '../app.component'
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lazy-load',
  templateUrl: './lazy-load.component.html',
  styleUrls: ['./lazy-load.component.scss']
})
export class LazyLoadComponent implements OnInit {
  loading: boolean = false;
  expanded: boolean = false;

  @Output() 
  hostNotifier: EventEmitter<any> = new EventEmitter();

  @Output()
  vmNotifier: EventEmitter<string> = new EventEmitter();

  clusters: ClusterType[];

  @Output()
  clusterNotifier: EventEmitter<string> = new EventEmitter();


  constructor() { }

  sleep(millisecons: number): void {
    this.loading = true;
    let start = new Date().getTime();
    for (; true;) {
      if ((new Date().getTime() - start) > millisecons) {
        break;
      }
    }
    this.loading = false;
  }

  ngOnInit() {
    
    this.loadClusters();
    
  }

  hostSelected(event, str) {
   // console.log(str);
    this.hostNotifier.emit([str.hostName, str.isProvider]);
  }

  vmSelected(event, str) {
    this.vmNotifier.emit(str)
  }

  clusterSelected(event, str) {
    // console.log(str.clusterName);
    this.clusterNotifier.emit(str.clusterName);
  }

  setIcon(isProvider : boolean) {
    return isProvider ? "memory" : "computer";
  }

  loadClusters() {
    
    this.clusters = [
      {
        clusterName: "Cluster1",
        showChild: false,
        hosts: [
          {
            hostName: '172.21.33.21',
            isProvider: false,
            showVM: false,
            vmList: ["vm1", "vm2", "dummy"]
          },
          {
            hostName: '172.21.34.156',
            showVM: false,
            isProvider: false,
            vmList: ["CMC"]
          },
          {
            hostName: '198.168.21.44',
            showVM: false,
            isProvider: true,
            vmList: []
          },
          {
            hostName: '192.168.24.37',
            showVM: false,
            isProvider: true,
            vmList: []
          }
        ]
  
      },
      {
        clusterName: "Cluster2",
        showChild: false,
        hosts: [
          {
            hostName: '172.21.33.21',
            isProvider: false,
            showVM: false,
            vmList: []
          },
          {
            hostName: '172.21.34.156',
            isProvider: false,
            showVM: false,
            vmList: []
          },
          {
            hostName: '198.168.21.44',
            isProvider: true,
            showVM: false,
            vmList: []
          },
          {
            hostName: '192.168.24.37',
            isProvider: true,
            showVM: false,
            vmList: []
          }
        ]
      }
    ]
  
  }

  
}
