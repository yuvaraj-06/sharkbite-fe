<script>
    import { responses } from "./stores";
    import { getResponse } from "./apiInterface";
    let query = "";
</script>

<div class="rounded-lg flex flex-row h-40">
    <textarea
        id="pitch-text"
        name="pitch-text"
        class="resize-none font-mono w-11/12 h-40 bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 focus: ring-inset border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Write your pitch here!"
        bind:value={query}
    />
    <button
        class="rounded-r bg-indigo-600 w-1/12 text-gray-300 hover:bg-indigo-500 transition-all delay-75"
        on:click={async () => {
            let resp = await getResponse(query);
            console.log(resp);
            responses.update((r) => {
                r.push(resp[Math.floor(Math.random() * 5)].body);
                return r;
            });
        }}>>></button
    >
</div>
