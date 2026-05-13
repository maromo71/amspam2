import { useState } from "react"
import './estilo.css'

export default function RandomNumberGenerator() {
    const [numero, setNumero] = useState(0)

    const gerarNumero = () => {
        const x = Math.floor(Math.random() * 100) + 1
        setNumero(x)
    }
    return (
        <div className="random-container"> 
           <h2>Número Aleatório: </h2>
           <h1>{numero}</h1>
           <button onClick={gerarNumero}>
                Clique no Gerador
           </button>
        </div>
    );
}