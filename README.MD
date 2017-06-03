# angular-vrviewer
Embed VR media in your Angular application. Used as a wrapper for [Google VR view for the Web](https://developers.google.com/vr/concepts/vrview).
Currently supports only media type of 360 degree images.

## Installation

To install angular-vrviewer, simply run:

```bash
$ npm install angular-vrviewer --save
```

Include in your `index.html`:
```xml
<script src="//storage.googleapis.com/vrview/2.0/build/vrview.min.js"></script>
```

## Usage

Include the `VRViewModule` in your app:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Add this line
import { VRViewModule } from 'angular-vrviewer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VRViewModule //<-- import this module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
Now you can use the `<vrview>` selector to show 360 media in your angular application.

#### Example:
```xml
<vrview
[scenes]="scenes"
width="100%"
[height]="400">
</vrview>
```

## Scenes and Hotspots
### Scene Interface:
```typescript
export interface Scene {
	[key: string]: {
	image: string;
	hotspots: Hotspot
	}
}
```

### Hotspot interface:
```typescript
export interface Hotspot {
	[key: string]: {
		pitch: number;
		yaw: number;
		radius: number,
		distance: number
	}
}
```

### Scenes with Hotspot Example:

```typescript
scenes: Scene = {
    world: {
      image: 'assets/1.jpg',
      hotspots: {
        green_area: {
          pitch: 10,
          yaw: -15,
          radius: 0.05,
          distance: 1
        },
      }
    },
    green_area: {
      image: 'assets/2.jpg',
      hotspots: {
        world: {
          pitch: 20,
          yaw: 0,
          radius: 0.05,
          distance: 1
        },
      }
    }
};
```


## License

MIT © Eliran Elnasi and contributors
