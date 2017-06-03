import { Component, Input, AfterViewInit, ViewChild } from '@angular/core';
import { Scene } from './scene.interface';

declare let VRView;

@Component({
  selector: 'vrview',
  templateUrl: './vrview.component.html',
})
export class VRViewComponent implements AfterViewInit {

  viewer: any;
  @ViewChild('viewer') viewerElement;

  @Input() scenes: Scene;
  @Input() width: any;
  @Input() height: any;

  constructor() {
  }

  ngAfterViewInit() {
    this.viewer = new VRView.Player(`#${this.viewerElement.nativeElement.id}`, {
      image: 'assets/blank.png',
      width: this.width,
      height: this.height
    });

    this.viewer.on('ready',() => {

      this.loadScene(this.getFirstScene());
      this.viewer.on('click', (event) => this.loadScene(event.id));
    });
  }

  loadScene(id) {
    if (id) {
    // Set the image
    this.viewer.setContent({
      image: this.scenes[id].image,
      //preview: this.scenes[id].preview,
    });
    // Add all the hotspots for the scene
    let newScene = this.scenes[id];
    let sceneHotspots = Object.keys(newScene.hotspots);
    for (let i = 0; i < sceneHotspots.length; i++) {
      let hotspotKey = sceneHotspots[i];
      let hotspot = newScene.hotspots[hotspotKey];

      this.viewer.addHotspot(hotspotKey, {
        pitch: hotspot.pitch,
        yaw: hotspot.yaw,
        radius: hotspot.radius,
        distance: hotspot.distance
        });
      }
    }
  }

  getFirstScene() {
    for(var key in this.scenes) {
        if(this.scenes.hasOwnProperty(key)) {
            return key;
        }
    }
    return 0;
  }

}
