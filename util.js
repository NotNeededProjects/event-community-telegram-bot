const getUrls = require('get-urls')

module.exports = {
    ParseLinksInText: (message) => {
        return getUrls(message)
    },
}