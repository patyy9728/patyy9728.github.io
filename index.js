// APPI DE PELICULAS
let contenido= [];

fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=c7dd953afec4f22f19fc54094ec16380&language=es-MX&page`)
.then(response => response.json())
.then(data =>{
    contenido = data;
    paginaactual = contenido.page
    paginaanterior= paginaactual - 1
    paginasiguiente= paginaactual + 1
    render();
    console.log(contenido)
})
// APPI GENEROS
fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=c7dd953afec4f22f19fc54094ec16380&language=es-MX`)
.then(response => response.json())
.then(genero =>{
    generos = genero;
    console.log(generos)
})

//VARIABLES
let buttonAnterior=document.querySelector("#anterior");
let buttonSiguiente = document.querySelector("#siguiente")
let buttonreset = document.querySelector("#reset")
let form =document.querySelector("#searchmovie")
let input = document.querySelector("#buscador")
let generoAccion = document.querySelector("#accion")
let generoAventura = document.querySelector("#aventura")
let generoAnimacion = document.querySelector("#animación")
let generoComedia = document.querySelector("#comedia")
let generoCrimen = document.querySelector("#crimen")
let generoDocumental = document.querySelector("#documental")
let generoDrama = document.querySelector("#drama")
let generoFamilia = document.querySelector("#familia")
let generoFantasia = document.querySelector("#fantasia")
let generoHistoria = document.querySelector("#historia")
let generoTerror = document.querySelector("#terror")
let generoMusica = document.querySelector("#musica")
let generoMisterio = document.querySelector("#misterio")
let generoRomance = document.querySelector("#romance")
let generoCienciaF = document.querySelector("#ciencia")
let generoTV = document.querySelector("#tv")
let generoSuspenso = document.querySelector("#suspenso")
let generoGuerra = document.querySelector("#guerra")

//GENEROS

generoAccion.addEventListener(`click`,(e)=>{
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c7dd953afec4f22f19fc54094ec16380&language=es-MX&with_genres=28`)
    .then(response => response.json())
    .then(results =>{
        contenido = results
    render()
})
})
generoAventura.addEventListener(`click`,(e)=>{
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c7dd953afec4f22f19fc54094ec16380&language=es-MX&with_genres=12`)
    .then(response => response.json())
    .then(results =>{
        contenido = results
    render()
})
})
generoAnimacion.addEventListener(`click`,(e)=>{
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c7dd953afec4f22f19fc54094ec16380&language=es-MX&with_genres=16`)
    .then(response => response.json())
    .then(results =>{
        contenido = results
    render()
})
})
generoComedia.addEventListener(`click`,(e)=>{
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c7dd953afec4f22f19fc54094ec16380&language=es-MX&with_genres=35`)
    .then(response => response.json())
    .then(results =>{
        contenido = results
    render()
})
})
generoCrimen.addEventListener(`click`,(e)=>{
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c7dd953afec4f22f19fc54094ec16380&language=es-MX&with_genres=80`)
    .then(response => response.json())
    .then(results =>{
        contenido = results
    render()
})
})

generoDocumental.addEventListener(`click`,(e)=>{
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c7dd953afec4f22f19fc54094ec16380&language=es-MX&with_genres=99`)
    .then(response => response.json())
    .then(results =>{
        contenido = results
    render()
})
})
generoDrama.addEventListener(`click`,(e)=>{
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c7dd953afec4f22f19fc54094ec16380&language=es-MX&with_genres=18`)
    .then(response => response.json())
    .then(results =>{
        contenido = results
    render()
})
})
generoFamilia.addEventListener(`click`,(e)=>{
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c7dd953afec4f22f19fc54094ec16380&language=es-MX&with_genres=10751`)
    .then(response => response.json())
    .then(results =>{
        contenido = results
    render()
})
})
generoFantasia.addEventListener(`click`,(e)=>{
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c7dd953afec4f22f19fc54094ec16380&language=es-MX&with_genres=14`)
    .then(response => response.json())
    .then(results =>{
        contenido = results
    render()
})
})
generoHistoria.addEventListener(`click`,(e)=>{
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c7dd953afec4f22f19fc54094ec16380&language=es-MX&with_genres=36`)
    .then(response => response.json())
    .then(results =>{
        contenido = results
    render()
})
})
generoTerror.addEventListener(`click`,(e)=>{
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c7dd953afec4f22f19fc54094ec16380&language=es-MX&with_genres=27`)
    .then(response => response.json())
    .then(results =>{
        contenido = results
    render()
})
})
generoMusica.addEventListener(`click`,(e)=>{
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c7dd953afec4f22f19fc54094ec16380&language=es-MX&with_genres=10402`)
    .then(response => response.json())
    .then(results =>{
        contenido = results
    render()
})
})
generoMisterio.addEventListener(`click`,(e)=>{
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c7dd953afec4f22f19fc54094ec16380&language=es-MX&with_genres=9648`)
    .then(response => response.json())
    .then(results =>{
        contenido = results
    render()
})
})
generoRomance.addEventListener(`click`,(e)=>{
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c7dd953afec4f22f19fc54094ec16380&language=es-MX&with_genres=10749`)
    .then(response => response.json())
    .then(results =>{
        contenido = results
    render()
})
})
generoCienciaF.addEventListener(`click`,(e)=>{
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c7dd953afec4f22f19fc54094ec16380&language=es-MX&with_genres=878`)
    .then(response => response.json())
    .then(results =>{
        contenido = results
    render()
})
})
generoTV.addEventListener(`click`,(e)=>{
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c7dd953afec4f22f19fc54094ec16380&language=es-MX&with_genres=10770`)
    .then(response => response.json())
    .then(results =>{
        contenido = results
    render()
})
})
generoSuspenso.addEventListener(`click`,(e)=>{
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c7dd953afec4f22f19fc54094ec16380&language=es-MX&with_genres=53`)
    .then(response => response.json())
    .then(results =>{
        contenido = results
    render()
})
})
generoGuerra.addEventListener(`click`,(e)=>{
    e.preventDefault()
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c7dd953afec4f22f19fc54094ec16380&language=es-MX&with_genres=10752`)
    .then(response => response.json())
    .then(results =>{
        contenido = results
    render()
})
})

