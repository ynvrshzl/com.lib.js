/**
 * General button component for web, with common button operations and utilities.
 * @example new Button.exec(function)
 */
export class Button extends HTML {
    constructor() {
        /**
         * Pass in the "button" constructor to the HTML class constructor, from which we extend.
         */
        super('button');
    }
    exec(f) {
        this.element.onclick = f;
        return this;
    }
}
export class Icon extends HTML {
    constructor(namespace){
        super("i");
        this.icon(namespace);
    }
}
