# Angular Custom Attribute Directives

Implement attribute directives with the `@Directive`, `@HostBinding` and `@HostListener` decorators. 
Use `Renderer2`, `ElementRef` and `NativeElement` to change the appearance or behavior of a DOM element.

## Creating a Directives

We start by using a directive to change this button to be a toggle button.

---> toggle-button app

We do so by adding the `appToggle` attribute to the button element.

---> toggle-button.component.ts

And specify `appToggle` as the attribute selector in the `@Directive` decorator of our directive class.   

---> toggle.directive.ts

`@HostListener` subscribes to the events of the DOM element that hosts this attribute directive, which in this case is the `<button>`  element. 

`@HostBinding` sets a property value on the host element. Here we add or remove the `selected` class depending on the value of `hostSelected`. 

## Re-using the Directive

We can re-use this directive on a different type of element.

---> toggle-para.component.ts

You can see the result here.

---> toggle-para app
