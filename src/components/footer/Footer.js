import React from "react"
import "./footer.css"


const Footer = () => {



    return (
        <footer class="bg-secondary text-center text-white">
            <div class="container p-4 pb-0">
                {/* <!-- Section: Social media --> */}
                <section class="mb-1">
                {/* <!-- Facebook --> */}
                <a
                    class="btn btn-floating m-2 btn-custom"
                    style={{backgroundColor: "#3b5998"}}
                    href="#!"
                    role="button"
                    ><i class="fab fa-facebook-f"></i
                ></a>

                {/* <!-- Twitter --> */}
                <a
                    class="btn btn-floating m-2 btn-custom"
                    style={{backgroundColor: "#1DA1F2"}}
                    href="#!"
                    role="button"
                    ><i class="fab fa-twitter"></i
                ></a>

                {/* <!-- Instagram --> */}
                <a
                    class="btn btn-floating m-2 btn-custom" id="btn-instagram"
                    style={{backgroundColor: "#E1306C", color: "white"}}
                    href="#!"
                    role="button"
                    ><i class="fab fa-instagram"></i
                ></a>

                {/* <!-- Linkedin --> */}
                <a
                    class="btn btn-floating m-2 btn-custom"
                    style={{backgroundColor: "#0072b1"}}
                    href="#!"
                    role="button"
                    ><i class="fab fa-linkedin-in"></i
                ></a>
                </section>
            </div>

            {/* <!-- Copyright --> */}
            <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2);"}}>
                © 2020 Copyright:
                <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
            </footer>
    )
}


export default Footer