!function(){var e=document.createElement("style");e.innerHTML=".qrcode-container[data-v-7854fc02]{margin-top:20px}.qrcode-container .info[data-v-7854fc02]{text-align:left;padding-left:20px;margin-bottom:20px;font-size:12px}.qrcode-container .qrcode-wrapper[data-v-7854fc02]{width:100%;display:flex;flex-direction:row;justify-content:space-around;align-items:center}.qrcode-container .qrcode-wrapper .qrcode-config[data-v-7854fc02]{width:70%}\n",document.head.appendChild(e),System.register(["./vendor-legacy.fa0540bc.js","./index-legacy.f58f400a.js"],(function(e){"use strict";var t,n,r,o,i,u,a,s,l,c,f,h,g,d,m,p;return{setters:[function(e){t=e.d,n=e.r,r=e.aI,o=e.aJ,i=e.b,u=e.j,a=e.e,s=e.c,l=e.g,c=e.s,f=e.m,h=e.I,g=e.p,d=e.f,m=e.E},function(e){p=e._}],execute:function(){
/*!
			 * qrcode.vue v3.3.3
			 * A Vue.js component to generate QRCode.
			 * © 2017-2021 @scopewu(https://github.com/scopewu)
			 * MIT License.
			 */
/*! *****************************************************************************
			Copyright (c) Microsoft Corporation.

			Permission to use, copy, modify, and/or distribute this software for any
			purpose with or without fee is hereby granted.

			THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
			REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
			AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
			INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
			LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
			OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
			PERFORMANCE OF THIS SOFTWARE.
			***************************************************************************** */
var v=function(){return v=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},v.apply(this,arguments)},w={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},y=w;function C(e){this.mode=y.MODE_8BIT_BYTE,this.data=e}C.prototype={getLength:function(e){return this.data.length},write:function(e){for(var t=0;t<this.data.length;t++)e.put(this.data.charCodeAt(t),8)}};var P=C,E={L:1,M:0,Q:3,H:2},b=E;function A(e,t){this.totalCount=e,this.dataCount=t}A.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],A.getRSBlocks=function(e,t){var n=A.getRsBlockTable(e,t);if(null==n)throw new Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+t);for(var r=n.length/3,o=new Array,i=0;i<r;i++)for(var u=n[3*i+0],a=n[3*i+1],s=n[3*i+2],l=0;l<u;l++)o.push(new A(a,s));return o},A.getRsBlockTable=function(e,t){switch(t){case b.L:return A.RS_BLOCK_TABLE[4*(e-1)+0];case b.M:return A.RS_BLOCK_TABLE[4*(e-1)+1];case b.Q:return A.RS_BLOCK_TABLE[4*(e-1)+2];case b.H:return A.RS_BLOCK_TABLE[4*(e-1)+3];default:return}};var L=A;function B(){this.buffer=new Array,this.length=0}B.prototype={get:function(e){var t=Math.floor(e/8);return 1==(this.buffer[t]>>>7-e%8&1)},put:function(e,t){for(var n=0;n<t;n++)this.putBit(1==(e>>>t-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};for(var T=B,D={glog:function(e){if(e<1)throw new Error("glog("+e+")");return D.LOG_TABLE[e]},gexp:function(e){for(;e<0;)e+=255;for(;e>=256;)e-=255;return D.EXP_TABLE[e]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},_=0;_<8;_++)D.EXP_TABLE[_]=1<<_;for(_=8;_<256;_++)D.EXP_TABLE[_]=D.EXP_TABLE[_-4]^D.EXP_TABLE[_-5]^D.EXP_TABLE[_-6]^D.EXP_TABLE[_-8];for(_=0;_<255;_++)D.LOG_TABLE[D.EXP_TABLE[_]]=_;var M=D,k=M;function x(e,t){if(null==e.length)throw new Error(e.length+"/"+t);for(var n=0;n<e.length&&0==e[n];)n++;this.num=new Array(e.length-n+t);for(var r=0;r<e.length-n;r++)this.num[r]=e[r+n]}x.prototype={get:function(e){return this.num[e]},getLength:function(){return this.num.length},multiply:function(e){for(var t=new Array(this.getLength()+e.getLength()-1),n=0;n<this.getLength();n++)for(var r=0;r<e.getLength();r++)t[n+r]^=k.gexp(k.glog(this.get(n))+k.glog(e.get(r)));return new x(t,0)},mod:function(e){if(this.getLength()-e.getLength()<0)return this;for(var t=k.glog(this.get(0))-k.glog(e.get(0)),n=new Array(this.getLength()),r=0;r<this.getLength();r++)n[r]=this.get(r);for(r=0;r<e.getLength();r++)n[r]^=k.gexp(k.glog(e.get(r))+t);return new x(n,0).mod(e)}};var S=w,I=x,N=M,R=0,O=1,H=2,U=3,q=4,j=5,G=6,z=7,F={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(e){for(var t=e<<10;F.getBCHDigit(t)-F.getBCHDigit(F.G15)>=0;)t^=F.G15<<F.getBCHDigit(t)-F.getBCHDigit(F.G15);return(e<<10|t)^F.G15_MASK},getBCHTypeNumber:function(e){for(var t=e<<12;F.getBCHDigit(t)-F.getBCHDigit(F.G18)>=0;)t^=F.G18<<F.getBCHDigit(t)-F.getBCHDigit(F.G18);return e<<12|t},getBCHDigit:function(e){for(var t=0;0!=e;)t++,e>>>=1;return t},getPatternPosition:function(e){return F.PATTERN_POSITION_TABLE[e-1]},getMask:function(e,t,n){switch(e){case R:return(t+n)%2==0;case O:return t%2==0;case H:return n%3==0;case U:return(t+n)%3==0;case q:return(Math.floor(t/2)+Math.floor(n/3))%2==0;case j:return t*n%2+t*n%3==0;case G:return(t*n%2+t*n%3)%2==0;case z:return(t*n%3+(t+n)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}},getErrorCorrectPolynomial:function(e){for(var t=new I([1],0),n=0;n<e;n++)t=t.multiply(new I([1,N.gexp(n)],0));return t},getLengthInBits:function(e,t){if(1<=t&&t<10)switch(e){case S.MODE_NUMBER:return 10;case S.MODE_ALPHA_NUM:return 9;case S.MODE_8BIT_BYTE:case S.MODE_KANJI:return 8;default:throw new Error("mode:"+e)}else if(t<27)switch(e){case S.MODE_NUMBER:return 12;case S.MODE_ALPHA_NUM:return 11;case S.MODE_8BIT_BYTE:return 16;case S.MODE_KANJI:return 10;default:throw new Error("mode:"+e)}else{if(!(t<41))throw new Error("type:"+t);switch(e){case S.MODE_NUMBER:return 14;case S.MODE_ALPHA_NUM:return 13;case S.MODE_8BIT_BYTE:return 16;case S.MODE_KANJI:return 12;default:throw new Error("mode:"+e)}}},getLostPoint:function(e){for(var t=e.getModuleCount(),n=0,r=0;r<t;r++)for(var o=0;o<t;o++){for(var i=0,u=e.isDark(r,o),a=-1;a<=1;a++)if(!(r+a<0||t<=r+a))for(var s=-1;s<=1;s++)o+s<0||t<=o+s||0==a&&0==s||u==e.isDark(r+a,o+s)&&i++;i>5&&(n+=3+i-5)}for(r=0;r<t-1;r++)for(o=0;o<t-1;o++){var l=0;e.isDark(r,o)&&l++,e.isDark(r+1,o)&&l++,e.isDark(r,o+1)&&l++,e.isDark(r+1,o+1)&&l++,0!=l&&4!=l||(n+=3)}for(r=0;r<t;r++)for(o=0;o<t-6;o++)e.isDark(r,o)&&!e.isDark(r,o+1)&&e.isDark(r,o+2)&&e.isDark(r,o+3)&&e.isDark(r,o+4)&&!e.isDark(r,o+5)&&e.isDark(r,o+6)&&(n+=40);for(o=0;o<t;o++)for(r=0;r<t-6;r++)e.isDark(r,o)&&!e.isDark(r+1,o)&&e.isDark(r+2,o)&&e.isDark(r+3,o)&&e.isDark(r+4,o)&&!e.isDark(r+5,o)&&e.isDark(r+6,o)&&(n+=40);var c=0;for(o=0;o<t;o++)for(r=0;r<t;r++)e.isDark(r,o)&&c++;return n+=10*(Math.abs(100*c/t/t-50)/5)}},V=P,X=L,K=T,J=F,$=x;function Q(e,t){this.typeNumber=e,this.errorCorrectLevel=t,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var Y=Q.prototype;Y.addData=function(e){var t=new V(e);this.dataList.push(t),this.dataCache=null},Y.isDark=function(e,t){if(e<0||this.moduleCount<=e||t<0||this.moduleCount<=t)throw new Error(e+","+t);return this.modules[e][t]},Y.getModuleCount=function(){return this.moduleCount},Y.make=function(){if(this.typeNumber<1){var e=1;for(e=1;e<40;e++){for(var t=X.getRSBlocks(e,this.errorCorrectLevel),n=new K,r=0,o=0;o<t.length;o++)r+=t[o].dataCount;for(o=0;o<this.dataList.length;o++){var i=this.dataList[o];n.put(i.mode,4),n.put(i.getLength(),J.getLengthInBits(i.mode,e)),i.write(n)}if(n.getLengthInBits()<=8*r)break}this.typeNumber=e}this.makeImpl(!1,this.getBestMaskPattern())},Y.makeImpl=function(e,t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[n]=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++)this.modules[n][r]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(e,t),this.typeNumber>=7&&this.setupTypeNumber(e),null==this.dataCache&&(this.dataCache=Q.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,t)},Y.setupPositionProbePattern=function(e,t){for(var n=-1;n<=7;n++)if(!(e+n<=-1||this.moduleCount<=e+n))for(var r=-1;r<=7;r++)t+r<=-1||this.moduleCount<=t+r||(this.modules[e+n][t+r]=0<=n&&n<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==n||6==n)||2<=n&&n<=4&&2<=r&&r<=4)},Y.getBestMaskPattern=function(){for(var e=0,t=0,n=0;n<8;n++){this.makeImpl(!0,n);var r=J.getLostPoint(this);(0==n||e>r)&&(e=r,t=n)}return t},Y.createMovieClip=function(e,t,n){var r=e.createEmptyMovieClip(t,n);this.make();for(var o=0;o<this.modules.length;o++)for(var i=1*o,u=0;u<this.modules[o].length;u++){var a=1*u;this.modules[o][u]&&(r.beginFill(0,100),r.moveTo(a,i),r.lineTo(a+1,i),r.lineTo(a+1,i+1),r.lineTo(a,i+1),r.endFill())}return r},Y.setupTimingPattern=function(){for(var e=8;e<this.moduleCount-8;e++)null==this.modules[e][6]&&(this.modules[e][6]=e%2==0);for(var t=8;t<this.moduleCount-8;t++)null==this.modules[6][t]&&(this.modules[6][t]=t%2==0)},Y.setupPositionAdjustPattern=function(){for(var e=J.getPatternPosition(this.typeNumber),t=0;t<e.length;t++)for(var n=0;n<e.length;n++){var r=e[t],o=e[n];if(null==this.modules[r][o])for(var i=-2;i<=2;i++)for(var u=-2;u<=2;u++)this.modules[r+i][o+u]=-2==i||2==i||-2==u||2==u||0==i&&0==u}},Y.setupTypeNumber=function(e){for(var t=J.getBCHTypeNumber(this.typeNumber),n=0;n<18;n++){var r=!e&&1==(t>>n&1);this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=r}for(n=0;n<18;n++){r=!e&&1==(t>>n&1);this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=r}},Y.setupTypeInfo=function(e,t){for(var n=this.errorCorrectLevel<<3|t,r=J.getBCHTypeInfo(n),o=0;o<15;o++){var i=!e&&1==(r>>o&1);o<6?this.modules[o][8]=i:o<8?this.modules[o+1][8]=i:this.modules[this.moduleCount-15+o][8]=i}for(o=0;o<15;o++){i=!e&&1==(r>>o&1);o<8?this.modules[8][this.moduleCount-o-1]=i:o<9?this.modules[8][15-o-1+1]=i:this.modules[8][15-o-1]=i}this.modules[this.moduleCount-8][8]=!e},Y.mapData=function(e,t){for(var n=-1,r=this.moduleCount-1,o=7,i=0,u=this.moduleCount-1;u>0;u-=2)for(6==u&&u--;;){for(var a=0;a<2;a++)if(null==this.modules[r][u-a]){var s=!1;i<e.length&&(s=1==(e[i]>>>o&1)),J.getMask(t,r,u-a)&&(s=!s),this.modules[r][u-a]=s,-1==--o&&(i++,o=7)}if((r+=n)<0||this.moduleCount<=r){r-=n,n=-n;break}}},Q.PAD0=236,Q.PAD1=17,Q.createData=function(e,t,n){for(var r=X.getRSBlocks(e,t),o=new K,i=0;i<n.length;i++){var u=n[i];o.put(u.mode,4),o.put(u.getLength(),J.getLengthInBits(u.mode,e)),u.write(o)}var a=0;for(i=0;i<r.length;i++)a+=r[i].dataCount;if(o.getLengthInBits()>8*a)throw new Error("code length overflow. ("+o.getLengthInBits()+">"+8*a+")");for(o.getLengthInBits()+4<=8*a&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*a||(o.put(Q.PAD0,8),o.getLengthInBits()>=8*a));)o.put(Q.PAD1,8);return Q.createBytes(o,r)},Q.createBytes=function(e,t){for(var n=0,r=0,o=0,i=new Array(t.length),u=new Array(t.length),a=0;a<t.length;a++){var s=t[a].dataCount,l=t[a].totalCount-s;r=Math.max(r,s),o=Math.max(o,l),i[a]=new Array(s);for(var c=0;c<i[a].length;c++)i[a][c]=255&e.buffer[c+n];n+=s;var f=J.getErrorCorrectPolynomial(l),h=new $(i[a],f.getLength()-1).mod(f);u[a]=new Array(f.getLength()-1);for(c=0;c<u[a].length;c++){var g=c+h.getLength()-u[a].length;u[a][c]=g>=0?h.get(g):0}}var d=0;for(c=0;c<t.length;c++)d+=t[c].totalCount;var m=new Array(d),p=0;for(c=0;c<r;c++)for(a=0;a<t.length;a++)c<i[a].length&&(m[p++]=i[a][c]);for(c=0;c<o;c++)for(a=0;a<t.length;a++)c<u[a].length&&(m[p++]=u[a][c]);return m};var W=Q,Z=function(){try{(new Path2D).addPath(new Path2D)}catch(e){return!1}return!0}();function ee(e,t){var n=new W(-1,E[t]);return n.addData(function(e){for(var t="",n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t+=String.fromCharCode(r):r<2048?(t+=String.fromCharCode(192|r>>6),t+=String.fromCharCode(128|63&r)):r<55296||r>=57344?(t+=String.fromCharCode(224|r>>12),t+=String.fromCharCode(128|r>>6&63),t+=String.fromCharCode(128|63&r)):(n++,r=65536+((1023&r)<<10|1023&e.charCodeAt(n)),t+=String.fromCharCode(240|r>>18),t+=String.fromCharCode(128|r>>12&63),t+=String.fromCharCode(128|r>>6&63),t+=String.fromCharCode(128|63&r))}return t}(e)),n.make(),n}function te(e){return e in E}function ne(e,t){void 0===t&&(t=0);var n=[];return e.forEach((function(e,r){var o=null;e.forEach((function(i,u){if(!i&&null!==o)return n.push("M"+(o+t)+" "+(r+t)+"h"+(u-o)+"v1H"+(o+t)+"z"),void(o=null);if(u!==e.length-1)i&&null===o&&(o=u);else{if(!i)return;null===o?n.push("M"+(u+t)+","+(r+t)+" h1v1H"+(u+t)+"z"):n.push("M"+(o+t)+","+(r+t)+" h"+(u+1-o)+"v1H"+(o+t)+"z")}}))})),n.join("")}var re,oe={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:"H",validator:function(e){return te(e)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},ie=v(v({},oe),{renderAs:{type:String,required:!1,default:"canvas",validator:function(e){return["canvas","svg"].indexOf(e)>-1}}}),ue=t({name:"QRCodeSvg",props:oe,setup:function(e){var t=n(0),i=n(""),u=function(){var n=e.value,r=e.level,o=e.margin,u=ee(n,r).modules;t.value=u.length+2*o,i.value=ne(u,o)};return u(),r(u),function(){return o("svg",{width:e.size,height:e.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+t.value+" "+t.value},[o("path",{fill:e.background,d:"M0,0 h"+t.value+"v"+t.value+"H0z"}),o("path",{fill:e.foreground,d:i.value})])}}}),ae=t({name:"QRCodeCanvas",props:oe,setup:function(e){var t=n(null),u=function(){var n=e.value,r=e.level,o=e.size,i=e.margin,u=e.background,a=e.foreground,s=ee(n,r).modules,l=s.length+2*i,c=t.value;if(c){var f=c.getContext("2d");if(f){var h=window.devicePixelRatio||1,g=o/l*h;c.height=c.width=o*h,f.scale(g,g),f.fillStyle=u,f.fillRect(0,0,l,l),f.fillStyle=a,Z?f.fill(new Path2D(ne(s,i))):s.forEach((function(e,t){e.forEach((function(e,n){e&&f.fillRect(n+i,t+i,1,1)}))}))}}};return i(u),r(u),function(){return o("canvas",{ref:t,style:{width:e.size+"px",height:e.size+"px"}})}}}),se=t({name:"Qrcode",render:function(){var e=this.$props,t=e.renderAs,n=e.value,r=e.size,i=e.margin,u=e.level,a=e.background,s=e.foreground,l=r>>>0,c=i>>>0,f=te(u)?u:"H";return o("svg"===t?ue:ae,{value:n,size:l,margin:c,level:f,background:a,foreground:s})},props:ie}),le={exports:{}};re=le,function(e){var t=function(){return{escape:function(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:t,mimeType:function(e){var n,r,o=t(e).toLowerCase();return(n="application/font-woff",r="image/jpeg",{woff:n,woff2:n,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:r,jpeg:r,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"})[o]||""},dataAsUrl:function(e,t){return"data:"+t+";base64,"+e},isDataUrl:function(e){return-1!==e.search(/^(data:)/)},canvasToBlob:function(e){return e.toBlob?new Promise((function(t){e.toBlob(t)})):function(e){return new Promise((function(t){for(var n=window.atob(e.toDataURL().split(",")[1]),r=n.length,o=new Uint8Array(r),i=0;i<r;i++)o[i]=n.charCodeAt(i);t(new Blob([o],{type:"image/png"}))}))}(e)},resolveUrl:function(e,t){var n=document.implementation.createHTMLDocument(),r=n.createElement("base");n.head.appendChild(r);var o=n.createElement("a");return n.body.appendChild(o),r.href=t,o.href=e,o.href},getAndEncode:function(e){var t=3e4;return u.impl.options.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+(new Date).getTime()),new Promise((function(n){var r,o=new XMLHttpRequest;if(o.onreadystatechange=a,o.ontimeout=s,o.responseType="blob",o.timeout=t,o.open("GET",e,!0),o.send(),u.impl.options.imagePlaceholder){var i=u.impl.options.imagePlaceholder.split(/,/);i&&i[1]&&(r=i[1])}function a(){if(4===o.readyState)if(200===o.status){var t=new FileReader;t.onloadend=function(){var e=t.result.split(/,/)[1];n(e)},t.readAsDataURL(o.response)}else r?n(r):l("cannot fetch resource: "+e+", status: "+o.status)}function s(){r?n(r):l("timeout of "+t+"ms occured while fetching resource: "+e)}function l(e){console.error(e),n("")}}))},uid:(e=0,function(){return"u"+t()+e++;function t(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}),delay:function(e){return function(t){return new Promise((function(n){setTimeout((function(){n(t)}),e)}))}},asArray:function(e){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t},escapeXhtml:function(e){return e.replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(e){return new Promise((function(t,n){var r=new Image;r.onload=function(){t(r)},r.onerror=n,r.src=e}))},width:function(e){var t=n(e,"border-left-width"),r=n(e,"border-right-width");return e.scrollWidth+t+r},height:function(e){var t=n(e,"border-top-width"),r=n(e,"border-bottom-width");return e.scrollHeight+t+r}};var e;function t(e){var t=/\.([^\.\/]*?)$/g.exec(e);return t?t[1]:""}function n(e,t){var n=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(n.replace("px",""))}}(),n=function(){var e=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:function(e,t,i){return u()?Promise.resolve(e):Promise.resolve(e).then(r).then((function(n){var r=Promise.resolve(e);return n.forEach((function(e){r=r.then((function(n){return o(n,e,t,i)}))})),r}));function u(){return!n(e)}},shouldProcess:n,impl:{readUrls:r,inline:o}};function n(t){return-1!==t.search(e)}function r(n){for(var r,o=[];null!==(r=e.exec(n));)o.push(r[1]);return o.filter((function(e){return!t.isDataUrl(e)}))}function o(e,n,r,o){return Promise.resolve(n).then((function(e){return r?t.resolveUrl(e,r):e})).then(o||t.getAndEncode).then((function(e){return t.dataAsUrl(e,t.mimeType(n))})).then((function(r){return e.replace(function(e){return new RegExp("(url\\(['\"]?)("+t.escape(e)+")(['\"]?\\))","g")}(n),"$1"+r+"$3")}))}}(),r=function(){return{resolveAll:function(){return e().then((function(e){return Promise.all(e.map((function(e){return e.resolve()})))})).then((function(e){return e.join("\n")}))},impl:{readAll:e}};function e(){return Promise.resolve(t.asArray(document.styleSheets)).then((function(e){var n=[];return e.forEach((function(e){try{t.asArray(e.cssRules||[]).forEach(n.push.bind(n))}catch(r){console.log("Error while reading CSS rules from "+e.href,r.toString())}})),n})).then((function(e){return e.filter((function(e){return e.type===CSSRule.FONT_FACE_RULE})).filter((function(e){return n.shouldProcess(e.style.getPropertyValue("src"))}))})).then((function(t){return t.map(e)}));function e(e){return{resolve:function(){var t=(e.parentStyleSheet||{}).href;return n.inlineAll(e.cssText,t)},src:function(){return e.style.getPropertyValue("src")}}}}}(),o=function(){return{inlineAll:function r(o){return o instanceof Element?i(o).then((function(){return o instanceof HTMLImageElement?e(o).inline():Promise.all(t.asArray(o.childNodes).map((function(e){return r(e)})))})):Promise.resolve(o);function i(e){var t=e.style.getPropertyValue("background");return t?n.inlineAll(t).then((function(t){e.style.setProperty("background",t,e.style.getPropertyPriority("background"))})).then((function(){return e})):Promise.resolve(e)}},impl:{newImage:e}};function e(e){return{inline:function(n){return t.isDataUrl(e.src)?Promise.resolve():Promise.resolve(e.src).then(n||t.getAndEncode).then((function(n){return t.dataAsUrl(n,t.mimeType(e.src))})).then((function(t){return new Promise((function(n,r){e.onload=n,e.onerror=r,e.src=t}))}))}}}}(),i={imagePlaceholder:void 0,cacheBust:!1},u={toSvg:a,toPng:function(e,t){return s(e,t||{}).then((function(e){return e.toDataURL()}))},toJpeg:function(e,t){return s(e,t=t||{}).then((function(e){return e.toDataURL("image/jpeg",t.quality||1)}))},toBlob:function(e,n){return s(e,n||{}).then(t.canvasToBlob)},toPixelData:function(e,n){return s(e,n||{}).then((function(n){return n.getContext("2d").getImageData(0,0,t.width(e),t.height(e)).data}))},impl:{fontFaces:r,images:o,util:t,inliner:n,options:{}}};function a(e,n){return function(e){void 0===e.imagePlaceholder?u.impl.options.imagePlaceholder=i.imagePlaceholder:u.impl.options.imagePlaceholder=e.imagePlaceholder,void 0===e.cacheBust?u.impl.options.cacheBust=i.cacheBust:u.impl.options.cacheBust=e.cacheBust}(n=n||{}),Promise.resolve(e).then((function(e){return l(e,n.filter,!0)})).then(c).then(f).then((function(e){return n.bgcolor&&(e.style.backgroundColor=n.bgcolor),n.width&&(e.style.width=n.width+"px"),n.height&&(e.style.height=n.height+"px"),n.style&&Object.keys(n.style).forEach((function(t){e.style[t]=n.style[t]})),e})).then((function(r){return function(e,n,r){return Promise.resolve(e).then((function(e){return e.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(e)})).then(t.escapeXhtml).then((function(e){return'<foreignObject x="0" y="0" width="100%" height="100%">'+e+"</foreignObject>"})).then((function(e){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+n+'" height="'+r+'">'+e+"</svg>"})).then((function(e){return"data:image/svg+xml;charset=utf-8,"+e}))}(r,n.width||t.width(e),n.height||t.height(e))}))}function s(e,n){return a(e,n).then(t.makeImage).then(t.delay(100)).then((function(r){var o=function(e){var r=document.createElement("canvas");if(r.width=n.width||t.width(e),r.height=n.height||t.height(e),n.bgcolor){var o=r.getContext("2d");o.fillStyle=n.bgcolor,o.fillRect(0,0,r.width,r.height)}return r}(e);return o.getContext("2d").drawImage(r,0,0),o}))}function l(e,n,r){return r||!n||n(e)?Promise.resolve(e).then((function(e){return e instanceof HTMLCanvasElement?t.makeImage(e.toDataURL()):e.cloneNode(!1)})).then((function(r){return function(e,n,r){var o=e.childNodes;return 0===o.length?Promise.resolve(n):i(n,t.asArray(o),r).then((function(){return n}));function i(e,t,n){var r=Promise.resolve();return t.forEach((function(t){r=r.then((function(){return l(t,n)})).then((function(t){t&&e.appendChild(t)}))})),r}}(e,r,n)})).then((function(n){return function(e,n){return n instanceof Element?Promise.resolve().then(r).then(o).then(i).then(u).then((function(){return n})):n;function r(){function r(e,n){function r(e,n){t.asArray(e).forEach((function(t){n.setProperty(t,e.getPropertyValue(t),e.getPropertyPriority(t))}))}e.cssText?n.cssText=e.cssText:r(e,n)}r(window.getComputedStyle(e),n.style)}function o(){function r(r){var o=window.getComputedStyle(e,r),i=o.getPropertyValue("content");if(""!==i&&"none"!==i){var u=t.uid();n.className=n.className+" "+u;var a=document.createElement("style");a.appendChild(s(u,r,o)),n.appendChild(a)}function s(e,n,r){var o="."+e+":"+n,i=r.cssText?u(r):a(r);return document.createTextNode(o+"{"+i+"}");function u(e){var t=e.getPropertyValue("content");return e.cssText+" content: "+t+";"}function a(e){return t.asArray(e).map(n).join("; ")+";";function n(t){return t+": "+e.getPropertyValue(t)+(e.getPropertyPriority(t)?" !important":"")}}}}[":before",":after"].forEach((function(e){r(e)}))}function i(){e instanceof HTMLTextAreaElement&&(n.innerHTML=e.value),e instanceof HTMLInputElement&&n.setAttribute("value",e.value)}function u(){n instanceof SVGElement&&(n.setAttribute("xmlns","http://www.w3.org/2000/svg"),n instanceof SVGRectElement&&["width","height"].forEach((function(e){var t=n.getAttribute(e);t&&n.style.setProperty(e,t)})))}}(e,n)})):Promise.resolve()}function c(e){return r.resolveAll().then((function(t){var n=document.createElement("style");return e.appendChild(n),n.appendChild(document.createTextNode(t)),e}))}function f(e){return o.inlineAll(e).then((function(){return e}))}re.exports=u}();var ce=le.exports,fe=t({components:{qrcodeVue:se},setup:function(){var e=n(),t=n(),r=n(),o=n("https://example.com"),i=n({hostName:"https://example.com"}),u=function(){var t,n,r;t=e.value,n=function(e){var t=document.createElement("a"),n=window.URL.createObjectURL(e);t.href=n,t.download="Download.png",document.body.appendChild(t),t.click(),document.body.removeChild(t)},(r=new XMLHttpRequest).open("get",t,!0),r.responseType="blob",r.onload=function(){200===this.status&&n&&n(this.response)},r.send(),m.ElMessage.success("保存成功！")};return{qrcodeRef:t,value:o,configFormRef:r,configForm:i,configRules:{hostName:[{required:!0,message:"请输入二维码链接",trigger:"blur"}]},generateImg:function(){ce.toBlob(t.value,{cacheBust:!0,width:375,bgcolor:"#fff"}).then((function(t){var n=new FileReader;n.onload=function(t){var n;e.value=null==t||null===(n=t.target)||void 0===n?void 0:n.result,u()},t&&n.readAsDataURL(t)})).catch((function(e){console.error("oops, something went wrong!",e)}))}}}}),he=function(e){return g("data-v-7854fc02"),e=e(),d(),e},ge={class:"qrcode-container"},de={class:"info"},me=h("生成二维码"),pe=he((function(){return l("span",{style:{"text-align":"left"}},"生成二维码通常用来做前台海报生成或者后台活动营销推广码配置",-1)})),ve={class:"grid-content bg-purple-dark"},we={style:{"text-align":"left"}},ye=he((function(){return l("span",null,"后台活动营销配置推广码场景",-1)})),Ce={class:"qrcode-wrapper"},Pe={ref:"qrcodeRef"},Ee={class:"qrcode-config"},be=h("保存二维码");e("default",p(fe,[["render",function(e,t,n,r,o,i){var h=u("el-divider"),g=u("qrcode-vue"),d=u("el-input"),m=u("el-form-item"),p=u("el-button"),v=u("el-form"),w=u("el-card"),y=u("el-col"),C=u("el-row");return a(),s("div",ge,[l("div",de,[c(h,{"content-position":"left"},{default:f((function(){return[me]})),_:1}),pe]),c(C,null,{default:f((function(){return[c(y,{offset:1,span:22},{default:f((function(){return[l("div",ve,[c(w,{class:"box-card"},{default:f((function(){return[l("div",we,[ye,c(h)]),l("div",Ce,[l("div",Pe,[c(g,{value:e.configForm.hostName},null,8,["value"])],512),l("div",Ee,[c(v,{ref:"configFormRef",model:e.configForm,rules:e.configRules,"label-width":"80px"},{default:f((function(){return[c(m,{label:"域名",prop:"hostName"},{default:f((function(){return[c(d,{modelValue:e.configForm.hostName,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.configForm.hostName=t})},null,8,["modelValue"])]})),_:1}),c(p,{onClick:e.generateImg},{default:f((function(){return[be]})),_:1},8,["onClick"])]})),_:1},8,["model","rules"])])])]})),_:1})])]})),_:1})]})),_:1})])}],["__scopeId","data-v-7854fc02"]]))}}}))}();
