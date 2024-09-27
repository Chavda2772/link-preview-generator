let linkPreviewGenerator = require('./index.js')

async function testUrl(url) {
    try {
        let data = await linkPreviewGenerator(url)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

testUrl('https://www.google.com/')