import { Component, Input } from "@angular/core";
import { BlogEntry } from "src/models/blog-entry";

@Component({
    selector: "app-blog-entry",
    templateUrl: "./blog-entry.component.html"
})

export class BlogEntryComponent{
    @Input() entry?: BlogEntry;
}