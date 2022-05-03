const element = document.getElementById("main")
element.remove()

document.querySelector('h1')

const newHeader = document.createElement('h1')
newHeader.id= 'victory'

newHeader.innerHTML = ("Beyhan is the champion")
document.body.append(newHeader)