"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[919],{9800:function(n,e,t){t.d(e,{w:function(){return z}});var i,r,a,o,d,p,x=t(9439),l=t(2791),h=t(9434),c=(t(8639),t(8480)),m=t(1634),g=t(168),s=t(7745),f=t(9513),w=t.n(f),u=(0,s.ZP)(w())(i||(i=(0,g.Z)(["\n  padding: 15px 30px;\n  width: auto;\n\n  border-radius: 30px;\n  border: 1px solid rgba(250, 250, 250, 0.2);\n\n  background-color: transparent;\n  color: rgba(250, 250, 250, 0.4);\n\n  outline: none;\n  box-sizing: border-box;\n\n  transition: border-color 250ms ease-in-out;\n\n  &:hover {\n    border-color: #0ef387;\n  }\n  &:focus {\n    border-color: #0ef387;\n  }\n"]))),b=s.ZP.div(r||(r=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  gap: 10px;\n  margin: 0 20px;\n  margin-bottom: 20px;\n  @media (max-width: 767.98px) {\n    height: 110px;\n  }\n  @media (min-width: 768px) {\n    flex-direction: row;\n    gap: 20px;\n    margin-left: 32px;\n    margin-bottom: 16px;\n  }\n  @media (min-width: 1440px) {\n    margin-left: 40px;\n  }\n"]))),k=s.ZP.input(a||(a=(0,g.Z)(["\n  display: inline-flex;\n  width: 100%;\n  padding: 15px 30px;\n  align-items: center;\n  gap: 71px;\n\n  border-radius: 30px;\n  border: 1px solid rgba(250, 250, 250, 0);\n  background: #0c0d0d;\n\n  color: rgba(250, 250, 250, 0.4);\n\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  letter-spacing: -0.32px;\n  outline: none;\n  transition: border-color 250ms ease-in-out;\n\n  &:hover {\n    border: 1px solid #0ef387;\n  }\n  &:focus {\n    border: 1px solid #0ef387;\n  }\n\n  @media (min-width: 768px) {\n    gap: 30px;\n  }\n  @media (min-width: 1440px) {\n  }\n"]))),_=s.ZP.form(o||(o=(0,g.Z)(["\n  position: relative;\n"]))),y=s.ZP.svg(d||(d=(0,g.Z)(["\n  position: absolute;\n  top: 15px;\n  right: 30px;\n  stroke: #0ef387;\n  fill: none;\n"]))),v=s.ZP.div(p||(p=(0,g.Z)(["\n  position: relative;\n  .react-datepicker-wrapper {\n    /* position: absolute;\n    bottom: 0; */\n    /* height: 36px; */\n  }\n\n  .react-datepicker {\n    width: 222px;\n\n    padding: 0 14px;\n    padding-bottom: 14px;\n    box-sizing: border-box;\n\n    border: none;\n    background-color: #0ef387;\n  }\n\n  .react-datepicker__month-container {\n    width: 194px;\n    box-sizing: border-box;\n  }\n\n  .react-datepicker__month {\n    margin: 0;\n  }\n\n  .react-datepicker__navigation {\n    overflow: visible;\n  }\n\n  .react-datepicker__header {\n    background-color: #0ef387;\n    /* width: 222px; */\n    padding: 14px 0;\n\n    box-sizing: border-box;\n    margin-bottom: 39px;\n    border-color: rgba(12, 13, 13, 0.5);\n  }\n\n  .react-datepicker__current-month,\n  .react-datepicker-time__header,\n  .react-datepicker-year-header {\n    color: #0c0d0d;\n    font-size: 16px;\n    font-weight: 400;\n    letter-spacing: -0.32px;\n  }\n\n  .react-datepicker__navigation,\n  .react-datepicker__navigation--next {\n    width: 4px;\n    height: 8px;\n    border-color: #0c0d0d;\n  }\n\n  .react-datepicker__navigation--next {\n    right: 14px;\n    top: 19px;\n  }\n\n  .react-datepicker__navigation--previous {\n    left: 14px;\n    top: 19px;\n  }\n\n  .react-datepicker__day-names {\n    display: flex;\n    gap: 11px;\n\n    position: absolute;\n    top: 55px;\n\n    color: rgba(12, 13, 13, 0.5);\n  }\n\n  .react-datepicker__week {\n    display: flex;\n    gap: 12px;\n\n    justify-content: center;\n  }\n\n  .react-datepicker__month {\n    display: flex;\n    flex-direction: column;\n    gap: 11px;\n  }\n\n  .react-datepicker__day-name,\n  .react-datepicker__day,\n  .react-datepicker__time-name {\n    width: 18px;\n    max-height: 20px;\n    margin: 0;\n\n    color: inherit;\n    font-size: 14px;\n    font-weight: 400;\n    letter-spacing: -0.02em;\n    transition: transform 250ms ease-in-out;\n\n    &:hover {\n      background-color: #0ef387;\n      transform: scale(2);\n    }\n  }\n\n  .react-datepicker__day-name:hover {\n    transform: scale(1);\n    /* pointer-events: ; */\n  }\n\n  /* selected day */\n  .react-datepicker__day--selected,\n  .react-datepicker__day--in-selecting-range,\n  .react-datepicker__day--in-range,\n  .react-datepicker__month-text--selected,\n  .react-datepicker__month-text--in-selecting-range,\n  .react-datepicker__month-text--in-range,\n  .react-datepicker__quarter-text--selected,\n  .react-datepicker__quarter-text--in-selecting-range,\n  .react-datepicker__quarter-text--in-range,\n  .react-datepicker__year-text--selected,\n  .react-datepicker__year-text--in-selecting-range,\n  .react-datepicker__year-text--in-range {\n    background-color: #0ef387;\n    border-radius: 0;\n    border-bottom: 2px solid #0c0d0d;\n  }\n\n  /* actual day */\n  .react-datepicker__day--keyboard-selected,\n  .react-datepicker__month-text--keyboard-selected,\n  .react-datepicker__quarter-text--keyboard-selected,\n  .react-datepicker__year-text--keyboard-selected {\n    background-color: #0ef387;\n    border-bottom: 2px solid #0c0d0d;\n    border-radius: 0;\n  }\n\n  /* nav arrow */\n  .react-datepicker__year-read-view--down-arrow,\n  .react-datepicker__month-read-view--down-arrow,\n  .react-datepicker__month-year-read-view--down-arrow,\n  .react-datepicker__navigation-icon::before {\n    border-color: #0c0d0d;\n    width: 6px;\n    height: 6px;\n  }\n\n  /* from input to form arrow */\n  .react-datepicker-popper[data-placement^='top']\n    .react-datepicker__triangle::before,\n  .react-datepicker-popper[data-placement^='top']\n    .react-datepicker__triangle::after {\n    border-top-color: #0ef387;\n  }\n\n  .react-datepicker-popper[data-placement^='bottom']\n    .react-datepicker__triangle::before,\n  .react-datepicker-popper[data-placement^='bottom']\n    .react-datepicker__triangle::after {\n    border-bottom-color: #0ef387;\n  }\n"]))),Z=t(756),P=t(3329),z=function(){var n=(0,h.v9)(c.A),e=(0,h.v9)(c.Z),t=(0,h.I0)(),i=(0,l.useState)(n),r=(0,x.Z)(i,2),a=r[0],o=r[1],d=(0,l.useState)(new Date),p=(0,x.Z)(d,2),g=p[0],s=p[1];return(0,P.jsxs)(b,{children:[(0,P.jsx)(_,{onSubmit:function(n){n.preventDefault(),t((0,m.Tv)(a))},children:(0,P.jsxs)("label",{children:[(0,P.jsx)(k,{placeholder:"Search for anything..",type:"text",value:a,onChange:function(n){o(n.target.value)}}),(0,P.jsx)("button",{type:"submit",children:(0,P.jsx)(y,{width:20,height:20,children:(0,P.jsx)("use",{href:Z.Z+"#icon-search"})})})]})}),(0,P.jsxs)(v,{children:[(0,P.jsx)(u,{selected:g,value:e,onChange:function(n){if(s(n),n){var e=n.getFullYear(),i=n.getMonth()+1,r=n.getDate();t((0,m.fN)({year:e,month:i,day:r}))}},dateFormat:"dd/MM/yyyy",placeholderText:"dd/mm/yyyy"}),(0,P.jsx)(y,{width:20,height:20,children:(0,P.jsx)("use",{href:Z.Z+"#icon-calendar"})})]})]})}},1997:function(n,e,t){t.d(e,{u:function(){return u}});t(2791);var i,r,a,o,d,p,x=t(168),l=t(7745),h=l.ZP.div(i||(i=(0,x.Z)(["\n  display: flex;\n\n  margin-bottom: 32px;\n  padding: 20px 0;\n\n  background: rgba(0, 0, 0, 0.2);\n\n  color: rgba(250, 250, 250, 0.4);\n\n  font-family: Suisse Intl;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  @media (max-width: 768px) {\n    width: 500px;\n  }\n  @media (min-width: 768px) {\n    font-size: 16px;\n  }\n  @media (min-width: 1440px) {\n  }\n"]))),c=l.ZP.p(r||(r=(0,x.Z)(["\n  width: 53px;\n  margin: 0 20px 0 20px;\n  @media (min-width: 768px) {\n    width: auto;\n    margin: 0 41px 0 32px;\n  }\n  @media (min-width: 1440px) {\n    margin: 0 89px 0 40px;\n  }\n"]))),m=l.ZP.p(a||(a=(0,x.Z)(["\n  width: 60px;\n\n  margin-right: 10px;\n  @media (min-width: 768px) {\n    width: auto;\n    margin-right: 46px;\n  }\n  @media (min-width: 1440px) {\n    margin-right: 120px;\n  }\n"]))),g=l.ZP.p(o||(o=(0,x.Z)(["\n  width: 30px;\n  margin-right: 36px;\n  @media (min-width: 768px) {\n    width: auto;\n    margin-right: 65px;\n  }\n  @media (min-width: 1440px) {\n    margin-right: 163px;\n  }\n"]))),s=l.ZP.p(d||(d=(0,x.Z)(["\n  width: 30px;\n  margin-right: 20px;\n  @media (min-width: 768px) {\n    width: auto;\n    margin-right: 40px;\n  }\n  @media (min-width: 1440px) {\n    margin-right: 99px;\n  }\n"]))),f=l.ZP.p(p||(p=(0,x.Z)(["\n  width: 30px;\n  margin-right: 80px;\n  @media (min-width: 768px) {\n    width: auto;\n    margin-right: 102px;\n  }\n  @media (min-width: 1440px) {\n    margin-right: 154px;\n  }\n"]))),w=t(3329),u=function(){return(0,w.jsxs)(h,{children:[(0,w.jsx)(c,{children:"Category"}),(0,w.jsx)(m,{children:"Comment"}),(0,w.jsx)(g,{children:"Date"}),(0,w.jsx)(s,{children:"Time"}),(0,w.jsx)(f,{children:"Sum"}),(0,w.jsx)("p",{children:"Actions"})]})}},500:function(n,e,t){t.d(e,{CA:function(){return D},H2:function(){return I},KW:function(){return S},LI:function(){return j},Or:function(){return P},P:function(){return z},P1:function(){return M},P2:function(){return T},P3:function(){return F},P4:function(){return H},P5:function(){return L},PH:function(){return C},UP:function(){return N},_S:function(){return q},bg:function(){return A},e9:function(){return O},mL:function(){return K},nJ:function(){return Z},nl:function(){return J}});var i,r,a,o,d,p,x,l,h,c,m,g,s,f,w,u,b,k,_,y=t(168),v=t(7745),Z=v.ZP.div(i||(i=(0,y.Z)(["\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-bottom: 80px;\n  width: 375px;\n  margin-left: auto;\n  margin-right: auto;\n\n  @media (min-width: 768px) and (max-width: 1439.8px) {\n    padding-left: 32px;\n    padding-right: 32px;\n    padding-bottom: 32px;\n    width: 768px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  @media (min-width: 1440px) {\n    padding-left: 100px;\n    padding-right: 100px;\n    padding-bottom: 50px;\n    width: 1440px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n"]))),P=v.ZP.div(r||(r=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 20px;\n  width: 335px;\n\n  @media (min-width: 768px) {\n    gap: 15px;\n    width: 532px;\n  }\n  @media (min-width: 1440px) {\n    width: 516px;\n  }\n"]))),z=v.ZP.ul(a||(a=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  @media (min-width: 768px) {\n    flex-direction: row;\n    gap: 24px;\n  }\n  @media (min-width: 1440px) {\n  }\n"]))),j=v.ZP.li(o||(o=(0,y.Z)(["\n  width: 335px;\n  height: 81px;\n  @media (min-width: 768px) {\n    width: 340px;\n    height: 121px;\n  }\n  @media (min-width: 1440px) {\n    width: 303px;\n    height: 121px;\n  }\n"]))),S=v.ZP.div(d||(d=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  gap: 40px;\n  margin-bottom: 40px;\n  margin-top: 66px;\n\n  @media (min-width: 768px) {\n    margin-bottom: 40px;\n    margin-top: 59px;\n  }\n  @media (min-width: 1440px) {\n    flex-direction: row;\n    gap: 94px;\n  }\n"]))),I=v.ZP.h2(p||(p=(0,y.Z)(["\n  color: #fafafa;\n\n  font-family: Suisse Intl;\n  font-size: 32px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  letter-spacing: -0.64px;\n  @media (min-width: 768px) {\n    color: #fafafa;\n\n    font-family: Suisse Intl;\n    font-size: 38px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    letter-spacing: -0.76px;\n  }\n\n  @media (min-width: 1440px) {\n    color: #fafafa;\n\n    font-family: Suisse Intl;\n    font-size: 38px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    letter-spacing: -0.76px;\n  }\n"]))),C=v.ZP.p(x||(x=(0,y.Z)(["\n  color: rgba(250, 250, 250, 0.4);\n\n  font-family: Suisse Intl;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  letter-spacing: -0.28px;\n  @media (min-width: 768px) {\n    color: rgba(250, 250, 250, 0.4);\n\n    font-family: Suisse Intl;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    letter-spacing: -0.32px;\n  }\n\n  @media (min-width: 1440px) {\n    color: rgba(250, 250, 250, 0.4);\n\n    font-family: Suisse Intl;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    letter-spacing: -0.32px;\n  }\n"]))),D=v.ZP.div(l||(l=(0,y.Z)(["\n  overflow-x: auto;\n  overflow-y: hidden;\n\n  @media (max-width: 767.98px) {\n    width: 335px;\n  }\n\n  &::-webkit-scrollbar {\n    width: 8px;\n    height: 8px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    width: 8px;\n    height: 121px;\n\n    border-radius: 12px;\n    background: rgba(250, 250, 250, 0.2);\n    position: absolute;\n    top: 20px;\n  }\n  &::-webkit-scrollbar-track {\n    width: 8px;\n    height: 295px;\n    border-radius: 12px;\n    background: rgba(250, 250, 250, 0.2);\n  }\n\n  @media (min-width: 768px) {\n    overflow-x: hidden;\n  }\n"]))),q=v.ZP.div(h||(h=(0,y.Z)(["\n  width: 335px;\n  height: 516px;\n\n  background: #171719;\n\n  padding: 20px 0;\n  flex-direction: column;\n  border-radius: 30px;\n  background: #171719;\n\n  @media (min-width: 768px) {\n    overflow-y: hidden;\n    overflow-x: hidden;\n    width: 704px;\n    height: 544px;\n    padding: 32px 0;\n    flex-direction: column;\n  }\n  @media (min-width: 1440px) {\n    width: 1240px;\n    height: 439px;\n    padding: 20px 0;\n  }\n"]))),A=v.ZP.div(c||(c=(0,y.Z)(["\n  display: flex;\n\n  margin-bottom: 14px;\n  align-items: center;\n\n  color: rgba(250, 250, 250, 0.4);\n\n  font-family: Suisse Intl;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  @media (min-width: 768px) {\n    font-size: 16px;\n  }\n  @media (min-width: 1440px) {\n  }\n"]))),M=v.ZP.p(m||(m=(0,y.Z)(["\n  width: 59px;\n  margin: 0 14px 0 20px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  @media (min-width: 768px) {\n    width: 83px;\n    margin: 0 31px 0 32px;\n  }\n  @media (min-width: 1440px) {\n    width: 97px;\n    margin: 0 60px 0 40px;\n  }\n"]))),T=v.ZP.p(g||(g=(0,y.Z)(["\n  width: 56px;\n  margin-right: 14px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  @media (min-width: 768px) {\n    width: 89px;\n    margin-right: 26px;\n  }\n  @media (min-width: 1440px) {\n    width: 120px;\n    margin-right: 74px;\n  }\n"]))),F=v.ZP.p(s||(s=(0,y.Z)(["\n  width: 56px;\n  margin-right: 13px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  @media (min-width: 768px) {\n    width: 74px;\n    margin-right: 26px;\n  }\n  @media (min-width: 1440px) {\n    width: 130px;\n    margin-right: 70px;\n  }\n"]))),H=v.ZP.p(f||(f=(0,y.Z)(["\n  width: 38px;\n  margin-right: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  @media (min-width: 768px) {\n    width: 52px;\n    margin-right: 25px;\n  }\n  @media (min-width: 1440px) {\n    width: 54px;\n    margin-right: 84px;\n  }\n"]))),L=v.ZP.p(w||(w=(0,y.Z)(["\n  width: 90px;\n  margin-right: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  @media (min-width: 768px) {\n    width: 96px;\n    margin-right: 40px;\n  }\n  @media (min-width: 1440px) {\n    width: 90px;\n    margin-right: 90px;\n  }\n"]))),J=v.ZP.p(u||(u=(0,y.Z)(["\n  color: rgba(250, 250, 250, 0.4);\n\n  font-family: Suisse Intl;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  @media (min-width: 768px) {\n    font-size: 22px;\n    width: auto;\n  }\n  @media (min-width: 1440px) {\n    font-size: 26px;\n  }\n"]))),K=v.ZP.button(b||(b=(0,y.Z)(["\n  display: flex;\n  padding: 14px;\n  justify-content: center;\n  align-items: center;\n\n  background: #0c0d0d;\n\n  border-radius: 40px;\n  margin-right: 8px;\n  transition: background-color 250ms ease-in-out;\n\n  /* \u0421\u043a\u0440\u044b\u0442\u044c \u0442\u0435\u043a\u0441\u0442 \u043f\u0440\u0438 \u0448\u0438\u0440\u0438\u043d\u0435 \u044d\u043a\u0440\u0430\u043d\u0430 \u0434\u043e 1440px */\n  @media (max-width: 1440px) {\n    span {\n      display: none;\n    }\n  }\n\n  stroke: white;\n  fill: transparent;\n  &:hover {\n    stroke: black;\n  }\n\n  &:hover {\n    background-color: #0ef387;\n  }\n\n  @media (min-width: 1440px) {\n    padding: 14px 30px;\n    gap: 10px;\n\n    color: #fafafa;\n\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    letter-spacing: -0.32px;\n\n    span {\n      display: inline-block;\n    }\n\n    &:hover {\n      color: #0c0d0d;\n    }\n  }\n"]))),N=v.ZP.button(k||(k=(0,y.Z)(["\n  display: flex;\n  padding: 14px;\n  justify-content: center;\n  align-items: center;\n\n  background: #0c0d0d;\n\n  border-radius: 40px;\n  transition: background-color 250ms ease-in-out;\n\n  stroke: white;\n  fill: transparent;\n  &:hover {\n    stroke: black;\n  }\n\n  @media (max-width: 1440px) {\n    span {\n      display: none;\n    }\n  }\n\n  &:hover {\n    background-color: #0ef387;\n  }\n\n  @media (min-width: 1440px) {\n    padding: 14px 30px;\n    gap: 10px;\n\n    color: #fafafa;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    letter-spacing: -0.32px;\n    margin-right: 8px;\n\n    span {\n      display: inline-block;\n    }\n\n    &:hover {\n      color: #0c0d0d;\n    }\n  }\n"]))),O=v.ZP.div(_||(_=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  height: 245px;\n\n  &::-webkit-scrollbar {\n    width: 8px;\n    margin-right: 20px;\n    height: 12px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    width: 8px;\n    height: 150px;\n    border-radius: 12px;\n    background: rgba(250, 250, 250, 0.2);\n    margin-right: 20px;\n  }\n\n  @media (max-width: 768px) {\n    width: 500px;\n  }\n\n  @media (min-width: 768px) {\n    overflow-y: auto;\n    overflow-x: hidden;\n    height: 230px;\n    width: 704px;\n  }\n\n  @media (min-width: 1440px) {\n    height: 238px;\n    width: 1240px;\n    margin-right: 20px;\n  }\n"])))},8480:function(n,e,t){t.d(e,{A:function(){return i},Z:function(){return r}});var i=function(n){return n.filter.filter},r=function(n){return n.filter.startDate}}}]);
//# sourceMappingURL=919.9cc6f4af.chunk.js.map