//BUSQUEDA POR INPUT
form.addEventListener(`submit`,search)
input.addEventListener(`keyup`,search)

function search(e){
    e.preventDefault();
    let s= input.value
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=c7dd953afec4f22f19fc54094ec16380&language=es-MX&page&query=${s}&include_adult=false`)
.then(response => response.json())
.then(data =>{
    contenido = data;
render(s)     
}
)}
    
//MOSTRAR CONTENIDO EN PAGINA

function render(){
    document.querySelector("#contenidopag").innerHTML=``
    contenido.results.forEach((contenido)=>{
    card=`
    <div class="col-lg-3 col-md-6 col-12 d-flex justify-content-center mt-3">
    <div class="card-back py-2" style="width:15rem; height:26rem;">
    <div class="card-body d-flex">
    <p class="card-text">Sinopsis:<br>${contenido.overview}<br>Fecha de estreno:<br>${contenido.release_date}</p>
    </div>
    </div>
    <div class="card-front" style="width:15rem; height:26rem;">
  <img src="https://image.tmdb.org/t/p/original/${contenido.poster_path}" class="card-img-top">
     <div class="card-body d-flex justify-content-center">
    <p class ="card-title">${contenido.name || contenido.title}</p>
    
    </div>
    </div>
</div>
    `
    document.querySelector("#contenidopag").innerHTML +=card 
    })
}
//PAGINACION
buttonAnterior.addEventListener(`click`, (e)=>{
    e.preventDefault()
    if(contenido.page>0){
        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=c7dd953afec4f22f19fc54094ec16380&language=es-MX&page=${paginaanterior--}`)
    .then(response => response.json())
    .then(data =>{
        contenido = data;
        paginaactual = contenido.page
        paginaanterior= paginaactual - 1
    })
    render()
    console.log(paginaactual,contenido)
    }

    })
    buttonSiguiente.addEventListener(`click`,(e)=>{
        e.preventDefault()
    if(contenido.page<100){
        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=c7dd953afec4f22f19fc54094ec16380&language=es-MX&page=${paginasiguiente++}`) 
        .then(response => response.json())
        .then(data =>{
            contenido = data;
            paginaactual = contenido.page
            paginaanterior= paginaactual - 1
            paginasiguiente= paginaactual + 1
        })
        render()
        console.log(paginaactual,contenido)
    }
    })
    buttonreset.addEventListener(`click`,(e)=>{
        e.preventDefault()
        window.location="index.html"
        render()
    })
 