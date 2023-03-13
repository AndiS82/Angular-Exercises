import {Component} from '@angular/core';
import { BlogEntry } from 'src/models/blog-entry';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
entries: Array<BlogEntry> = [];
  createBlogEntry(title: string, image: string, text: string) {
    const entry = new BlogEntry;
    entry.title = title;
    entry.image = image;
    entry.text = text;
    this.entries.push(entry)
    console.log(title, image, text);
  }
  
}

