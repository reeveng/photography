<script>
  // @ts-nocheck

  const imageModules = {
    ...import.meta.glob("../assets/static/*/*.JPG"),
    ...import.meta.glob("../assets/static/*/*.jpg"),
  };
  let openSections = [];

  let urls = {};
  for (const modulePath in imageModules) {
    imageModules[modulePath]().then(({ default: imageUrl }) => {
      let urlParts = imageUrl.split("/");
      let collectionName = urlParts[urlParts.length - 1];
      collectionName = collectionName.split(".")[0]

      // if the collectionName isn't yet present in urls, create an empty array
      if (urls[collectionName] == undefined) {
        urls[collectionName] = [];
      }

      // add url to the right collection
      urls[collectionName].push(imageUrl);
      urls[collectionName] = urls[collectionName];
    });
    urls = urls;
  }

  const openNewSection = (sectionName) => {
    if (openSections.includes(sectionName)) {
      openSections = openSections.filter((i) => i != sectionName);
    } else {
      openSections.push(sectionName);
      openSections = openSections;
    }
  };
</script>

<h2 class="part">Collections</h2>
<ul>
  {#each Object.entries(urls) as [collectionName, pictures]}
    <li>
      <button on:click={openNewSection(collectionName)}>
        {collectionName}
      </button>

      {#if openSections.includes(collectionName)}
        <ul>
          {#each pictures as picture}
            <li>
              <img src={picture} alt="" />
            </li>
          {/each}
        </ul>
      {/if}
    </li>
  {/each}
</ul>
