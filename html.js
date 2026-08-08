/**
 * The HTML construction interface provides unintuitive interface for working with HTML graphical elements and basic element operations such as join, query, and style.
*/
export class HTML {

    /* From an HTML element namespace */
    constructor(tag) {
        this.init(tag);
    }

    /** Standard HTML class method for returning class this */
    continue(){
        return this;
    }

    /* Initializing method of the class. */
    init(tag) {
        this.HTMLSourceElement = document.createElement(tag);
    }

    /** Text string for html. Underlying implements "textContent" */
    text(string) {
        this.HTMLSourceElement.textContent = string
        this.continue()
    }

    /** 
     * description: Add CSS classnames to the element.
     * schema: must be comma-separated */
    css(Classnames) {
        this.HTMLSourceElement.classList.add([...Classnames])
        this.continue();
    }

    /** 
     * description: inline html style css 
     * schema: any string */
    inlinecss(Stylestring) {
        this.HTMLSourceElement.style.cssText = Stylestring
        this.continue();
    }
    
    /** Log this element chain to the console */
    log() {
        this.continue();
    }

    /** Chain, group or insert. Note that this method uses javascript's standard "appendChild" DOM method, meaning only valid HTML elements will be accepted.  */
    group(Elements) {

        // Loop 
        Elements.forEach((Element) => {

            //  If the element is a class instance
            if (Element instanceof HTML) {
            
                // Append the specific 'HTMLSourceElement' property
                this.HTMLSourceElement.appendChild(Element.HTMLSourceElement)
            
            } else {
                //  Otherwise it is a regular HTML element
                this.HTMLSourceElement.appendChild(Element)
            }

        // End loop
        });
        this.continue();
    }
};
