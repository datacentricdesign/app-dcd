import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-tutorials-cmp',
    moduleId: module.id,
    templateUrl: 'tutorials.component.html'
})

export class TutorialsComponent implements OnInit {

    public text: string;
    public id: string

    constructor(private route: ActivatedRoute, private titleService: Title) { }

    async ngOnInit() {
        this.route.paramMap.subscribe(async params => {
            this.titleService.setTitle("Tutorials - DCD Lab");
            this.id = 'README'
            console.log(params.get('id'))
            if (params.get('id') !== null) {
                this.id = params.get('id');
            }
            const response = await fetch('https://raw.githubusercontent.com/datacentricdesign/app-dcd/master/docs/tutorials/' + this.id + '.md');
            this.text = await response.text();
        })
    }
        
}
