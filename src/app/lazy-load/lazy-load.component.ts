import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-load',
  templateUrl: './lazy-load.component.html',
  styleUrls: ['./lazy-load.component.scss']
})
export class LazyLoadComponent implements OnInit {
  loading: boolean = false;
  expanded: boolean = false;

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
  }


  clusters: any[] = [
    {
      clusterName: "Cluster1",
      showChild: false,
      hosts: [
        {
          hostName: '172.21.33.21',
          isProvider: false
        },
        {
          hostName: '172.21.34.156',
          isProvider: false
        },
        {
          hostName: '198.168.21.44',
          isProvider: true
        },
        {
          hostName: '192.168.24.37',
          isProvider: true
        }
      ]

    },
    {
      clusterName: "Cluster2",
      showChild: false,
      hosts: [
        {
          hostName: '172.21.33.21',
          isProvider: false
        },
        {
          hostName: '172.21.34.156',
          isProvider: false
        },
        {
          hostName: '198.168.21.44',
          isProvider: true
        },
        {
          hostName: '192.168.24.37',
          isProvider: true
        }
      ]
    }
  ]

}
