    import { Component } from '@angular/core';
    import { mobiscroll, MbscSelectOptions } from '../lib/mobiscroll/js/mobiscroll.angular.min.js';
    
    mobiscroll.settings = {
        lang: 'en',             // Specify language like: lang: 'pl' or omit setting to use default
        theme: 'ios'            // Specify theme like: theme: 'ios' or omit setting to use default
    };
    
    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html'
    })
    export class AppComponent {
        mobile: 1;
        desktop: 1;
    
        items = [{
            value: 1,
            text: 'Atlanta'
        }, {
            value: 2,
            text: 'Berlin'
        }, {
            value: 3,
            text: 'Boston'
        }, {
            value: 4,
            text: 'Chicago'
        }, {
            value: 5,
            text: 'London'
        }, {
            value: 6,
            text: 'Los Angeles'
        }, {
            value: 7,
            text: 'New York'
        }, {
            value: 8,
            text: 'Paris'
        }, {
            value: 9,
            text: 'San Francisco'
        }];
    
        mobileSettings: MbscSelectOptions = {
            display: 'bubble'   // Specify display mode like: display: 'bottom' or omit setting to use default
        };
    
        desktopSettings: MbscSelectOptions = {
            display: 'bubble',  // Specify display mode like: display: 'bottom' or omit setting to use default
            touchUi: false      // More info about touchUi: https://docs.mobiscroll.com/4-7-2/angular/select#opt-touchUi
        };
    
    }
