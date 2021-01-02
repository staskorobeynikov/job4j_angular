import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggle: any = false;

  arr = [1, 1, 2, 3, 5, 8, 13];

  objects = [
    {title: 'Post 1', author: 'Stas', comments: [
        {name: 'Max', text: 'lorem 1'},
        {name: 'Max', text: 'lorem 2'},
        {name: 'Max', text: 'lorem 3'}
      ]},
    {title: 'Post 2', author: 'Stas 2', comments: [
        {name: 'Max 2', text: 'lorem 1'},
        {name: 'Max 2', text: 'lorem 2'},
        {name: 'Max 2', text: 'lorem 3'}
      ]}
  ];
  now: Date = new Date();
}
