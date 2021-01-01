import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'Dynamic title';
  //
  // number = 42;
  //
  // arr = [1, 2, 3];
  //
  // obj = {a: 1, b: {c: 2}};
  //
  // img = 'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png';
  //
  // inputValue = '';
  //
  // constructor() {
  //   setTimeout(() => {
  //     console.log('Timeout is over');
  //     this.img = 'https://brandslogos.com/wp-content/uploads/images/large/angular-icon-logo.png';
  //   }, 5000);
  // }
  //
  // onInput(event: Event): void {
  //   this.inputValue = (event.target as HTMLInputElement).value;
  // }
  //
  // onClick(): void {
  //   console.log('Click');
  // }
  //
  // onBlur(str: string): void {
  //   this.inputValue = str;
  // }

  title = 'Initial';

  onInput(event: any): void {
    this.title = event.target.value;
  }
}
