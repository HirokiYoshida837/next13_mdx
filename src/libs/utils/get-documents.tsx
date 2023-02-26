import glob from 'glob'

// contents下のmdxファイルのリストを再帰的に全部取得。
export const getDocuments = (): string[] => {

    const files = glob.sync("contents/**/*.mdx");

    const list = files
        .map(x => x.replace(new RegExp("^contents"), ""))
        .map(x => x.replace(new RegExp(".mdx$"), ""))

    return list;
}
