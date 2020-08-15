import { Component, VERSION, ViewChild, ViewContainerRef, Compiler, Injector, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

  constructor(
    private compiler: Compiler,
    private injector: Injector,
    private cd: ChangeDetectorRef
  ) {}

  public loadUsersModule() {
    import('../features/users/users.module').then(({ UsersModule }) => {
      this.compiler
        .compileModuleAsync(UsersModule)
        .then((moduleFactory) => {
          const moduleReference = moduleFactory.create(this.injector);
          const componentFactory = moduleReference.instance.resolveLazyloadedComponent();
          this.container.createComponent( componentFactory, null, moduleReference.injector );
          this.cd.detectChanges(); // tells change detection to refresh the view
        });
    });
  }
}
