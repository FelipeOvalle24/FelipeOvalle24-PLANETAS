const tierraimg = document.getElementById("tierra-img")
const tierrainternaimg = document.getElementById("tierra-interna-img")
const mercurioimg = document.getElementById("mercurio-img")
const mercuriointernoimg = document.getElementById("mercurio-interno-img")
const venusimg = document.getElementById("venus-img")
const venusinternoimg = document.getElementById("venus-interno-img")
const marteimg = document.getElementById("marte-img")
const marteinternoimg = document.getElementById("marte-interno-img")
const jupiterimg = document.getElementById("jupiter-img")
const jupiterinternoimg = document.getElementById("jupiter-interno-img")
const saturnoimg = document.getElementById("saturno-img")
const saturnointernoimg = document.getElementById("saturno-interno-img")
const uranoimg = document.getElementById("urano-img")
const uranointernoimg = document.getElementById("urano-interno-img")
const neptunoimg = document.getElementById("neptuno-img")
const neptunointernoimg = document.getElementById("neptuno-interno-img")

const botonTierra = document.getElementById("boton-tierra-general")
const botonTierraInterna = document.getElementById("boton-tierra-estructura")
const botonMercurio = document.getElementById("boton-mercurio-general")
const botonMercurioInterno = document.getElementById("boton-mercurio-estructura")
const botonVenus = document.getElementById("boton-venus-general")
const botonvenusInterno = document.getElementById("boton-venus-estructura")
const botonMarte = document.getElementById("boton-marte-general")
const botonMarteInterno = document.getElementById("boton-marte-estructura")
const botonJupiter = document.getElementById("boton-jupiter-general")
const botonJupiterInterno = document.getElementById("boton-jupiter-estructura")
const botonSaturno = document.getElementById("boton-saturno-general")
const botonSaturnoInterno = document.getElementById("boton-saturno-estructura")
const botonUrano = document.getElementById("boton-urano-general")
const botonUranoInterno = document.getElementById("boton-urano-estructura")
const botonNeptuno = document.getElementById("boton-neptuno-general")
const botonNeptunoInterno = document.getElementById("boton-neptuno-estructura")

tierrainternaimg.style.display = "none"
mercuriointernoimg.style.display = "none"
venusinternoimg.style.display = "none"
marteinternoimg.style.display = "none"
jupiterinternoimg.style.display = "none"
saturnointernoimg.style.display = "none"
uranointernoimg.style.display = "none"
neptunointernoimg.style.display = "none"

botonTierra.addEventListener("click", tierraGeneral)
botonTierraInterna.addEventListener("click", tierraEstructura)
botonMercurio.addEventListener("click", mercurioGeneral)
botonMercurioInterno.addEventListener("click", mercurioEstructura)
botonVenus.addEventListener("click", venusGeneral)
botonvenusInterno.addEventListener("click", venusEstructura)
botonMarte.addEventListener("click", marteGeneral)
botonMarteInterno.addEventListener("click", marteEstructura)
botonJupiter.addEventListener("click", jupiterGeneral)
botonJupiterInterno.addEventListener("click", jupiterEstructura)
botonSaturno.addEventListener("click", saturnoGeneral)
botonSaturnoInterno.addEventListener("click", saturnoEstructura)
botonUrano.addEventListener("click", uranoGeneral)
botonUranoInterno.addEventListener("click", uranoEstructura)
botonNeptuno.addEventListener("click", neptunoGeneral)
botonNeptunoInterno.addEventListener("click", neptunoEstructura)

function tierraGeneral(){
    tierrainternaimg.style.display = "none"
    tierraimg.style.display = "flex"
}

function tierraEstructura(){
    tierrainternaimg.style.display = "flex"
    tierraimg.style.display = "none"
}

function mercurioGeneral(){
    mercuriointernoimg.style.display = "none"
    mercurioimg.style.display = "flex"
}

function mercurioEstructura(){
    mercuriointernoimg.style.display = "flex"
    mercurioimg.style.display = "none"
}

function venusGeneral(){
    venusinternoimg.style.display = "none"
    venusimg.style.display = "flex"
}

function venusEstructura(){
    venusinternoimg.style.display = "flex"
    venusimg.style.display = "none"
}

function marteGeneral(){
    marteinternoimg.style.display = "none"
    marteimg.style.display = "flex"
}

function marteEstructura(){
    marteinternoimg.style.display = "flex"
    marteimg.style.display = "none"
}

function jupiterGeneral(){
    jupiterinternoimg.style.display = "none"
    jupiterimg.style.display = "flex"
}

function jupiterEstructura(){
    jupiterinternoimg.style.display = "flex"
    jupiterimg.style.display = "none"
}

function saturnoGeneral(){
    saturnointernoimg.style.display = "none"
    saturnoimg.style.display = "flex"
}

function saturnoEstructura(){
    saturnointernoimg.style.display = "flex"
    saturnoimg.style.display = "none"
}

function uranoGeneral(){
    uranointernoimg.style.display = "none"
    uranoimg.style.display = "flex"
}

function uranoEstructura(){
    uranointernoimg.style.display = "flex"
    uranoimg.style.display = "none"
}

function neptunoGeneral(){
    neptunointernoimg.style.display = "none"
    neptunoimg.style.display = "flex"
}

function neptunoEstructura(){
    neptunointernoimg.style.display = "flex"
    neptunoimg.style.display = "none"
}