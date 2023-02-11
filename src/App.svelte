<script>
  import logo from "./assets/images/logo.svg";
  import Collections from "./lib/Collections.svelte";
</script>

<main>
  <div class="part">
    <img
      class="pfp"
      src={logo}
      alt="a logo of a cod (a fish species), free to roam the world"
    />
  </div>
  <h1 class="part">
    Perfect<br />
    imperfections
  </h1>
  <p class="part about">
    Some things aren't meant to be perfect, yet they are perfectly imperfect.
  </p>
  <Collections />
</main>
