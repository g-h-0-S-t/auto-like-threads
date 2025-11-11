javascript: (async function simpleAutoLike() {
  const DELAY = 900, STEP = 700, MAX_ROUNDS = 40;
  let totalLiked = 0, rounds = 0;

  function clickLikes() {
    let liked = 0;
    document.querySelectorAll('[aria-label="Like"]').forEach(v => {
      const clickable = v.parentNode || v;
      if (
        clickable &&
        !clickable.matches('[aria-pressed="true"],[aria-checked="true"],[aria-disabled="true"]')
      ) { try { clickable.click(); liked++; totalLiked++; } catch {} }
    });
    console.log(`Cycle ${rounds + 1}: Liked ${liked}, Total: ${totalLiked}`);
  }

  while (rounds < MAX_ROUNDS) {
    clickLikes();
    window.scrollBy(0, STEP);
    await new Promise(res => setTimeout(res, DELAY));
    rounds++;
  }
  console.log(`Auto-like finished! Total liked: ${totalLiked}`);
})();
