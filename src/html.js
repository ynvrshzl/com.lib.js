/**
 * The HTML construction interface provides unintuitive interface for working with HTML graphical elements and basic element operations such as join, query, and style.
*/
export class HTML {

    /* From an HTML element namespace */
    constructor(tag) {
        this.init(tag);
    }
    /* Initializing method of the class. */
    init(tag) {
        this.HTMLSourceElement = document.createElement(tag);
        return this;
    }

    /** 
     * Title:         -
     * Type:          - 
     * Class:         -
     * Category:      app
     * Wraps:         'document.appendChild(element)'
     * Description:   - 
     * Behavior:      you may use this command without supplying 'selector', in this case, default behavior always adds the element to the 'HTML \<body\>' 
     */
    attach(selector){

        // see 'behavior'
        if (!selector){
            document.body.appendChild(this.HTMLSourceElement);
        // see 'behavior'
        } else {
            document.body.querySelector(selector).appendChild(this.HTMLSourceElement);
        }
        return this;
    }

    /** Text string for html. Underlying implements "textContent" */
    t(string) {
        this.HTMLSourceElement.textContent = string
        return this
    }

    /** 
     * description: Add CSS classnames to the element.
     * schema: must be comma-separated */
    css(Classnames) {
        this.HTMLSourceElement.classList.add([...Classnames])
        return this;
    }

    /** 
     * description: inline html style css 
     * schema: any string */
    inlinecss(Stylestring) {
        this.HTMLSourceElement.style.cssText = Stylestring
        return this;
    }
    
    /** Log this element chain to the console */
    log() {
        console.group('grammatica+com.lib.js:')
        // log self
        console.log(this)
        console.groupEnd()

        return this;
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
        return this;
    }
};
