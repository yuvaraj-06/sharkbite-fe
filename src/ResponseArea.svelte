<script>
    import NameSlip from "./NameSlip.svelte";
    import TextOutput from "./TextOutput.svelte";
    import "animate.css";
    export let speaker;
    export let content =
        "Well that's an impressive story Max, but I need to see the numbers. You say you've grown to $1 million in annual sales within two years and that's great, but it's still a drop in the bucket when you look at the entire industry. What kind of growth have you seen year over year? How does your customer base compare to others in the market? What kind of feedback have you gotten from customers? I'm also a bit skeptical about spending four months living in a Chinese factory. Quality is important, but it doesn't sound like a smart business decision. You need to make sure you're getting value out of every move you make or else you'll quickly fall behind your competitors. Let's see the numbers and then we can talk about an offer. I'm willing to offer $500,000 for 10% equity in Lumio.|";
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

<div
    class="flex flex-row min-h-full rounded-r animate__animated animate__fadeInUp"
>
    <NameSlip name={speaker} {bgColor} />
    <TextOutput {content} {ringColor} />
</div>
