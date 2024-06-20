const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')

const botonReiniciar = document.getElementById('boton-reiniciar')
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ATAQUESDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTargetas = document.getElementById("contenedorTargetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")
<<<<<<< HEAD
const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")

=======
const seccionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")
>>>>>>> 0b591da9ae57a282d3d5d3625474d223013d5053

let mokepones=[]
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge 
let mascotaJugador
let ataquesMokepon
let inputCapipepo 
let botonFuego 
let botonAgua 
let botonTierra 
let ataquesMokeponEnemigo
let inputRatigueya
let indexAtaqueJugador
let mascotaJugadorObjeto
let indexAtaqueEnemigo
let botones =  []
let vidasJugador = 3
let vidasEnemigo = 3
let victoriasJugador = 0
let victoriasEnemigo =  0
let lienzo = mapa.getContext("2d")
<<<<<<< HEAD
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './assets/mokemap.png'  
=======
>>>>>>> 0b591da9ae57a282d3d5d3625474d223013d5053

class Mokepon{
    constructor(nombre, foto,vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques=[]
        this.x = 20
        this.y = 30
        this.alto= 80
        this.ancho = 80
        this.mapaFoto = new Image()
        this.mapaFoto.src = foto
        this.velocidadX = 0
        this.velocidadY=0
    }
}

let hipodoge = new Mokepon("Hipodogue","./assets/mokepons_mokepon_hipodoge_attack.png", 5)
let capipepo = new Mokepon("Capipepo","./assets/mokepons_mokepon_capipepo_attack.png", 5)
let ratigueya = new Mokepon("Ratigueya","./assets/mokepons_mokepon_ratigueya_attack.png", 5)

hipodoge.ataques.push(
    { nombre:"💧", id:"boton-agua"},
    { nombre:"💧", id:"boton-agua"},
    { nombre:"💧", id:"boton-agua"},
    { nombre:"🔥", id:"boton-fuego"},
    { nombre:"🌱", id:"boton-tierra"},
)
capipepo.ataques.push(
    { nombre:"🌱", id:"boton-tierra"},
    { nombre:"🌱", id:"boton-tierra"},
    { nombre:"🌱", id:"boton-tierra"},
    { nombre:"🔥", id:"boton-fuego"},
    { nombre:"💧", id:"boton-agua"},
)
ratigueya.ataques.push(
    { nombre:"🔥", id:"boton-fuego"},
    { nombre:"🔥", id:"boton-fuego"},
    { nombre:"🔥", id:"boton-fuego"},
    { nombre:"💧", id:"boton-agua"},
    { nombre:"🌱", id:"boton-tierra"},
)
mokepones.push(hipodoge,capipepo,ratigueya)

