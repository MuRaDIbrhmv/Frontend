import "./wwdcard.css"

function WWDcard({field, info}){
    return(
        <>
        <div className="wwdcard">
            <h4>{field}</h4>
            <p>{info}</p>
        </div>
           
        </>
    )
}

export default WWDcard