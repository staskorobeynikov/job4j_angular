import {Component, OnInit} from '@angular/core'

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  posts: Post[] = [
    {title: 'Хочу выучить Angular компоненты', text: 'Я все еще учу компоненты', id: 1},
    {title: 'Следующий блок', text: 'Будет про директивы и про пайпы', id: 2}
  ]

  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log('Timeout')
    //   this.posts[0] = {
    //     title: 'Changed!!',
    //     text: 'Changed222',
    //     id: 33
    //   }
    // }, 5000)
  }

  updatePosts(post: Post): void {
    this.posts.unshift(post)
  }

  removePost(id: number): void {
    console.log('Id to remove', id)
    this.posts = this.posts.filter(p => p.id !== id)
  }
}
