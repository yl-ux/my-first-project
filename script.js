// 主题切换与表单处理
(function () {
    const root = document.documentElement;
    const toggle = document.getElementById('themeToggle');
    const stored = localStorage.getItem('theme');
    if (stored) document.documentElement.setAttribute('data-theme', stored);
    function updateIcon() {
        const t = document.documentElement.getAttribute('data-theme');
        toggle.textContent = t === 'dark' ? '☀️' : '🌙';
    }
    updateIcon();
    toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateIcon();
    });

    // 表单验证（仅前端演示）
    const form = document.getElementById('contactForm');
    const msg = document.getElementById('formMsg');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        if (!name || !email || !message) {
            msg.textContent = '请填写所有字段。';
            return;
        }
        // 简单邮箱格式检查
        const mailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!mailRe.test(email)) {
            msg.textContent = '请输入有效的邮箱地址。';
            return;
        }
        msg.textContent = '已准备好发送（仅前端演示）。感谢您的联系！';
        form.reset();
    });
})();
