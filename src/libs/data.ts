const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time))


export async function getListData(): Promise<Contents[]> {

    await sleep(5000);

    const contents: Contents[] = [
        {
            path: 'sample1',
            name: 'hello! sample1',
            body: 'hello, today...'
        },
        {
            path: 'sample2',
            name: 'hello! sample2',
            body: 'hello, today...'
        },
        {
            path: 'sample3',
            name: 'hello! sample3',
            body: 'hello, today...'
        }
    ]

    return contents;
}

export async function getDetail(id: string): Promise<Contents> {

    await sleep(1000);

    return {
        path: id,
        name: id,
        body: `this is ${id}`,
    }

}

interface Contents {
    path: string;
    name: string;
    body: string;

}
