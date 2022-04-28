import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e404',
  template: `
  <div class="app flex-row align-items-center">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="clearfix">
          <h1 class="float-left display-3 mr-4">404</h1>
          <h4 class="pt-3">¡Vaya! Se ha perdido.</h4>
          <p class="text-muted">La página que estabas buscando no existe.</p>
        </div>
      </div>
    </div>
  </div>
</div>`
})
export class E404Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
