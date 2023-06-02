import "./Hero.scss";

function Hero() {
    return (
        <section className="hero">
            <div id='hero_container'>
                <div className="greeting">Hey there, I'm</div>
                <div className="fullname">
                    <div className='firstname'>Dimsy</div>
                    <div className='lastname'>Carbuccia-Donoso</div>
                </div>
                <div className='carreer_title'><span>Software Engineer</span></div>
                <p className="motto">
                    <span>
                        From concept to creation,
                    </span>
                    <span>
                        I bring Ideas to life through code
                    </span>
                </p>
                <button data-hover='Download'className="button"><div>Curriculum Vitae</div></button>
            </div>
        </section>
    );
}

export default Hero;
