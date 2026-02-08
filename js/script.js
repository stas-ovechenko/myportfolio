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