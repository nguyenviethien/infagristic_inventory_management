import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
