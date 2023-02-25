import {getDetail, getListData} from "@/libs/data";
import {notFound} from "next/navigation";


// キャッシュ利用しない。
export const revalidate = 60;

interface Props {
    params: Params
}

interface Params {
    postId: string;
}

// // https://beta.nextjs.org/docs/api-reference/generate-static-params
// export async function generateStaticParams(): Promise<Params[]> {
//
//     // dynamic route を使う場合でも、ビルド時にページ生成させる
//     const posts = await getListData();
//
//     const paths: Params[] = posts.map((item) => {
//         return {
//             postId: item.path
//         };
//     });
//
//
//     return [...paths];
// }


export default async function Page(props: Props) {

    const post = await getDetail(props.params.postId)

    const time = new Date().toLocaleString();

    if (!post) {
        notFound();
    }

    return (
        <>
            <h1>{post.name}</h1>
            <h2>{time}</h2>
            <>
                {post.body}
            </>
        </>
    )
}
