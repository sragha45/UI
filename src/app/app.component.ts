import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    isHostDetailsVisible: boolean = false;
    isHostaProvider: boolean = false;
    hostIPAddress: string;

    constructor(private router: Router) {
    }

    toggleVisibilityOfHostDetails(host: any) {

        if(this.isHostDetailsVisible == false) this.isHostDetailsVisible = true;
        
        this.hostIPAddress = host[0];

        this.isHostaProvider = host[1];
    }
}
