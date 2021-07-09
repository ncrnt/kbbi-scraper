const kbbi = require('kbbi-scraper');

(async () => {
    const query = 'pohon'

    kbbi(query).then(res => {
        console.log(res);
    }).catch(console.error());
})()

