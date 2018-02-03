# Angular Custom Attribute Directives

Implement attribute directives with the `@Directive`, `@HostBinding` and `@HostListener` decorators. 
Use `Renderer2`, `ElementRef` and `NativeElement` to change the appearance or behavior of a DOM element.

# Creating a Directive

We start by using a directive to change this button to be a toggle button.

---> toggle-button app

We do so by adding the `appToggle` attribute to the button element.

---> toggle-button.component.ts

And specify `appToggle` as the attribute selector in the `@Directive` decorator of our directive class.   

---> toggle.directive.ts

`@HostListener` subscribes to the events of the DOM element that hosts this attribute directive, which in this case is the `<button>`  element. 

`@HostBinding` sets a property value on the host element. Here we add or remove the `selected` class depending on the value of `hostSelected`. 

# Re-using the Directive

We can re-use this directive on a different type of element.

---> toggle-para.component.ts

You can see the result here.

---> toggle-para app

## `@HostListener` and `@HostBinding`

This app uses a couple of directives to show several examples of `@HostListener` and `@HostBinding`.

---> host.component app

### The Component

Here is the component implementation, and it's not obvious how the directives are being used.

---> host.component.ts

### The Container Directive

This is because the first directive is binding to any `section` element with a `container` class, not a specific custom attribute.

---> container.directive.ts

The `color` variable is used to specify the background color of the host, and is updated as the user enters (`mouseover`) 
and leaves (`mouseleave`) the container.

The `onMouseClicks` supports several `@HostListener` decorators and uses the DOM `MouseEvent` 
object, which is passed in as a parameter, to distinguish between them.

### The Input Directive

The second directive will bind itself to any text input.

---> input.directive.ts

The directive performs two actions. 

Firstly, it adds a border around the active input field. The standard DOM `focus` and `blur` events set the `border` flag to 
determine the CSS border style to be used.
The border can also be removed from the current input field using the escape key.

Secondly the input fields are toggled between enabled and disabled when a `document:click` event is received. 
This shows that directives can in fact handle events outside the host.

_Note about the selectors. Use custom attributes for clarity._

# Directive Communication

## Input

We pass values to the directive by binding to a variable decorated with `@Input`. 
For example, we can pass a confirmation message and the function to run if confirmed.

---> confirm.component.ts

---> confirm.directive.ts

---> confirm app

# Output  

Take a look at this demo app.

---> test-snippet app

Here is the code.

---> text-snippet.component.ts

---> test-snippet.directive.ts

## Events

The `EventEmitter` allows us to pass values out of the directive.

---> test-snippet.directive.ts

And we use Angular's [event binding syntax](https://lishman.io/angular-2-event-binding) 
to receive the event payload. 

---> text-snippet.component.ts

## Template Reference Variable
˚
The example also a [template reference variable](https://lishman.io/angular-template-reference-variables)
to access the public methods on the directive.

---> text-snippet.component.ts

---> test-snippet.directive.ts

# Access the Host DOM Element

To access the host DOM element, inject an `ElementRef` object and using the `nativeElement` property.

_Note about `ElementRef` being an abstraction to work with other renderers_

_Note about security when using `nativeElement`_

