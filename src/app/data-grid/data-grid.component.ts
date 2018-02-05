import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})



export class DataGridComponent implements OnInit {

  @Input()
  isProvider: false;

  @Input()
  hostIP: string = "IP not assigned";

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
          pMemUUID: "pMem UUID goes here",
          sizeOfAU: 256,
          freedOrAllocated: 0,
          consumerList: "consumer goes here",
          memHandler: "memHandler goes here"
        },
        {
          pMemUUID: "pMem UUID goes here",
          sizeOfAU: 256,
          freedOrAllocated: 0,
          consumerList: "consumer goes here",
          memHandler: "memHandler goes here"
        },
        {
          pMemUUID: "pMem UUID goes here",
          sizeOfAU: 256,
          freedOrAllocated: 0,
          consumerList: "consumer goes here",
          memHandler: "memHandler goes here"
        }
      ]
    },
    {
      ip: "198.168.21.44",
      details: [
        {
          pMemUUID: "pMem UUID goes here",
          sizeOfAU: 256,
          freedOrAllocated: 0,
          consumerList: "consumer goes here",
          memHandler: "memHandler goes here"
        },
        {
          pMemUUID: "pMem UUID goes here",
          sizeOfAU: 256,
          freedOrAllocated: 0,
          consumerList: "consumer goes here",
          memHandler: "memHandler goes here"
        },
        {
          pMemUUID: "pMem UUID goes here",
          sizeOfAU: 256,
          freedOrAllocated: 0,
          consumerList: "consumer goes here",
          memHandler: "memHandler goes here"
        }
      ]
    }
  ]

  dummyConsumers: any[] = [
    {
      ip: "172.21.33.21",
      details: [
        {
          pMemUUID: "pMem UUID goes here",
          providerList: "Providers go here",
          vmID: "ID of the VM",
          kernelCache: "Kernel cache UUID"
        },
        {
          pMemUUID: "pMem UUID goes here",
          providerList: "Providers go here",
          vmID: "ID of the VM",
          kernelCache: "Kernel cache UUID"
        },
        {
          pMemUUID: "pMem UUID goes here",
          providerList: "Providers go here",
          vmID: "ID of the VM",
          kernelCache: "Kernel cache UUID"
        }
      ]
    },
    {
      ip: "172.21.34.156",
      details: [
        {
          pMemUUID: "pMem UUID goes here",
          providerList: "Providers go here",
          vmID: "ID of the VM",
          kernelCache: "Kernel cache UUID"
        },
        {
          pMemUUID: "pMem UUID goes here",
          providerList: "Providers go here",
          vmID: "ID of the VM",
          kernelCache: "Kernel cache UUID"
        },
        {
          pMemUUID: "pMem UUID goes here",
          providerList: "Providers go here",
          vmID: "ID of the VM",
          kernelCache: "Kernel cache UUID"
        }
      ]
    }
  ]

  constructor() {  }

  ngOnInit() {
  }

}
