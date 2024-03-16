require('dotenv').config();

const isDevEnv = process.env.DEV_ENVIRONMENT;

module.exports = () => {
    console.log ("dev var: =======> " , isDevEnv);
    return {
        eleventyComputed: {
            eleventyExcludeFromCollections: (data) => {
                console.log("eleventyEcludeFromcollections: ---->", isDevEnv);
                if (isDevEnv == 'true') {
                    //console.log("exclude: ", isDevEnv);
                    return data.eleventyExcludeFromCollections;
                }
                else {
                    return true;
                }
            },
            permalink: (data) => {
                if (isDevEnv == 'false') {
                    //console.log("permalink: ======> " , !isDevEnv)
                    return false;
                }
                else {
                    console.log("filepathStem: ", data.page.filePathStem );
                    console.log("outputPath: ", data.page.filePathStem );
                    console.log("result: ", data.page.filePathStem.replace('/drafts/', '/blog/') + '/' + '\n');
                    //console.log("permalink: ", data.page.filePathStem.replace('/drafts/', '') + '/');
                    //return data.page.filePathStem.replace('/drafts/', '') + '/';
                    return data.page.filePathStem.replace('/drafts/', '/blog/') + '/';
                }
            }
        }
    }
};