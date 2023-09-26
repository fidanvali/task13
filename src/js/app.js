 
setTimeout(function() {
            document.querySelector('.loading-icon').style.display = 'none'; 
            document.querySelector('#myInput').style.display = 'block'; 
        }, 5000); 
        document.addEventListener("keydown", function (event) {
            if (event.key === " " && document.activeElement.tagName === "INPUT") {
              const inputElement = document.activeElement;
              inputElement.value = inputElement.value.slice(0, -1);
              event.preventDefault();
            }
          });
          document.addEventListener("keydown", function (event) {
            if (event.key === "Backspace" && document.activeElement.tagName === "INPUT") {
              const inputElement = document.activeElement;
              inputElement.value += " ";
              event.preventDefault();
            }
          });