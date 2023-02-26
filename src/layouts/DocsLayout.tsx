import Fixed from "@/components/Fixed";
import NavBar from "@/layouts/NavBar";
import {Container, Row, Col, Link} from '@nextui-org/react';
import Sidebar from "@/components/Sidebar";
import TableOfContent from "@/components/TableOfContent";
import Footer from "@/layouts/Footer";

type MyComponentProps = {
    children: React.ReactNode;
}


const DocsLayout: React.FC<MyComponentProps> = ({children}) => {

    return (
        <>
            <NavBar/>

            <Container
                as="main"
                className="docs__container"
                css={{position: "relative"}}
                display="flex"
                id="main-container"
                lg={true}
            >

                <Row justify="center" align="center">


                    <Col css={{
                        width: "32%",
                        display: "none",
                        "@md": {
                            display: "block",
                        },
                    }}>

                        <Fixed
                            className="docs__left-sidebar"
                            css={{
                                maxHeight: "calc(100vh - 4rem)",
                                overflow: "auto",
                                zIndex: "$2",
                                pb: "$28",
                                "&::-webkit-scrollbar": {
                                    width: "0px",
                                },
                            }}
                            offset={92}
                            shadow={true}
                        >
                            <Sidebar/>
                        </Fixed>

                    </Col>

                    <Col className="docs__center"
                         css={{
                             zIndex: "$10",
                             maxWidth: "100%",
                             overflow: "auto",
                             "@xsMax": {
                                 p: 0,
                             },
                         }}
                    >
                        {children}

                        <Footer/>


                    </Col>

                    <Col css={{
                        width: "28%",
                        height: "100%",
                        display: "none",
                        "@lg": {
                            display: "block",
                        },
                    }}>
                        <Fixed
                            className="docs__right-sidebar"
                            css={{
                                width: "100%",
                                zIndex: "$2",
                                pb: "$20",
                                "&::-webkit-scrollbar": {
                                    width: "0px",
                                },
                            }}
                            offset={92}
                            shadow={true}
                        >
                            <TableOfContent/>

                        </Fixed>
                    </Col>
                </Row>


            </Container>


        </>
    )
}

export default DocsLayout;
