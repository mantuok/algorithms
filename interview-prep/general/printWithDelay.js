var lastPrintedTime = 0;

const printMessage = (message) => {
  const now = new Date();

  if (now - lastPrintedTime >= 500) {
    console.log(message);
    lastPrintedTime = now;
  }
}

printMessage("Hello")
printMessage("World 1")
setTimeout(() => printMessage("World 2"), 600)