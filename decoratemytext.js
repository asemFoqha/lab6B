function sayHello() {
  alert("Hello, world!");
}

function biggerDecoration() {
  document.getElementById("text").style.fontSize = "24px";
}

function checkBling1() {
  alert("test");
}

function checkBling2() {
  const textArea = document.getElementById("text");

  if (document.getElementById("bling").checked) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "green";
    textArea.style.textDecoration = "underline";
  } else {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

function checkBling3() {
  $("#body").css(
    "background-image",
    "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')"
  );
}

function biggerDecoration2() {
  let oldValue = $("#text").css("font-size");
  // let newValue = +oldValue.substring(0, oldValue.length - 2);
  let newValue = parseInt(oldValue);
  setInterval(() => {
    newValue += 2;
    $("#text").css("font-size", newValue + "px");
  }, 500);
}

const atinlay = () => {
  let wordsArray = $("#text").val().split(" ");
  for (let i = 0; i < wordsArray.length; i++) {
    if (
      wordsArray[i].startsWith("a") ||
      wordsArray[i].startsWith("o") ||
      wordsArray[i].startsWith("u") ||
      wordsArray[i].startsWith("i") ||
      wordsArray[i].startsWith("e")
    ) {
      wordsArray[i] = wordsArray[i] + "ay";
    } else {
      let first = wordsArray[i].substring(0, 1);
      wordsArray[i] =
        wordsArray[i].slice(1, wordsArray[i].length) + first + "ay";
    }
  }
  let test = wordsArray.toString();
  document.getElementById("text").value = wordsArray
    .toString()
    .replaceAll(",", " ");

  console.log(wordsArray);
};

const malkovitch = () => {
  let wordsArray = $("#text").val().split(" ");
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length >= 5) {
      wordsArray[i] = "Malkovitch";
    }
  }
  document.getElementById("text").value = wordsArray
    .toString()
    .replaceAll(",", " ");
};
