
export default {
    authHttp: {
        post: function(url, data) {
            return $.ajax({
                type: 'POST',
                url: url,
                data: data
            })
        }
    }
}