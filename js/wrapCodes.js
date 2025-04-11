function wrapCodeBlocks() {
  // After rendering the Markdown content
  document.querySelectorAll('code').forEach((codeBlock) => {
    // Check if the parent is already a <pre> tag
    if (codeBlock.parentElement.tagName.toLowerCase() !== 'pre') {
      // Create a <pre> element
      const pre = document.createElement('pre');
      pre.className = "line-numbers";
      console.log(pre.className);
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
      console.log("Text node found:", node.textContent);

      // Wrap the text node in a <span>
      const span = document.createElement('span');
      span.textContent = node.textContent;
      span.className = "variableName"
      node.replaceWith(span);
    }
  });
  })
}