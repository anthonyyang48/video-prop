$(document).ready(function(){
    $('#feature1').hide();
    $('#feature2').hide();
    $("#video-active").on(
            "timeupdate", 
            function(event){
            onTrackedVideoFrame(this.currentTime, this.duration);
            currentTime=this.currentTime; 
            
        });
    // document.getElementById("video-active").currentTime = 10;
    $('#first').click(function(){
        var vid = document.getElementById("video-active");
        vid.pause();
        $('#feature2').hide();
        $('#original').hide(); 
        $('#feature1').show();
        console.log('hi');
        $('video').removeAttr('id');
        $('video:nth-child(1)').attr('id', 'video-active');
        document.getElementById("video-active").currentTime = 10;
    });
    $('').click(function(){
        $('#feature1').hide();
        $('#original').hide(); 
        $('#feature2').show();
        $('video').removeAttr('id');
        $('videovideo:nth-child(2)').attr('id', 'video-active');
       
    });
    $('').click(function(){
        $('#feature1').hide();
        $('#feature2').hide(); 
        $('#original').show();
        $('video').removeAttr('id');
        $('video:nth-child(0)').attr('id', 'video-active');
          
    });
});