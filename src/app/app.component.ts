import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  constructor(private meta: Meta) {
    this.meta.addTag({ name: 'Description', content: 'Notes - My Angular App' });
  }
  title = 'My Angular App';
}
