const colors = Array.from(document.querySelectorAll('.color')),
    viewCss = document.querySelector('.view-css'),
    copyCss = document.querySelector('.copy-css'),
    saturationRange = document.querySelector('.saturation-range'),
    saturationNumber = document.querySelector('.saturation-number')


colors.forEach(color => {
    color.addEventListener('click', (e) => {        
        viewCss.textContent = 'hsl(' + e.target.dataset.hue + ', ' + getComputedStyle(document.documentElement).getPropertyValue("--saturation") + ' , ' + e.target.dataset.lum + ')'
    })
})

copyCss.addEventListener('click', () => {
    navigator.clipboard.writeText(viewCss.textContent)  
    copyCss.innerText='OK !'
    setTimeout(function(){copyCss.innerText='copy'}, 1500);
  })

  saturationRange.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--saturation', e.target.value + '%')
    saturationNumber.value=e.target.value
  })

  saturationNumber.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--saturation', e.target.value + '%')
    saturationRange.value=e.target.value
  })