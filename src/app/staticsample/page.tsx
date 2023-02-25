import {getListData} from "@/libs/data";
import Link from "next/link";


export default async function Page() {

    const contents = await getListData();

    // ページの生成された時間を取得
    const time = new Date().toLocaleString();

    // if (!contents || contents.length === 0) {
    //     return <h1>No contents</h1>;
    // }

    return (
        <div>
            <h1>{time}</h1>
            <ul>
                {contents.map(item => {
                    return (
                        <li key={item.path}>
                            <Link href={`/staticsample/${item.path}`}>{item.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );

}
