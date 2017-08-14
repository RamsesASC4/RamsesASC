
function jsonFlickrFeed(json) {
    $.each(json.items, function (i, item) {
        $("<img />").attr("src", item.media.m).appendTo("h6");
    });
};

$.ajax({
    url: 'https://api.flickr.com/services/feeds/photos_public.gne',
    dataType: 'jsonp',
    data: { "tags": "cats", "format": "json" }
});