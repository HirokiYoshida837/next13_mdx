import React from "react";
import {useTheme} from "@nextui-org/react";
import {Heading} from "@/libs/utils/heading";
import cn from "classnames";
import {useScrollSpy} from "@/components/TableOfContent/hooks";

interface TableOfContentsProps {
    headings: Heading[]
}


const TableOfContent: React.FC<TableOfContentsProps> = ({headings, ...prop}) => {

    const {theme} = useTheme();

    // scroll中のどこにいるか探すHook。
    const activeId = useScrollSpy(
        headings.map(({id}) => `[id="${id}"]`),
        {
            rootMargin: "0% 0% -80% 0%",
        },
    );


    return (
        <>
            <div className="container" {...prop}>
                <h4 className="title">Contents</h4>
                <ul>
                    {headings.map((item, i) => (
                        <li key={i}
                            className={cn('list-item', {active: activeId == item.id})}
                        >
                            {item.text}
                        </li>
                    ))}
                </ul>
                <style jsx>{`
                  .container {
                    position: relative;
                    padding-left: 1rem;
                  }

                  .title {
                    font-size: 1.2rem;
                    font-weight: 600;
                    z-index: 1;
                  }

                  .list {
                    max-height: 56vh;
                    margin-bottom: 20px;
                    overflow: auto;
                  }

                  .list::-webkit-scrollbar {
                    width: 0px;
                  }

                  .title,
                  .list-item {
                    max-width: 100%;
                    text-align: left;
                  }

                  .list-item:before {
                    display: none;
                  }

                  .list-item {
                    padding-left: 1rem;
                    position: relative;
                    list-style-type: none;
                    margin-bottom: 0;
                  }

                  .list-item a {
                    font-size: 0.8rem;
                    color: ${theme?.colors?.accents7?.value};
                  }

                  .list-item.active a {
                    color: inherit;
                    font-weight: 500;
                  }

                  .list-item:after {
                    content: "";
                    position: absolute;
                    top: 50%;
                    right: auto;
                    left: 0;
                    width: 5px;
                    height: 5px;
                    opacity: 0;
                    border-radius: 10px;
                    background: ${theme?.colors?.foreground?.value};
                    transform: translateY(-50%);
                    transition: opacity 0.25s ease;
                  }

                  .list-item.active:after {
                    opacity: 1;
                  }
                `}</style>
            </div>
        </>
    )
}


export default TableOfContent;


