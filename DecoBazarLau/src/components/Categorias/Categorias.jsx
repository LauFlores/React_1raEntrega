import './Categorias.module.css'

let productos = [
    {nombre:'Cocina'},
    {nombre:'Baño'},
    {nombre:'Dormitorio'},
    {nombre:'Organización del Hogar'},
    {nombre:'Home Deco'},
]

export default function Categorias() {
    return(
        <div className="Categorias">
            {
                productos.map(elm=>(
                    <div key={elm.nombre} className="categoria-elemento">{ elm.nombre }</div>
                ))
            }
        </div>
    )
}