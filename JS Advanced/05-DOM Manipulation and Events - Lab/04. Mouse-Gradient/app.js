function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient');
    const resultelement = document.getElementById('result');

    gradientElement.addEventListener('mousemove', (e) => {
        const width = Number(e.target.clientWidth);
        const current = Number(e.offsetX);
        const percentage = Math.floor(current / width * 100);

        resultelement.textContent = `${percentage}%`;
    })
}