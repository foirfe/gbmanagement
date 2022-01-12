const dtswissvideo = document.getElementById("dtswissvideo");
let erPaaPause = true;
//Intersection observer
let observer = new IntersectionObserver((entries,observer) => {
for (const brandactivationvideo of entries){
    if (brandactivationvideo.isIntersecting && erPaaPause===true){
        dtswissvideo.play();
        erPaaPause = false;
    } else {
dtswissvideo.pause();
erPaaPause = true;
    }
        
};

}, {threshold: 1}); // 1 = brandactivationvideo skal være 100% i viewport for at tælle med

//Hovedprogram

const brandactivationvideo = document.getElementById("brandactivationvideo");
observer.observe(brandactivationvideo);