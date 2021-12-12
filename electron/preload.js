/* in the event of an error, this will return the electron, node.js, sboilerplate and chromium version for debug purposes */

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron', 'sboilerplate']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})