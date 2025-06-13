

const mainForm = document.querySelector('.main-form')
const labelContainer = document.querySelector('.label-container')
const imgContainer = document.querySelector('.img-container')
const imgLabel = document.getElementById('uploadImageLabel')
const avatarImg = document.querySelector('.logoImg')
const inputFile = document.getElementById('uploadImage')
const dragDesc = document.querySelector('.drag-description')
const fullNameInput = document.getElementById('fullName')
const emailInput = document.getElementById('email')
const githubUserInput = document.getElementById('githubUser')
const submitBtn = document.querySelector('.submitBtn')


mainForm.autocomplete = 'off'

let avatarLink = ''

const getAvatar = () => {
    inputFile.addEventListener('change', () => {
    const imgLink = inputFile.files[0]
    avatarLink = URL.createObjectURL(imgLink)

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

    newImgContainer.style.background = `url(${avatarLink})`
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
    
   return imgLink
})
}



const getfullName = () => {

    const fullNameValue = fullNameInput.value
    const nameRegex = /^[A-Za-z]+(?:\s+[A-Za-z]+)+(\s+[A-Za-z]+\.?)?$/

    if(nameRegex.test(fullNameValue)){
        const fullNameResult = nameRegex.exec(fullNameValue)
        const errorh5 = document.querySelector('.error-h5')

        fullNameInput.style.border = ''
        if(errorh5){
            errorh5.remove()
        }
        
        return fullNameResult[0]
    }else{
        const fullNameLabel = document.getElementById('fullNameLabel')
        const errorContainer = document.createElement('h5')

        fullNameInput.style.border = '1px solid red'
        errorContainer.innerText = 'ⓘ Please only use letters and remove after spaces'
        errorContainer.classList.add('error-h5')
        fullNameLabel.append(errorContainer)
    }
}

const getEmail = () => {

    const emailValue = emailInput.value
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(emailRegex.test(emailValue)){
        const emailResult = emailRegex.exec(emailValue)
        const errorh5 = document.querySelector('.error-h5')

        emailInput.style.border = ''
        if(errorh5){
            errorh5.remove()
        }

        return emailResult[0].toLowerCase()
    }else{
        const emailLabel = document.getElementById('emailLabel')
        const errorContainer = document.createElement('h5')

        emailInput.style.border = '1px solid red'
        errorContainer.innerText = 'ⓘ Please enter a valid email address'
        errorContainer.classList.add('error-h5')
        emailLabel.append(errorContainer)
    }
}

const getGithubUsername = () => {
    const githubUserValue = githubUserInput.value
    const githubRegex = /@[^@\s]+/

    
    if(githubRegex.test(githubUserValue)){
        const githubUserResult = githubRegex.exec(githubUserValue)

        return githubUserResult[0].toLowerCase()
    }else{
        const githubUserLabel = document.getElementById('githubUserLabel')
        const errorContainer = document.createElement('h5')

        githubUserInput.style.border = '1px solid red'
        errorContainer.innerText = 'ⓘ Please enter a valid github username'
        errorContainer.classList.add('error-h5')
        githubUserLabel.append(errorContainer)
    }
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()

   const avatar = avatarLink
   const fullName = getfullName()
   const email = getEmail()
   const githubUsername = getGithubUsername()
 

   console.log(avatar);
   console.log(fullName);
   console.log(email);
   console.log(githubUsername);

})


getAvatar()