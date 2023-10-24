import { json } from "@sveltejs/kit";



async fucntion getPosts() {

    let posts = []

    const paths = import.meta.glob('https://127.0.0.1/api/category', {
        eager: true
    })
    // const paths = import.meta.glob('/src/posts/*.md', {
    //     eager: true
    // })

    console.log(paths)

    return posts
}

export async function GET() => {
    const posts = await getPosts()
    return json(posts)
};

// export const GET: RequestHandler = async () => {
//     async function getPosts() {
//         const paths = import.meta.glob('/src/posts/*.md', {
//             eager: true
//         })

//         console.log(paths)

//         return posts
//     }
//     const posts = await getPosts()
//     return json(posts)
//     return new Response();
// };