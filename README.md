# School System Frontend
## Best Practices and Standards Used 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.0.

## Standard
1. Make the components small enough so that they can be reused at many places But large enough that making them any smaller makes no sense. 
2. Encapsulate each business logic in a `module` to promote `SOC (Separation of concern)` [Angular Documentation] (https://angular.io/guide/frequent-ngmodules).
3. create single file for each task performed by a single module `eg. routing, Service, Component, ts etc..`
4. use `Reactive Forms` for forms as they are easy for testing and also hiding component logic from the template promoting `SOC Separation of Concern`.
5. Use `1 tab indentation`  to show hierarcy of code (dont use space).
6. Use `Observables` instead of `Promises` to handel asyncronous coding paradiam as they provide the folowing benefits
    • Observable provide easy retry function if failed operation eg HTTP.
    • Observables do not mutate the server response (as can occur through chained .then() calls on promises). Instead, you can use a series of operators to transform values as needed. 
    • HTTP requests are cancellable through the unsubscribe() method. 
    • Requests can be configured to get progress event updates. 
7. Create a deadicated routing module for each module to handle its routing request.
8. Create error message for each input rather than using a general one say rather than sayin `Field is Required` say `First Name is required`.
9. Place both `*.ts & *.spec.ts files` under the same folder as siblings to make testing each module easy 
10. Use `undefined`. Do not use `null`.

## Namings
1. use `camelCase` naming for variable names `eg. let variableName = 0`.
2. use `camelCase` naming for function names `eg. functionName()`.
3. post-fix observer names with `$` sign `eg. observer$`.
4. pre-fix interface classes with capital `I` `eg. IStudentInterface`. 
5. use whole descriptive names for varibles not short abrivated names `eg. dont say stud` for student instead say `eg Student`.
6. give modules and files a discriptive name that is related with their function. eg. for a file containing student component template use `student.component.html`