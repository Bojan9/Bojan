$(function(){
    $.ajax("http://api-dcard.kostadinovski.info/api/values").then(function(data){
        var sb = "";
        data.forEach(function(slider){
            sb += '<li>'+
                           ' <img src="'+slider.Slika+'" alt="" uk-cover>' +
                           ' <div class="uk-position-center uk-position-small uk-text-center uk-light borderLarge">' +
                                '<h3 class="uk-margin-remove homeHeaderMedium">'+slider.Title+'</h3>' +
                                '<h1 class="uk-margin-remove homeHeaderLarge">'+ slider.Subtitle+'</h1><br><br>' +
                                '<p class="uk-margin-remove homeParagraphMedium">'+ slider.Description+'</p>' +
                            '</div>'+
                        '</li>';
        });
        $("#swiper").append(sb);
    })
})
