let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-game");
let newGameBtn = document.querySelector(".new-btn");
let msg_container = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turnO = true; //playerX , playeO

const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

//game reset krne ke liye ye function banaya h

const resetGame = () => {
  turnO = true;
  enabledboxes();
  msg_container.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("btn was clicked");
    if (turnO == true) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

//winner milne ke baad buttons disabled kr rahe h is function me
const disabledboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

//new game lane ke liye is function ka use kr rahe h
const enabledboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congrats The winner is ${winner}`;
  msg_container.classList.remove("hide");
  disabledboxes();
};

const checkWinner = () => {
  for (let pattern of winpatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    // this is for understanting
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    // );

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        // console.log("winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
