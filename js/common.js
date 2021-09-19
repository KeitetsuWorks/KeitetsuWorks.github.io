document.addEventListener('mdl-componentupgraded', function(){
    if (!document.getElementById('adsbygooglejs')) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.id = 'adsbygooglejs';
        script.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
        head.appendChild(script);
    }
});
