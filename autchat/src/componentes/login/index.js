import './style.css'
import image2 from './image2.png';

function Login(){
    return(
        <body>
            <div className="container">
            <div className="quad">
            <div className="quadra">
                <img src={image2}></img>

                <input type="text" required></input>

            </div>

            </div>
    </div>
        </body>
    )
}

export default Login;