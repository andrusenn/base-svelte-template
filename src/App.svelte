<script>
    import routes from "./routes";
    import { RouterView, RouterLink } from "svelte-routed";
</script>

<style lang="scss" global>
    @import "./scss/style.scss";

    .slide-content {
        // height: 100vh;
        background: #ccc;
        position: relative;
        video {
            object-fit: cover;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }
        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }
    }
</style>

<nav class="main-nav">
    <div class="main-nav-brand">
        <RouterLink name="home">BRAND</RouterLink>
    </div>
    <div class="main-nav-nav">
        <ul>
            <li>
                <RouterLink title="home" name="home">Home</RouterLink>
            </li>
            <li>
                <RouterLink title="about" name="about">About</RouterLink>
            </li>
        </ul>
        <button class="toggle-menu">MENU</button>
    </div>
</nav>
<!-- <header class="main-header">Header</header> -->
<main class="main-content">
    <RouterView use={routes} />
</main>
<footer class="main-footer">footer</footer>
