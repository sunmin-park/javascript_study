// 변수등록
// var, let, const
// 변할거 같으면 let, 안변할거 같으면 const (그래서 대부분 const를 씀)
const h1 = document.querySelector('h1')
const imgTag = document.querySelector('p img')
const btn1 = document.querySelector('#btn1')
console.log(h1, imgTag, btn1)
console.log(imgTag.src)
// imgTag.src = 'https://i.pinimg.com/474x/c7/7a/fe/c77afee98350d7793962a83a54448b26.jpg'
// 코딩 기본기를 다지는 걸 목표로 가지자 !!
btn1.addEventListener('mouseover', ()=>{
    imgTag.src = 'https://i.pinimg.com/474x/c7/7a/fe/c77afee98350d7793962a83a54448b26.jpg'
})
btn1.addEventListener('mouseout', ()=>{
    imgTag.src = 'https://i.pinimg.com/564x/e8/cc/47/e8cc477152201b9d326cfe6f2fc1932e.jpg'
})