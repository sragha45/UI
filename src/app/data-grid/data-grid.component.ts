import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})



export class DataGridComponent implements OnInit {

  @Input()
  toggle;

  @Input() 
  id;
  

  // dummy :any[] = [
  //   {
  //     hostIP: "172.21.33.21",
  //     isProvider: false,
  //     AUDetails: [
  //       {
  //         ip: "192.168.51.21",
  //         au: "23uerd:fg2dfk:4545:85klsjdf",
  //         vm: "myVM"
  //       },
  //       {
  //         ip: "192.168.51.21",
  //         au: "23uerd:fg2dfk:4545:85klsjdf",
  //         vm: "myVM"
  //       },
  //       {
  //         ip: "192.168.51.21",
  //         au: "23uerd:fg2dfk:4545:85klsjdf",
  //         vm: "myVM"
  //       }
  //     ]
  //   },
  //   {
  //     hostIP: "172.21.34.156",
  //     isProvider: false,
  //     AUDetails: [
  //       {
  //         ip: "87.88.22.56",
  //         au: "23uerd:fg2dfk:4545:85klsjdf",
  //         vm: "myVM"
  //       },
  //       {
  //         ip: "154.18.1.2",
  //         au: "23uerd:fg2dfk:4545:85klsjdf",
  //         vm: "myVM"
  //       },
  //       {
  //         ip: "2.68.5.21",
  //         au: "23uerd:fg2dfk:4545:85klsjdf",
  //         vm: "myVM"
  //       }
  //     ]
  //   },
  //   {
  //     hostIP: "198.168.21.44",
  //     isProvider: true,
  //     tableDetails: [
  //       {
  //         pMemUUID: "pMem UUID goes here",
  //         sizeOfAU: 256,
  //         freedOrAllocated: 0,
  //         consumerList:["This", "is", "the", "array", "of", "consumer", "list"],
  //         memHandler: "memHandler goes here"
  //       },
  //       {
  //         ip: "192.168.51.21",
  //         au: "23uerd:fg2dfk:4545:85klsjdf",
  //         vm: "myVM"
  //       },
  //       {
  //         ip: "192.168.51.21",
  //         au: "23uerd:fg2dfk:4545:85klsjdf",
  //         vm: "myVM"
  //       }
  //     ]  
  //   },
  //   {
  //     hostIP: "192.168.24.37",
  //     isProvider: true,
  //     AUDetails: [
  //       {
  //         ip: "192.168.51.21",
  //         au: "23uerd:fg2dfk:4545:85klsjdf",
  //         vm: "myVM"
  //       },
  //       {
  //         ip: "192.168.51.21",
  //         au: "23uerd:fg2dfk:4545:85klsjdf",
  //         vm: "myVM"
  //       },
  //       {
  //         ip: "192.168.51.21",
  //         au: "23uerd:fg2dfk:4545:85klsjdf",
  //         vm: "myVM"
  //       }
  //     ]
  //   }
  // ]


  dummyProviders: any[] = [
    {
      ip: "192.168.24.37",
      details: [
        {
          pMemUUID: "074878b:df177178641f:c9948d32:b0c6",
          sizeOfAU: 256,
          freedOrAllocated: 0,
          consumerList: "64.87.15.78",
          memHandler: "R"
        },
        {
          pMemUUID: "508c:58d51:a4b21afee21ad:b1d9930:7d7",
          sizeOfAU: 256,
          freedOrAllocated: 0,
          consumerList: "43.16.27.98",
          memHandler: "WR"
        },
        {
          pMemUUID: "pMem UUID goes here",
          sizeOfAU: 256,
          freedOrAllocated: 0,
          consumerList: "14.87.123.247",
          memHandler: "RW"
        }
      ]
    },
    {
      ip: "198.168.21.44",
      details: [
        {
          pMemUUID: "x4f1f:80bd1e73c1692:73d7696:51a9f3d",
          sizeOfAU: 256,
          freedOrAllocated: 0,
          consumerList: "172.21.33.24",
          memHandler: "W"
        },
        {
          pMemUUID: "6184:20ca797:1683d0d:e5402429:98b2e3",
          sizeOfAU: 256,
          freedOrAllocated: 0,
          consumerList: "89.57.12.64",
          memHandler: "W"
        },
        {
          pMemUUID: "ce2d4:d91c53ac6:530d851623:9de69804",
          sizeOfAU: 256,
          freedOrAllocated: 0,
          consumerList: "192.168.78.41",
          memHandler: "RW"
        }
      ]
    }
  ];

  dummyConsumers: any[] = [
    {
      ip: "172.21.33.21",
      details: [
        {
          pMemUUID: "618420ca7:971683d:0de540:242998b2e3",
          providerList: "87.34.16.97",
          vmID: "dummy",
          kernelCache: "ce2d4:d91c53ac6:530d851623:9de69804"
        },
        {
          pMemUUID: "508c:58d51:a4b21afee21ad:b1d9930:7d7",
          providerList: "192.168.78.41",
          vmID: "vm2",
          kernelCache: "61842:0ca7971683d:0de540242:998b2e3"
        },
        {
          pMemUUID: "6184:20ca797:1683d0d:e5402429:98b2e3",
          providerList: "89.54.10.57",
          vmID: "vm1",
          kernelCache: "618420ca:7971683d0:de54024299:8b2e3"
        }
      ]
    },
    {
      ip: "172.21.34.156",
      details: [
        {
          pMemUUID: "89c5703:460bea6:e06c649a9aca:98ed8b",
          providerList: "192.168.48.57",
          vmID: "vm1",
          kernelCache: "a23095:8ad154b:67d39eade60:95a1f185"
        },
        {
          pMemUUID: "508c:58d51:a4b21afee21ad:b1d9930:7d7",
          providerList: "10.45.78.87",
          vmID: "vm2",
          kernelCache: "c4f1f:80bd1e73c1:69273d7696:51a9f3d"
        },
        {
          pMemUUID: "c4f1f:80bd1e73c1692:73d7696:51a9f3d",
          providerList: "78.84.63.12",
          vmID: "vm1",
          kernelCache: "618420:ca7971683:d0de5402429:98b2e3"
        }
      ]
    }
  ];

  dummyVMs: any[] = [
    {
      vmID: "vm1",
      details: [
        {
          providerIP: "198.168.21.44",
          regionUUID: "7d811e1c:a71cc9a31:06c403d43:61388c",
        }
      ]
    },
    {
      vmID: "vm2",
      details: [
        {
          providerIP: "192.168.24.37",
          regionUUID: "074878b:df177178641f:c9948d32:b0c6",
        }
      ]
    },
    {
      vmID: "dummy",
      details: [
        {
          providerIP: "198.168.21.44",
          regionUUID: "4d72f:ca7a2f48:debc5da088f:859ef0:a8",
        }
      ]
    },
    {
      vmID: "CMC",
      details: [
        {
          providerIP: "192.168.24.37",
          regionUUID: "89c5703:460bea6e0:6c649a9:aca98ed8b",
        }
      ]
    }
  ]


  constructor() {  }

  ngOnInit() {
  }

}
