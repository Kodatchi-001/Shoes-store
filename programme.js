var color_1 = document.getElementById('color-1')
var color_2 = document.getElementById('color-2')
var color_3 = document.getElementById('color-3')
var color_4 = document.getElementById('color-4')

color_1.onclick = function () {
    document.querySelector("img").src = './assets/red-nike.png'
    document.querySelector("img").style.width = '60vw'
    document.querySelector("img").style.height = '55vh'
}
color_2.onclick = function () {
    document.querySelector("img").src = './assets/yellow-nike.png'
    document.querySelector("img").style.width = '60vw'
    document.querySelector("img").style.height = '55vh'
}
color_3.onclick = function () {
    document.querySelector("img").src = './assets/blue-nike.png'
    document.querySelector("img").style.width = '60vw'
    document.querySelector("img").style.height = '55vh'
}
color_4.onclick = function () {
    document.querySelector("img").src = './assets/black-nike.png'
    document.querySelector("img").style.width = '60vw'
    document.querySelector("img").style.height = '55vh'
}

var img_1 = document.getElementById("test-1")
var img_2 = document.getElementById("test-2")
var img_3 = document.getElementById("test-3")
var img_4 = document.getElementById("test-4")

img_1.onclick = function () {

    document.querySelector("img").src = './assets/default-nike.png'
    

    color_1.onclick = function () {
        document.querySelector("img").src = './assets/red-nike.png'
    }
    color_2.onclick = function () {
        document.querySelector("img").src = './assets/yellow-nike.png'

    }
    color_3.onclick = function () {
        document.querySelector("img").src = './assets/blue-nike.png'
    }
    color_4.onclick = function () {
        document.querySelector("img").src = './assets/black-nike.png'
    }

}

img_2.onclick = function () {
    document.querySelector("img").src = './assets/sebadri-1.png'
    color_1.onclick = function () {
        document.querySelector("img").src = './assets/sebadri-5.png'

    }
    color_2.onclick = function () {
        document.querySelector("img").src = './assets/sebadri-4.png'
    }
    color_3.onclick = function () {
        document.querySelector("img").src = './assets/sebadri-2.png'
    
    }
    color_4.onclick = function () {
        document.querySelector("img").src = './assets/sebadri-3.png'
    
    }

}
img_3.onclick = function () {
    document.querySelector("img").src = './assets/default-3.png'
    color_1.onclick = function () {
        document.querySelector("img").src = './assets/sebadri-red.png'

    }
    color_2.onclick = function () {
        document.querySelector("img").src = './assets/sebadri-yellow.png'

    }
    color_3.onclick = function () {
        document.querySelector("img").src = './assets/sebadri-blue.png'

    }
    color_4.onclick = function () {
        document.querySelector("img").src = './assets/sebadri-black.png'
    }
}
img_4.onclick = function () {
    document.querySelector("img").src = './assets/default-4.png'
    color_1.onclick = function () {
        document.querySelector("img").src = './assets/sebadri-2-red.png'
    }
    color_2.onclick = function () {
        document.querySelector("img").src = './assets/sebadri-2-yellow.png'
    }
    color_3.onclick = function () {
        document.querySelector("img").src = './assets/sebadri-2-blue.png'
    }
    color_4.onclick = function () {
        document.querySelector("img").src = './assets/sebadri-2-black.png'
    }
}

