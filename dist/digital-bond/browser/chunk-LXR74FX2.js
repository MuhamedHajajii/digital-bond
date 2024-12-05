import{d as g}from"./chunk-22H7MDYE.js";import{O as d,R as a,Ra as m,W as l,X as u,Y as y,ta as p}from"./chunk-MH4LOJJI.js";var r=function(s){return s[s.State=0]="State",s[s.Transition=1]="Transition",s[s.Sequence=2]="Sequence",s[s.Group=3]="Group",s[s.Animate=4]="Animate",s[s.Keyframes=5]="Keyframes",s[s.Style=6]="Style",s[s.Trigger=7]="Trigger",s[s.Reference=8]="Reference",s[s.AnimateChild=9]="AnimateChild",s[s.AnimateRef=10]="AnimateRef",s[s.Query=11]="Query",s[s.Stagger=12]="Stagger",s}(r||{}),x="*";function q(s,t){return{type:r.Trigger,name:s,definitions:t,options:{}}}function L(s,t=null){return{type:r.Animate,styles:t,timings:s}}function P(s,t=null){return{type:r.Sequence,steps:s,options:t}}function $(s){return{type:r.Style,styles:s,offset:null}}function B(s,t,e){return{type:r.State,name:s,styles:t,options:e}}function G(s,t,e=null){return{type:r.Transition,expr:s,animation:t,options:e}}var v=(()=>{class s{static{this.\u0275fac=function(n){return new(n||s)}}static{this.\u0275prov=a({token:s,factory:()=>u(b),providedIn:"root"})}}return s})(),c=class{},b=(()=>{class s extends v{constructor(e,n){super(),this.animationModuleType=u(p,{optional:!0}),this._nextAnimationId=0;let i={id:"0",encapsulation:y.None,styles:[],data:{animation:[]}};if(this._renderer=e.createRenderer(n.body,i),this.animationModuleType===null&&!w(this._renderer))throw new d(3600,!1)}build(e){let n=this._nextAnimationId;this._nextAnimationId++;let i=Array.isArray(e)?P(e):e;return S(this._renderer,null,n,"register",[i]),new _(n,this._renderer)}static{this.\u0275fac=function(n){return new(n||s)(l(m),l(g))}}static{this.\u0275prov=a({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})(),_=class extends c{constructor(t,e){super(),this._id=t,this._renderer=e}create(t,e){return new f(this._id,t,e||{},this._renderer)}},f=class{constructor(t,e,n,i){this.id=t,this.element=e,this._renderer=i,this.parentPlayer=null,this._started=!1,this.totalTime=0,this._command("create",n)}_listen(t,e){return this._renderer.listen(this.element,`@@${this.id}:${t}`,e)}_command(t,...e){S(this._renderer,this.element,this.id,t,e)}onDone(t){this._listen("done",t)}onStart(t){this._listen("start",t)}onDestroy(t){this._listen("destroy",t)}init(){this._command("init")}hasStarted(){return this._started}play(){this._command("play"),this._started=!0}pause(){this._command("pause")}restart(){this._command("restart")}finish(){this._command("finish")}destroy(){this._command("destroy")}reset(){this._command("reset"),this._started=!1}setPosition(t){this._command("setPosition",t)}getPosition(){return I(this._renderer)?.engine?.players[this.id]?.getPosition()??0}};function S(s,t,e,n,i){s.setProperty(t,`@@${e}:${n}`,i)}function I(s){let t=s.\u0275type;return t===0?s:t===1?s.animationRenderer:null}function w(s){let t=s.\u0275type;return t===0||t===1}var D=class{constructor(t=0,e=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._originalOnDoneFns=[],this._originalOnStartFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this._position=0,this.parentPlayer=null,this.totalTime=t+e}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}onStart(t){this._originalOnStartFns.push(t),this._onStartFns.push(t)}onDone(t){this._originalOnDoneFns.push(t),this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(t=>t()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(t){this._position=this.totalTime?t*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(t){let e=t=="start"?this._onStartFns:this._onDoneFns;e.forEach(n=>n()),e.length=0}},F=class{constructor(t){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=t;let e=0,n=0,i=0,h=this.players.length;h==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(o=>{o.onDone(()=>{++e==h&&this._onFinish()}),o.onDestroy(()=>{++n==h&&this._onDestroy()}),o.onStart(()=>{++i==h&&this._onStart()})}),this.totalTime=this.players.reduce((o,E)=>Math.max(o,E.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}init(){this.players.forEach(t=>t.init())}onStart(t){this._onStartFns.push(t)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(t=>t()),this._onStartFns=[])}onDone(t){this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(t=>t.play())}pause(){this.players.forEach(t=>t.pause())}restart(){this.players.forEach(t=>t.restart())}finish(){this._onFinish(),this.players.forEach(t=>t.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(t=>t.destroy()),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this.players.forEach(t=>t.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(t){let e=t*this.totalTime;this.players.forEach(n=>{let i=n.totalTime?Math.min(1,e/n.totalTime):1;n.setPosition(i)})}getPosition(){let t=this.players.reduce((e,n)=>e===null||n.totalTime>e.totalTime?n:e,null);return t!=null?t.getPosition():0}beforeDestroy(){this.players.forEach(t=>{t.beforeDestroy&&t.beforeDestroy()})}triggerCallback(t){let e=t=="start"?this._onStartFns:this._onDoneFns;e.forEach(n=>n()),e.length=0}},K="!";export{r as a,x as b,q as c,L as d,P as e,$ as f,B as g,G as h,v as i,D as j,F as k,K as l};
