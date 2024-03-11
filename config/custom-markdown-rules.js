//This is to use markdown.it
const markdownIt = require("markdown-it");
const mdSetup = markdownIt();
//End setup markdownIt.

module.exports = eleventyConfig => {
    //This is related to markdownIt.
    //Set the markdown renderer
    eleventyConfig.setLibrary("md", mdSetup);

    //Set custom render for a html image tag
    mdSetup.renderer.rules.image = (tokens, idx, options, enf, self) => {
        //Get token of a specific image
        const token = tokens[idx];
        //Use token to get src and alt attributes
        const src = token.attrGet("src");
        const alt = token.content;
        //Return desired image output.
        return `
                <img class="img-fluid
                            mx-auto
                            d-block
                            img-thumbnail
                            shadow
                            "
                    src="${src}" 
                    alt="${alt}" loading="lazy" />`;
    }
    //End markdownIt
}