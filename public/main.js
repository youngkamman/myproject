// import "./style.css";

 import * as THREE from "three";

 import { OrbitControls } from 'https://unpkg.com/three/examples/jsm/controls/OrbitControls.js';

// import { threex. } from 'three.interaction';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector("#bg"),
  antialias: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.SphereGeometry(15, 32, 16, 100);
const earthTexture = new THREE.TextureLoader().load("/img-three/earth.jpg");
const normalTexture = new THREE.TextureLoader().load("/img-three/normal.jpg");
const material = new THREE.MeshStandardMaterial({
  map: earthTexture,
  normalMap: normalTexture,
});
const earth = new THREE.Mesh(geometry, material);

scene.add(earth);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)
const djTexture = new THREE.TextureLoader().load("/img-three/dj.jpg");
const katTexture = new THREE.TextureLoader().load("/img-three/kat.jpg");
const andrewTexture = new THREE.TextureLoader().load("/img-three/andrew.jpg");
const camTexture = new THREE.TextureLoader().load("/img-three/cam.jpg");
const robTexture = new THREE.TextureLoader().load("/img-three/rob.jpg");
const pTexture = new THREE.TextureLoader().load("/img-three/p.png");
const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({ map: djTexture })
);
cube1.position.set(15, 15, 15);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({ map: katTexture })
);

cube2.position.set(15, 15, 15);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({ map: andrewTexture })
);

cube3.position.set(15, 15, 15);

const cube4 = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({ map: camTexture })
);
cube4.position.set(15, 15, 15);


const cube5 = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({ map: robTexture })
);
cube5.position.set(15, 15, 15);



const cube6 = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({ map: pTexture })
);
cube6.position.set(15, 15, 15);

scene.add(cube1, cube2, cube3, cube4,cube5,cube6);

const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

const spaceTexture = new THREE.TextureLoader().load("/img-three/space.jpg");
// scene.background = spaceTexture;

const gameTexture = new THREE.TextureLoader().load("/img-three/game.png");

const game = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({ map: gameTexture })
);
game.position.set(15, 15, 15);


scene.add(game);

earth.position.z = -40;

game.position.z = 170;
game.position.y = 0;
game.position.x = 3;

cube1.position.z = 280;
cube1.position.y = 15;
cube1.position.x = -20;

cube2.position.z = 280;
cube2.position.y = 15;
cube2.position.x = -15;

cube3.position.z = 280;
cube3.position.y = 15;
cube3.position.x = -10;

cube4.position.z = 280;
cube4.position.y = 15;
cube4.position.x = -25;

cube5.position.z = 280;
cube5.position.y = 5;
cube5.position.x = -10;


cube6.position.z = 280;
cube6.position.y = 10;
cube6.position.x = -10;

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  earth.rotation.X += 0.05;
  earth.rotation.y += 0.075;
  earth.rotation.z += 0.05;

  // game.rotation.y += 0.01;
  // game.rotation.z += 0.01;

  camera.position.z = t * -0.1;
  // camera.position.x = t * -0.0002;
  // camera.rotation.y = t * -0.0002;
}
document.body.onscroll = moveCamera;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  // earth.rotation.x += 0.01;
  // earth.rotation.y += 0.005;
  // earth.rotation.z += 0.01;
  game.rotation.y += 0.0005;
  cube4.rotation.y += 0.0015;
  cube1.rotation.y += -0.0015;
  cube2.rotation.y += 0.0015;
  cube3.rotation.y += -0.0015;
  cube5.rotation.y += -0.0015;
  cube6.rotation.y += -0.0015;
  controls.update();
}

animate();
