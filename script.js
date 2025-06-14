

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
let onceActivated = true

const getAvatar = () => {
    inputFile.addEventListener('change', () => {
    const errorContainer = document.querySelector('.upload-info')
    const imgLink = inputFile.files[0]
    avatarLink = URL.createObjectURL(imgLink)
    
    let imgLinkSize = imgLink.size/1024
    let imgLinkFormat = imgLink.type

    console.log(imgLinkSize);
    console.log(imgLinkFormat);

    if(imgLinkSize < 500 && (imgLinkFormat === 'image/jpeg'|| imgLinkFormat === 'image/png')){
    errorContainer.remove()
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
    }else{
        console.log('File Invalid');
        errorContainer.innerText = 'ⓘ File too Large. Please upload a photo under 500KB'
        errorContainer.style.color = 'rgb(209, 50, 50)'
    }

   
})
}



const getfullName = () => {

   
    const fullNameLabel = document.getElementById('fullNameLabel')
    const existingError = document.querySelector('.fullname-h5')
    const fullNameValue = fullNameInput.value.trim()
    const nameRegex = /^[A-Za-z]+(?:\s+[A-Za-z]+)+(\s+[A-Za-z]+\.?)?$/
    
    
    if(nameRegex.test(fullNameValue)){
        const fullNameResult = nameRegex.exec(fullNameValue)

        fullNameInput.style.border = ''
        if(existingError){
            
            existingError.remove()
        }
        
        return fullNameResult[0]
    }else{
        
        if(!existingError){
       
        const errorContainer = document.createElement('h5')
        fullNameInput.style.border = '1px solid red'
        errorContainer.innerText = 'ⓘ Please enter a valid Full Name and only use letters'
        errorContainer.classList.add('error-h5','fullname-h5')
        fullNameLabel.append(errorContainer)
        }
       
        
    }
}

const getEmail = () => {
    const emailLabel = document.getElementById('emailLabel')
    const existingError = document.querySelector('.email-h5')
    const emailValue = emailInput.value.trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(emailRegex.test(emailValue)){
        const emailResult = emailRegex.exec(emailValue)
    
        emailInput.style.border = ''
        if(existingError){
            existingError.remove()
        }

        return emailResult[0].toLowerCase()
    }else{
        
        if(!existingError){
        const errorContainer = document.createElement('h5')
        emailInput.style.border = '1px solid red'
        errorContainer.innerText = 'ⓘ Please enter a valid email address'
        errorContainer.classList.add('error-h5', 'email-h5')
        emailLabel.append(errorContainer)
        }
    
    }
}

const getGithubUsername = () => {
    const githubUserLabel = document.getElementById('githubUserLabel')
    const existingError = document.querySelector('.github-h5')
    const githubUserValue = githubUserInput.value
    const githubRegex = /@[^@\s]+/

    
    if(githubRegex.test(githubUserValue)){
        const githubUserResult = githubRegex.exec(githubUserValue)

        githubUserInput.style.border = ''
        if(existingError){
            existingError.remove()
        }

        return githubUserResult[0].toLowerCase()
    }else{
        
        if(!existingError){
        const errorContainer = document.createElement('h5')
        githubUserInput.style.border = '1px solid red'
        errorContainer.innerText = 'ⓘ Please enter a valid github username'
        errorContainer.classList.add('error-h5', 'github-h5')
        githubUserLabel.append(errorContainer)
        }
        
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