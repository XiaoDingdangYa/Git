$(window).on('load', () => {
    $('.imgup').bind('click', function(event) {
        window.location.href = "product.html"
    })
    $("#topbtnwomen").click(() => {
        $("#menbody").css("display", "none")
        $("#womenbody").css("display", "")
    })
    $("#topbtnmen").click(() => {
        $("#womenbody").css("display", "none")
        $("#menbody").css("display", "")
    })
    
    $(window).scroll(() => {
        if ($(window).scrollTop() > 600 && $('#left').css('left') == '-1000px') {
            $('#left').animate({
                left: '10px',
                top: '10px'
            }, {
                duration: 1000,
            })

            $('#right').animate({
                right: '10px',
                top: '10px'
            }, {
                duration: 1000,
            })
        }
    })

   
    $('#sub').click(function() {
        var d = new Date()
        let html = $('#box').html() +'<h6>'+d.toLocaleString()+'</h6>'+'<p><span>'+'</span>'+$('#comments').val()+'</p>'
      if($('#comments').val()){
            $('#box').html(html)
            $('#comments').val('')
    }
        })
})

