import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module';
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader';

let container: HTMLDivElement;
let stats: Stats, clock: THREE.Clock;
let camera: THREE.PerspectiveCamera, scene: THREE.Scene, renderer: THREE.WebGLRenderer, elf: THREE.Object3D;

init();
animate();

function init() {
    container = document.getElementById('container') as HTMLDivElement;

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.set(8, 10, 8);
    camera.lookAt(0, 3, 0);

    scene = new THREE.Scene();

    clock = new THREE.Clock();

    const loadingManager = new THREE.LoadingManager(() => {
        scene.add(elf);
    });

    const loader = new ColladaLoader(loadingManager);
    loader.load('./models/elf.dae', (collada) => {
        elf = collada.scene;
    });

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
    directionalLight.position.set(1, 1, 0).normalize();
    scene.add(directionalLight);

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    stats = new Stats();
    container.appendChild(stats.dom);

    window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    render();
    stats.update();
}

function render() {
    const delta = clock.getDelta();
    if (elf !== undefined) {
        elf.rotation.z += delta * 0.3;
    }
    renderer.render(scene, camera);
}
