import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Unsubscribable } from 'rxjs';


@Directive({
  selector: '[appClassError]',
  exportAs: 'appClassError',
})
export class ClassErrorHandlerDirective implements OnInit, OnDestroy {
  @Input('appClassError') ourFormGroup!: FormGroup;
  @Input('name') controllName!: string;

  unsubFromEvents: Array<Unsubscribable | undefined> = [];

  constructor(private elRef: ElementRef, private render: Renderer2) { }

  ngOnInit(): void {
    this.unsubFromEvents.push(
      this.ourFormGroup.get(this.controllName)?.valueChanges.subscribe({
        next: this.logic.bind(this)
      })
    );

    // this.unsubFromEvents.push(
    //   this.render.listen(this.elRef.nativeElement, 'input', this.onChnage.bind(this))
    //   );

    // this.unsubFromEvents.push(
    //   this.render.listen(this.elRef.nativeElement, 'blur', this.onBlur.bind(this))
    //   );
  }

  // onChnage() {
  //   this.logic();
  // }

  // onBlur() {
  //   this.logic();
  // }

  logic() {
    //console.log(this.ourFormGroup?.get(this.elRef?.nativeElement?.name));
    console.log(this.ourFormGroup?.get(this.controllName)?.errors, 'fhqui');
    
    if (this.ourFormGroup?.get(this.controllName)?.errors) {
      this.render.addClass(this.elRef.nativeElement, 'input-error');
    } else if (!this.ourFormGroup?.get(this.controllName)?.errors) {
      this.render.removeClass(this.elRef.nativeElement, 'input-error');
    }
  }

  ngOnDestroy(): void {
    this.unsubFromEvents.forEach(x => x != undefined ? x.unsubscribe() : null);
  }
}