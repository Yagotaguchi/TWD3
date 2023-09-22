import './Mortes.css'

export default function Mortes(){

    return(

        <>
            <section className="mortes">
                <h3>Quem morreu</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste odio quas repellendus, praesentium, mollitia aspernatur laborum non natus debitis ab quo incidunt quam quidem, architecto fuga? Enim, illum! Totam, voluptas?</p>
                <hr />
                <ul className="grid">
                    <li>
                        <span className="material-symbols-outlined">skull</span>
                        <h3>Mortes</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, impedit eos id hic perspiciatis voluptate.</p>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">diversity_2</span>
                        <h3>Epidemia</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti mollitia veniam vero quidem, rem ut?</p>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">domino_mask</span>
                        <h3>Nosso heróis</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste provident qui, quaerat aperiam velit expedita.</p>
                    </li>
                </ul>
            </section>
        </>
    )
}