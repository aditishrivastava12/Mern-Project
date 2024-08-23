import { useAuth } from "../store/auth";


export const About = () => {
    const {user} = useAuth();
    return (
        <>
        <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>Welcome, {user ? ` ${user.username} to our website`: 'to our website'
                                } </p>
                           
                            <h1>Why Chooses Us?</h1>
                            <p>
                          

Comprehensive Learning: TeachTech offers a wide range of tech courses for enthusiasts, professionals, and lifelong learners. <br /> <br />
Expert Instructors: Learn from passionate and dedicated experts in programming, web development, data science, and more. <br /> <br />
Convenient Access: Enjoy high-quality, interactive lessons from the comfort of your <br /> <br />
Mission-Driven: We're committed to bridging the gap between education and technology, helping you unlock your potential in the digital age. <br /> <br />
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
                        {/* hero images */}
                        <div className="hero-images">
                            <img src="/images/about.png" alt="coding together" width="400" height="500" />
                        </div>
                    </div>
                </section>

                 {/* 2nd section */}
            <section className="section-analytics">
                <div className="container grid grid-four-cols">
                    <div className="div1">
                        <h2>50+</h2>
                        <p>Registered Companies</p>
                    </div>
                    <div className="div1">
                        <h2>150+</h2>
                        <p>Projects Done</p>
                    </div>
                    <div className="div1">
                        <h2>250+</h2>
                        <p>Happy Clients</p>
                    </div>
                    <div className="div1">
                        <h2>650K+</h2>
                        <p>Youtube Subscribers</p>
                    </div>
                    </div>
            </section>
            </main>
        </>
    )
};