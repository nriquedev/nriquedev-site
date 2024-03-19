module.exports = function(eleventyConfig) {
    eleventyConfig.addShortcode("listTagsExcept", async function(tags, excludedTags) {
        let filteredTags = tags.filter(tag => !excludedTags.includes(tag));
        //return filteredTags.join(", ");
        return filteredTags;

    });
};
