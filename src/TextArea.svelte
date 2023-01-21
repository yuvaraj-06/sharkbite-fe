<script>
    import NameSlip from "./NameSlip.svelte";
</script>

<div class="rounded-lg flex flex-row h-40">
    <textarea
        id="pitch-text"
        name="pitch-text"
        class="resize-none font-mono w-11/12 h-40 bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Write your pitch here!"
    />
    <button class="rounded-r bg-indigo-500 w-1/12 text-gray-300">>></button>
</div>
