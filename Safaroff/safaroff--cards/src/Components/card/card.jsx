import './card.css'


function Card({img, heading, text, color}){
    return(
        <div className="card" >
            <div className="imgframe" style={{backgroundColor:color}}>
                <img src = {img} />
            </div>
            <h2>{heading}</h2>
            <p>{text}</p>
        </div>
    )
}

export default Card