var currentTop = window.scrollY
var targetTop = specialTags[minIndex].offsetTop
var T = 1000
var n = 25
var t = T / n
var S = targetTop - currentTop
var s = S / n
var i = 0
var id = setInterval(function(){
    if( i ===n ){
        window.clearInterval(id)
        return
    }
    i += 1
    window.scrollTo(0, currentTop + s * i)
},t)