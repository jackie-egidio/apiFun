$(function () {
    $.ajax({
        type: 'GET',
        url: 'https://api.twitter.com/2/tweets/:id?tweet.fields=attachments,author_id,created_at,entities,geo,id,in_reply_to_user_id,lang,possibly_sensitive,referenced_tweets,source,text,withheld',
        success: function(data) {
            console.log('success', data);
        }
    })
})
