//our root app component
import { Component, NgModule, VERSION } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: 'my-app',
    template: `
        <div>
            <h1>Hi {{name}}</h1>
            <p>Start editing and you will see your changes reflected immediately!</p>
        </div>
    `,
})
export class App {
    name: string;
    constructor() {
        this.name = `Angular! v${VERSION.full}`;
    }
}

@NgModule({
    imports: [BrowserModule],
    declarations: [App],
    bootstrap: [App],
})
export class AppModule {}
