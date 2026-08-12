/**
 * HTML constructor code
 * Copyright (c) Hazl, 2026
 * @todo in the future, when the built-in methods become too large, make sub-modular classes for handling specific parts of the HTML element. and then a method to select a specific 'kit' of modules, only when needed!
 * @todo in the future, we return the HTML element itself, in the constructor, so we don't akwardly access the element via "const element = HTML('div').element"
*/

/** 
 * @description HTML Component construction interface 
 * @example new HTML("div")
 */
export class HTML {
    constructor(tag) {
        this.HTMLElement = document.createElement(tag)
    }
    /** attach/mount this element */
    inside(target) {

        /** 
         * Double-edge case: when using this class to append to another class, or to a pre-existing html element.
         */
        if (target instanceof HTML) {
            target.HTMLElement.appendChild(this.HTMLElement);
        } else {
            target.appendChild(this.HTMLElement);
        }
        return this;
    }
    /** Apply a comma-separated list of CSS classes to apply to an HTML element  */
    css(...classes) {
        this.HTMLElement.classList.add(...classes)
        return this;
    }
    /** 
     * Set any arbitrary attribute in the system 
     * The 'mset' (Multiple set) operation will apply an array of HTML element attribute.  E.g. HTML('button').mset(['type', 'button']) 
     * @param { Array } argsv  of type array
    */
    set(atr = { k1: v1, k2: v2 }) {

        atr.forEach(([k, v]) => {
            try {
                this.HTMLElement.target.setAttribute(k, v);
            } catch (error) {
                console.error(error);
            }
        })
        return this;
    }
    /** alias for button.onclick */
    exec(F) {
        this.HTMLElement.onclick = F;
        return this;
    }
    /** output content text string */
    text(string) {
        this.HTMLElement.textContent = string;
        return this;
    }
    /** chain (compose) any number of HTMLClassInstances */
    compose(...HTMLClassInstances) {
        [...HTMLClassInstances].forEach((HTMLClassInstance) => this.HTMLElement.appendChild(HTMLClassInstance.HTMLElement));
        return this;
    }
    /** edit inline html (alias for innerHTML) */
    html(string) {
        this.HTMLElement.innerHTML = string;
        return this;
    }
    /** simply logs the element in the console for inspection */
    log() {
        console.log(this);
        return this;
    }
    /** (inline-css) operation to set inline css for an HTML element. */
    icss(string) {
        this.HTMLElement.style.cssText += string;
        return this;
    }
    /** @todo perhaps this should be an externally defined icon logic for attaching an icon to an HTML instance? */
    icon(string) {
        /** example of bootstrapping html meta to create an html meta icon (lol) */
        const i = new HTML('i').inside(this).text(string).css('material-symbols-outlined');
        return this;
    }
}
