import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[appClassError]',
  exportAs: 'appClassError',
})
export class ClassErrorHandlerDirective implements OnInit {
  @Input() appClassError!: FormGroup;

  constructor(private elRef: ElementRef, private render: Renderer2) { }

  ngOnInit(): void {
    this.render.listen(this.elRef.nativeElement, 'input', this.onChnage.bind(this))
    this.render.listen(this.elRef.nativeElement, 'blur', this.onBlur.bind(this))
  }

  onChnage() {
   this.logic();
  }

  onBlur() {
    this.logic();
  }

  logic() {
    if (this.appClassError?.get(this.elRef?.nativeElement?.name)?.errors) {
      this.render.addClass(this.elRef.nativeElement, 'input-error');
    } else {
      this.render.removeClass(this.elRef.nativeElement, 'input-error');
    }
  }
}