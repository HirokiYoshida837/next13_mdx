function H1({children}) {

    return (
        <>
            <h1>
                {children}
            </h1>
        </>
    )
}

function H2({children}) {
    return (
        <>
            <h2>
                {children}
            </h2>
        </>
    )
}

export function useMDXComponents(components) {
    return {h1: H1, h2: H2, ...components};
}
