import { NgModule, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from './components/userlist/userlist.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ UserlistComponent ],
  bootstrap:[ UserlistComponent ]
})
export class UsersModule {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public resolveLazyloadedComponent(): ComponentFactory<UserlistComponent> {
    return this.componentFactoryResolver.resolveComponentFactory( UserlistComponent );
  }
}