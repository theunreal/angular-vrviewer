# angular-vrviewer

## Installation

To install this library, run:

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

    // Specify your library as an import
    VRViewModule
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

MIT © [Eliran Elnasi](mailto:eliraneln@gmail.com)
