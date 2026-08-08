/** This module contains... for... */

/**
 * Apply attributes and sign the program directly in source code.
 */
export class Header {
    
    /** Main message of the Header */
    constructor(x){
        this.x = x;
    }
    /** Write copyright into current script */
    copyright(x){
        return this;
    }
    /** Sign author */
    author(x){
        return this;
    }
}
