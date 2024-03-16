require('dotenv').config();

const isDevEnv = process.env.DEV_ENVIRONMENT;

module.exports = () => {
    return {
        eleventyComputed: {
            eleventyExcludeFromCollections: (data) => {
                if (isDevEnv) {
                    return data.eleventyExcludeFromCollections;
                }
                else {
                    return true;
                }
            },
            permalink: (data) => {
                if (!isDevEnv) {
                    return false;
                }
                else {
                    return data.page.filePathStem.replace('/drafts/', '') + '/';
                }
            }
        }
    }
};