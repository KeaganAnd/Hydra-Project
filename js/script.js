const params = new URLSearchParams(window.location.search);
let article = params.get('section') || 'intro'; // default to 'intro'
article = `${article}.md`; // append .md if not present

fetch(`articles/${article}`)
  .then(res => {
    if (!res.ok) throw new Error('Article not found');
    return res.text();
  })
  .then(md => {
    const html = marked.parse(md);
    document.getElementById('content').innerHTML = html;

    wrapCodeBlocks()
    makeAccordions()
    // Apply syntax highlighting after the content is added
    Prism.highlightAll();
    wrapTextElements()

    
    // Dynamically add the copy button to each code block
    Array.from(document.getElementsByClassName('code-block-wrapper')).forEach((block) => {
      // Ensure the block has a <code> child element
      const code = block.querySelector('code');
      if (!code) return;

      // Create a button element for copying
      const copyBtn = document.createElement('button');
      copyBtn.classList.add('copy-btn');
      
      // Add an image inside the button
      const img = document.createElement('img');
      img.src = 'imgs/copy.png';  // Replace with your image path
      img.classList.add('copy-icon');
      copyBtn.appendChild(img);

      // Position the copy button at the top-right of the code block
      block.style.position = 'relative'; // Ensure that the button can be positioned inside the block
      copyBtn.style.right = '10px'
      copyBtn.style.top = '10px'
      copyBtn.style.position = 'absolute'
      block.insertBefore(copyBtn, block.firstChild);

      // Add event listener for the copy button
      copyBtn.addEventListener('click', () => {
        const codeText = code.textContent;  // Get the code text
        navigator.clipboard.writeText(codeText).then(() => {
        });
      });
      
      // Change the image source on mouse enter (hover)
      img.addEventListener('mouseenter', () => {
        img.src = 'imgs/copy-hightlight.png';
      });

      // Revert back to the original source when mouse leaves
      img.addEventListener('mouseleave', () => {
        img.src = 'imgs/copy.png';
      });
    });
  })
  .catch(err => {
    document.getElementById('content').innerHTML = `<p>Error: ${err.message}</p>`;
  });
