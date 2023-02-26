import {Container, CSS, Row, Text} from "@nextui-org/react";
import React from "react";

export interface Props {
    css?: CSS;
    containerCss?: CSS;
}

const Footer: React.FC<Props> = ({css, containerCss}) => {

    return (
        <Container
            fluid
            className="footer__container"
            css={{
                zIndex: "$1",
                padding: "$md $sm",
                "@xsMax": {
                    padding: "$sm $xs",
                },
                ...containerCss,
            }}
            gap={2}
        >
            <Row css={css} justify="center">

                <Text
                    span
                    className="footer__by"
                    css={{
                        fontSize: "$sm",
                        color: "$accents7",
                        dflex: "center",
                    }}
                >
                    here is footer text.
                </Text>
            </Row>
        </Container>
    )
}

export default Footer;
