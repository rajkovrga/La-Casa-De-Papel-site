document.addEventListener('DOMContentLoaded', function () {
    const smallPhoto = document.getElementsByClassName('small-photo');
    const bigImage = document.getElementById('big-photo');
    let numberSrc = -1;
    bigImage.setAttribute('data-src', smallPhoto[0].firstElementChild.src);
    bigImage.firstElementChild.src = bigImage.getAttribute('data-src');
    document.getElementsByClassName('fa-arrow-circle-right')[0].addEventListener('click', nextPhoto);
    document.getElementsByClassName('fa-arrow-circle-left')[0].addEventListener('click', prevPhoto);

    function nextPhoto() {
        numberSrc += 1;
        if (numberSrc >= smallPhoto.length) {
            numberSrc = 0;
        }
        borderSmallImage(numberSrc);
        bigImage.setAttribute('data-src', smallPhoto[numberSrc].firstElementChild.src);
        bigImage.firstElementChild.src = bigImage.getAttribute('data-src');
    }
    function prevPhoto() {
        numberSrc = numberSrc - 1;
        if (numberSrc < 0) {
            numberSrc = (smallPhoto.length - 1);
        }
        borderSmallImage(numberSrc);
        bigImage.setAttribute('data-src', smallPhoto[numberSrc].firstElementChild.src);
        bigImage.firstElementChild.src = bigImage.getAttribute('data-src');
    }
    function sliderAuto() {
        numberSrc += 1;
        if (numberSrc == smallPhoto.length) {
            numberSrc = 0;
        }
        borderSmallImage(numberSrc);
        bigImage.setAttribute('data-src', smallPhoto[numberSrc].firstElementChild.src);
        bigImage.firstElementChild.src = bigImage.getAttribute('data-src');
        setTimeout(sliderAuto, 4000);
    }
    sliding()
    sliderAuto();
    function borderSmallImage(i) {
        for (let j = 0; j < smallPhoto.length; j++) {
            smallPhoto[j].classList.remove('smallPhotoBorder');
        }
        smallPhoto[i].classList.add('smallPhotoBorder');
    }

    for (let i = 0; i < smallPhoto.length; i++) {
        smallPhoto[i].firstElementChild.addEventListener('click', function () {
            numberSrc = i;
            borderSmallImage(numberSrc);
            bigImage.setAttribute('data-src', this.src);
            bigImage.firstElementChild.src = bigImage.getAttribute('data-src');

        })
    }
    function sliding() {
        $('#slide').css('width', '0%');
        $('#slide').animate({ 'width': '0' }, 0)
        $('#slide').animate({ 'width': '100%' }, 3999)
        setTimeout(sliding, 4000);
    }


});