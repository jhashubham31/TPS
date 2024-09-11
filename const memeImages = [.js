const memeImages = [
  'meme1.jpg',
  'meme2.jpg',
  'meme3.jpg',
  'meme4.jpg',
  'meme5.jpg'
];

const memeImage = document.getElementById('meme-image');
const newMemeButton = document.getElementById('new-meme-btn');

newMemeButton.addEventListener('click', function() {
  const randomMeme = memeImages[Math.floor(Math.random() * memeImages.length)];
  memeImage.src = randomMeme;
});
