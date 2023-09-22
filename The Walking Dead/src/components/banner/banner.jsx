import './banner.css'

export default function banner(){

    /*
    let corLaranja={
        backgroundColor: 'orange',
        border: '2px dashed #000'
    }
    */
    return(
        <>
            <section className="temporada">
                {/*<h1 style={{color:'red', backgroundColor: 'yellow'}}>The Walking Dead 1ª Temporada</h1>*/}
                <h1>The Walking Dead 1ª Temporada</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi vero dolore fugit laboriosam rem deleniti? Obcaecati itaque exercitationem adipisci omnis.</p>
                <a href="#" className="btn cinza">Saiba mais</a>
                {/*<a href="#" className="btn cinza" style={corLaranja}>Saiba mais</a>*/}
            </section>
        </>
    )
}