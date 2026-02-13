document.getElementById('btn').addEventListener('click', () => {
    document.getElementById('menu').classList.toggle('visible');
    document.getElementById('btn').classList.toggle('visible');
    document.getElementById('body').classList.toggle('lock');
});

document.getElementById('contact_btn').addEventListener('click', () => {
    document.getElementById('menu_form').classList.add('window_filter');
    document.getElementById('body').classList.add('lock');
    document.getElementById('window_filter').classList.add('lock');
});

document.getElementById('close_button').addEventListener('click', () => {
    document.getElementById('menu_form').classList.remove('window_filter');
    document.getElementById('body').classList.remove('lock');
    document.getElementById('window_filter').classList.remove('lock');
});

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

const letters = "QWE!@#$%&RTY8QH130@";
const fontSize = 16;

let columns;
let drops;

function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    columns = Math.floor(canvas.width / fontSize);
    drops = [];

    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * canvas.height;
    }
}

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "rgba(0, 255, 170, 0.25)";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i]);

        if (drops[i] > canvas.height && Math.random() > 0.97) {
            drops[i] = 0;
        }

        drops[i] += fontSize;
    }
}

init();

function animate() {
    draw();
    requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", init);

document.getElementById('arrow').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.getElementById('works').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('section_works').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('skills').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('section_skills').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('contact').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('section_contact').scrollIntoView({
        behavior: 'smooth'
    });
});