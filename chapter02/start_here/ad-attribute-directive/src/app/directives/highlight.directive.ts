import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {
  @Input() highlightText = '';
  @Input() highlightColor = 'yellow';
  originalHTLM = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.highlightText.firstChange) {
      this.originalHTLM = this.el.nativeElement.innerHTML;
      return;
    }
    const { currentValue } = changes.highlightText;
    if (currentValue) {
      const regExp = new RegExp(`(${currentValue})`,
        'gi');
      this.el.nativeElement.innerHTML =
        this.originalHTLM
          .replace(regExp, `<span style='background-color:${this.highlightColor}'>\$1</span>`);
    } else {
      this.el.nativeElement.innerHTML = this.originalHTLM;
    }
    console.log(currentValue);
  }

  constructor(private el: ElementRef) {
  }

}
