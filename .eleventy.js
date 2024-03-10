const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = eleventyConfig => {
    
    //export assets folder
    eleventyConfig.addPassthroughCopy("src/assets",{
        filter: [
            "!sass"
        ]
    });

    return {
        dir: {
            input: 'src',
            output: '_site'
        }
    }
};