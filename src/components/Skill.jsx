import { Container, Row, Col } from "react-bootstrap"
export default function () {
    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h2>Skills that pay the bills.</h2>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <ul>
                                <li>node.js</li>
                                <li>firebase</li>
                                <li>javascript</li>
                                <li>react</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}