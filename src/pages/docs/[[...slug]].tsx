import DocsLayout from "@/layouts/DocsLayout";
import {ReactNode} from "react";
import {useRouter} from "next/router";
import {getSlug} from "@/libs/utils/slug";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {Route} from "next/dist/server/router";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import {getDocuments} from "@/libs/utils/get-documents";
import {MDXRemote, MDXRemoteSerializeResult} from "next-mdx-remote";
import {serialize} from "next-mdx-remote/serialize";

import * as rehypeAutoLinkHeadings from 'rehype-autolink-headings'
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";


interface Props {
    routes: Route[];
    currentRoute?: Route;

    source?: MDXRemoteSerializeResult;
    // meta?: MetaProps;
}


const Home: React.FC<Props> = ({routes, currentRoute, source}) => {

    const {query} = useRouter();
    const {tag, slug} = getSlug(query);


    return (
        <>
            <DocsLayout routes={routes}>
                {slug}


                {source && <MDXRemote {...source}/>}
            </DocsLayout>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {

    // pathにするためのdocumentのリスト
    const documents = getDocuments();

    return {
        paths: documents,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<Props> = async ({params}) => {

    const {tag, slug} = getSlug(params);
    // console.debug(`slug : ${slug}`)

    // そのままFSで、next.jsルートディレクトリ/contents下のファイルを読みに行く。 TODO not foundのときの対応どうするよ
    const folderPath = path.join(process.cwd(), "contents");
    // console.debug(`folderpath : ${folderPath}`)

    const filePath = path.join(folderPath, `${slug}.mdx`);
    // console.debug(`filePath : ${filePath}`)

    const rawFileSource = fs.readFileSync(filePath);
    const {content, data} = matter(rawFileSource);
    // console.debug(`content`, content)


    const mdxSource = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [remarkMath,],
            rehypePlugins: [rehypeKatex, rehypeAutoLinkHeadings, require("@mapbox/rehype-prism"),]
        },
    });

    return {
        props: {
            routes: [],
            source: mdxSource
        }
    }


}


export default Home;
