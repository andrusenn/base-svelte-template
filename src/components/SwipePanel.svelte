<script>
    import { onMount, afterUpdate } from "svelte";
    // Props
    export let panelWidth = 1,
        swipeAng = 15,
        open = false;
    //
    let touching = false;
    let x, ix, y, iy, px, py, cx, cy;
    let lng = 0;
    let dir = 0;
    let panel;
    let ww = 0;
    onMount(() => {
        panel = document.getElementById("svelte-c-swipepanel");
    });
    afterUpdate(() => {
        if (panel) {
            if (open) {
                panel.style.width = ww * panelWidth + "px";
            } else {
                panel.style.width = "0px";
            }
        }
    });
    function moveStart(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        touching = true;
        ix = e.touches ? e.touches[0].screenX : e.screenX;
        iy = e.touches ? e.touches[0].screenY : e.screenY;
        x = ix;
        y = iy;
        px = ix;
        py = iy;
        cx = ix;
        cy = iy;
        if (typeof window !== "undefined") {
            window.addEventListener("touchmove", moveHandler);
            window.addEventListener("touchend", endHandler);
        }
    }
    function endHandler(e) {
        e && e.stopImmediatePropagation();
        e && e.stopPropagation();
        touching = false;

        let ang = Math.atan2(y - iy, x - ix) * (180 / Math.PI);
        if (!open && Math.abs(ang) < swipeAng) {
            if (dir === 1 && lng > window.innerWidth * 0.1) {
                if (panel) {
                    panel.style.width = ww * panelWidth + "px";
                }
                open = true;
            } else {
                panel.style.width = "0px";
            }
        }
        if (open && Math.abs(ang) < 180 + swipeAng) {
            if (dir === -1 && lng > window.innerWidth * 0.1) {
                if (panel) {
                    panel.style.width = "0px";
                }
                open = false;
            } else {
                panel.style.width = ww * panelWidth + "px";
            }
        }
        lng = 0;
        dir = 0;
        x = null;
        y = null;
        if (typeof window !== "undefined") {
            window.removeEventListener("touchmove", moveHandler);
            window.removeEventListener("touchend", endHandler);
        }
    }
    function moveHandler(e) {
        if (touching) {
            e.stopImmediatePropagation();
            e.stopPropagation();
            x = e.touches ? e.touches[0].screenX : e.screenX;
            y = e.touches ? e.touches[0].screenY : e.screenY;
            if (ix) {
                lng = Math.abs(x - ix);
                cx = x;
                cy = y;
                if (cx - px < 0) {
                    dir = -1;
                } else {
                    dir = 1;
                }
                let ang = Math.atan2(y - iy, x - ix) * (180 / Math.PI);
                if (open && dir < 0) {
                    let w = ww * panelWidth;
                    if (Math.abs(ang) < 180 + swipeAng) {
                        panel.style.width = w - lng + "px";
                    } else {
                        panel.style.width = w + "px";
                    }
                }
                if (!open && dir > 0) {
                    let w = x - ix;
                    if (Math.abs(ang) < swipeAng) {
                        panel.style.width = w + "px";
                    } else {
                        panel.style.width = "0px";
                    }
                }
                px = cx;
                py = cy;
            }
        }
    }
</script>

<style lang="scss" global>
    .svelte-c-swipepanel {
        position: fixed;
        overflow: hidden;
        top: 0;
        left: 0;
        width: 0;
        height: 100vh;
        transition: width 0.1s;
        z-index: 9999;
        box-shadow: 5px 0 8px rgba(0, 0, 0, 0.4);
    }
</style>

<svelte:window bind:innerWidth={ww} on:touchstart={moveStart} />

<aside id="svelte-c-swipepanel" class="svelte-c-swipepanel">
    <slot />
</aside>
