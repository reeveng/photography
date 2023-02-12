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
    <span>
      <span class="gold">Per</span>fect<br />
      imper<span class="gold">fect</span>ions
    </span>
  </h1>
  <p class="part about">
    Some things aren't meant to be perfect, yet they are perfectly imperfect.
  </p>
  <Collections />
</main>
