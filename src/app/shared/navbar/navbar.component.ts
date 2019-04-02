import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, TemplateRef } from '@angular/core';
import { IMenu } from '../types/Menu';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">{{title}}</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
              aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <ng-container *ngFor="let item of menu;">
            <li class="nav-item active">
              <a class="nav-link" [routerLink]="item.href">{{item.text}} <span class="sr-only">(current)</span></a>
            </li>
          </ng-container>
        </ul>
        <ng-container [ngTemplateOutlet]="searchBar">
          <ng-content></ng-content>
        </ng-container>
      </div>
    </nav>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

  @Input() title: string;
  @Input() menu: IMenu[];
  @Input() searchBar: TemplateRef<any>;
}
