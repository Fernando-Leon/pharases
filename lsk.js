const card3D = () => {
    const wrapper = $('.wrapper');
    const ticket = $('.ticket');

    //Para Escritorio
    const { width, height } = wrapper.getBoundingClientRect();
    const halfWidth = width / 2;
    const halfHeight = height / 2;

    wrapper.addEventListener('mousemove', event => {
        ticket.style.transition = 'none';
        const  {offsetX, offsetY} = event;
        const rotationX = ((offsetX - halfWidth) / halfWidth) * 25;
        const rotationY = ((offsetY - halfHeight) / halfHeight) * 25;
        console.log(rotationY);
        ticket.style.transform  = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`
    })

    wrapper.addEventListener('mouseleave', () => {
        ticket.style.transition = 'transform .3s ease-in-out';
        ticket.style.transform = 'rotateX(0deg) rotateY(0deg)';
    })

    //Para dispositivos moviles
    window.addEventListener("deviceorientation",function(event) {
        const rotationX = Math.round(event.beta);
        const rotationY = Math.round(event.gamma);
        ticket.style.transform  = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    }, true);
}