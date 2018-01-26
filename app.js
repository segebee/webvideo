window.onload = function () {
    //normalize feature for all browsers
    navigator.getUserMedia = (navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia || 
        navigator.msGetUserMedia)

    if (navigator.getUserMedia)
    {
        //fire the camera
        navigator.getUserMedia(
            {
                //constraints
                video: true
            },
            function(localMediaStream) 
            {
                var vid = document.getElementById('stream')

                vid.src = window.URL.createObjectURL(localMediaStream)
            },
            function(err) 
            {
                alert(err)
            }

        )
    }
    else{
        alert('your browser doesnt support this')
    }

    var snap = document.getElementById('snap')

    var video = window.video = document.getElementById("stream")
    var canvas = window.canvas = document.getElementById("pictureContainer")
    
    canvas.width = 480
    canvas.height = 360

    snap.addEventListener("click", snapPicture, false)

    function snapPicture()
    {
        //alert('i work')
        var imageContainer = document.getElementById("imageContainer")
        imageContainer.style.display = 'block'

        canvas.getContext('2d').drawImage(video,0,0, canvas.width, canvas.height)
        //updateImages(canvas.toDataURL());
    }

    function updateImages(src) {
        var imgs = document.querySelectorAll(".demo__item img")
        for (var i = 0; i < imgs.length; i++) imgs[i].src = src
    }

    
}