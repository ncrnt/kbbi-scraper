const axios = require('axios').default;
const cheerio = require('cheerio').default;
const baseUrl = require('./helper.json').base_url;

function kbbi(query) {
    return new Promise((resolve, reject) => {
        axios.get(`${baseUrl}/entri/${query}`)
            .then((response) => {
                if (response.status === 200) {
                    const res = response.data;
                    const $ = cheerio.load(res);
                    let hasil = {};

                    $('.container').filter(function (a, b) {
                        hasil.title = $(this).find('h2').text().trim() == ''
                            ? null
                            : $(this).find('h2').text().trim(),

                            hasil.arti = $(this).find('ol').find('li').text().replace(/\s+/g, ' ').trim() == ''
                                ? null
                                : $(this).find('ol').find('li').text().replace(/\s+/g, ' ').trim()
                    });

                    const finalHasil = {
                        author: 'Nathz',
                        donasi: 'https://saweria.co/Natsu062',
                        error: false,
                        data: hasil
                    }

                    if (hasil.arti !== null) {
                        resolve(finalHasil)
                    } else {
                        const dataError = {
                            message: 'Kata tidak ditemukan!',
                            error: true
                        }
                        resolve(dataError);
                    }
                }
            }).catch(err => console.log(err));
    })
}

module.exports.KBBI = kbbi