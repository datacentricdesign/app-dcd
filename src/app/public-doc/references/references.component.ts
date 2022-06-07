import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { SwaggerUIBundle } from 'swagger-ui-dist';

@Component({
  selector: 'app-references-cmp',
  moduleId: module.id,
  templateUrl: 'references.component.html'
})

export class ReferencesComponent implements OnInit {


  public text: string;
  public id: string

  constructor(private route: ActivatedRoute, private titleService: Title) { }

  ngOnInit() {
    this.route.paramMap.subscribe(async params => {
      this.titleService.setTitle("References - DCD Lab");
      this.id = 'README'
      if (params.get('id') !== null) {
        this.id = params.get('id');
      }
      if (this.id === 'bucket-http') {
        this.text = "";
        const ui = SwaggerUIBundle({
          dom_id: '#swagger-ui',
          layout: 'BaseLayout',
          presets: [
            SwaggerUIBundle.presets.apis,
            SwaggerUIBundle.SwaggerUIStandalonePreset
          ],
          url: 'https://raw.githubusercontent.com/datacentricdesign/bucket/master/openapi/openapi.json'
        });
      } else {
        const response = await fetch('https://raw.githubusercontent.com/datacentricdesign/app-dcd/master/docs/references/' + this.id + '.md');
        this.text = await response.text();
      }
    })
  }
}
