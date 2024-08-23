export const Home = () => {
    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>Unlock the future of learning with TeachTech—where technology meets education and transforms lives!</p>
                            <h1>Welcome to TeachTech</h1>
                            <p>
                            TeachTech is your gateway to innovative online learning. 
                            Our platform offers courses for tech enthusiasts, 
                            professionals, and lifelong learners. Access 
                            interactive lessons on programming, web development, 
                            data science, and more from the comfort of your home. 
                            Our mission is to bridge the gap between education and 
                            technology, empowering you with the skills to excel 
                            in the digital age. Join TeachTech and 
                            start your journey towards a 
                            tech-savvy future!</p>
                            <div className="btn btn-group">
                                <a href="/contact">
                                <button className="btn">connect now</button>
                                </a> 
                                <a href="/services">
                                <button className="btn secondary-btn">learn more</button>
                                </a>
                            </div>

                        </div>
                        {/* hero images */}
                        <div className="hero-images">
                            <img src="/images/home.png" alt="coding together" width="400" height="500" />
                        </div>
                    </div>
                </section>
            </main>

            {/* 2nd section */}
            <section className="section-analytics">
                <div className="container grid grid-four-cols">
                    <div className="div1">
                        <h2>50+</h2>
                        <p>Registered Companies</p>
                    </div>
                    <div className="div1">
                        <h2>100,00</h2>
                        <p>Happy Clients</p>
                    </div>
                    <div className="div1">
                        <h2>500+</h2>
                        <p>Well known Developers</p>
                    </div>
                    <div className="div1">
                        <h2>24/7</h2>
                        <p>Services</p>
                    </div>
                    </div>
            </section>

            {/* 3rd section */}
            <section className="section-hero">
                    <div className="container grid grid-two-cols">
                    
                        {/* hero images */}
                        <div className="hero-images">
                            <img src="/images/home.png" alt="coding together" width="400" height="500" />
                        </div>
                    
                        <div className="hero-content">
                            <p>Unlock endless possibilities with TeachTech—your partner in tech education!</p>
                            <h1>Lets Get Started</h1>
                            <p>
                            TeachTech is here to help you achieve your tech learning 
                            goals. Our platform offers courses for tech 
                            enthusiasts, professionals, and lifelong learners, 
                            covering programming, web development, data science, 
                            and more. Enjoy high-quality, interactive lessons from 
                            home. Join TeachTech today and start your journey 
                            towards tech mastery!
                            </p>
                            <div className="btn btn-group">
                                <a href="/contact">
                                <button className="btn">connect now</button>
                                </a> 
                                <a href="/services">
                                <button className="btn secondary-btn">learn more</button>
                                </a>
                            </div>
                            </div>
                            </div>

                       
                </section>

        </>
    );
};