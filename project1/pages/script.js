const loadMoreBtn = document.getElementById('loadMoreBtn');
  const videoContainer = document.getElementById('videoContainer');

  const videoData = [
    {
      src: "https://www.youtube.com/embed/D42CMuu5luc?si=UhCDNMbpaYFzkBB0",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      src: "https://www.youtube.com/embed/D42CMuu5luc?si=UhCDNMbpaYFzkBB0",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      src: "https://www.youtube.com/embed/D42CMuu5luc?si=UhCDNMbpaYFzkBB0",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      src: "https://www.youtube.com/embed/D42CMuu5luc?si=UhCDNMbpaYFzkBB0",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  ];

  loadMoreBtn.addEventListener('click', () => {
    videoData.forEach(video => {
      const videoCard = document.createElement('div');
      videoCard.className = 'video-card';
      videoCard.innerHTML = `
        <iframe class="video" width="560" height="315" src="${video.src}" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <span class="video-desc">${video.desc}</span>
      `;
      videoContainer.appendChild(videoCard);
    });

    loadMoreBtn.remove();
  });



  const showMoreBtn = document.getElementById('showMoreBtn');
  const allVideos = document.getElementById('allVideos');

  const videoDate = [
    {
      src: "https://www.youtube.com/embed/D42CMuu5luc?si=UhCDNMbpaYFzkBB0",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      src: "https://www.youtube.com/embed/D42CMuu5luc?si=UhCDNMbpaYFzkBB0",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      src: "https://www.youtube.com/embed/D42CMuu5luc?si=UhCDNMbpaYFzkBB0",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      src: "https://www.youtube.com/embed/D42CMuu5luc?si=UhCDNMbpaYFzkBB0",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  ];

  showMoreBtn.addEventListener('click', () => {
    videoDate.forEach(video => {
      const videoCard = document.createElement('div');
      videoCard.className = 'video-card';
      videoCard.innerHTML = `
        <iframe class="video" width="560" height="315" src="${video.src}" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <span class="video-desc">${video.desc}</span>
      `;
      allVideos.appendChild(videoCard);
    });

    showMoreBtn.remove();
  });



  const swiper = new Swiper('.swiper', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
