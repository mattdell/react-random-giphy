import request from 'superagent';

var giphyUrl = 'http://api.giphy.com/v1/stickers/random?api_key=dc6zaTOxFJmzC&tag={tag-name}'

export default {
	getGiph(searchQuery) {
		if (!searchQuery) {
			reject();
		}

		return new Promise(function (resolve, reject) {
			var url = giphyUrl.replace('{tag-name}', searchQuery.toLowerCase().replace(' ', '+'));
			request
				.get(url)
				.end(function (err, res) {
					if (err || res.status === 404) {
						reject();
					} else {
						resolve(JSON.parse(res.text));
					}
			});
		});
	},
};