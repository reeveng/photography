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

  <div class="socials">
    <hr />
    <div class="links part">
      <a
        href="https://www.pexels.com/@j-mad-65591688/"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <i class="fa-solid fa-link" />
        <span class="sr-only">
          Link to my socials page, where there are several links through which
          you can stalk me
        </span>
      </a>
      <a
        href="https://www.pexels.com/@j-mad-65591688/"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <i class="fa-solid fa-camera-retro" />
        <span class="sr-only">
          Link to pexels, a site where I you can find more of my photos
        </span>
      </a>
    </div>
  </div>
</main>
