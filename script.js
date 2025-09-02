    // ========= Theme Toggle =========
    const root = document.documentElement;
    const themeBtn = document.getElementById('themeBtn');
    const lbl = themeBtn.querySelector('.lbl');

    function setTheme(mode){
      root.setAttribute('data-theme', mode);
      localStorage.setItem('theme', mode);
      themeBtn.firstChild.nodeValue = mode === 'dark' ? '☀️ ' : '🌙 ';
      lbl.textContent = mode === 'dark' ? 'Light' : 'Dark';
    }

    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(saved || (prefersDark ? 'dark' : 'light'));

    themeBtn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });

    // ========= Contact Form (Demo) =========  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const res = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
      status.textContent = "✅ Message sent successfully!";
      form.reset();
    } else {
      status.textContent = "❌ Oops! Something went wrong.";
    }
  });


    // ========= Footer Year =========
    document.getElementById('year').textContent = new Date().getFullYear();

    // ========= Resume Download Placeholder =========
   const resumeLink = document.getElementById('dlResume');
resumeLink.addEventListener('click', (e) => {
  // let the anchor do its job; no alert/popups
});