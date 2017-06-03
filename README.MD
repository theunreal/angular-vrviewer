# angular-vrviewer
Embed VR media in your Angular application. Used as a wrapper for [Google VR view for the Web](https://github.com/googlevr/vrview).
Currently supports only media type of 360 degree images.

## Installation

To install angular-vrviewer, simply run:

```bash
$ npm install angular-vrviewer --save
```

## Usage

Include the `VRViewModule` in your app

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
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

```xml
<!-- You can now use your library component in app.component.html -->
<vrview
[scenes]="scenes"
width="100%"
[height]="400">
</vrview>
```


## License

MIT © Eliran Elnasi and contributors
