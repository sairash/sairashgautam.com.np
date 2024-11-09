import fg from 'fast-glob';
import path from 'path';
import fs from 'fs-extra';
import matter from 'gray-matter'

type FormattedData = { [key: string]: any[] };

async function getAllFolderPaths(dirPath: string): Promise<string[]> {
    return await fg([`${dirPath}/*`], { onlyDirectories: true });
}


async function getAllMdFilePaths(dirPath: string): Promise<string[]> {
    return [...await fg.glob([`${dirPath}/*.md`], { ignore: ['README.md'], dot: true }), ...await getAllFolderPaths(dirPath)];
}


async function getFileInfo(doc_dir: string, parent_dir: string, file_paths: string[]) {
    const folder_name = parent_dir.split(doc_dir+"/")[1]
    formated_data[folder_name] = []
    await Promise.all(
        file_paths.map(async (item) => {
            const file_name = item.split(parent_dir+"/")[1].replace(".md", "")
            if (!item.includes(".md")) {
                item += "/index.md"
            }
            try {
                const file = await fs.readFile(item, 'utf-8')
                const { data, content } = matter(file)
                data.rawDate = data.date ? new Date(data.date).toString() : (await fs.stat(item)).birthtime.toString()
                data.date = _convertDate(data.rawDate, 'en-US', 'Asia/Kathmandu')
                data.readTime = calculateReadTime(content)
                formated_data[folder_name].push({
                    frontmatter: data,
                    path: `${item.replace(doc_dir, '').replace('.md', '.html')}`,
                    name: file_name == "index" ? folder_name: file_name
                })
            } catch { }
        }),
    )
}

function _convertDate(date: string, locale: string, timezone: string) {
    const json_date = new Date(date).toLocaleString(locale, {
        timeZone: timezone,
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })
    return json_date
}

function calculateReadTime(content: string): number {
    const wordsPerMinute = 400
    const approximateLength = content.replace(/\r?\n/g, '').length

    return Math.ceil(approximateLength / wordsPerMinute)
}

var formated_data: FormattedData = {} 
const docFolderPath = path.join(process.cwd(), 'docs');
getAllFolderPaths(docFolderPath).then(async (filePaths) => {
    for(let i = 0; i < filePaths.length; i++ ){
        await getFileInfo(docFolderPath, filePaths[i],  await getAllMdFilePaths(filePaths[i]))
    }
    fs.writeFile("./docs/.vitepress/custom/details.json", JSON.stringify(formated_data))
}).catch((error) => {
    console.error('Error fetching file paths:', error);
});

