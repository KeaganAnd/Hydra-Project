function wrapCodeBlocks() {
  // After rendering the Markdown content
  document.querySelectorAll('code').forEach((codeBlock) => {
    // Check if the parent is already a <pre> tag
    if (codeBlock.parentElement.tagName.toLowerCase() !== 'pre') {
      // Create a <pre> element
      const pre = document.createElement('pre');
      pre.className = "line-numbers language-lua";
      // Move the <code> block inside the <pre> block
      codeBlock.parentElement.replaceChild(pre, codeBlock);
      pre.appendChild(codeBlock);
    } else {
      codeBlock.parentElement.classList.add("line-numbers");
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
    acc[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */

      let sibling = this.parentElement.nextElementSibling;

      let img = this.parentElement.getElementsByClassName("accordion-down-arrow")[0]

      if (sibling.style.display === "block") {
        sibling.style.display = "none";
        this.style.borderRadius = "10px"
        img.style.transform = 'translate(50%, 50%) rotate(0deg)'
      } else {
        sibling.style.display = "block";
        this.style.borderRadius = "10px 10px 0px 0px"
        img.style.transform = 'translate(50%, 50%) rotate(180deg)'
      }
    });
  } 
}