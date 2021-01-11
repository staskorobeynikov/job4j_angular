import { ComponentFixture, TestBed } from '@angular/core/testing'

import { RoutingComponent } from './routing.component'
import {Observable, Subject} from "rxjs"
import {ActivatedRoute, Params, Router, RouterOutlet} from "@angular/router"
import {By} from "@angular/platform-browser"
import {RouterTestingModule} from "@angular/router/testing"
import {NO_ERRORS_SCHEMA} from "@angular/core"

class RouterStub {
  navigate(path: string[]) {}
}

class ActivatedRouteStub {
  private subject = new Subject()

  push(params: Params): void {
    this.subject.next(params)
  }

  get params(): Observable<Params> {
    return this.subject.asObservable()
  }
  // params: Observable<Params>
}

describe('RoutingComponent', () => {
  let component: RoutingComponent
  let fixture: ComponentFixture<RoutingComponent>

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [ RoutingComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    fixture = TestBed.createComponent(RoutingComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should to be defined', () => {
    expect(component).toBeDefined()
  })

  it('should navigate to posts if go back', () => {
    const router = TestBed.inject(Router)
    const spy = spyOn(router, 'navigate')

    component.goBack()

    expect(spy).toHaveBeenCalledWith(['/posts'])
  })

  it('should navigate to 404 if id = 0', () => {
    const router = TestBed.inject(Router)
    const route: ActivatedRouteStub = TestBed.get(ActivatedRoute)
    const spy = spyOn(router, 'navigate')

    route.push({id: '0'})

    expect(spy).toHaveBeenCalledWith(['/404'])
  })

  it('should have router-outlet directive', () => {
    const de = fixture.debugElement.query(By.directive(RouterOutlet))

    expect(de).not.toBeNull()
  })
})
