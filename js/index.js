document.addEventListener('DOMContentLoaded', function() {
    // 获取所有导航链接
    const navLinks = document.querySelectorAll('nav a');
    // 获取所有页面
    const pages = document.querySelectorAll('.page');

    // 初始加载时处理路由
    handleRoute();

    // 监听hash变化
    window.addEventListener('hashchange', handleRoute);

    // 处理路由函数
    function handleRoute() {
        // 获取当前hash（如果没有hash则默认为#home）
        const currentHash = window.location.hash || '#home';

        // 更新导航链接的active类
        navLinks.forEach(link => {
            link.classList.remove('active');//把a标签上的所有active类名取消
            if (link.getAttribute('href') === currentHash) {
                link.classList.add('active');
            }
        });

        // 更新页面的active类
        pages.forEach(page => {
            page.classList.remove('active');
            if (`#${page.id}` === currentHash) {
                page.classList.add('active');
            }
        });
    }

    // 为导航链接添加点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();//组织浏览器默认事件
            window.location.hash = this.getAttribute('href');
        });
    });
});