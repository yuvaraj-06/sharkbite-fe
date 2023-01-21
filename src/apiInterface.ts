export async function getResponse(query: string): Promise<JSON> {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json()

}