function scrollScreen() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.querySelector('.navbar').style.minHeight = '85px';
        document.querySelector('.navbar').style.position = 'fixed';
        document.querySelector('.navbar').style.display = 'block';
        document.querySelector('.navbar').style.transition = 'all 1s ease';

    } else if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
        document.querySelector('.navbar').style.minHeight = '75px';
        document.querySelector('.navbar').style.position = 'sticky';
    } else {

        document.querySelector('.navbar').style.display = 'none';
    }
}
window.onscroll = function() {
    scrollScreen();
}