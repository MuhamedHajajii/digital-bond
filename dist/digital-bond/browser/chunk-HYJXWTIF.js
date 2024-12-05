import{d as Ee,g as ve,p as be,q as Pe}from"./chunk-22H7MDYE.js";import{E as ae,L as ce,N as le,O as de,R as O,Rb as ge,Sb as Te,Ta as pe,Tb as we,U as v,Ua as ye,W as b,X as g,_a as me,c as q,ca as he,ea as ue,fa as fe,j as se,k as B,o as k,sa as W,w as oe,wa as G,z as ie}from"./chunk-MH4LOJJI.js";import{a as $,d as re,g as C}from"./chunk-DM275RSA.js";var j=class{},L=class{},E=class e{constructor(n){this.normalizedNames=new Map,this.lazyUpdate=null,n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(t=>{let r=t.indexOf(":");if(r>0){let s=t.slice(0,r),i=s.toLowerCase(),o=t.slice(r+1).trim();this.maybeSetNormalizedName(s,i),this.headers.has(i)?this.headers.get(i).push(o):this.headers.set(i,[o])}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((t,r)=>{this.setHeaderEntries(r,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([t,r])=>{this.setHeaderEntries(t,r)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let t=this.headers.get(n.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,t){return this.clone({name:n,value:t,op:"a"})}set(n,t){return this.clone({name:n,value:t,op:"s"})}delete(n,t){return this.clone({name:n,value:t,op:"d"})}maybeSetNormalizedName(n,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,n)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(t=>{this.headers.set(t,n.headers.get(t)),this.normalizedNames.set(t,n.normalizedNames.get(t))})}clone(n){let t=new e;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([n]),t}applyUpdate(n){let t=n.name.toLowerCase();switch(n.op){case"a":case"s":let r=n.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(n.name,t);let s=(n.op==="a"?this.headers.get(t):void 0)||[];s.push(...r),this.headers.set(t,s);break;case"d":let i=n.value;if(!i)this.headers.delete(t),this.normalizedNames.delete(t);else{let o=this.headers.get(t);if(!o)return;o=o.filter(c=>i.indexOf(c)===-1),o.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,o)}break}}setHeaderEntries(n,t){let r=(Array.isArray(t)?t:[t]).map(i=>i.toString()),s=n.toLowerCase();this.headers.set(s,r),this.maybeSetNormalizedName(n,s)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>n(this.normalizedNames.get(t),this.headers.get(t)))}};var Y=class{encodeKey(n){return Re(n)}encodeValue(n){return Re(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function Ve(e,n){let t=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(s=>{let i=s.indexOf("="),[o,c]=i==-1?[n.decodeKey(s),""]:[n.decodeKey(s.slice(0,i)),n.decodeValue(s.slice(i+1))],a=t.get(o)||[];a.push(c),t.set(o,a)}),t}var $e=/%(\d[a-f0-9])/gi,Ce={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Re(e){return encodeURIComponent(e).replace($e,(n,t)=>Ce[t]??n)}function z(e){return`${e}`}var R=class e{constructor(n={}){if(this.updates=null,this.cloneFrom=null,this.encoder=n.encoder||new Y,n.fromString){if(n.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=Ve(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(t=>{let r=n.fromObject[t],s=Array.isArray(r)?r.map(z):[z(r)];this.map.set(t,s)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let t=this.map.get(n);return t?t[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,t){return this.clone({param:n,value:t,op:"a"})}appendAll(n){let t=[];return Object.keys(n).forEach(r=>{let s=n[r];Array.isArray(s)?s.forEach(i=>{t.push({param:r,value:i,op:"a"})}):t.push({param:r,value:s,op:"a"})}),this.clone(t)}set(n,t){return this.clone({param:n,value:t,op:"s"})}delete(n,t){return this.clone({param:n,value:t,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let t=this.encoder.encodeKey(n);return this.map.get(n).map(r=>t+"="+this.encoder.encodeValue(r)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let t=new e({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(n),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let t=(n.op==="a"?this.map.get(n.param):void 0)||[];t.push(z(n.value)),this.map.set(n.param,t);break;case"d":if(n.value!==void 0){let r=this.map.get(n.param)||[],s=r.indexOf(z(n.value));s!==-1&&r.splice(s,1),r.length>0?this.map.set(n.param,r):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};var Z=class{constructor(){this.map=new Map}set(n,t){return this.map.set(n,t),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}};function qe(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Ne(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function Ae(e){return typeof Blob<"u"&&e instanceof Blob}function Me(e){return typeof FormData<"u"&&e instanceof FormData}function We(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var F=class e{constructor(n,t,r,s){this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=n.toUpperCase();let i;if(qe(this.method)||s?(this.body=r!==void 0?r:null,i=s):i=r,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),this.transferCache=i.transferCache),this.headers??=new E,this.context??=new Z,!this.params)this.params=new R,this.urlWithParams=t;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=t;else{let c=t.indexOf("?"),a=c===-1?"?":c<t.length-1?"&":"";this.urlWithParams=t+a+o}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Ne(this.body)||Ae(this.body)||Me(this.body)||We(this.body)?this.body:this.body instanceof R?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Me(this.body)?null:Ae(this.body)?this.body.type||null:Ne(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof R?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(n={}){let t=n.method||this.method,r=n.url||this.url,s=n.responseType||this.responseType,i=n.transferCache??this.transferCache,o=n.body!==void 0?n.body:this.body,c=n.withCredentials??this.withCredentials,a=n.reportProgress??this.reportProgress,f=n.headers||this.headers,y=n.params||this.params,m=n.context??this.context;return n.setHeaders!==void 0&&(f=Object.keys(n.setHeaders).reduce((p,h)=>p.set(h,n.setHeaders[h]),f)),n.setParams&&(y=Object.keys(n.setParams).reduce((p,h)=>p.set(h,n.setParams[h]),y)),new e(t,r,o,{params:y,headers:f,context:m,reportProgress:a,responseType:s,withCredentials:c,transferCache:i})}},N=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(N||{}),U=class{constructor(n,t=_.Ok,r="OK"){this.headers=n.headers||new E,this.status=n.status!==void 0?n.status:t,this.statusText=n.statusText||r,this.url=n.url||null,this.ok=this.status>=200&&this.status<300}},J=class e extends U{constructor(n={}){super(n),this.type=N.ResponseHeader}clone(n={}){return new e({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},I=class e extends U{constructor(n={}){super(n),this.type=N.Response,this.body=n.body!==void 0?n.body:null}clone(n={}){return new e({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},P=class extends U{constructor(n){super(n,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},_=function(e){return e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableEntity=422]="UnprocessableEntity",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",e}(_||{});function K(e,n){return{body:n,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,transferCache:e.transferCache}}var Ge=(()=>{class e{constructor(t){this.handler=t}request(t,r,s={}){let i;if(t instanceof F)i=t;else{let a;s.headers instanceof E?a=s.headers:a=new E(s.headers);let f;s.params&&(s.params instanceof R?f=s.params:f=new R({fromObject:s.params})),i=new F(t,r,s.body!==void 0?s.body:null,{headers:a,context:s.context,params:f,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials,transferCache:s.transferCache})}let o=B(i).pipe(ie(a=>this.handler.handle(a)));if(t instanceof F||s.observe==="events")return o;let c=o.pipe(oe(a=>a instanceof I));switch(s.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return c.pipe(k(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return c.pipe(k(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return c.pipe(k(a=>{if(a.body!==null&&typeof a.body!="string")throw new Error("Response is not a string.");return a.body}));case"json":default:return c.pipe(k(a=>a.body))}case"response":return c;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(t,r={}){return this.request("DELETE",t,r)}get(t,r={}){return this.request("GET",t,r)}head(t,r={}){return this.request("HEAD",t,r)}jsonp(t,r){return this.request("JSONP",t,{params:new R().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,r={}){return this.request("OPTIONS",t,r)}patch(t,r,s={}){return this.request("PATCH",t,K(s,r))}post(t,r,s={}){return this.request("POST",t,K(s,r))}put(t,r,s={}){return this.request("PUT",t,K(s,r))}static{this.\u0275fac=function(r){return new(r||e)(b(j))}}static{this.\u0275prov=O({token:e,factory:e.\u0275fac})}}return e})(),Ke=/^\)\]\}',?\n/,Se="X-Request-URL";function Ie(e){if(e.url)return e.url;let n=Se.toLocaleLowerCase();return e.headers.get(n)}var S=(()=>{class e{constructor(){this.fetchImpl=g(Q,{optional:!0})?.fetch??fetch.bind(globalThis),this.ngZone=g(ye)}handle(t){return new q(r=>{let s=new AbortController;return this.doRequest(t,s.signal,r).then(H,i=>r.error(new P({error:i}))),()=>s.abort()})}doRequest(t,r,s){return C(this,null,function*(){let i=this.createRequestInit(t),o;try{let h=this.fetchImpl(t.urlWithParams,$({signal:r},i));Ye(h),s.next({type:N.Sent}),o=yield h}catch(h){s.error(new P({error:h,status:h.status??0,statusText:h.statusText,url:t.urlWithParams,headers:h.headers}));return}let c=new E(o.headers),a=o.statusText,f=Ie(o)??t.urlWithParams,y=o.status,m=null;if(t.reportProgress&&s.next(new J({headers:c,status:y,statusText:a,url:f})),o.body){let h=o.headers.get("content-length"),A=[],l=o.body.getReader(),d=0,T,w,u=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>C(this,null,function*(){for(;;){let{done:M,value:x}=yield l.read();if(M)break;if(A.push(x),d+=x.length,t.reportProgress){w=t.responseType==="text"?(w??"")+(T??=new TextDecoder).decode(x,{stream:!0}):void 0;let te=()=>s.next({type:N.DownloadProgress,total:h?+h:void 0,loaded:d,partialText:w});u?u.run(te):te()}}}));let D=this.concatChunks(A,d);try{let M=o.headers.get("Content-Type")??"";m=this.parseBody(t,D,M)}catch(M){s.error(new P({error:M,headers:new E(o.headers),status:o.status,statusText:o.statusText,url:Ie(o)??t.urlWithParams}));return}}y===0&&(y=m?_.Ok:0),y>=200&&y<300?(s.next(new I({body:m,headers:c,status:y,statusText:a,url:f})),s.complete()):s.error(new P({error:m,headers:c,status:y,statusText:a,url:f}))})}parseBody(t,r,s){switch(t.responseType){case"json":let i=new TextDecoder().decode(r).replace(Ke,"");return i===""?null:JSON.parse(i);case"text":return new TextDecoder().decode(r);case"blob":return new Blob([r],{type:s});case"arraybuffer":return r.buffer}}createRequestInit(t){let r={},s=t.withCredentials?"include":void 0;if(t.headers.forEach((i,o)=>r[i]=o.join(",")),r.Accept??="application/json, text/plain, */*",!r["Content-Type"]){let i=t.detectContentTypeHeader();i!==null&&(r["Content-Type"]=i)}return{body:t.serializeBody(),method:t.method,headers:r,credentials:s}}concatChunks(t,r){let s=new Uint8Array(r),i=0;for(let o of t)s.set(o,i),i+=o.length;return s}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=O({token:e,factory:e.\u0275fac})}}return e})(),Q=class{};function H(){}function Ye(e){e.then(H,H)}function Ze(e,n){return n(e)}function Qe(e,n,t){return(r,s)=>fe(t,()=>n(r,i=>e(i,s)))}var ee=new v(""),Be=new v(""),ze=new v("");var Oe=(()=>{class e extends j{constructor(t,r){super(),this.backend=t,this.injector=r,this.chain=null,this.pendingTasks=g(me);let s=g(ze,{optional:!0});this.backend=s??t}handle(t){if(this.chain===null){let s=Array.from(new Set([...this.injector.get(ee),...this.injector.get(Be,[])]));this.chain=s.reduceRight((i,o)=>Qe(i,o,this.injector),Ze)}let r=this.pendingTasks.add();return this.chain(t,s=>this.backend.handle(s)).pipe(ae(()=>this.pendingTasks.remove(r)))}static{this.\u0275fac=function(r){return new(r||e)(b(L),b(ue))}}static{this.\u0275prov=O({token:e,factory:e.\u0275fac})}}return e})();var He=/^\)\]\}',?\n/;function en(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}var De=(()=>{class e{constructor(t){this.xhrFactory=t}handle(t){if(t.method==="JSONP")throw new de(-2800,!1);let r=this.xhrFactory;return(r.\u0275loadImpl?se(r.\u0275loadImpl()):B(null)).pipe(ce(()=>new q(i=>{let o=r.build();if(o.open(t.method,t.urlWithParams),t.withCredentials&&(o.withCredentials=!0),t.headers.forEach((l,d)=>o.setRequestHeader(l,d.join(","))),t.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){let l=t.detectContentTypeHeader();l!==null&&o.setRequestHeader("Content-Type",l)}if(t.responseType){let l=t.responseType.toLowerCase();o.responseType=l!=="json"?l:"text"}let c=t.serializeBody(),a=null,f=()=>{if(a!==null)return a;let l=o.statusText||"OK",d=new E(o.getAllResponseHeaders()),T=en(o)||t.url;return a=new J({headers:d,status:o.status,statusText:l,url:T}),a},y=()=>{let{headers:l,status:d,statusText:T,url:w}=f(),u=null;d!==_.NoContent&&(u=typeof o.response>"u"?o.responseText:o.response),d===0&&(d=u?_.Ok:0);let D=d>=200&&d<300;if(t.responseType==="json"&&typeof u=="string"){let M=u;u=u.replace(He,"");try{u=u!==""?JSON.parse(u):null}catch(x){u=M,D&&(D=!1,u={error:x,text:u})}}D?(i.next(new I({body:u,headers:l,status:d,statusText:T,url:w||void 0})),i.complete()):i.error(new P({error:u,headers:l,status:d,statusText:T,url:w||void 0}))},m=l=>{let{url:d}=f(),T=new P({error:l,status:o.status||0,statusText:o.statusText||"Unknown Error",url:d||void 0});i.error(T)},p=!1,h=l=>{p||(i.next(f()),p=!0);let d={type:N.DownloadProgress,loaded:l.loaded};l.lengthComputable&&(d.total=l.total),t.responseType==="text"&&o.responseText&&(d.partialText=o.responseText),i.next(d)},A=l=>{let d={type:N.UploadProgress,loaded:l.loaded};l.lengthComputable&&(d.total=l.total),i.next(d)};return o.addEventListener("load",y),o.addEventListener("error",m),o.addEventListener("timeout",m),o.addEventListener("abort",m),t.reportProgress&&(o.addEventListener("progress",h),c!==null&&o.upload&&o.upload.addEventListener("progress",A)),o.send(c),i.next({type:N.Sent}),()=>{o.removeEventListener("error",m),o.removeEventListener("abort",m),o.removeEventListener("load",y),o.removeEventListener("timeout",m),t.reportProgress&&(o.removeEventListener("progress",h),c!==null&&o.upload&&o.upload.removeEventListener("progress",A)),o.readyState!==o.DONE&&o.abort()}})))}static{this.\u0275fac=function(r){return new(r||e)(b(Pe))}}static{this.\u0275prov=O({token:e,factory:e.\u0275fac})}}return e})(),Xe=new v(""),nn="XSRF-TOKEN",tn=new v("",{providedIn:"root",factory:()=>nn}),rn="X-XSRF-TOKEN",sn=new v("",{providedIn:"root",factory:()=>rn}),V=class{},on=(()=>{class e{constructor(t,r,s){this.doc=t,this.platform=r,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=ve(t,this.cookieName),this.lastCookieString=t),this.lastToken}static{this.\u0275fac=function(r){return new(r||e)(b(Ee),b(W),b(tn))}}static{this.\u0275prov=O({token:e,factory:e.\u0275fac})}}return e})();function an(e,n){let t=e.url.toLowerCase();if(!g(Xe)||e.method==="GET"||e.method==="HEAD"||t.startsWith("http://")||t.startsWith("https://"))return n(e);let r=g(V).getToken(),s=g(sn);return r!=null&&!e.headers.has(s)&&(e=e.clone({headers:e.headers.set(s,r)})),n(e)}var ne=function(e){return e[e.Interceptors=0]="Interceptors",e[e.LegacyInterceptors=1]="LegacyInterceptors",e[e.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",e[e.NoXsrfProtection=3]="NoXsrfProtection",e[e.JsonpSupport=4]="JsonpSupport",e[e.RequestsMadeViaParent=5]="RequestsMadeViaParent",e[e.Fetch=6]="Fetch",e}(ne||{});function Je(e,n){return{\u0275kind:e,\u0275providers:n}}function In(...e){let n=[Ge,De,Oe,{provide:j,useExisting:Oe},{provide:L,useExisting:De},{provide:ee,useValue:an,multi:!0},{provide:Xe,useValue:!0},{provide:V,useClass:on}];for(let t of e)n.push(...t.\u0275providers);return he(n)}function On(e){return Je(ne.Interceptors,e.map(n=>({provide:ee,useValue:n,multi:!0})))}function Dn(){return Je(ne.Fetch,[S,{provide:L,useExisting:S},{provide:ze,useExisting:S}])}var xe="b",ke="h",Fe="s",je="st",Le="u",Ue="rt",X=new v(""),cn=["GET","HEAD"];function ln(e,n){let m=g(X),{isCacheActive:t}=m,r=re(m,["isCacheActive"]),{transferCache:s,method:i}=e;if(!t||i==="POST"&&!r.includePostRequests&&!s||i!=="POST"&&!cn.includes(i)||s===!1||r.filter?.(e)===!1)return n(e);let o=g(G),c=hn(e),a=o.get(c,null),f=r.includeHeaders;if(typeof s=="object"&&s.includeHeaders&&(f=s.includeHeaders),a){let{[xe]:p,[Ue]:h,[ke]:A,[Fe]:l,[je]:d,[Le]:T}=a,w=p;switch(h){case"arraybuffer":w=new TextEncoder().encode(p).buffer;break;case"blob":w=new Blob([p]);break}let u=new E(A);return B(new I({body:w,headers:u,status:l,statusText:d,url:T}))}let y=be(g(W));return n(e).pipe(le(p=>{p instanceof I&&y&&o.set(c,{[xe]:p.body,[ke]:dn(p.headers,f),[Fe]:p.status,[je]:p.statusText,[Le]:p.url||"",[Ue]:e.responseType})}))}function dn(e,n){if(!n)return{};let t={};for(let r of n){let s=e.getAll(r);s!==null&&(t[r]=s)}return t}function _e(e){return[...e.keys()].sort().map(n=>`${n}=${e.getAll(n)}`).join("&")}function hn(e){let{params:n,method:t,responseType:r,url:s}=e,i=_e(n),o=e.serializeBody();o instanceof URLSearchParams?o=_e(o):typeof o!="string"&&(o="");let c=[t,r,s,o,i].join("|"),a=un(c);return a}function un(e){let n=0;for(let t of e)n=Math.imul(31,n)+t.charCodeAt(0)<<0;return n+=2147483648,n.toString()}function xn(e){return[{provide:X,useFactory:()=>(pe("NgHttpTransferCache"),$({isCacheActive:!0},e))},{provide:Be,useValue:ln,multi:!0,deps:[G,X]},{provide:ge,multi:!0,useFactory:()=>{let n=g(Te),t=g(X);return()=>{we(n).then(()=>{t.isCacheActive=!1})}}}]}export{Ge as a,In as b,On as c,Dn as d,xn as e};
