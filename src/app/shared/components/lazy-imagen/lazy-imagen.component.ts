import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-imagen',
  templateUrl: './lazy-imagen.component.html',
})
export class LazyImagenComponent implements OnInit {
  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('URL property is required');
  }

  onLoad() {
    this.hasLoaded = true;
  }
}
