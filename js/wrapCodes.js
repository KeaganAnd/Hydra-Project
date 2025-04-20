function wrapCodeBlocks() {
  // After rendering the Markdown content
  document.querySelectorAll('code').forEach((codeBlock) => {
    const div = document.createElement('div')
    div.className = "code-block-wrapper"
    
    // Check if the parent is already a <pre> tag
    if (codeBlock.parentElement.tagName.toLowerCase() !== 'pre') {
      // Create a <pre> element
      const pre = document.createElement('pre');
      pre.className = "line-numbers language-lua";
      // Move the <code> block inside the <pre> block
      
      codeBlock.parentElement.replaceChild(pre, codeBlock);
      
      pre.appendChild(codeBlock);

      pre.parentElement.replaceChild(div, pre)
      div.appendChild(pre)

    } else {
      codeBlock.parentElement.classList.add("line-numbers");
      codeBlock.parentElement.parentElement.replaceChild(div, codeBlock.parentElement)
      div.appendChild(codeBlock.parentElement)
    }

    
  });
}

function wrapTextElements() {
  codeBlock = document.querySelectorAll('code').forEach((codeBlock) => {
  // Iterate through all child nodes of the <code> block
  codeBlock.childNodes.forEach((node) => {
    // Check if the node is a text node and not empty
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== "") {

      // Wrap the text node in a <span>
      const span = document.createElement('span');
      span.textContent = node.textContent;
      span.className = "variableName"
      node.replaceWith(span);
    }
  });
  })
}

function makeAccordions() {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      let clickedElement = this
      this.classList.toggle("active");

      let sibling = this.parentElement.nextElementSibling;
      let img = this.parentElement.getElementsByClassName("accordion-down-arrow")[0];

      if (sibling.style.maxHeight) {
        // Collapse the panel
        
        sibling.style.maxHeight = null;
        
        
        sibling.addEventListener(
          "transitionend",
          function () {
            if (window.getComputedStyle(this).borderRadius == '0px 0px 10px 10px') {
              
              img.style.transform = "translate(50%, 50%) rotate(0deg)";
              clickedElement.style.borderRadius = "10px";
              console.log("Here")
              
            }
            sibling.style.display = "none";
          },
          { once: true } // Ensures the event listener is removed after it fires
        );
      } else {
        // Expand the panel
        sibling.style.display = 'block'
        sibling.style.maxHeight = sibling.scrollHeight + "px";
        this.style.borderRadius = "10px 10px 0px 0px";
        img.style.transform = "translate(50%, 50%) rotate(180deg)";
      }
    });
  }
}