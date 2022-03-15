$(function () {
    $.ajax({
        type: 'GET',
        url: 'https://api.twitter.com/2/tweets/:id',
        success: function(data) {
            console.log('success', data);
        }
    })
})
