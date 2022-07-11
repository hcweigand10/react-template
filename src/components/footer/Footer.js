import React from "react"
import "./footer.css"


const Footer = () => {



    return (
        
        <footer class="d-flex flex-wrap justify-content-center align-items-center p-3 border-top bg-dark">
            <div class="col-md-4 d-flex align-items-center text-light mb-1">
                <a href="/" class="me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    <i class="fab fa-facebook"></i>
                    <span class="text-muted"> © 2022 Weigand Design, Inc</span>
                </a>
            </div>

            <div className="mb-0 mt-1">
                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li class="ms-3">
                        <a
                            class="btn btn-floating m-2 btn-custom"
                            style={{backgroundColor: "#0072b1"}}
                            href="#!"
                            role="button"
                            ><i class="fab fa-linkedin-in"></i
                        ></a>
                    </li>
                    <li class="ms-3">
                        <a
                            class="btn btn-floating m-2 btn-custom" id="btn-instagram"
                            style={{backgroundColor: "#E1306C", color: "white"}}
                            href="#!"
                            role="button"
                            ><i class="fab fa-instagram"></i
                        ></a>
                    </li>
                    {/* <li class="ms-3">
                        <a
                            class="btn btn-floating m-2 btn-custom"
                            style={{backgroundColor: "#3b5998"}}
                            href="#!"
                            role="button"
                            ><i class="fab fa-facebook"></i
                        ></a>
                    </li> */}
                    <li class="ms-3">
                        <a
                            class="btn btn-floating m-2 btn-custom"
                            style={{backgroundColor: "#1DA1F2"}}
                            href="#!"
                            role="button"
                            ><i class="fab fa-twitter"></i
                        ></a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}


export default Footer