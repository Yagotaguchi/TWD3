import './contato.css'
export default function contato(){

    return(
        <>
        <section className="contato">
            <h3>Newletter</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe quidem earum, quo eius ea debitis. At eum velit soluta?</p>
            <hr />

            <form action="">
                <input type="text" name="email" placeholder="Entre com  seu e-mail" />
                <button>Cadastrar</button>
            </form>
        </section>
        </>
    )
}