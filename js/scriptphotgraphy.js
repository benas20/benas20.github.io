import * as THREE from "three";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0, 1.5, 6);

const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("canvas"),
    antialias: true,
    alpha: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Luz ambiental
const ambient = new THREE.AmbientLight(0xffffff, 2);
scene.add(ambient);

// Luz principal
const directional = new THREE.DirectionalLight(0xffffff, 3);
directional.position.set(5, 10, 7);
scene.add(directional);

// Libro
let book;

const loader = new FBXLoader();

loader.load(

    "livre.fbx",

    function(fbx){

        book = fbx;

        // Ajusta la escala según tu modelo
        book.scale.set(0.01,0.01,0.01);

        // Centrar el modelo
        const box = new THREE.Box3().setFromObject(book);
        const center = box.getCenter(new THREE.Vector3());

        book.position.sub(center);

        scene.add(book);

    },

    undefined,

    function(error){
        console.error(error);
    }

);

// Animación
function animate(){

    requestAnimationFrame(animate);

    if(book){
        book.rotation.y += 0.01;
    }

    renderer.render(scene,camera);

}

animate();

// Responsive
window.addEventListener("resize",()=>{

    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth,window.innerHeight);

});
