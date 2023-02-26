import React from "react";
import {Navbar} from "@nextui-org/react";
import {ThemeToggleSwitch} from "@/components/themeswitch";
import {StyledNavContainer, StyledNavMainContainer} from "@/layouts/styles";


const NavBar: React.FC = () => {

    return (
        <>
            <StyledNavMainContainer id="navbar-container">
                <StyledNavContainer isDetached={false} showBlur={false}>
                    <Navbar variant={'sticky'}>
                        <Navbar.Brand>
                            here is brand log.
                        </Navbar.Brand>

                        <Navbar.Content hideIn="xs" variant={"underline-rounded"}>
                            <Navbar.Link href="#">Features</Navbar.Link>
                            <Navbar.Link href="#">Customers</Navbar.Link>
                            <Navbar.Link href="#">Pricing</Navbar.Link>
                            <Navbar.Link href="#">Company</Navbar.Link>
                        </Navbar.Content>

                        <ThemeToggleSwitch/>
                    </Navbar>
                </StyledNavContainer>
            </StyledNavMainContainer>
        </>
    )
}


export default NavBar;
