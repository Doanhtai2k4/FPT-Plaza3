const panorama = new PANOLENS.ImagePanorama('../Images/f1.jpg');
const panorama2 = new PANOLENS.ImagePanorama('../Images/f1.jpg');
let imageContainer = document.querySelector('.image-container');

var infospotPositions = [
new THREE.Vector3(-2136.06, 16.30, 890.14),
new THREE.Vector3(-3136.06, 296.30, -4290.14),
];

const viewer = new PANOLENS.Viewer({
container: imageContainer,
autoRotate: true,
autoRotateSpeed: 0.3,
controlBar: true,

});

panorama.link(panorama2, infospotPositions[0]);
panorama2.link(panorama, infospotPositions[1]);
viewer.add(panorama);
viewer.add(panorama2);