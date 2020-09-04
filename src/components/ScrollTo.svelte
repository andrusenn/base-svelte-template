<script>
    import smoothscroll from "smoothscroll-polyfill";

    smoothscroll.polyfill();

    import { expoInOut } from "svelte/easing";
    import { tweened } from "svelte/motion";

    export let href,
        cssStyle,
        cssClass,
        offset = 0;
    // let spos = 0;
    function sc(e) {
        e.preventDefault();
        let el = document.getElementById(e.target.hash.replace("#", ""));
        let pos = el.getBoundingClientRect().top + parseInt(offset);
        window.scroll({
            top: pos,
            behavior: "smooth",
        });
    }
</script>

<a on:click={sc} {href} style={cssStyle} class={cssClass}>
    <slot />
</a>
