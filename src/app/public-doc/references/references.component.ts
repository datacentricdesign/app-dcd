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

    constructor(private route: ActivatedRoute, private titleService: Title) { }

    ngOnInit() {
        this.titleService.setTitle("References - DCD Lab");

        // const MyCustomPlugin = function() {
        //     return {
        //       wrapComponents: {
        //         // add text above InfoContainer - same effect as above title
        //         InfoContainer: (Original, { React }) => (props) => {
        //             console.log(props)
        //           return React.createElement("div", null,
        //             React.createElement("h3", null, "I'm above the InfoContainer"),
        //             React.createElement(Original, props)
        //           )
        //         },
        
        //         // and/or add text above API description
        //         InfoUrl: (Original, { React }) => (props) => {
        //           return React.createElement("div", null,
        //             React.createElement(Original, props),
        //             React.createElement("h3", null, "I'm above the API description")
        //           )
        //         },

        //         Info: () => null
        //       }
        //     }
        //   }

        const ui = SwaggerUIBundle({
            dom_id: '#swagger-ui-bucket',
            layout: 'BaseLayout',
            // plugins: [
            //     MyCustomPlugin
            //   ],
            presets: [
              SwaggerUIBundle.presets.apis,
              SwaggerUIBundle.SwaggerUIStandalonePreset
            ],
            url: 'https://raw.githubusercontent.com/datacentricdesign/bucket/master/openapi/openapi.json'
          });
    }
}
