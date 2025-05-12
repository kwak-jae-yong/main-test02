gsap.registerPlugin(ScrollTrigger);

// 1
const scene1 = gsap.timeline({
    // duration: .5
})
const mq = window.matchMedia("(max-width:1600px");

ScrollTrigger.create({
    animation: scene1,
    trigger: "#s1",
    start: "top 20%",
    end: "top 80%",
    scrub: 1,
    onEnter: () => {
        document.querySelector('#s1 .line-wrap').classList.add('on');
    },
    onLeaveBack: () => {
        document.querySelector('#s1 .line-wrap').classList.remove('on');
    }
})

// ScrollTrigger 설정


ScrollTrigger.create({
    animation: scene1,
    trigger: "#s2",
    start: "top 20%",
    end: "top 80%",
    scrub: 1,
    onEnter: () => {
        document.querySelector('#s2 .solo .line-wrap').classList.add('on');
    },
    onLeaveBack: () => {
        document.querySelector('#s2 .solo .line-wrap').classList.remove('on');
    }
})
ScrollTrigger.create({
    animation: scene1,
    trigger: "#s2 .team",
    start: "top 20%",
    end: "top 80%",
    scrub: 1,
    onEnter: () => {
        document.querySelector('#s2 .team .line-wrap').classList.add('on');
    },
    onLeaveBack: () => {
        document.querySelector('#s2 .team .line-wrap').classList.remove('on');
    }
})
ScrollTrigger.create({
    animation: scene1,
    trigger: "#s2 .reboot",
    start: "top 20%",
    end: "top 80%",
    scrub: 1,
    onEnter: () => {
        document.querySelector('#s2 .reboot .line-wrap').classList.add('on');
    },
    onLeaveBack: () => {
        document.querySelector('#s2 .reboot .line-wrap').classList.remove('on');
    }
})
ScrollTrigger.create({
    animation: scene1,
    trigger: "#s2 .portfolio",
    start: "top 20%",
    end: "top 90%",
    scrub: 1,
    onEnter: () => {
        document.querySelector('#s2 .portfolio .line-wrap').classList.add('on');
    },
    onLeaveBack: () => {
        document.querySelector('#s2 .portfolio .line-wrap').classList.remove('on');
    }
})

ScrollTrigger.create({
    animation: scene1,
    trigger: "#s2",
    start: "top 30%",
    end: "top 80%",
    scrub: 1,
    onEnter: () => {
        document.querySelector('#s2 .line').classList.add('on');
    },
    onLeaveBack: () => {
        document.querySelector('#s2 .line').classList.remove('on');
    }
})
ScrollTrigger.create({
    animation: scene1,
    trigger: "#s2",
    start: "top 30%",
    end: "top 80%",
    scrub: 1,
    onEnter: () => {
        document.querySelector('#s2 .star ').classList.add('on');
    },
    onLeaveBack: () => {
        document.querySelector('#s2 .star ').classList.remove('on');
    }
})



scene1.to('#s1 .img-wrap .face ', {
    opacity: 1,
    x: 100,
    y: 26
})
scene1.to('#s1 .img-wrap .thatsme ', {
    opacity: 1,
    x: 10,

})




const s0 = gsap.timeline({
    duration: 1
})

if (window.innerWidth <= 780) {
  // 화면 너비가 780px 이하일 때
  s0.fromTo(".side-p svg:nth-child(1)",
    { width: 0 },
    {
      width: "20rem",
      onComplete: function () {
        document.querySelector('.side-p svg:nth-child(2)').classList.add('on');
      }
    }
  );
} else {
  // 화면 너비가 781px 이상일 때
  s0.fromTo(".side-p svg:nth-child(1)",
    { width: 0 },
    {
      width: "43.7rem",
      onComplete: function () {
        document.querySelector('.side-p svg:nth-child(2)').classList.add('on');
      }
    }
  );
}
s0.fromTo(".left-star",
    { width: 0 },
    {
        width: "90rem",

        onComplete: function () {
            document.querySelector('.left-star').classList.add('on')
        }
    },
);
s0.fromTo("#s0 .rel .tit-wrap .s0-tit span",
    { y: 150 },
    {
        y: 0,
        stagger: .04,
        onComplete: function () {
            document.querySelector('#s0 .rel .tit-wrap .s0-tit .kwak').classList.add('on')
        }

    },
);
const mq1920 = window.matchMedia("(min-width: 1920px)");
const mq1600 = window.matchMedia("(min-width: 1600px) and (max-width: 1919px)");
const mq1150 = window.matchMedia("(min-width: 1150px) and (max-width: 1599px)");
const mq780  = window.matchMedia("(min-width: 780px) and (max-width: 1149px)");
const mqSmall = window.matchMedia("(max-width: 779px)"); // fallback

let widthVal, heightVal;

if (mq1920.matches) {
    widthVal = "29rem";
    heightVal = "1.8rem";
} else if (mq1600.matches) {
    widthVal = "29rem";
    heightVal = "1.8rem";
} else if (mq1150.matches) {
    widthVal = "20rem";
    heightVal = "1.8rem";
} else if (mq780.matches) {
    widthVal = "14rem";
    heightVal = "1.5rem";
} else {
    widthVal = "14rem";
    heightVal = "1.3rem";
}

gsap.fromTo(
    "#s0 .tit-wrap span.line",
    { opacity: 0, width: 0, height: 0 },
    {
        opacity: 1,
        width: widthVal,
        height: heightVal,
        delay: 2,
    }
);

ScrollTrigger.create({
    trigger: "#s1", // 트리거할 요소: #s1 (이 영역이 화면에 등장할 때 애니메이션 실행)
    start: "top 20%", // 화면에서 80% 지점에 도달하면 애니메이션 시작
    end: "top 80%", // 화면에서 20% 지점에 도달하면 애니메이션 종료
    scrub: 1, // 스크롤에 맞춰 애니메이션 동기화
    onEnter: () => {
        gsap.fromTo(
            "#s1 .about-wrap .in-wrap .title~span", // title을 제외한 나머지 span 요소
            { opacity: 0, y: 100, x: 0 }, // 초기 상태 (opacity 0, y -50)
            {
                opacity: 1, // 애니메이션 완료 후 opacity 1
                y: 0, // 애니메이션 완료 후 위치 0
                stagger: 0.1, // 각 요소가 순차적으로 애니메이션
                onComplete: function () {
                    // 애니메이션이 완료되면 'on' 클래스를 추가
                    document.querySelectorAll('#s1 .about-wrap .in-wrap .title~span').forEach(span => {
                        span.classList.add('on');
                    });
                }
            }
        );
    },
    onLeaveBack: () => {
        // 스크롤이 위로 올라가면 애니메이션이 원위치로 돌아가도록
        gsap.to("#s1 .about-wrap .in-wrap .title~span", {
            opacity: 0,
            y: 50,
            stagger: 0.01
        });
    }
});


// s0.fromTo(".s0-tit svg", { rotation: 360, y: -1000 }, { rotation: 45, y: 0, duration: 5 });

