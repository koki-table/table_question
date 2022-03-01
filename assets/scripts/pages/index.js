import anime from 'animejs/lib/anime.es.js'

// eslint-disable-next-line no-unused-vars
const logo = document.getElementById('logo')
// const startAnimation = document.getElementById('startAnimation')

window.onload = function() {
  // timelineデフォルトのパラメーターを設定
  let timeline = anime.timeline({
    targets: '.st0',
    direction: 'normal',
    loop: false
  })
  // 線画部分のアニメーションを設定
  timeline.add({
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    fill: ['transparent', 'transparent'], // 塗りつぶしを透明のままにする
    duration: 300,
    delay: function(el, i) {
      return i * 150
    }
  })
  // 塗りつぶしのアニメーションを設定
  timeline.add(
    {
      easing: 'easeInOutSine',
      fill: ['transparent', '#000000'],
      duration: 500
    },
    '-=200'
  ) // ひとつ前のアニメーションが終わる200ミリ秒前に開始する

  setTimeout(function() {
    document.getElementsByClassName('loading-anime')[0].classList.add('end')
  }, 1800)
}

// questionエリア
document.querySelector('.loading-anime').addEventListener('load', function() {
  setTimeout(function() {
    document.getElementsByClassName('loading-anime')[0].classList.add('end')
  }, 1600)
})

const question = document.getElementById('question')
const result = document.getElementById('result')
const resultBtn = document.getElementById('resultBtn')
// const backBtn = document.getElementById('backBtn')
const error = document.querySelectorAll('.error')
let btn = document.getElementsByClassName('btn')
// const btnCheck = document.querySelectorAll('.btn')
let nextbtn = document.getElementById('next-btn')
let question1 = document.querySelector('.question--01')
let question2 = document.querySelector('.question--02')
// backBtn.style.display = 'none'
result.style.display = 'none'
// var typeResult = [
//   { type_title: 'Aタイプ', type_desc: 'A-タイプの説明が入ります。' },
//   { type_title: 'Bタイプ', type_desc: 'B-タイプの説明が入ります。' },
//   { type_title: 'Cタイプ', type_desc: 'C-タイプの説明が入ります。' }
// ]

// resultBtn.href = 'https://www.yahoo.co.jp'

// console.log(countVal)

// btnCheck.forEach(function(check) {
//   check.addEventListener('click', () => {
//     let countCheck = 0
//     var sumCheck = 0
//     for (let i = 0; i < btn.length; i++) {
//       if (btn[i].checked) {
//         countCheck++
//         let countCheckVal = btn[i].value
//         sumCheck += parseInt(countCheckVal)
//       }
//     }
//   })
//   console.log(check)
// })

// console.log(btnCheck)

// 回答確認
resultBtn.addEventListener('click', () => {
  let count = 0
  var sum = 0
  for (let i = 0; i < btn.length; i++) {
    if (btn[i].checked) {
      count++
      let countVal = btn[i].value
      sum += parseInt(countVal)
    }
  }
  if (count === 11) {
    error.forEach(function(elem) {
      elem.classList.add('active')
      elem.innerHTML = 'あと1問！！！'
    })
  } else if (count < 12) {
    error.forEach(function(elem) {
      elem.classList.add('active')
      window.scrollTo(400, 450)
    })
    // .innerHTML = '選択されていない項目があります。'
  } else {
    // backBtn.style.display = 'block'
    result.style.display = 'block'
    question.style.display = 'none'
    resultBtn.style.display = 'none'
    question1.style.display = 'none'
    question2.style.display = 'none'
    error.forEach(function(elem) {
      elem.classList.remove('active')
    })
    // question1.forEach(function(el) {
    //   el.style.display = 'none'
    // })
    // question2.forEach(function(e) {
    //   e.style.display = 'none'
    // })
    if (sum < 3) {
      resultBtn.href = '/pattern-a/'
    } else if (sum < 8) {
      resultBtn.href = '/pattern-b/'
    } else {
      resultBtn.href = '/pattern-c/'
    }
    // let type_num = sessionStorage.getItem('type_num')
    // let type_title = typeResult[type_num]['type_title']
    // let type_desc = typeResult[type_num]['type_desc']
    // document.getElementById('type_title').innerHTML = type_title
    // document.getElementById('type_desc').innerHTML = type_desc
  }
})
// backBtn.addEventListener('click', () => {
//   backBtn.style.display = 'none'
//   result.style.display = 'none'
//   question.style.display = 'block'
//   resultBtn.style.display = 'block'
//   let count = 0
//   for (let i = 0; i < btn.length; i++) {
//     if (btn[i].checked) {
//       btn[i].checked = false
//     }
//   }
// })

// 次にボタン
nextbtn.addEventListener('click', () => {
  let count2 = 0
  // eslint-disable-next-line no-unused-vars
  var sum2 = 0
  for (let i = 0; i < btn.length; i++) {
    if (btn[i].checked) {
      count2++
      let countVal = btn[i].value
      sum2 += parseInt(countVal)
    }
  }

  if (count2 < 6) {
    error.forEach(function(elem) {
      elem.classList.add('active')
    })
  } else {
    question1.classList.add('out')
    window.scrollTo(100, 150)
    nextbtn.classList.add('active')
    // result.style.display = 'none'
    // question.style.display = 'block'
    error.forEach(function(elem) {
      elem.classList.remove('active')
    })
    question2.classList.add('show')
    // let count = 0
    // for (let i = 0; i < btn.length; i++) {
    //   if (btn[i].checked) {
    //     btn[i].checked = false
    //   }
    // }
  }
})
