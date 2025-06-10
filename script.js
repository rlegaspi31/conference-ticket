

const labelContainer = document.querySelector('.label-container')
const imgContainer = document.querySelector('.img-container')
const imgLabel = document.getElementById('uploadImageLabel')
const avatarImg = document.querySelector('.logoImg')
const inputFile = document.getElementById('uploadImage')
const dragDesc = document.querySelector('.drag-description')

inputFile.addEventListener('change', () => {
    let imgLink = URL.createObjectURL(inputFile.files[0])
    const newImgContainer = document.createElement('img')
    const btnContainer = document.createElement('div')
    const removeImgBtn = document.createElement('button')
    const changeImgBtn = document.createElement('button')
    
    newImgContainer.classList.add('logoImg')
    btnContainer.classList.add('btnContainer')

    avatarImg.remove()
    dragDesc.remove()

    removeImgBtn.innerText = 'Remove Image'
    changeImgBtn.innerText = 'Change Image'

    newImgContainer.style.background = `url(${imgLink})`
    newImgContainer.style.backgroundPosition = 'center'
    newImgContainer.style.backgroundSize = 'cover'
    newImgContainer.style.backgroundRepeat = 'no-repeat'
    newImgContainer.style.width = '70px'
    newImgContainer.style.height = '70px'
    newImgContainer.style.border = 'none'
    newImgContainer.style.padding = '0'
    newImgContainer.style.marginBottom = '15px'

    
    btnContainer.append(removeImgBtn, changeImgBtn)
    labelContainer.prepend(newImgContainer)
    labelContainer.append(btnContainer)
})