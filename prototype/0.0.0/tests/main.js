// Test the grammar directly in a localhost server, or node console.
import { HTML } from "../src/html.js";

/** Sample factory package */
const Lib = {
    Elements: {
        HTML
    }
}
// Real-world production use
new Lib.Elements.HTML('div').t('This is my first HTML block, using Grammatica!').log().attach();