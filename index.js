var axios = require('axios');
var FormData = require('form-data');

const relink = {

    async short(url) {
        return new Promise(async (resolve, reject) => {
            if (!url) return reject('Url not specified');
            var data = new FormData();
            data.append('url', url);
            
            var config = {
              method: 'post',
              url: 'https://rel.ink/api/links/',
              headers: { 
                ...data.getHeaders()
              },
              data : data
            };
            
            axios(config)
            .then(function (response) {
                let json = JSON.parse(JSON.stringify(response.data))
                json["url"] = "https://rel.ink/"+json.hashid;
              resolve(json);
            })
            .catch(function (error) {
              reject(error);
            });
        });


    }
}

module.exports = relink;
