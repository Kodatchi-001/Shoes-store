var color_1 = document.getElementById('color-1')
var color_2 = document.getElementById('color-2')
var color_3 = document.getElementById('color-3')
var color_4 = document.getElementById('color-4')

color_1.onclick = function () {
    document.getElementById("img-home").src = './assets/red-nike.png'
    document.getElementById("img-home").style.width = '60vw'
    document.getElementById("img-home").style.height = '55vh'
}
color_2.onclick = function () {
    document.getElementById("img-home").src = './assets/yellow-nike.png'
    document.getElementById("img-home").style.width = '60vw'
    document.getElementById("img-home").style.height = '55vh'
}
color_3.onclick = function () {
    document.getElementById("img-home").src = './assets/blue-nike.png'
    document.getElementById("img-home").style.width = '60vw'
    document.getElementById("img-home").style.height = '55vh'
}
color_4.onclick = function () {
    document.getElementById("img-home").src = './assets/black-nike.png'
    document.getElementById("img-home").style.width = '60vw'
    document.getElementById("img-home").style.height = '55vh'
}

var img_1 = document.getElementById("test-1")
var img_2 = document.getElementById("test-2")
var img_3 = document.getElementById("test-3")
var img_4 = document.getElementById("test-4")

img_1.onclick = function () {
    document.getElementById("img-home").src = './assets/default-nike.png'
    color_1.onclick = function () {
        document.getElementById("img-home").src = './assets/red-nike.png'
    }
    color_2.onclick = function () {
        document.getElementById("img-home").src = './assets/yellow-nike.png'

    }
    color_3.onclick = function () {
        document.getElementById("img-home").src = './assets/blue-nike.png'
    }
    color_4.onclick = function () {
        document.getElementById("img-home").src = './assets/black-nike.png'
    }

}

img_2.onclick = function () {
    document.getElementById("img-home").src = './assets/sebadri-1.png'
    color_1.onclick = function () {
        document.getElementById("img-home").src = './assets/sebadri-5.png'

    }
    color_2.onclick = function () {
        document.getElementById("img-home").src = './assets/sebadri-4.png'
    }
    color_3.onclick = function () {
        document.getElementById("img-home").src = './assets/sebadri-2.png'

    }
    color_4.onclick = function () {
        document.getElementById("img-home").src = './assets/sebadri-3.png'

    }

}
img_3.onclick = function () {
    document.getElementById("img-home").src = './assets/default-3.png'
    color_1.onclick = function () {
        document.getElementById("img-home").src = './assets/sebadri-red.png'

    }
    color_2.onclick = function () {
        document.getElementById("img-home").src = './assets/sebadri-yellow.png'

    }
    color_3.onclick = function () {
        document.getElementById("img-home").src = './assets/sebadri-blue.png'

    }
    color_4.onclick = function () {
        document.getElementById("img-home").src = './assets/sebadri-black.png'
    }
}
img_4.onclick = function () {
    document.getElementById("img-home").src = './assets/default-4.png'
    color_1.onclick = function () {
        document.getElementById("img-home").src = './assets/sebadri-2-red.png'
    }
    color_2.onclick = function () {
        document.getElementById("img-home").src = './assets/sebadri-2-yellow.png'
    }
    color_3.onclick = function () {
        document.getElementById("img-home").src = './assets/sebadri-2-blue.png'
    }
    color_4.onclick = function () {
        document.getElementById("img-home").src = './assets/sebadri-2-black.png'
    }
}
var test_1 = document.getElementById('ahmed')
var test_2 = document.getElementById('nav-2')
var test_3 = document.getElementById('nav-3')
var test_4 = document.getElementById('nav-4')
var test_5 = document.getElementById('nav-5')
var test_6 = document.getElementById('nav-6')

test_1.onclick = function name(params) {
    document.querySelector(".tittle-2").style.height = '8vh'
    document.querySelector(".tittle-2").style.opacity = '1'
    document.getElementById("nav-2").style.opacity = '1'
    document.getElementById("nav-2").style.display = 'block'
    document.getElementById("nav-3").style.opacity = '1'
    document.getElementById("nav-3").style.display = 'block'
    document.getElementById("nav-4").style.opacity = '1'
    document.getElementById("nav-4").style.display = 'block'
    document.getElementById("nav-5").style.opacity = '1'
    document.getElementById("nav-5").style.display = 'block'
    document.getElementById("nav-6").style.opacity = '1'
    document.getElementById("nav-6").style.display = 'block'
    document.getElementById("nav-7").style.opacity = '1'
    document.getElementById("nav-7").style.display = 'block'
}
var modee = document.getElementById("icone-mode")

modee.onclick = function (){
    document.body.classList.toggle('theme')
    document.body.style.transition = '2s'
}
