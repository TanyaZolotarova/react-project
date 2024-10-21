import {Carousel} from "react-bootstrap";


export function SliderComponent() {
    return(
        <div className="container mt-5">
            <Carousel>
                <Carousel.Item>
                    <img className="img-fluid" src='/img/cat_1.jpg' alt='cat'/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="img-fluid"  src='/img/cat_2.jpg' alt='cat'/>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="img-fluid" src='/img/cat_3.jpg' alt='cat'/>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}