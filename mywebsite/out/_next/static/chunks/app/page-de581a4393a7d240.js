(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    5009: function (s, e, a) {
      Promise.resolve().then(a.bind(a, 6267)),
        Promise.resolve().then(a.bind(a, 2540)),
        Promise.resolve().then(a.bind(a, 8369)),
        Promise.resolve().then(a.bind(a, 5449));
    },
    6267: function (s, e, a) {
      "use strict";
      var i = a(7437),
        c = a(7610),
        t = a.n(c);
      e.default = () =>
        (0, i.jsxs)("div", {
          className: t().frameBox,
          children: [
            (0, i.jsx)("div", { className: t().frameLine }),
            (0, i.jsxs)("div", {
              className: t().frameImg,
              children: [
                (0, i.jsx)("h1", {
                  className: t().frameTitle,
                  children: "About Me",
                }),
                (0, i.jsx)("div", { className: t().framePhoto }),
                (0, i.jsx)("span", {
                  className: t().frameText,
                  children: "조다솜",
                }),
                (0, i.jsxs)("span", {
                  className: t().frameHash,
                  children: [
                    "#소통 #성장 #문제해결",
                    (0, i.jsx)("br", {}),
                    "#디테일 #도전 #책임",
                  ],
                }),
                (0, i.jsx)("span", {
                  className: t().slogan,
                  children: "성장을 갈망하는 개발자",
                }),
                (0, i.jsxs)("div", {
                  className: t().howIWork,
                  children: [
                    (0, i.jsx)("h2", {
                      className: t().howTitle,
                      children: "how I work ?",
                    }),
                    (0, i.jsxs)("div", {
                      className: t().howStory,
                      children: [
                        (0, i.jsxs)("p", {
                          children: [
                            "목표 달성도 중요하지만 ",
                            (0, i.jsx)("span", {
                              className: t().highlight,
                              children: "일의 과정",
                            }),
                            "에서 재미를 찾는 편이에요.",
                          ],
                        }),
                        (0, i.jsxs)("p", {
                          children: [
                            "회사와 동료에게 긍정적 영향을 주는 일은 그 자체로  ",
                            (0, i.jsx)("span", {
                              className: t().highlight,
                              children: "동기부여",
                            }),
                            "가 됩니다.",
                          ],
                        }),
                        (0, i.jsxs)("p", {
                          children: [
                            (0, i.jsx)("span", {
                              className: t().highlight,
                              children: "문제해결에",
                            }),
                            " 큰 성취감과 재미를 느낍니다.",
                          ],
                        }),
                        (0, i.jsxs)("p", {
                          children: [
                            (0, i.jsx)("span", {
                              className: t().highlight,
                              children: "함께 정한 기한",
                            }),
                            "은 반드시 지키려고 노력해요.",
                          ],
                        }),
                        (0, i.jsxs)("p", {
                          children: [
                            (0, i.jsx)("span", {
                              className: t().highlight,
                              children: "파워 J 성향",
                            }),
                            "으로 계획대로 행동합니다.",
                          ],
                        }),
                        (0, i.jsxs)("p", {
                          children: [
                            "계획에 문제가 생겨도 당황하지 않는 ",
                            (0, i.jsx)("span", {
                              className: t().highlight,
                              children: "강한 정신력",
                            }),
                            "의 소유자입니다.",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
    },
    2540: function (s, e, a) {
      "use strict";
      var i = a(7437),
        c = a(2265),
        t = a(4423),
        l = a.n(t);
      e.default = () => {
        let s = (0, c.useRef)(null),
          e = (0, c.useRef)(null),
          a = (0, c.useRef)(null),
          [t, r] = (0, c.useState)(!1),
          o = () => {
            s.current.classList.remove(l().clickFrame),
              e.current.classList.remove(l().clickFrameLine),
              a.current.classList.remove(l().clickFrameText),
              r(!1);
          };
        return (0, i.jsxs)("div", {
          className: l().contactBox,
          children: [
            (0, i.jsx)("div", { className: l().contactFrameLine, ref: e }),
            (0, i.jsxs)("div", {
              ref: s,
              className: l().contactFrameImg,
              onClick: () => {
                s.current.classList.add(l().clickFrame),
                  e.current.classList.add(l().clickFrameLine),
                  a.current.classList.add(l().clickFrameText),
                  r(!0);
              },
              children: [
                (0, i.jsxs)("div", {
                  className: l().contactAddr,
                  ref: a,
                  children: [
                    (0, i.jsxs)("p", {
                      children: [
                        "깃 허브 :",
                        " ",
                        (0, i.jsx)("a", {
                          href: "https://github.com/dasom-jo",
                          target: "_blank",
                          children: "https://github.com/dasom-jo",
                        }),
                      ],
                    }),
                    (0, i.jsxs)("p", {
                      children: [
                        "노션 :",
                        " ",
                        (0, i.jsx)("a", {
                          href: "https://transparent-drop-0f2.notion.site/I-m-a-front-end-developer-10c28716df6680f9b8b4d682d02d8f67",
                          target: "_blank",
                          children: "I-m-a-front-end-developer",
                        }),
                      ],
                    }),
                    (0, i.jsxs)("p", {
                      children: [
                        "전화 번호 : ",
                        (0, i.jsx)("a", {
                          href: "tel:+821044565247",
                          children: "010-4456-5247",
                        }),
                      ],
                    }),
                    (0, i.jsxs)("p", {
                      children: [
                        "메일 :",
                        " ",
                        (0, i.jsx)("a", {
                          href: "mailto:jodasom0216@gmail.com",
                          children: "jodasom0216@gmail.com",
                        }),
                      ],
                    }),
                    (0, i.jsxs)("p", {
                      children: [
                        "블로그 :",
                        " ",
                        (0, i.jsx)("a", {
                          href: "https://github.com/dasom-jo",
                          children: "jodasom0216@gmail.com",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: l().contactBtn,
                  children: "CONTACT CLICK!",
                }),
                t
                  ? (0, i.jsx)("div", {
                      className: l().closeBtn,
                      onClick: (s) => {
                        s.stopPropagation(), o();
                      },
                      children: "<FRAME UP/>",
                    })
                  : (0, i.jsx)("div", {
                      className: l().closeBtn,
                      children: "<DOWN/>",
                    }),
              ],
            }),
          ],
        });
      };
    },
    8369: function (s, e, a) {
      "use strict";
      var i = a(7437),
        c = a(5736),
        t = a.n(c);
      e.default = () =>
        (0, i.jsxs)("div", {
          className: t().frameBox,
          children: [
            (0, i.jsx)("div", { className: t().frameLine }),
            (0, i.jsxs)("div", {
              className: t().frameImg,
              children: [
                (0, i.jsx)("h1", {
                  className: t().frameTitle,
                  children: "Portfoilo",
                }),
                (0, i.jsxs)("div", {
                  className: t().framePortfoilos,
                  children: [
                    (0, i.jsxs)("div", {
                      className: t().PortfoiloBox,
                      children: [
                        (0, i.jsx)("div", {
                          class: t().imageCommon,
                          children: (0, i.jsx)("div", { class: t().mara }),
                        }),
                        (0, i.jsxs)("div", {
                          className: t().framePortfoiloText,
                          children: [
                            (0, i.jsx)("p", { children: "제목 : 마라pick" }),
                            (0, i.jsx)("p", {
                              children: "담당 : 개인프로젝트",
                            }),
                            (0, i.jsx)("p", {
                              children:
                                "기술 : HTML, React.js, TypeScript, JavaScript, Scss, Next.js, MySql, recoil, GitHub",
                            }),
                            (0, i.jsx)("p", {
                              children: "설명 : 마라탕을 주제로한 키오스크",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: t().PortfoiloBox,
                      children: [
                        (0, i.jsx)("div", {
                          class: t().imageCommon,
                          children: (0, i.jsx)("div", { className: t().chall }),
                        }),
                        (0, i.jsxs)("div", {
                          className: t().framePortfoiloText,
                          children: [
                            (0, i.jsx)("p", {
                              children: "제목 : challen.gg ver.2",
                            }),
                            (0, i.jsx)("p", {
                              children: "담당 : 프론트 50%, 전체 UI",
                            }),
                            (0, i.jsx)("p", {
                              children:
                                "기술 : HTML, CSS-module, JavaJcript, React.JS",
                            }),
                            (0, i.jsx)("p", {
                              children: "설명 : 건강관리어플",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: t().PortfoiloBox,
                      children: [
                        (0, i.jsx)("div", {
                          class: t().imageCommon,
                          children: (0, i.jsx)("div", { className: t().dog }),
                        }),
                        (0, i.jsxs)("div", {
                          className: t().framePortfoiloText,
                          children: [
                            (0, i.jsx)("p", { children: "제목 : 어디가게" }),
                            (0, i.jsx)("p", {
                              children: "담당 : openAPI,상세페이지,마이페이지",
                            }),
                            (0, i.jsx)("p", {
                              children:
                                "기술 : HTML,React.JS, TypeScript, JavaScript, Next.js, Mui, TailWind CSS, MySQL,ReactQurey",
                            }),
                            (0, i.jsx)("p", {
                              children: "설명 : 동물허용가능 매장 지도",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: t().PortfoiloBox,
                      children: [
                        (0, i.jsx)("div", {
                          class: t().imageCommon,
                          children: (0, i.jsx)("div", { className: t().timer }),
                        }),
                        (0, i.jsxs)("div", {
                          className: t().framePortfoiloText,
                          children: [
                            (0, i.jsx)("p", { children: "제목 : 뽀로로" }),
                            (0, i.jsx)("p", {
                              children: "담당 :루틴관리 및 생성페이지",
                            }),
                            (0, i.jsx)("p", {
                              children:
                                "기술 : HTML, CSS, TypeScript,React.JS,Tailwind CSS",
                            }),
                            (0, i.jsx)("p", {
                              children: "설명 : 타이머와 투두리스트",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: t().PortfoiloBox,
                      children: [
                        (0, i.jsx)("div", {
                          class: t().imageCommon,
                          children: (0, i.jsx)("div", { className: t().power }),
                        }),
                        (0, i.jsxs)("div", {
                          className: t().framePortfoiloText,
                          children: [
                            (0, i.jsx)("p", { children: "제목 : 이미지카드" }),
                            (0, i.jsx)("p", {
                              children: "담당 : 개인프로젝트",
                            }),
                            (0, i.jsx)("p", {
                              children: "기술 : HTML, CSS,JavaScript",
                            }),
                            (0, i.jsx)("p", {
                              children: "설명 :JS와 CSS공부를 위한 이미지 카드",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
    },
    5449: function (s, e, a) {
      "use strict";
      var i = a(7437),
        c = a(2265),
        t = a(9011),
        l = a.n(t);
      e.default = () => {
        (0, c.useRef)(null);
        let [s, e] = (0, c.useState)(!1);
        return (0, i.jsx)("div", {
          className: l().frameBox,
          children: (0, i.jsxs)("div", {
            className: l().frameImg,
            children: [
              (0, i.jsx)("div", { className: l().frameLineLeft }),
              (0, i.jsx)("div", { className: l().frameLineRight }),
              (0, i.jsx)("div", { className: l().frameBom }),
              (0, i.jsx)("h1", {
                className: l().mySkill,
                children: "My Skill ",
              }),
              (0, i.jsxs)("div", {
                className: l().techStack,
                children: [
                  (0, i.jsx)("div", {
                    className: l().title,
                    children: "languages",
                  }),
                  (0, i.jsxs)("div", {
                    className: l().stackBox,
                    children: [
                      (0, i.jsxs)("div", {
                        className: l().techItem,
                        children: [
                          (0, i.jsx)("img", {
                            src: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
                            alt: "HTML",
                          }),
                          (0, i.jsx)("span", { children: "HTML" }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: l().techItem,
                        children: [
                          (0, i.jsx)("img", {
                            src: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
                            alt: "CSS",
                          }),
                          (0, i.jsx)("span", { children: "CSS" }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: l().techItem,
                        children: [
                          (0, i.jsx)("img", {
                            src: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
                            alt: "JavaScript",
                          }),
                          (0, i.jsx)("span", { children: "JavaScript" }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: l().techItem,
                        children: [
                          (0, i.jsx)("img", {
                            src: "https://img.icons8.com/?size=100&id=nCj4PvnCO0tZ&format=png&color=000000",
                            alt: "TypeScript",
                          }),
                          (0, i.jsx)("span", { children: "TypeScript" }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: l().title,
                    children: "frameworks",
                  }),
                  (0, i.jsxs)("div", {
                    className: l().stackBox,
                    children: [
                      (0, i.jsxs)("div", {
                        className: l().techItem,
                        children: [
                          (0, i.jsx)("img", {
                            src: "https://img.icons8.com/?size=100&id=123603&format=png&color=000000",
                            alt: "React.js",
                          }),
                          (0, i.jsx)("span", { children: "React.js" }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: l().techItem,
                        children: [
                          (0, i.jsx)("img", {
                            src: "https://img.icons8.com/?size=100&id=AU6Wc7r56Fxz&format=png&color=000000",
                            alt: "Next.js",
                          }),
                          (0, i.jsx)("span", { children: "Next.js" }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: l().techItem,
                        children: [
                          (0, i.jsx)("img", {
                            src: "https://w7.pngwing.com/pngs/301/171/png-transparent-node-js-javascript-software-developer-computer-icons-angularjs-others-miscellaneous-text-trademark.png",
                            alt: "Node.js",
                          }),
                          (0, i.jsx)("span", { children: "Node.js" }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: l().title,
                    children: "librarys",
                  }),
                  (0, i.jsxs)("div", {
                    className: l().stackBox,
                    children: [
                      (0, i.jsxs)("div", {
                        className: l().techItem,
                        children: [
                          (0, i.jsx)("img", {
                            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc6PFxvK8trITmeOdN5228XIl67eOCMYoi3g&s",
                            alt: "Recoil",
                          }),
                          (0, i.jsx)("span", { children: "Recoil" }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: l().techItem,
                        children: [
                          (0, i.jsx)("img", {
                            src: "https://img.icons8.com/?size=100&id=jD-fJzVguBmw&format=png&color=000000",
                            alt: "Redux Toolkit",
                          }),
                          (0, i.jsx)("span", { children: "Redux Toolkit" }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: l().techItem,
                        children: [
                          (0, i.jsx)("img", {
                            src: "https://t1.kakaocdn.net/kakao_tech/image/2022/06/images/01.png",
                            alt: "React Query",
                          }),
                          (0, i.jsx)("span", { children: "React Query" }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: l().techItem,
                        children: [
                          (0, i.jsx)("img", {
                            src: "https://velog.velcdn.com/images/sammy1101/post/76853fe7-409d-4562-872b-dc3e41a0150b/image.png",
                            alt: "SCSS",
                          }),
                          (0, i.jsx)("span", { children: "SCSS" }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: l().techItem,
                        children: [
                          (0, i.jsx)("img", {
                            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s",
                            alt: "TailwindCSS",
                          }),
                          (0, i.jsx)("span", { children: "TailwindCSS" }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", { className: l().title, children: "etc" }),
                  (0, i.jsxs)("div", {
                    className: l().stackBox,
                    children: [
                      (0, i.jsxs)("div", {
                        className: l().techItem,
                        children: [
                          (0, i.jsx)("img", {
                            src: "https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000",
                            alt: "Bootstrap",
                          }),
                          (0, i.jsx)("span", { children: "Bootstrap" }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: l().techItem,
                        children: [
                          (0, i.jsx)("img", {
                            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT24yngytUOIN7kNfMS6jqCw6D8l3rgAPJrwQ&s",
                            alt: "MUI",
                          }),
                          (0, i.jsx)("span", { children: "MUI" }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: l().techItem,
                        children: [
                          (0, i.jsx)("img", {
                            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoUX5LMRa7atIsNfl0nP3DaUaV4URhV0PHfA&s",
                            alt: "Figma",
                          }),
                          (0, i.jsx)("span", { children: "Figma" }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: l().techItem,
                        children: [
                          (0, i.jsx)("img", {
                            src: "https://w7.pngwing.com/pngs/747/798/png-transparent-mysql-logo-mysql-database-web-development-computer-software-dolphin-marine-mammal-animals-text-thumbnail.png",
                            alt: "MySQL",
                          }),
                          (0, i.jsx)("span", { children: "MySQL" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    7610: function (s) {
      s.exports = {
        frameBox: "AboutMe_frameBox__Z_iHG",
        frameLine: "AboutMe_frameLine__iKnM3",
        frameImg: "AboutMe_frameImg__kyH87",
        frameTitle: "AboutMe_frameTitle__wd5Ls",
        frameText: "AboutMe_frameText__qssN5",
        frameHash: "AboutMe_frameHash__iGYXa",
        framePhoto: "AboutMe_framePhoto__WmU7o",
        slogan: "AboutMe_slogan__d7GkH",
        howIWork: "AboutMe_howIWork__fc8xR",
        howStory: "AboutMe_howStory__hpWM6",
        highlight: "AboutMe_highlight__WMLON",
      };
    },
    4423: function (s) {
      s.exports = {
        contactBox: "Contact_contactBox__rH3bX",
        contactFrameLine: "Contact_contactFrameLine__EOGvI",
        contactFrameImg: "Contact_contactFrameImg__svn8e",
        clickFrame: "Contact_clickFrame__DyGxq",
        clickFrameLine: "Contact_clickFrameLine__Rtf8K",
        contactAddr: "Contact_contactAddr__V2UaY",
        clickFrameText: "Contact_clickFrameText__828UJ",
        closeBtn: "Contact_closeBtn__q0Ubu",
        contactBtn: "Contact_contactBtn__0p9eb",
        Btn: "Contact_Btn__g7lit",
      };
    },
    5736: function (s) {
      s.exports = {
        frameBox: "Portfolio_frameBox__oE_T4",
        frameLine: "Portfolio_frameLine__vdPog",
        frameImg: "Portfolio_frameImg__0X5QT",
        frameTitle: "Portfolio_frameTitle__f5V9M",
        framePortfoilos: "Portfolio_framePortfoilos__YkMl2",
        PortfoiloBox: "Portfolio_PortfoiloBox__kMruc",
        framePortfoiloText: "Portfolio_framePortfoiloText__Kb0L0",
        imageCommon: "Portfolio_imageCommon__lkUQp",
        mara: "Portfolio_mara__L6KZX",
        chall: "Portfolio_chall__sEWZG",
        dog: "Portfolio_dog__l2Cvg",
        timer: "Portfolio_timer__GQaWz",
        power: "Portfolio_power__qjq9o",
        slogan: "Portfolio_slogan__NUs2t",
      };
    },
    9011: function (s) {
      s.exports = {
        frameBox: "Skill_frameBox__5nBvp",
        frameImg: "Skill_frameImg__Ydm0v",
        frameLineLeft: "Skill_frameLineLeft__gAHaj",
        frameLineRight: "Skill_frameLineRight__jENG1",
        mySkill: "Skill_mySkill__XuDgA",
        title: "Skill_title__oB_zu",
        techStack: "Skill_techStack__x5wdf",
        stackBox: "Skill_stackBox__ERnEY",
        techItem: "Skill_techItem__naE__",
        blinkEffect: "Skill_blinkEffect__tgCBh",
        frameBom: "Skill_frameBom__kABIC",
        explosion: "Skill_explosion__kVomc",
        activeTechItem: "Skill_activeTechItem__tyJU0",
      };
    },
  },
  function (s) {
    s.O(0, [34, 971, 23, 744], function () {
      return s((s.s = 5009));
    }),
      (_N_E = s.O());
  },
]);
