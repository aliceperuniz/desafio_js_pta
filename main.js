/* definido as constantes do personagem do jogo(chamando pelas classes das divs no HTML) */
const character = document.getElementsByClassName("character")[0];
const containerCharacter = document.getElementsByClassName("container-character")[0];

/* definindo a constante da velocidade de deslocamento do personagem */
const VELOCITY = 10;

const SCREEN_WIDTH = screen.width;  /* constante da largura da tela */
const SCREEN_HEIGHT = screen.height;  /* constante da altura da tela */

let num = screen.width - 110 /* largura máxima permitida para o descolamento do personagem */
let num_h = screen.height - 180 /* altura máxima permitida para o deslocamento do personagem */

/* posição inicial do personagem: */
let xPosition = 500;
let yPosition = 300;

const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"] /* definindo quais teclas terão funções no jogo */
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"]; /* direções que o personagem vai poder seguir */

/* permite adicionar manipulador de eventos => */
window.addEventListener("keydown", (event) => {
    const key  = event.key;

    /* atribuindo à currentKey o valor de key(evento) se uma key disponível for teclada */
    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => {
        return currentKey === key;
    })

    if(!keyPressedAvaiable) return;

    directions.forEach((direction) => {
        if(character.classList.contains(direction)) character.classList.remove(direction);
    })

    /* determinando as condições para poder realizar movimentos (esquerda, direita, cima , baixo) */
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
    
    /* determinando a posição do topo e do lado esquerdo do elemento, quando este está posicionado/parado */
    containerCharacter.style.top = `${yPosition}px`;
    containerCharacter.style.left = `${xPosition}px`
});
