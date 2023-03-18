import { Component, ViewChild } from '@angular/core';
import { GalleryComponent } from './components/gallery/gallery.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cc-view-child';
  //The view query is executed after the ngOnInit life cycle hook and before the
  // ngAfterViewInit hook.
  @ViewChild(GalleryComponent) gallery: GalleryComponent;

  addNewPicture() {
    this.gallery.pictures.unshift(this.gallery.generateImage());
  }

  removeFirstPicture() {
    this.gallery.pictures.shift();
  }
}
