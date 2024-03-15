function jump() {
    const samurai = document.querySelector('.samurai');
    samurai.style.animation = 'none';
    setTimeout(() => {
        samurai.style.animation = 'jumpAnimation 0.5s ease';
    })
}

