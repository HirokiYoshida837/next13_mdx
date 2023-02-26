import React from "react";

import cn from "classnames";
import {styled, CSS} from "@nextui-org/react";


export interface FixedProps {
    offset?: number;
    shadow?: boolean;
    className?: string;
    css?: CSS;
}

const defaultProps = {
    offset: 0,
    shadow: false,
    className: "",
};

const StyledFixed = styled("div", {
    background: "transparent",
    position: "fixed",
    zIndex: "$max",
    variants: {
        shadow: {
            true: {
                bs: "$sm",
            },
        },
    },
});

const Fixed: React.FC<React.PropsWithChildren<FixedProps>> = ({
                                                                  offset,
                                                                  children,
                                                                  shadow,
                                                                  className,
                                                                  css,
                                                              }) => {
    return (
        <StyledFixed
            className={cn(className, {shadow})}
            css={{...(css as any), top: offset || 0}}
            shadow={shadow}
        >
            {children}
        </StyledFixed>
    );
};

export default Fixed;

// const MemoFixed = React.memo(Fixed);
//
// export default withDefaults(MemoFixed, defaultProps);
