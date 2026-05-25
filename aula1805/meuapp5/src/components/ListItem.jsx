export default function ListItem(props){
    return(
        <div className="box-signo">
            <div className="nome-signo">
                {props.signo}
            </div>
            <img src={props.imagem} alt="" className="imagem-signo" />
            <div className="periodo-nascimento">
                {props.dataInicio} - {props.dataFim}
            </div>
        </div>
    )
}