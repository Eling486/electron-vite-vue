const axios = require('axios')

const headers = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
    'referer': null
}

module.exports = {
    getImgBase64: async ([url, referer = null]) => {
        let header = headers
        header.referer = referer
        const res = await axios.get(url, {headers: header, responseType: 'arraybuffer'})
        let result = new Buffer.from(res.data, 'binary').toString('base64')
        return `data:image/jpg;base64,${result}`
    }
}