export interface Heading {
    text: string;
    id: string;
}

export function getHeadings(): Heading[] {

    const headings = document.getElementsByClassName("linked-heading") as HTMLCollection;

    console.log(`headings`, headings)

    const d = Array.from(headings).map((e, i) => {
        return {
            id: i.toString(),
            text: e.getAttribute("data-name")
        } as Heading;
    });

    console.log(`d`, d)

    return d;

}
