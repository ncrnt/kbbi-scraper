const api = require('kbbi-scraper');

(async () => {
    const query = 'pohon'

    api.KBBI(query).then(res => {
        console.log(res);
    })
})()

