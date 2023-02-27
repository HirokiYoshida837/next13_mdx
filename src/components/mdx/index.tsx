import cn from "classnames";
import CodeBlock from "@/components/codeblock";
import React from "react";

export interface LinkedHeadingProps {
    as: keyof JSX.IntrinsicElements;
    linked?: boolean;
    children?: React.ReactNode;
}

const LinkedHeading: React.FC<LinkedHeadingProps> = ({as, linked = true, ...props}) => {
    const Component = as;


    // TOCに出す項目はlinked-headingつける
    return (
        <Component className={cn({"linked-heading": linked})} data-name={props.children} {...props}>
            {<>{props.children}</>}
        </Component>
    );
};


const MDXComponents = {
    h1: (props: React.DetailsHTMLAttributes<unknown>) => (<LinkedHeading as="h1" linked={false} {...props} />),
    h2: (props: React.DetailsHTMLAttributes<unknown>) => (<LinkedHeading as="h2" {...props} />),
    h3: (props: React.DetailsHTMLAttributes<unknown>) => (<LinkedHeading as="h3" {...props} />),
    code: CodeBlock
};

export default MDXComponents;
