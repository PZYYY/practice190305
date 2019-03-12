let bannerList = ['upload/banner0.png', 'upload/banner1.jpg', 'upload/banner2.jpg']
let bannerTextBox = document.getElementsByClassName('center')[0]
let bannerText = [{
  text0: 'Simple,Fresh & Unique Design0',
  text1: 'Donec posuere augue venenatis0'
},{
  text0: 'Simple,Fresh & Unique Design1',
  text1: 'Donec posuere augue venenatis1'
},{
  text0: 'Simple,Fresh & Unique Design2',
  text1: 'Donec posuere augue venenatis2'
}]

for (let i = 0; i < bannerList.length; i++) {
    let imgNode = document.createElement('img')
    imgNode.setAttribute('src', bannerList[i])
    imgNode.setAttribute('class', 'banner-img')
    document.getElementsByClassName('slide-imgs')[0].appendChild(imgNode)
    for(let j = 0; j < 2; j++) {
      let textNode = document.createElement('p')
      textNode.innerHTML =  bannerText[j].text0
      console.log(textNode)
      bannerTextBox.appendChild(textNode)
    }
  }
  let currentBanner = document.getElementsByClassName('banner-img')
  currentBanner[0].style.opacity = 1
  Array.from(currentBanner).splice(1).forEach((item, index) => {
    item.style.display = 'none'
  })

let current = 0
let dotObj = document.getElementsByClassName('dots')[0].children
// 上一张
function last () {
  Array.from(dotObj)[current].classList.remove('border')
  currentBanner[current].style.display = 'none'
  currentBanner[current].classList.remove('banner-img2')
  current--
  if (current < 0) {
    current = bannerList.length - 1
  }
  Array.from(dotObj)[current].classList.add('border')
  currentBanner[current].classList.add('banner-img2')
  currentBanner[current].style.display = 'block'

}
// 下一张
function next () {
  Array.from(dotObj)[current].classList.remove('border')
  currentBanner[current].style.display = 'none'
  currentBanner[current].classList.remove('banner-img2')
  current++
  if (current > bannerList.length - 1) {
    current = 0
  }
  Array.from(dotObj)[current].classList.add('border')
  currentBanner[current].classList.add('banner-img2')
  currentBanner[current].style.display = 'block'
}


// let imgNode = document.getElementsByClassName('slide-imgs')[0].firstElementChild
// let dotObj = document.getElementsByClassName('dots')[0].children

// Array.from(dotObj)[current].classList.remove('border')
// current++
// if (current > bannerList.length - 1) {
  //   current = 0
  // }
  // imgNode.setAttribute('src', bannerList[current])
  // Array.from(dotObj)[current].classList.add('border')
  
  // Array.from(dotObj)[current].classList.remove('border')
  // current--
  // if (current < 0) {
  //   current = bannerList.length - 1
  // }
  // imgNode.setAttribute('src', bannerList[current])
  // imgNode.style.zIndex = 100
  // imgNode.setAttribute('class', '')
  
  // setTimeout(() => {
    // imgNode.setAttribute('class', 'slide-img')
  // }, 500)
  // Array.from(dotObj)[current].classList.add('border')
  
  