<script>
    import TypingAnimated from "svelte-typing-animated";
    export let content;
    export let ringColor;
</script>

<div class="p-6 ring ring-inset {ringColor} w-full">
    <!-- <TypingAnimated text={content} delay={50} /> -->
    {content}
</div>
