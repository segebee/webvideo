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
}