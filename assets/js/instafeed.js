$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        target: "instafeed",
        // userId: '2130074869',
        limit: 30,
        resolution: 'standard_resolution',
        accessToken: 'IGQVJVUEVkaUxtaVByRFl0Um82eHdIOXFlMXEyODZAqbWtzWlgzT3RLWmtfUFNwLU05UXIwckk2NmdpbjdBeTVjX1BwOXk2Y3lVeWxvRjA0X00yTko5bHBBcjVkVXM3b1A0RkdZAWHljU3k2WEdsQ1lTWgZDZD',
        sortBy: 'most-recent',
        template: '<div class="col-lg-4 col-md-4 col-sm-4 gallery instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });
    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    // $('.gallery').magnificPopup({
    //     type: 'image',
    //     delegate: 'a',
    //     gallery: {
    //         enabled: true
    //     }
    // });


});
