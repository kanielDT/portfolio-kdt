import { Container, Row, Col } from "react-bootstrap";

export default function About() {
    return (
        <>
            <section>
                <Container>
                    <Row className="bg-danger">
                        <Col>
                            <img src="https://picsum.photos/300/300" alt="profile pict" />
                        </Col>

                        <Col>
                            <h1>Hi ,Im Kaniel</h1>
                            <p>I am a student at Boca-Code training to become a software engineer. I love to drive in my car and hang out with my cousins on my down time.</p>
                            <p>Conact me @: kanieldannn@gmail.com</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}