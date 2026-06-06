import { Directive, ElementRef, Inject, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCategoryColor]',
  standalone: true
})
export class CategoryColorDirective implements OnInit {
  private el = Inject(ElementRef);
  private renderer = Inject(Renderer2);

  @Input('appCategoryColor') categoryName!: string;

  private colors: string[] = [
    '#7c3aed', '#9333ea', '#a855f7', '#c084fc', 
    '#6366f1', '#4f46e5', '#3b82f6', '#2563eb',
    '#ec4899', '#db2777', '#d946ef', '#c026d3',
    '#14b8a6', '#0d9488', '#06b6d4', '#0891b2'
  ];

  ngOnInit(): void {
    if (!this.categoryName) return;

    const firstChar = this.categoryName.trim().charAt(0).toLowerCase();
    const charCode = firstChar.charCodeAt(0);
    const alphabetIndex = charCode - 97;
    let colorIndex = Math.floor(alphabetIndex / 2);

    const selectedColor = this.colors[colorIndex];
    this.renderer.setStyle(this.el.nativeElement, 'background-color', selectedColor);
    this.renderer.setStyle(this.el.nativeElement, 'color', '#ffffff');
  }
}