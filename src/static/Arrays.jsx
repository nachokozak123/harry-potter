const funkos=[
    {
        Codigo:1,
        Nombre:"Albus Dumbledore con varita",
        Precio:100,
        Descripcion:"Funko pop de Harry Potter - Albus Dumbledore con varita",
        Imagen: "./assets/funkos/dumbledore1.png",
        Personaje:"Albus Dumbledore",
        Cantidad:20
    },
    {
        Codigo:2,
        Nombre:"Deluxe Albus Dumbledore en podio",
        Precio:100,
        Descripcion:"Funko pop de Harry Potter - Deluxe Albus Dumbledore en podio",
        Imagen:"./assets/funkos/Pop! Deluxe Albus Dumbledore with Podium, , hi-res.png",
        Personaje:"Albus Dumbledore",
        Cantidad:20
    },
    {
        Codigo:3,
        Nombre:"Dobby",
        Precio:100,
        Descripcion:"Funko pop de Harry Potter - Dobby",
        Imagen:"./assets/funkos/Pop! Dobby, , hi-res.png",
        Personaje:"Dobby",
        Cantidad:20
    },
    {
        Codigo:4,
        Nombre:"Harry Potter con capa",
        Precio:100,
        Descripcion:"Funko pop de Harry Potter - Harry Potter con capa",
        Imagen:"./assets/funkos/Pop! Harry Potter Cloak, , hi-res.png",
        Personaje:"Harry Potter",
        Cantidad:20
    },
    {
        Codigo:5,
        Nombre:"Harry Potter en Nimbus 2000",
        Precio:100,
        Descripcion:"Funko pop de Harry Potter - Harry Potter en Nimbus 2000",
        Imagen:"./assets/funkos/Pop! Harry Potter on Nimbus 2000, , hi-res.png",
        Personaje:"Harry Potter",
        Cantidad:20
    },
    {
        Codigo:6,
        Nombre:"Harry Potter con torta de cumpleaños",
        Precio:100,
        Descripcion:"Funko pop de Harry Potter - Harry Potter con torta de cumpleaños",
        Imagen:"./assets/funkos/Pop! Harry Potter with Birthday Cake, , hi-res.png",
        Personaje:"Harry Potter",
        Cantidad:20
    },
    {
        Codigo:7,
        Nombre:"Harry Potter con Hedwig",
        Precio:100,
        Descripcion:"Funko pop de Harry Potter - Harry Potter con Hedwig",
        Imagen:"./assets/funkos/Pop! Harry Potter with Hedwig, , hi-res.png",
        Personaje:"Harry Potter/Hedwig",
        Cantidad:20
    },
    {
        Codigo:8,
        Nombre:"Harry Potter con profecía",
        Precio:100,
        Descripcion:"Funko pop de Harry Potter - Harry Potter con profecía",
        Imagen:"./assets/funkos/Pop! Harry Potter with Prophecy, , hi-res.png",
        Personaje:"Harry Potter",
        Cantidad:20
    },
    {
        Codigo:9,
        Nombre:"Hedwig",
        Precio:100,
        Descripcion:"Funko pop de Harry Potter - Hedwig",
        Imagen:"./assets/funkos/Pop! Hedwig, , hi-res.png",
        Personaje:"Hedwig",
        Cantidad:20
    },
    {
        Codigo:10,
        Nombre:"Hermione Granger con giratiempo",
        Precio:100,
        Descripcion:"Funko pop de Harry Potter - Hermione Granger con giratiempo",
        Imagen:"./assets/funkos/Pop! Hermione Granger with Time Turner, , hi-res.png",
        Personaje:"Hermione Granger",
        Cantidad:20
    },
    {
        Codigo:11,
        Nombre:"Hermione Granger",
        Precio:100,
        Descripcion:"Funko pop de Harry Potter - Hermione Granger",
        Imagen:"./assets/funkos/Pop! Hermione Granger, , hi-res.png",
        Personaje:"Hermione Granger",
        Cantidad:20
    },
    {
        Codigo:12,
        Nombre:"Luna Lovegood",
        Precio:100,
        Descripcion:"Funko pop de Harry Potter - Luna Lovegood",
        Imagen:"./assets/funkos/Pop! Luna Lovegood, , hi-res.png",
        Personaje:"Luna Lovegood",
        Cantidad:20
    },
    {
        Codigo:13,
        Nombre:"Minerva McGonagall",
        Precio:100,
        Descripcion:"Funko pop de Harry Potter - Minerva McGonagall",
        Imagen:"./assets/funkos/Pop! Minerva McGonagall, , hi-res.png",
        Personaje:"Minerva McGonagall",
        Cantidad:20
    },
    {
        Codigo:14,
        Nombre:"Quidditch Harry Potter",
        Precio:100,
        Descripcion:"Funko pop de Harry Potter - Quidditch Harry Potter",
        Imagen:"./assets/funkos/Pop! Quidditch Harry, , hi-res.png",
        Personaje:"Harry Potter",
        Cantidad:20
    },
    {
        Codigo:15,
        Nombre:"Remus Lupin con mapa del merodeador",
        Precio:100,
        Descripcion:"Funko pop de Harry Potter - Remus Lupin con mapa del merodeador",
        Imagen:"./assets/funkos/Pop! Remus Lupin with Map, , hi-res.png",
        Personaje:"Remus Lupin",
        Cantidad:20
    }
]

export const db=funkos.map(i=>{
    return(
        <div className="contenedor" key={i.Codigo}>
            <h1>{i.Nombre}</h1>
            <img src={i.Imagen} alt={i.Nombre} className="imagen"/>
            <br/>
            <span>${i.Precio}</span>
            <br/>
            <span>Disponibles: {i.Cantidad}</span>
            <br/>
            <span>Codigo: {i.Codigo}</span>
        </div>
    )
})