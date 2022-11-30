/* Definido as constantes do personagem do jogo(chamando pelas classes das divs no HTML) */
const character = document.getElementsByClassName("character")[0];
const containerCharacter = document.getElementsByClassName("container-character")[0];

/* Definindo a constante da velocidade de deslocamento do personagem */
const VELOCITY = 10;

const SCREEN_WIDTH = screen.width;  /* Constante da largura da tela */
const SCREEN_HEIGHT = screen.height;  /* Constante da altura da tela */

let num = screen.width - 110 /* Largura máxima permitida para o descolamento do personagem */
let num_h = screen.height - 180 /* Altura máxima permitida para o deslocamento do personagem */

/* Posição inicial do personagem: */
let xPosition = 500;
let yPosition = 300;

const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"] /* Definindo quais teclas terão funções no jogo */
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"]; /* Direções que o personagem vai poder seguir */

window.addEventListener("keydown", (event) => {
    const key  = event.key;

    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => {
        return currentKey === key;
    })

    if(!keyPressedAvaiable) return;

    directions.forEach((direction) => {
        if(character.classList.contains(direction)) character.classList.remove(direction);
    })


    if(key === "ArrowUp" && yPosition >= 0){
        character.classList.add("turnUp");
        yPosition -= VELOCITY;
    }

    if(key === "ArrowDown" && yPosition <= num_h){
        character.classList.add("turnDown");
        yPosition += VELOCITY;
    }

    if(key === "ArrowLeft" && xPosition >= 0){
        character.classList.add("turnLeft");
        xPosition -= VELOCITY;
    }

    if(key === "ArrowRight" && xPosition <= num){
        character.classList.add("turnRight");
        xPosition += VELOCITY;
    }

    containerCharacter.style.top = `${yPosition}px`;
    containerCharacter.style.left = `${xPosition}px`
});
