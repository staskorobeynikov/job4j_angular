import {Component, OnInit} from '@angular/core'
import {Observable} from "rxjs"

export interface Post {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise Resolved')
    }, 4000)
  })

  myDate$: Observable<Date> = new Observable<Date>(obs => {
    setInterval(() => {
      obs.next(new Date())
    }, 1000)
  })

  myDate2: Date

  posts: Post[] = [
    {title: 'Beer', text: 'Самое лучшее пиво в мире'},
    {title: 'Bread', text: 'Самый лучший хлеб в мире'},
    {title: 'Java', text: 'Самый лучший язык в мире'}
  ]

  search = ''
  searchField = 'title'

  e: number = Math.E

  str = 'hello world'

  date: Date = new Date()

  float = 0.42

  obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4
      }
    }
  }

  ngOnInit(): void {
    this.myDate$.subscribe(date => {
      this.myDate2 = date
    })
  }

  addPost(): void {
    this.posts.unshift({
      title: 'Angular 9',
      text: 'Angular 9 course'
    })
  }
}
