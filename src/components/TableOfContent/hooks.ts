import React, {useEffect} from "react";

// https://dev.classmethod.jp/articles/react-already-read/
// 実装してみたがうまく動かない。intersectionObserverむずかしい
export const useScrollSpy = (selectors: string[], options?: IntersectionObserverInit) => {

    const [activeId, setActiveId] = React.useState<string | null>()

    const observer = React.useRef <IntersectionObserver>();


    useEffect(() => {

        const elements = selectors.map(x => document.querySelector(x));

        if (observer.current) {
            observer.current.disconnect()
        }

        observer.current = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            })
        }, options)

        elements.forEach(x => x && observer.current?.observe(x))

        return () => observer.current?.disconnect()
    }, [selectors])

    return activeId;
}
