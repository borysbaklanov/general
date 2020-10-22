var animation = bodymovin.loadAnimation({
  container: document.getElementById('icon'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'https://assets4.lottiefiles.com/packages/lf20_pczvurpk.json'
});
animation.setSpeed(1);
function play() {
  if (document.getElementById("switchbox").checked == true) {
animation.playSegments([0,36], true)}}