function iniciarJuego() { 
    sectionSeleccionarAtaque.style.display = 'none'
<<<<<<< HEAD
    sectionVerMapa.style.display = "none"

=======
    seccionVerMapa.style.display = 'none'
>>>>>>> 0b591da9ae57a282d3d5d3625474d223013d5053
    
    mokepones.forEach((mokepon)=>{
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
                <label class="targeta-mokepon" for=${mokepon.nombre}>
                    <p>${mokepon.nombre}</p>
                    <img src=${v.foto} alt=${mokepon.nombre}>

                </label>
        `
        contenedorTargetas.innerHTML += opcionDeMokepones

             inputHipodoge = document.getElementById('Hipodogue')
             inputCapipepo = document.getElementById('Capipepo')
             inputRatigueya = document.getElementById('Ratigueya')
    })
    sectionReiniciar.style.display = 'none'  
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    

    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display = 'none'
<<<<<<< HEAD

    //sectionSeleccionarAtaque.style.display = 'flex'
=======
    seccionVerMapa.style.display = 'flex'
    //sectionSeleccionarAtaque.style.display = 'flex'
    let imagenDeCapipepo = new Image()
    imagenDeCapipepo.src = capipepo.foto
    lienzo.drawImage(
        imagenDeCapipepo,
        20,
        40,
        100,
        100
    )
    
>>>>>>> 0b591da9ae57a282d3d5d3625474d223013d5053
    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador=inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador=inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador=inputRatigueya.id
    } else {
        alert('Selecciona una mascota')
    }
    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display="flex"
    iniciarMapa()
    seleccionarMascotaEnemigo()

}

function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador === mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id="${ataque.id}" class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })
        botonFuego = document.getElementById('boton-fuego')
        botonAgua = document.getElementById('boton-agua')
        botonTierra = document.getElementById('boton-tierra')
        botones= document.querySelectorAll('.BAtaque')  
}
function secuenciaAtaque(){
    botones.forEach((boton) => {
        boton.addEventListener('click', (e)=>{
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                boton.style.background = '#112F58'
                boton.disabled = true
            } else if(e.target.textContent === '💧'){
                ataqueJugador.push('AGUA')
                boton.style.background = '#112F58'
                boton.disabled = true
            } else{
                ataqueJugador.push('TIERRA')
                boton.style.background = '#112F58'
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, mokepones.length -1)
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
    secuenciaAtaque()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length -1)
    
    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push('FUEGO')
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('AGUA')
    } else {
        ataqueEnemigo.push('TIERRA')
    }
    iniciarPelea()
}
 function iniciarPelea(){
    if (ataqueJugador.length == 5) {
        combate()
    }
 }
 function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]

 }
function combate() {
    
    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index] == ataqueEnemigo[index] ) {
            indexAmbosOponentes(index, index)
            crearMensaje("EMPATE")
        } else if (ataqueJugador[index] === "FUEGO" && ataqueEnemigo[index]==="TIERRA") {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === "AGUA" && ataqueEnemigo[index]==="FUEGO") {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
            }
        else if (ataqueJugador[index] === "TIERRA" && ataqueEnemigo[index]==="AGUA") {
                indexAmbosOponentes(index, index)
                crearMensaje("GANASTE")
                victoriasJugador++
                spanVidasJugador.innerHTML = victoriasJugador
            }
        else{
            indexAmbosOponentes(index, index)
                crearMensaje("PERDISTE")
                victoriasEnemigo++
                spanVidasEnemigo.innerHTML = victoriasEnemigo

            }
        }

    revisarVidas()
}

function revisarVidas() {
    if (victoriasJugador== victoriasEnemigo) {
        crearMensajeFinal("Esto fue un Empate")
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal('Ganaste')
    }
    else{
        crearMensajeFinal('Perdiste')

    }
}

function crearMensaje(resultado) {

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

        sectionMensajes.innerHTML= resultado
        nuevoAtaqueDelJugador.innerHTML= indexAtaqueJugador
        nuevoAtaqueDelEnemigo.innerHTML= indexAtaqueEnemigo

        ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ATAQUESDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    
    sectionMensajes.innerHTML = resultadoFinal


    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function pintarCanvas(){
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0,0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    lienzo.drawImage(
        mascotaJugadorObjeto.mapaFoto,
        mascotaJugadorObjeto.x,
        mascotaJugadorObjeto.y,
        mascotaJugadorObjeto.ancho,
        mascotaJugadorObjeto.alto) 
}
function moverDerecha(){
    mascotaJugadorObjeto.velocidadX = 5
}
function moverIzquierda(){
    mascotaJugadorObjeto.velocidadX = -5
}
function moverAbajo(){
    mascotaJugadorObjeto.velocidadY = 5
}
function moverArriba(){
    mascotaJugadorObjeto.velocidadY = -5
}
function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX=0
    mascotaJugadorObjeto.velocidadY=0
}
function sePresionoUnaTecla(event){
    switch (event.key) {
        case "ArrowUp":
            moverArriba()
            break
        case "ArrowDown":
            moverAbajo()
            break
        case"ArrowLeft":
        moverIzquierda()
            break
        case"ArrowRight":
        moverDerecha()
        default:
            break;
    }
}
function iniciarMapa(){
    mapa.width = 600
    mapa.height = 400
    mascotaJugadorObjeto= obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas,50)
    window.addEventListener("keydown", sePresionoUnaTecla)
    window.addEventListener("keyup", detenerMovimiento)
}
function obtenerObjetoMascota(){
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador === mokepones[i].nombre){
        return mokepones[i]
        }
    }
}
window.addEventListener('load', iniciarJuego)
