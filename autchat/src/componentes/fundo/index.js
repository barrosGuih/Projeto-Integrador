import './style.css'
import Logo from './imagens/logo.png'
import Image from './imagens/image.png'

function Fundo(){
    return(
        <body>
            <div className="container">
            <div className="quad">
            <div className="colunleft">
                <img className="logo" src={Logo}></img>
                <h1 id="texto">BOAS VINDAS!</h1>
                <button className='registre'>REGISTRE-SE</button>
                <a href=''>Você já possui uma conta? Clique aqui.</a>
            </div>
            <div className='colunright'>
            <img className='image' src={Image}></img>

            </div>

            </div>
    </div>
        </body>
    )
}

export default Fundo;