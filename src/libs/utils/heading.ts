export interface Heading {
    text: string;
    id: string;
}

export function getHeadings(): Heading[] {

    const headings = document.getElementsByClassName("linked-heading") as HTMLCollection;


    const d = Array.from(headings).map(e => {
        return {
            id: e.id,
            text: e.getAttribute("data-name")
        } as Heading;
    });

    return d;

}
