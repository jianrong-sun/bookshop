const API_URL = "";

export default {
	post: function(url, data, header) {
		if (url.indexOf("http") < 0) {
			url = API_URL + url;
		}
		return new Promise((succ, error) => {
			uni.request({
				url: url,
				data: data ||  {},
				method: "POST",
				header: {
					"content-type": header ||  "application/x-www-form-urlencoded",
					"timestamp": new Date().getTime()
				},
				success: function(result) {
					if (typeof succ == "function") {
						succ(result.data)
					}
				},
				fail: function(e) {
					
					if (typeof error == "function") {
						error(e)
					}
				}
			})
		})

	},
	get: function(url, data, header) {
		if (url.indexOf("http") < 0) {
			url = API_URL + url;
		}
		console.log( url )
		return new Promise((succ, error) => {
			uni.request({
				url: url,
				data: data || {},
				method: "GET",
				header: {
					"content-type":  header ||  "application/x-www-form-urlencoded",
					"timestamp": new Date().getTime()
				},
				success: function(result) {
					if (typeof succ == "function") {
						succ(result.data)
					}
				},
				fail: function(e) {
					console.log( e )
					if (typeof error == "function") {
						error(e)
					}
				}
			})
		})
	},
}
