//This is to use markdown.it
const markdownIt = require("markdown-it");
const mdSetup = markdownIt();
//End setup markdownIt.

module.exports = eleventyConfig => {
    //This is related to markdownIt.
    //Set the markdown renderer
    eleventyConfig.setLibrary("md", mdSetup);

    const proxy = (tokens, idx, options, env, self) => self.renderToken(tokens, idx, options);

    //See documentation about rules in:
    //https://github.com/markdown-it/markdown-it/blob/master/docs/examples/renderer_rules.md
    // Examples:
    // The Publishing Project
    // https://publishing-project.rivendellweb.net/customizing-markdown-it/#adding-attributes-to-links

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
                            rounded-4
                            shadow
                            "
                    src="${src}" 
                    alt="${alt}" loading="lazy" />`;
    }

    //Set custom render for a html a tag
    defaultLinkOpenRenderer = mdSetup.renderer.rules.link_open || proxy;

    mdSetup.renderer.rules.link_open = function(tokens, idx, options, env, self) {
      tokens[idx].attrJoin("class", "link-secondary link-offset-1 link-underline-opacity-25 link-opacity-75-hover link-underline-opacity-75-hover")
      return defaultLinkOpenRenderer(tokens, idx, options, env, self)
    };

    //End markdownIt
}