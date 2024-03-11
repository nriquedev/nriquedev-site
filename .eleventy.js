const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = eleventyConfig => {
    
    //export assets folder
    eleventyConfig.addPassthroughCopy("src/assets",{
        filter: [
            "!sass"
        ]
    });

    //Multiple config files
    eleventyConfig.addPlugin(require('./config/custom-markdown-rules.js'));
    eleventyConfig.addPlugin(require('./config/custom-filters.js'));

    return {
        dir: {
            input: 'src',
            output: '_site'
        }
    }
};