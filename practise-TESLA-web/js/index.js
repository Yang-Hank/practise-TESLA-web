//建議每次測試新的js都要用alert("123")試試看

//fullpage.js
new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,

  //轉頁時從新一次動畫(此為Gsap的function)
  onLeave: function (origin, destination, direction) {
    let loading2 = new TimelineMax();
    loading2
      .fromTo(".upper h2", 0.6, { autoAlpha: 0 }, { autoAlpha: 1 }, "+=0.5")
      .fromTo(".lower", 0.6, { autoAlpha: 0 }, { autoAlpha: 1 }, "-=0.6")
      .fromTo(".arrow", 1, { y: 0 }, { y: 10, repeat: -1, yoyo: true });
  },
});

//GSAP動畫
document.addEventListener("DOMContentLoaded", function () {
  //click function
  var arrows = document.getElementsByClassName("arrow");
  for (i = 0; i < arrows.length; i++) {
    //讓第一個arrow增加事件,按過之後再換第二個arrow增加事件
    arrows[i].addEventListener("click", function (e) {
      e.preventDefault(); //原本的動作停止，直接執行下一行
      fullpage_api.moveSectionDown(); //fullpage.js的一個方法(移到下一個section)
    });
  }

  let loading = new TimelineMax();
  //autoAlpha 方法是GSAP中一个特别的属性，它把 opacity 和 visibility 两个属性合二为一了。
  //("元素",秒數,{起始狀態(附加效果)},{結束狀態(附加效果)})
  loading
    .fromTo(
      ".upper h2",
      0.6,
      { autoAlpha: 0, y: 20 }, //y:20是指一開始y軸下降20
      { autoAlpha: 1, y: 0 }
    )
    .fromTo(".upper p", 0.6, { autoAlpha: 0 }, { autoAlpha: 1 })
    .fromTo(
      " .btn1",
      0.6,
      { autoAlpha: 0, x: -20 },
      { autoAlpha: 1, x: 0 },
      "-=0.6" //意思是相對於上一個動畫作加減秒數的 delay 值,要加快0.6s開始
    )
    .fromTo(
      ".btn2",
      0.6,
      { autoAlpha: 0, x: 20 },
      { autoAlpha: 1, x: 0 },
      "-=0.6"
    )
    .fromTo(".arrow", 0.6, { autoAlpha: 0 }, { autoAlpha: 1 }, "-=0.6")
    //箭頭上下動,repaet(-1)是無限重複,yoyo是來回
    .fromTo(".arrow", 1, { y: 0 }, { y: 10, repeat: -1, yoyo: true }, "+=1.2");
});
