<script>
    import { ChevronLeftIcon, ChevronRightIcon } from "svelte-feather-icons";
    import "tiny-slider/dist/tiny-slider.css";
    import { tns } from "tiny-slider/src/tiny-slider";
    import { onMount, onDestroy } from "svelte";

    let slider;
    onMount(() => {
        slider = tns({
            container: ".tslider",
            items: 1,
            controls: false,
            nav: false,
            autoplayButtonOutput: false,
            // mouseDsrag: true,
            preventActionWhenRunning: true,
            preventScrollOnTouch: "auto",
            slideBy: "page",
            autoplay: true,
        });
    });

    function next() {
        slider.goTo("next");
    }
    function prev() {
        slider.goTo("prev");
    }
</script>

<style lang="scss">
    .tslider-wrapper {
        width: 100%;
        height: auto;
        overflow: hidden;
        position: relative;
        .left-btn,
        .right-btn {
            cursor: pointer;
            outline: transparent;
            background: transparent;
            border: none;
            position: absolute;
            top: 50%;
            width: 45px;
            height: 45px;
            z-index: 1;
        }
        .left-btn {
            left: 0%;
        }
        .right-btn {
            right: 0%;
        }
        .tslider {
            z-index: -1;
        }
    }
</style>

<div class="tslider-wrapper">
    <button on:click={prev} class="left-btn" role="button">
        <ChevronLeftIcon />
    </button>
    <button on:click={next} class="right-btn" role="button">
        <ChevronRightIcon />
    </button>
    <div class="tslider">
        <slot />
    </div>
</div>
