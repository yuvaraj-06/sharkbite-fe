export async function getResponse(query: string): Promise<JSON> {
    return new Promise<JSON>(async (resolve, reject) => {
        let result: Promise<JSON>;
        await fetch("http://localhost:8080/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                "pitch": query
            })
        }).then((response) => result = response.json())
        resolve(result);
    });

}
