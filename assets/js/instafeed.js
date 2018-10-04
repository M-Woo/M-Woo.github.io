$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '2130074869',
        limit: 20,
        resolution: 'standard_resolution',
        accessToken: '2130074869.1677ed0.a850e9acb24247658d1f6cbd970d7b3d',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 col-md-4 col-sm-6 gallery instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });
    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});