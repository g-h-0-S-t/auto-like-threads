# Auto-Like Threads posts Bookmarklet

A simple browser bookmarklet to automatically like all visible "Like" buttons on threads.com.  
**Keeps scrolling and liking forever until you stop it.  
No UI overlays, no page changes—just logs progress to Console.**

---

## How To Use

1. **Copy the code from the JS file** as the bookmark’s URL (must start with `javascript:`).
2. **Open a profile on threads.com** whose posts you want to like, then click the bookmarklet.
3. **Watch the progress in your browser’s console** (`F12` → Console tab).
4. **To stop:** reload the page or close the tab.

---

## Notes

- **Runs forever**—it will only stop if you refresh or close the page.
- Customizable: Change `STEP` (scroll distance), `DELAY` (speed) at the top of the code.
- No page elements are injected and no comments are present—safe for all CSP/Trusted Types sites.

---

## Disclaimer

- For personal use and accessibility only.
- Do not use on websites or accounts where automation is against the rules.
