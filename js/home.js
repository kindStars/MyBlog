
// 打字效果函数
function typeWriter(element, texts, options = {}) {
    // 默认配置
    const defaults = {
        typingSpeed: 100,    // 打字速度(毫秒)
        deletingSpeed: 50,   // 删除速度(毫秒)
        pause: 2000,         // 显示完整文本后的暂停时间(毫秒)
        loop: true,          // 是否循环
        showCursor: true     // 是否显示光标
    };
    // 合并配置
    options = {...defaults, ...options};
    let currentTextIndex = 0;//文本索引
    let isDeleting = false;//是否正在删除
    let text = '';//存放截取的每个字符
    let charIndex = 0;//前进索引
    function type() {
        const currentText = texts[currentTextIndex];
        // 打字阶段
        if (!isDeleting) {
            text = currentText.substring(0, charIndex + 1);
            charIndex++;
            // 更新显示文本
            element.innerHTML = text + (options.showCursor ? '<span class="cursor"></span>' : '');
            // 如果打字完成，进入暂停和删除阶段
            if (charIndex === currentText.length) {
                setTimeout(() => {
                    isDeleting = true;
                    type();
                }, options.pause);
                return;
            }
        }
        // 删除阶段
        else {
            text = currentText.substring(0, charIndex - 1);
            charIndex--;
            // 更新显示文本
            element.innerHTML = text + (options.showCursor ? '<span class="cursor"></span>' : '');
            // 如果删除完成，切换到下一个文本或循环
            if (charIndex === 0) {
                isDeleting = false;
                currentTextIndex++;
                // 如果到达文本数组末尾
                if (currentTextIndex === texts.length) {
                    if (options.loop) {
                        currentTextIndex = 0;
                    } else {
                        return; // 结束
                    }
                }
            }
        }
        // 设置下一次调用的延迟时间
        const speed = isDeleting ? options.deletingSpeed : options.typingSpeed;
        setTimeout(type, speed);
    }
    // 开始打字效果
    type();
}
// 使用
const texts = [
    "front-end enthusiast"
];
const typingElement = document.querySelector('.change_txt');
// 初始化打字效果
typeWriter(typingElement, texts,{
    typingSpeed: 100,
    deletingSpeed: 50,
    pause: 700,
    loop: true,
    showCursor: true
});



// 获取元素
const remove = document.querySelectorAll('.remove');
// 添加上升类
function riseUp() {
    remove.forEach(el=>{
        return el.classList.add('remove_1');
    })
}
// 清除
function remove_riseUp() {
    remove.forEach(el=>{
         return el.classList.remove('remove_1');
    })
}
//监听滚动
let home = document.querySelector('.scroll_home');
function  scroll_fun(el){
    el.addEventListener('scroll', function() {
        let scrollPosition = this.scrollTop
        if (scrollPosition >= 50) {
            console.log('111')
            riseUp();
        }
        if(scrollPosition <50){
            remove_riseUp()
        }
    })
}
scroll_fun(home)

