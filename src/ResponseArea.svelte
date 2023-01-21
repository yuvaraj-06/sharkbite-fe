<script>
    import NameSlip from "./NameSlip.svelte";
    import TextOutput from "./TextOutput.svelte";
    import "animate.css";
    export let speaker;
    export let content =
        "So it doesn't expand itself to have height of the entire screen during scroll, So this can be overcomed by using min-h-screen, meaning minimum should be the viewport height and in the occurance of scroll , expand yourself to have maximum possible height.";
    export let bgColor = "";
    let bgColorList = ["emerald-700", "cyan-700", "fuchsia-700", "rose-700"];
    if (bgColor == "") {
        let l = bgColorList.length;
        let idx = Math.floor(Math.random() * l);
        bgColor = bgColorList[idx];
        console.log(bgColor);
    }
    let ringColor = "ring-" + bgColor;
    bgColor = "bg-" + bgColor;
</script>

<div class="flex flex-row h-40 rounded-r animate__animated animate__fadeInUp">
    <NameSlip name={speaker} {bgColor} />
    <TextOutput {content} {ringColor} />
</div>
