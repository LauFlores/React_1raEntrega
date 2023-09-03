import './ItemListContainer.css'

export default function ItemListContainer(props){

    let {greeting}=props;
    return(
        <div className='saludo'>
            <h1>Bienvenido <b>{greeting}</b> a Deco Bazar Lau</h1>
            <h2>Muy pronto!</h2>
        </div>
    )
}