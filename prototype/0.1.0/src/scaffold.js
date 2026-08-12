/** This module contains architecture extensions for working with abstract blocks, e.g., HTML or FUNCTION */

/** Template */
export class Template {

}
export class Component {
    constructor() {

    }
}
/** A pattern is... */
export class Pattern {

}
/** Example of packaging reuseable templates, These would be accessed as "templates.section" something like extended HTML. */
export const Library = {
    
    // Some variations of markup for templates...
    section: () => new HTML('section').css('spacer'),
    section: { constructor: 'section', css: 'spacer'},
    section: new Template('section')
  
}
/** However, it makes more sense to package it as a Library class/object, rather than a variable. In keeping with the theme of lib.js */
export class Library { }
