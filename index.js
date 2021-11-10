const axios = require('axios').default;
const cheerio = require('cheerio');
const baseUrl = require('./helper.json').base_url;

module.exports = (query) => {
    if (!query) throw new Error('Masukkan kata!');
    return new Promise((resolve, reject) => {
        let dataError = {
            message: 'Kata tidak ditemukan!',
            error: true,
            data: {}
        }

        var _format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        if(_format.test(query)) return resolve(dataError);

        axios.get(`${baseUrl}/entri/${query}`)
            .then((response) => {
                if (response.status === 200) {
                    const res = response.data;
                    const $ = cheerio.load(res);
                    let hasil = {};

                    hasil.arti = null
                    hasil.title = null

                    $('.container').filter(function (a, b) {
                        hasil.title = $(this).find('h2').text().trim() == ''
                            ? null
                            : $(this).find('h2').text().trim(),

                            hasil.arti = $(this).find('li').eq(0).text().replace(/\s+/g, ' ').trim() == ''
                                ? null
                                : $(this).find('li').eq(0).text().replace(/\s+/g, ' ').trim()
                    });

                    let finalHasil = {
                        message: 'Berhasil!',
                        error: false,
                        data: hasil
                    }

                    if (hasil.arti !== 'memudahkan pencarian Anda melalui berbagai fitur yang hanya tersedia bagi pengguna terdaftar') {
                        if (hasil.arti === null || hasil.title === null) return resolve(dataError);
                        resolve(finalHasil)
                    } else {
                        resolve(dataError);
                    }
                }
            }).catch(console.error())
    })
}
