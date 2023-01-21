<script>
    import TextArea from "./TextArea.svelte";
    import ResponseArea from "./ResponseArea.svelte";
    import MainButton from "./MainButton.svelte";
    import WaveFooter from "./WaveFooter.svelte";
    import { responses } from "./stores";
    import Header from "./Header.svelte";

    responses.subscribe((q) => console.log(q));
</script>

<div class="text-gray-400 body-font font-mono">
    <Header />
    <div class="container px-5 py-24 mx-auto flex flex-col lg:w-4/6 space-y-10">
        <!-- <h1>You</h1> -->
        <TextArea />
        {#each $responses as response}
            <ResponseArea speaker="Kevin" content={response} />
        {/each}
        <!-- <ResponseArea speaker="Mark" /> -->
    </div>
    <WaveFooter />
</div>
