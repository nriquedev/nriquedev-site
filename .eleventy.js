const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
require("dotenv").config();

module.exports = eleventyConfig => {
    
    //export assets folder
    eleventyConfig.addPassthroughCopy("src/assets",{
        filter: [
            "!sass"
        ]
    });

    //JSON filter stringify
    eleventyConfig.addFilter('stringify', (data) => {
        return JSON.stringify(data, null, 2)
    });

    //Multiple config files
    eleventyConfig.addPlugin(require('./config/custom-markdown-rules.js'));
    eleventyConfig.addPlugin(require('./config/custom-filters.js'));
    eleventyConfig.addPlugin(require('./config/custom-syntax-highlighting.js'));
    eleventyConfig.addPlugin(require('./config/custom-shortcode-listTags.js'));


    //Prefix to deploy to a subdir
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin, {
        extensions: "html, css, png, jpeg, webp"
    });

    return {
        //pathPrefix: process.env.DEV_ENVIRONMENT === 'true' ? "" : "/nriquedev-site/",
        dir: {
            input: 'src',
            output: '_site'
        }
    }
};