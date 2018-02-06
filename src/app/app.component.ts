import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    isHostDetailsVisible: boolean = false;
    isVMVisible: boolean = false;
    vmID: string = null;
    isHostaProvider: boolean = false;
    hostIPAddress: string;

    toggleValue: number;

    constructor(private router: Router) {
    }

    toggleVisibilityOfHostDetails(host: any) {

        if(this.isHostDetailsVisible == false) this.isHostDetailsVisible = true;
        this.toggleValue = 1;
        // if(host.length == 1) {
        //     console.log("vm selected");
        // }

        // console.log(Array.isArray(host));
        // if(Array.isArray(host))
        //     console.log(host);  
        // this.isVMVisible = false;

        this.hostIPAddress = host[0];

        this.isHostaProvider = host[1];

        if(host[1] == 0){
            this.toggleValue = 0;
        }
        console.log(host);
    }

    toggleVisibilityOfVMDetails(vm: string) {
        this.toggleValue = 2;
        console.log(vm);
        // console.log(vm);
        this.isVMVisible = true;
        this.isHostaProvider = false;
        this.vmID = vm;
    }

    getAppropriateID() {
        if(this.toggleValue == 1 || this.toggleValue == 0) {
            return this.hostIPAddress;
        }
        else return this.vmID;
    }
}
