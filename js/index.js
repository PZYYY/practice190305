// for (let i = 0; i < bannerList.length; i++) {
  //   let imgNode = document.createElement('img')
  //   imgNode.setAttribute('src', bannerList[i])
  //   document.getElementsByClassName('slide-imgs')[0].appendChild(imgNode)
  // }

let bannerList = ['upload/banner0.png', 'upload/banner1.jpg', 'upload/banner2.jpg']
let current = 0
let imgNode = document.getElementsByClassName('slide-imgs')[0].firstElementChild
let dotObj = document.getElementsByClassName('dots')[0].children
// 上一张
function last () {
  current--
  if (current < 0) {
    current = bannerList.length - 1
  }
  imgNode.setAttribute('src', bannerList[current])
  Array.from(dotObj)[current].classList.add('border')
}
// 下一张
function next () {
  current++
  if (current > bannerList.length - 1) {
    current = 0
  }
  imgNode.setAttribute('src', bannerList[current])
  Array.from(dotObj)[current].classList.add('border')
}
