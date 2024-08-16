// pc용 nav .gnb 태그 복제 후 mobile용 태그 위치에 붙여넣기
const gnb = document.querySelector('nav .gnb')   // 대상
const m_wrap = document.querySelector('.m_nav_wrap')   // 위치
const gnbClone = gnb.cloneNode(true)     // 복제
//복제대상.cloneNode()  //괄호 안에 true 자식, 자손 추가 복제
console.log(gnb, m_wrap, gnbClone)
//복제 gnb 붙여넣기
m_wrap.appendChild(gnbClone)
//괄호 안에 있는 것을 마지막 자식 위치에 넣겠다

// pc -nav
// $('.sub').hide()
// $('.sub > li').on('mouseover', function(){$(this).find('.sub).slideDown(stop)})
// $('.sub > li').on('mouseout', function(){$(this).find('.sub).slideUp(stop)})
/*
자바스트립트로 nav 제작 순서
1. 모든 서비 숨기기
2. 메뉴에 마우스를 올렸을 때
3. 해당 메뉴의 서브 메뉴가 출력 된다 or 전체 서브메뉴가 출력된다
※ 제이쿼리는 DOM 선택 시 DOM 요소 한개만 작성해도 모두 처리됨
※ 자바스크립트는 DOM선택 시 DOM요소를 개별로 따로 인식함
*/
// 1. 모든 서브 숨기기
const pcSub = document.querySelectorAll('nav .sub')
console.log(pcSub)
// pcSub[0].style.display = 'none'
for(let i of pcSub){i.style.display = 'none'}
// 2. 메뉴에 마우스를 올렸을 때
const pcNav = document.querySelectorAll('nav .gnb > li')
console.log(pcNav)
// 3. 해당 메뉴의 서브 메뉴가 출력 된다 or 전체 서브메뉴가 출력된다
for(let n of pcNav){
    n.addEventListener('mouseover',()=>{for(let i of pcSub){i.style.display = 'block'}})
    n.addEventListener('mouseout',()=>{for(let i of pcSub){i.style.display = 'none'}})
    }
// mobile -nav
const m_nav_wrap = document.querySelector('.m_nav_wrap')
const m_nav = document.querySelector('#m_nav')
const m_close = document.querySelector('.m_nav_close')
m_nav_wrap.style.display = 'none'
m_nav.addEventListener('click',()=>{
    m_nav_wrap.style.display = 'block'
})
m_close.addEventListener('click',()=>{
    m_nav_wrap.style.display = 'none'
})