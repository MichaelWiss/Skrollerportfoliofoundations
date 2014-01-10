/*!
 * skrollr
 *
 * https://github.com/Prinzhorn/skrollr
 *
 * free to use under terms of MIT license
 */(function(e,t,n){"use strict";function j(n){s=t.documentElement;o=t.body;H();et=this;n=n||{};ut=n.constants||{};if(n.easing)for(var i in n.easing)B[i]=n.easing[i];nt={beforerender:n.beforerender,render:n.render};rt=n.forceHeight!==!1;ht=n.smoothScrolling!==!1;pt={targetTop:et.getScrollTop()};rt&&(ot=n.scale||1);K(s,[l],[c]);if(rt){var u=t.getElementById("skrollr-body")||t.createElement("div"),a=u.style;a.minWidth="1px";a.position="absolute";a.top=a.zIndex="0";if(!u.id){a.width="1px";a.right="0";o.appendChild(u)}st=function(){it=0;F();a.height=it+s.clientHeight+"px";r.iscroll&&e.setTimeout(function(){r.iscroll.refresh()},0)}}else st=function(){it=o.scrollHeight-s.clientHeight;F();dt=!0;r.iscroll&&e.setTimeout(function(){r.iscroll.refresh()},0)};et.refresh();$("resize",st);(function f(){S(f);q()})();return et}var r=e.skrollr={get:function(){return et},init:function(e){return et||new j(e)},VERSION:"0.5.10"},i=Object.prototype.hasOwnProperty,s,o,u="rendered",a="un"+u,f="skrollable",l="skrollr",c="no-"+l,h="linear",p=1e3,d=200,v="start",m="end",g="top",y="center",b="bottom",w="___has_rendered_class",E="___skrollable_id",S=e.requestAnimationFrame;(function(){var t=["ms","moz","webkit","o"],n;for(n=0;n<t.length&&!S;n++)S=e[t[n]+"RequestAnimationFrame"];var r=0;S||(S=function(t){var n=Y(),i=Math.max(0,30-(n-r));e.setTimeout(function(){t(n+i)},i);r=n+i})})();var x=/^\s*(.+)\s*$/m,T=/^data(?:-(_\w+))?(?:-?(-?\d+))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,N=/\s*([a-z\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,C=/^([a-z\-]+)\[(\w+)\]$/,k=/-([a-z])/g,L=function(e,t){return t.toUpperCase()},A=/[\-+]?[\d]*\.?[\d]+/g,O=/\{\?\}/g,M=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,_=/[a-z\-]+-gradient/g,D,P,H=function(){var t=/^(?:O|Moz|webkit|ms)/;if(e.getComputedStyle){var n=e.getComputedStyle(o,null);for(var r in n){D=r.match(t)||+r==r&&n[r].match(t);if(D)break}}D=(D||[""])[0];P="-"+D.toLowerCase()+"-"},B={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-Math.cos(e*Math.PI)/2+.5},sqrt:function(e){return Math.sqrt(e)},bounce:function(e){var t;if(e<=.5083)t=3;else if(e<=.8489)t=9;else if(e<=.96208)t=27;else{if(!(e<=.99981))return 1;t=91}return 1-Math.abs(3*Math.cos(e*t*1.028)/t)}};j.prototype.refresh=function(e){var r,i=!1;if(e===n){i=!0;tt=[];vt=0;e=t.getElementsByTagName("*")}else e=[].concat(e);for(r=0;r<e.length;r++){var s=e[r],o=s,l=[],c=ht;if(!s.attributes)continue;for(var h=0;h<s.attributes.length;h++){var p=s.attributes[h];if(p.name==="data-anchor-target"){o=t.querySelector(p.value);if(o===null)throw'Unable to find anchor target "'+p.value+'"';continue}if(p.name==="data-smooth-scrolling"){c=p.value!=="off";continue}var d=p.name.match(T);if(d!==null){var g=d[1];g=g&&ut[g.substr(1)]||0;var y=(d[2]|0)+g,b=d[3],S=d[4]||b,x={offset:y,props:p.value,element:s};l.push(x);if(!b||b===v||b===m){x.mode="absolute";if(b===m)x.isEnd=!0;else{x.frame=y*ot;delete x.offset}}else{x.mode="relative";x.anchors=[b,S]}}}if(l.length){var N,C,k;if(!i&&E in s){k=s[E];N=tt[k].styleAttr;C=tt[k].classAttr}else{k=s[E]=vt++;N=s.style.cssText;C=J(s)}var L=tt[k]={element:s,styleAttr:N,classAttr:C,anchorTarget:o,keyFrames:l,smoothScrolling:c};K(s,[f,u],[a]);L[w]=!0}}st();for(r=0;r<e.length;r++){var A=tt[e[r][E]];if(A===n)continue;A.keyFrames.sort(Z);R(A);z(A)}return et};j.prototype.relativeToAbsolute=function(e,t,n){var r=s.clientHeight,i=e.getBoundingClientRect(),o=i.top,u=i.bottom-i.top;t===b?o-=r:t===y&&(o-=r/2);n===b?o+=u:n===y&&(o+=u/2);o+=et.getScrollTop();return o+.5|0};j.prototype.animateTo=function(e,t){t=t||{};var r=Y(),i=et.getScrollTop();ct={startTop:i,topDiff:e-i,targetTop:e,duration:t.duration||p,startTime:r,endTime:r+(t.duration||p),easing:B[t.easing||h],done:t.done};if(!ct.topDiff){ct.done&&ct.done.call(et,!1);ct=n}return et};j.prototype.stopAnimateTo=function(){ct&&ct.done&&ct.done.call(et,!0);ct=n};j.prototype.isAnimatingTo=function(){return!!ct};j.prototype.setScrollTop=function(t){r.iscroll?r.iscroll.scrollTo(0,-t):e.scrollTo(0,t);return et};j.prototype.getScrollTop=function(){return r.iscroll?-r.iscroll.y:e.pageYOffset||s.scrollTop||o.scrollTop||0};j.prototype.on=function(e,t){nt[e]=t;return et};j.prototype.off=function(e){delete nt[e];return et};var F=function(){var e,t,n,r,i,s,o,u,a;for(s=0;s<tt.length;s++){e=tt[s];t=e.element;n=e.anchorTarget;r=e.keyFrames;for(o=0;o<r.length;o++){i=r[o];if(i.mode==="relative"){u=t.style.cssText;a=J(t);t.style.cssText=e.styleAttr;K(t,e.classAttr);i.frame=et.relativeToAbsolute(n,i.anchors[0],i.anchors[1])-i.offset;t.style.cssText=u;K(t,a)}rt&&!i.isEnd&&i.frame>it&&(it=i.frame)}}for(s=0;s<tt.length;s++){e=tt[s];r=e.keyFrames;for(o=0;o<r.length;o++){i=r[o];i.isEnd&&(i.frame=it-i.offset)}}},I=function(e,t){for(var n=0;n<tt.length;n++){var s=tt[n],o=s.smoothScrolling?e:t,f=s.keyFrames,l=f[0].frame,c=f[f.length-1].frame,h=o<=l,p=o>=c,d,v;if(h||p){var m=f[h?0:f.length-1].props;for(d in m)if(i.call(m,d)){v=V(m[d].value);r.setStyle(s.element,d,v)}if(s[w]&&(o<l||o>c)){K(s.element,[a],[u]);s[w]=!1}continue}if(!s[w]){K(s.element,[u],[a]);s[w]=!0}for(var g=0;g<f.length-1;g++)if(o>=f[g].frame&&o<=f[g+1].frame){var y=f[g],b=f[g+1];for(d in y.props)if(i.call(y.props,d)){var E=(o-y.frame)/(b.frame-y.frame);E=y.props[d].easing(E);v=X(y.props[d].value,b.props[d].value,E);v=V(v);r.setStyle(s.element,d,v)}break}}},q=function(){var e=et.getScrollTop(),t,r=Y(),i;if(ct){if(r>=ct.endTime){e=ct.targetTop;t=ct.done;ct=n}else{i=ct.easing((r-ct.startTime)/ct.duration);e=ct.startTop+i*ct.topDiff|0}et.setScrollTop(e)}else{var s=pt.targetTop-e;s&&(pt={startTop:ft,topDiff:e-ft,targetTop:e,startTime:lt,endTime:lt+d});if(r<=pt.endTime){i=B.sqrt((r-pt.startTime)/d);e=pt.startTop+i*pt.topDiff|0}}e<0&&(e=0);if(dt||ft!==e){at=e>=ft?"down":"up";dt=!1;var o={curTop:e,lastTop:ft,maxTop:it,direction:at},u=nt.beforerender&&nt.beforerender.call(et,o);if(u!==!1){I(e,et.getScrollTop());ft=e;nt.render&&nt.render.call(et,o)}t&&t.call(et,!1)}lt=r},R=function(e){for(var t=0;t<e.keyFrames.length;t++){var n=e.keyFrames[t],r,i,s,o={},u;while((u=N.exec(n.props))!==null){s=u[1];i=u[2];r=s.match(C);if(r!==null){s=r[1];r=r[2]}else r=h;i=i.indexOf("!")?U(i):[i.slice(1)];o[s]={value:i,easing:B[r]}}n.props=o}},U=function(e){var t=[];M.lastIndex=0;e=e.replace(M,function(e){return e.replace(A,function(e){return e/255*100+"%"})});_.lastIndex=0;e=e.replace(_,function(e){return P+e});e=e.replace(A,function(e){t.push(+e);return"{?}"});t.unshift(e);return t},z=function(e){var t={},n;for(n=0;n<e.keyFrames.length;n++)W(e.keyFrames[n],t);t={};for(n=e.keyFrames.length-1;n>=0;n--)W(e.keyFrames[n],t)},W=function(e,t){var n;for(n in t)i.call(e.props,n)||(e.props[n]=t[n]);for(n in e.props)t[n]=e.props[n]},X=function(e,t,n){if(e.length!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var r=[e[0]];for(var i=1;i<e.length;i++)r[i]=e[i]+(t[i]-e[i])*n;return r},V=function(e){var t=1;O.lastIndex=0;return e[0].replace(O,function(){return e[t++]})};r.setStyle=function(e,t,n){var r=e.style;t=t.replace(k,L).replace("-","");if(t==="zIndex")r[t]=""+(n|0);else if(t==="float")r.styleFloat=r.cssFloat=n;else try{r[D+t.slice(0,1).toUpperCase()+t.slice(1)]=n;r[t]=n}catch(i){}};var $=function(t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)},J=function(t){var n="className";if(e.SVGElement&&t instanceof e.SVGElement){t=t[n];n="baseVal"}return t[n]},K=function(t,r,i){var s="className";if(e.SVGElement&&t instanceof e.SVGElement){t=t[s];s="baseVal"}if(i===n){t[s]=r;return}var o=t[s];for(var u=0;u<r.length;u++)G(o).indexOf(G(r[u]))===-1&&(o+=" "+r[u]);for(var a=0;a<i.length;a++)o=G(o).replace(G(i[a])," ");t[s]=Q(o)},Q=function(e){return e.replace(x,"$1")},G=function(e){return" "+e+" "},Y=Date.now||function(){return+(new Date)},Z=function(e,t){return e.frame-t.frame},et,tt,nt,rt,it=0,st,ot=1,ut,at="down",ft=-1,lt=Y(),ct,ht,pt,dt,vt=0})(window,document);
/*!
 * skrollr
 *
 * https://github.com/Prinzhorn/skrollr
 *
 * free to use under terms of MIT license
 */
(function(window, document, undefined) {
	'use strict';

	/*
	 * Global api.
	 */
	var skrollr = window.skrollr = {
		get: function() {
			return _instance;
		},
		//Main entry point.
		init: function(options) {
			return _instance || new Skrollr(options);
		},
		VERSION: '0.5.10'
	};

	//Minify optimization.
	var hasProp = Object.prototype.hasOwnProperty;

	//They will be filled when skrollr gets initialized.
	var documentElement;
	var body;

	var RENDERED_CLASS = 'rendered';
	var UNRENDERED_CLASS = 'un' + RENDERED_CLASS;
	var SKROLLABLE_CLASS = 'skrollable';
	var SKROLLR_CLASS = 'skrollr';
	var NO_SKROLLR_CLASS = 'no-' + SKROLLR_CLASS;

	var DEFAULT_EASING = 'linear';
	var DEFAULT_DURATION = 1000;

	var SMOOTH_SCROLLING_DURATION = 200;

	var ANCHOR_START = 'start';
	var ANCHOR_END = 'end';
	var ANCHOR_TOP = 'top';
	var ANCHOR_CENTER = 'center';
	var ANCHOR_BOTTOM = 'bottom';

	var SKROLLABLE_HAS_RENDERED_CLASS_PROPERTY = '___has_rendered_class';

	//The property which will be added to the DOM element to hold the ID of the skrollable.
	var SKROLLABLE_ID_DOM_PROPERTY = '___skrollable_id';

	var requestAnimFrame = window.requestAnimationFrame;

	//Request animation frame polyfill.
	//Credits go to Erik Möller (http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating)
	(function() {
		var vendors = ['ms', 'moz', 'webkit', 'o'];
		var i;

		for(i = 0; i < vendors.length && !requestAnimFrame; i++) {
			requestAnimFrame = window[vendors[i] + 'RequestAnimationFrame'];
		}

		var lastTime = 0;

		if (!requestAnimFrame) {
			requestAnimFrame = function(callback) {
				var currTime = _now();
				var timeToCall = Math.max(0, 30 - (currTime - lastTime));

				window.setTimeout(function() {
					callback(currTime + timeToCall);
				}, timeToCall);

				lastTime = currTime + timeToCall;
			};
		}
	}());


	var rxTrim = /^\s*(.+)\s*$/m;

	//Find all data-attributes. data-[_constant]-[offset]-[anchor]-[anchor].
	var rxKeyframeAttribute = /^data(?:-(_\w+))?(?:-?(-?\d+))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/;

	var rxPropValue = /\s*([a-z\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi;

	//Easing function names follow the property in square brackets.
	var rxPropEasing = /^([a-z\-]+)\[(\w+)\]$/;

	var rxCamelCase = /-([a-z])/g;
	var rxCamelCaseFn = function(str, letter) {
		return letter.toUpperCase();
	};

	//Numeric values with optional sign.
	var rxNumericValue = /[\-+]?[\d]*\.?[\d]+/g;

	//Used to replace occurences of {?} with a number.
	var rxInterpolateString = /\{\?\}/g;

	//Finds rgb(a) colors, which don't use the percentage notation.
	var rxRGBAIntegerColor = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g;

	//Finds all gradients.
	var rxGradient = /[a-z\-]+-gradient/g;

	//Vendor prefix. Will be set once skrollr gets initialized.
	var theCSSPrefix;
	var theDashedCSSPrefix;

	//Will be called once (when skrollr gets initialized).
	var detectCSSPrefix = function() {
		//Only relevant prefixes. May be extended.
		//Could be dangerous if there will ever be a CSS property which actually starts with "ms". Don't hope so.
		var rxPrefixes = /^(?:O|Moz|webkit|ms)/;

		//Detect prefix for current browser by finding the first property using a prefix.
		if(window.getComputedStyle) {
			var style = window.getComputedStyle(body, null);

			for(var k in style) {
				//We check the key and if the key is a number, we check the value as well, because safari's getComputedStyle returns some weird array-like thingy.
				theCSSPrefix = (k.match(rxPrefixes) || (+k == k && style[k].match(rxPrefixes)));

				if(theCSSPrefix) {
					break;
				}
			}
		}

		//Empty string if no prefix detected
		theCSSPrefix = (theCSSPrefix || [''])[0];

		//Will be "--" if no prefix detected. No problem, browser will ignore "--transform" and stuff.
		theDashedCSSPrefix = '-' + theCSSPrefix.toLowerCase() + '-';
	};

	//Built-in easing functions.
	var easings = {
		begin: function() {
			return 0;
		},
		end: function() {
			return 1;
		},
		linear: function(p) {
			return p;
		},
		quadratic: function(p) {
			return p * p;
		},
		cubic: function(p) {
			return p * p * p;
		},
		swing: function(p) {
			return (-Math.cos(p * Math.PI) / 2) + 0.5;
		},
		sqrt: function(p) {
			return Math.sqrt(p);
		},
		//see https://www.desmos.com/calculator/tbr20s8vd2 for how I did this
		bounce: function(p) {
			var a;

			if(p <= 0.5083) {
				a = 3;
			} else if(p <= 0.8489) {
				a = 9;
			} else if(p <= 0.96208) {
				a = 27;
			} else if(p <= 0.99981) {
				a = 91;
			} else {
				return 1;
			}

			return 1 - Math.abs(3 * Math.cos(p * a * 1.028) / a);
		}
	};

	/**
	 * Constructor.
	 */
	function Skrollr(options) {
		documentElement = document.documentElement;
		body = document.body;

		detectCSSPrefix();

		_instance = this;

		options = options || {};

		_constants = options.constants || {};

		//We allow defining custom easings or overwrite existing
		if(options.easing) {
			for(var e in options.easing) {
				easings[e] = options.easing[e];
			}
		}

		_listeners = {
			//Function to be called right before rendering.
			beforerender: options.beforerender,

			//Function to be called right after finishing rendering.
			render: options.render
		};

		//forceHeight is true by default
		_forceHeight = options.forceHeight !== false;

		_smoothScrollingEnabled = options.smoothScrolling !== false;

		//Dummy object. Will be overwritten in the _render method when smooth scrolling is calculated.
		_smoothScrolling = {
			targetTop: _instance.getScrollTop()
		};

		if(_forceHeight) {
			_scale = options.scale || 1;
		}

		//Remove "no-skrollr" and add "skrollr" to the HTML element.
		_updateClass(documentElement, [SKROLLR_CLASS], [NO_SKROLLR_CLASS]);

		if(_forceHeight) {
			//Add a dummy element in order to get a large enough scrollbar.
			//On mobile and later desktop versions a #skrollr-body element takes this role.

			var dummy = document.getElementById('skrollr-body') || document.createElement('div');
			var dummyStyle = dummy.style;

			dummyStyle.minWidth = '1px';
			dummyStyle.position = 'absolute';
			dummyStyle.top = dummyStyle.zIndex = '0';

			//It's the dummy we just created.
			if(!dummy.id) {
				//Give the dummy element a small width and move it to the right to not overlap or interfere with the content.
				//Fixes #76.
				dummyStyle.width = '1px';
				dummyStyle.right = '0';

				body.appendChild(dummy);
			}

			//Update height of dummy div when window size is changed.
			_reflow = function() {
				//Will be recalculated by _updateDependentKeyFrames.
				_maxKeyFrame = 0;

				_updateDependentKeyFrames();

				dummyStyle.height = (_maxKeyFrame + documentElement.clientHeight) + 'px';

				if(skrollr.iscroll) {
					window.setTimeout(function () {
						skrollr.iscroll.refresh();
					}, 0);
				}
			};
		} else {
			_reflow = function() {
				_maxKeyFrame = body.scrollHeight - documentElement.clientHeight;
				_updateDependentKeyFrames();
				_forceRender = true;

				if(skrollr.iscroll) {
					window.setTimeout(function () {
						skrollr.iscroll.refresh();
					}, 0);
				}
			};
		}

		_instance.refresh();

		_addEvent('resize', _reflow);

		//Let's go.
		(function animloop(){
			//This is how the cool kids use requestAnimationFrame
			//http://paulirish.com/2011/requestanimationframe-for-smart-animating/
			requestAnimFrame(animloop);
			_render();
		}());

		return _instance;
	}

	/**
	 * (Re)parses some or all elements.
	 */
	Skrollr.prototype.refresh = function(elements) {
		var elementIndex;
		var ignoreID = false;

		//Completely reparse anything without argument.
		if(elements === undefined) {
			//Ignore that some elements may already have a skrollable ID.
			ignoreID = true;

			_skrollables = [];
			_skrollableIdCounter = 0;

			elements = document.getElementsByTagName('*');
		} else {
			//We accept a single element or an array of elements.
			elements = [].concat(elements);
		}

		for(elementIndex = 0; elementIndex < elements.length; elementIndex++) {
			var el = elements[elementIndex];
			var anchorTarget = el;
			var keyFrames = [];

			//If this particular element should be smooth scrolled.
			var smoothScrollThis = _smoothScrollingEnabled;

			if(!el.attributes) {
				continue;
			}

			//Iterate over all attributes and search for key frame attributes.
			for (var attributeIndex = 0; attributeIndex < el.attributes.length; attributeIndex++) {
				var attr = el.attributes[attributeIndex];

				if(attr.name === 'data-anchor-target') {
					anchorTarget = document.querySelector(attr.value);

					if(anchorTarget === null) {
						throw 'Unable to find anchor target "' + attr.value + '"';
					}

					continue;
				}

				//Global smooth scrolling can be overridden by the element attribute.
				if(attr.name === 'data-smooth-scrolling') {
					smoothScrollThis = attr.value !== 'off';

					continue;
				}

				var match = attr.name.match(rxKeyframeAttribute);

				if(match !== null) {
					var constant = match[1];

					//If there is a constant, get it's value or fall back to 0.
					constant = constant && _constants[constant.substr(1)] || 0;

					//Parse key frame offset. If undefined will be casted to 0.
					var offset = (match[2] | 0) + constant;
					var anchor1 = match[3];
					//If second anchor is not set, the first will be taken for both.
					var anchor2 = match[4] || anchor1;

					var kf = {
						offset: offset,
						props: attr.value,
						//Point back to the element as well.
						element: el
					};

					keyFrames.push(kf);

					//"absolute" (or "classic") mode, where numbers mean absolute scroll offset.
					if(!anchor1 || anchor1 === ANCHOR_START || anchor1 === ANCHOR_END) {
						kf.mode = 'absolute';

						//data-end needs to be calculated after all key frames are know.
						if(anchor1 === ANCHOR_END) {
							kf.isEnd = true;
						} else {
							//For data-start we can already set the key frame w/o calculations.
							//#59: "scale" options should only affect absolute mode.
							kf.frame = offset * _scale;

							delete kf.offset;
						}
					}
					//"relative" mode, where numbers are relative to anchors.
					else {
						kf.mode = 'relative';
						kf.anchors = [anchor1, anchor2];
					}
				}
			}

			//Does this element have key frames?
			if(keyFrames.length) {
				//Will hold the original style and class attributes before we controlled the element (see #80).
				var styleAttr, classAttr;

				var id;

				if(!ignoreID && SKROLLABLE_ID_DOM_PROPERTY in el) {
					//We already have this element under control. Grab the corresponding skrollable id.
					id = el[SKROLLABLE_ID_DOM_PROPERTY];
					styleAttr = _skrollables[id].styleAttr;
					classAttr = _skrollables[id].classAttr;
				} else {
					//It's an unknown element. Asign it a new skrollable id.
					id = (el[SKROLLABLE_ID_DOM_PROPERTY] = _skrollableIdCounter++);
					styleAttr = el.style.cssText;
					classAttr = _getClass(el);
				}

				var skrollable = _skrollables[id] = {
					element: el,
					styleAttr: styleAttr,
					classAttr: classAttr,
					anchorTarget: anchorTarget,
					keyFrames: keyFrames,
					smoothScrolling: smoothScrollThis
				};

				_updateClass(el, [SKROLLABLE_CLASS, RENDERED_CLASS], [UNRENDERED_CLASS]);
				skrollable[SKROLLABLE_HAS_RENDERED_CLASS_PROPERTY] = true;
			}
		}

		//Reflow for the first time.
		_reflow();

		//Now that we got all key frame numbers right, actually parse the properties.
		for(elementIndex = 0; elementIndex < elements.length; elementIndex++) {
			var sk = _skrollables[elements[elementIndex][SKROLLABLE_ID_DOM_PROPERTY]];

			if(sk === undefined) {
				continue;
			}

			//Make sure they are in order
			sk.keyFrames.sort(_keyFrameComparator);

			//Parse the property string to objects
			_parseProps(sk);

			//Fill key frames with missing properties from left and right
			_fillProps(sk);
		}

		return _instance;
	};

	/**
	 * Transform "relative" mode to "absolute" mode.
	 * That is, calculate anchor position and offset of element.
	 */
	Skrollr.prototype.relativeToAbsolute = function(element, viewportAnchor, elementAnchor) {
		var viewportHeight = documentElement.clientHeight;
		var box = element.getBoundingClientRect();
		var absolute = box.top;

		//#100: IE doesn't supply "height" with getBoundingClientRect.
		var boxHeight = box.bottom - box.top;

		if(viewportAnchor === ANCHOR_BOTTOM) {
			absolute -= viewportHeight;
		} else if(viewportAnchor === ANCHOR_CENTER) {
			absolute -= viewportHeight / 2;
		}

		if(elementAnchor === ANCHOR_BOTTOM) {
			absolute += boxHeight;
		} else if(elementAnchor === ANCHOR_CENTER) {
			absolute += boxHeight / 2;
		}

		//Compensate scrolling since getBoundingClientRect is relative to viewport.
		absolute += _instance.getScrollTop();

		return (absolute + 0.5) | 0;
	};

	/**
	 * Animates scroll top to new position.
	 */
	Skrollr.prototype.animateTo = function(top, options) {
		options = options || {};

		var now = _now();
		var scrollTop = _instance.getScrollTop();

		//Setting this to a new value will automatically cause the current animation to stop, if any.
		_scrollAnimation = {
			startTop: scrollTop,
			topDiff: top - scrollTop,
			targetTop: top,
			duration: options.duration || DEFAULT_DURATION,
			startTime: now,
			endTime: now + (options.duration || DEFAULT_DURATION),
			easing: easings[options.easing || DEFAULT_EASING],
			done: options.done
		};

		//Don't queue the animation if there's nothing to animate.
		if(!_scrollAnimation.topDiff) {
			if(_scrollAnimation.done) {
				_scrollAnimation.done.call(_instance, false);
			}

			_scrollAnimation = undefined;
		}

		return _instance;
	};

	/**
	 * Stops animateTo animation.
	 */
	Skrollr.prototype.stopAnimateTo = function() {
		if(_scrollAnimation && _scrollAnimation.done) {
			_scrollAnimation.done.call(_instance, true);
		}

		_scrollAnimation = undefined;
	};

	/**
	 * Returns if an animation caused by animateTo is currently running.
	 */
	Skrollr.prototype.isAnimatingTo = function() {
		return !!_scrollAnimation;
	};

	Skrollr.prototype.setScrollTop = function(top) {
		//skrollr.iscroll is an instance of iscroll available in mobile mode
		if(skrollr.iscroll) {
			//Notice the minus.
			skrollr.iscroll.scrollTo(0, -top);
		} else {
			window.scrollTo(0, top);
		}

		return _instance;
	};

	Skrollr.prototype.getScrollTop = function() {
		//skrollr.iscroll is an instance of iscroll available in mobile mode
		if(skrollr.iscroll) {
			return -skrollr.iscroll.y;
		} else {
			return window.pageYOffset || documentElement.scrollTop || body.scrollTop || 0;
		}
	};

	Skrollr.prototype.on = function(name, fn) {
		_listeners[name] = fn;

		return _instance;
	};

	Skrollr.prototype.off = function(name) {
		delete _listeners[name];

		return _instance;
	};

	/*
		Private methods.
	*/

	/**
	 * Updates key frames which depend on others.
	 * That is "end" in "absolute" mode and all key frames in "relative" mode.
	 */
	var _updateDependentKeyFrames = function() {
		var skrollable;
		var element;
		var anchorTarget;
		var keyFrames;
		var kf;
		var skrollableIndex;
		var keyFrameIndex;

		//For relative mode, we need to reset style and class. See #80
		var styleAttr;
		var classAttr;

		//First process all relative-mode elements and find the max key frame.
		for(skrollableIndex = 0; skrollableIndex < _skrollables.length; skrollableIndex++) {
			skrollable = _skrollables[skrollableIndex];
			element = skrollable.element;
			anchorTarget = skrollable.anchorTarget;
			keyFrames = skrollable.keyFrames;

			for(keyFrameIndex = 0; keyFrameIndex < keyFrames.length; keyFrameIndex++) {
				kf = keyFrames[keyFrameIndex];

				if(kf.mode === 'relative') {
					//Save the current style and class (#80)
					styleAttr = element.style.cssText;
					classAttr = _getClass(element);

					//Reset style and class to original (#80)
					element.style.cssText = skrollable.styleAttr;
					_updateClass(element, skrollable.classAttr);

					kf.frame = _instance.relativeToAbsolute(anchorTarget, kf.anchors[0], kf.anchors[1]) - kf.offset;

					//Now set style and class back to what skrollr did to it.
					element.style.cssText = styleAttr;
					_updateClass(element, classAttr);
				}

				//Only search for max key frame when forceHeight is enabled.
				if(_forceHeight) {
					//Find the max key frame, but don't use one of the data-end ones for comparison.
					if(!kf.isEnd && kf.frame > _maxKeyFrame) {
						_maxKeyFrame = kf.frame;
					}
				}
			}
		}

		//Now process all data-end keyframes.
		for(skrollableIndex = 0; skrollableIndex < _skrollables.length; skrollableIndex++) {
			skrollable = _skrollables[skrollableIndex];
			keyFrames = skrollable.keyFrames;

			for(keyFrameIndex = 0; keyFrameIndex < keyFrames.length; keyFrameIndex++) {
				kf = keyFrames[keyFrameIndex];

				if(kf.isEnd) {
					kf.frame = _maxKeyFrame - kf.offset;
				}
			}
		}
	};

	/**
	 * Calculates and sets the style properties for the element at the given frame.
	 * @param fakeFrame The frame to render at when smooth scrolling is enabled.
	 * @param actualFrame The actual frame we are at.
	 */
	var _calcSteps = function(fakeFrame, actualFrame) {
		//Iterate over all skrollables.
		for(var skrollableIndex = 0; skrollableIndex < _skrollables.length; skrollableIndex++) {
			var skrollable = _skrollables[skrollableIndex];
			var frame = skrollable.smoothScrolling ? fakeFrame : actualFrame;
			var frames = skrollable.keyFrames;
			var firstFrame = frames[0].frame;
			var lastFrame = frames[frames.length - 1].frame;
			var atFirst = frame <= firstFrame;
			var atLast = frame >= lastFrame;
			var key;
			var value;

			//If we are before/after or exactly at the first/last frame, the element gets all props from this key frame.
			if(atFirst || atLast) {
				var props = frames[atFirst ? 0 : frames.length - 1].props;

				for(key in props) {
					if(hasProp.call(props, key)) {
						value = _interpolateString(props[key].value);

						skrollr.setStyle(skrollable.element, key, value);
					}
				}

				//Add the unrendered class when before or after first/last frame.
				if(skrollable[SKROLLABLE_HAS_RENDERED_CLASS_PROPERTY] && (frame < firstFrame || frame > lastFrame)) {
					_updateClass(skrollable.element, [UNRENDERED_CLASS], [RENDERED_CLASS]);

					//Does a faster job than sth. like hasClass('string')
					skrollable[SKROLLABLE_HAS_RENDERED_CLASS_PROPERTY] = false;
				}

				continue;
			}

			//We are between two frames.
			if(!skrollable[SKROLLABLE_HAS_RENDERED_CLASS_PROPERTY]) {
				_updateClass(skrollable.element, [RENDERED_CLASS], [UNRENDERED_CLASS]);

				skrollable[SKROLLABLE_HAS_RENDERED_CLASS_PROPERTY] = true;
			}

			//Find out between which two key frames we are right now.
			for(var keyFrameIndex = 0; keyFrameIndex < frames.length - 1; keyFrameIndex++) {
				if(frame >= frames[keyFrameIndex].frame && frame <= frames[keyFrameIndex + 1].frame) {
					var left = frames[keyFrameIndex];
					var right = frames[keyFrameIndex + 1];

					for(key in left.props) {
						if(hasProp.call(left.props, key)) {
							var progress = (frame - left.frame) / (right.frame - left.frame);

							//Transform the current progress using the given easing function.
							progress = left.props[key].easing(progress);

							//Interpolate between the two values
							value = _calcInterpolation(left.props[key].value, right.props[key].value, progress);

							value = _interpolateString(value);

							skrollr.setStyle(skrollable.element, key, value);
						}
					}

					break;
				}
			}
		}
	};

	/**
	 * Renders all elements
	 */
	var _render = function() {
		//We may render something else than the actual scrollbar position.
		var renderTop = _instance.getScrollTop();

		//If there's an animation, which ends in current render call, call the callback after rendering.
		var afterAnimationCallback;
		var now = _now();
		var progress;

		//Before actually rendering handle the scroll animation, if any.
		if(_scrollAnimation) {
			//It's over
			if(now >= _scrollAnimation.endTime) {
				renderTop = _scrollAnimation.targetTop;
				afterAnimationCallback = _scrollAnimation.done;
				_scrollAnimation = undefined;
			} else {
				//Map the current progress to the new progress using given easing function.
				progress = _scrollAnimation.easing((now - _scrollAnimation.startTime) / _scrollAnimation.duration);

				renderTop = (_scrollAnimation.startTop + progress * _scrollAnimation.topDiff) | 0;
			}

			_instance.setScrollTop(renderTop);
		}
		//Smooth scrolling only if there's no animation running.
		else {
			var smoothScrollingDiff = _smoothScrolling.targetTop - renderTop;

			//The user scrolled, start new smooth scrolling.
			if(smoothScrollingDiff) {
				_smoothScrolling = {
					startTop: _lastTop,
					topDiff: renderTop - _lastTop,
					targetTop: renderTop,
					startTime: _lastRenderCall,
					endTime: _lastRenderCall + SMOOTH_SCROLLING_DURATION
				};
			}

			//Interpolate the internal scroll position (not the actual scrollbar).
			if(now <= _smoothScrolling.endTime) {
				//Map the current progress to the new progress using easing function.
				progress = easings.sqrt((now - _smoothScrolling.startTime) / SMOOTH_SCROLLING_DURATION);

				renderTop = (_smoothScrolling.startTop + progress * _smoothScrolling.topDiff) | 0;
			}
		}

		//In OSX it's possible to have a negative scrolltop, so, we set it to zero.
		if(renderTop < 0) {
			renderTop = 0;
		}

		//Did the scroll position even change?
		if(_forceRender || _lastTop !== renderTop) {
			//Remember in which direction are we scrolling?
			_direction = (renderTop >= _lastTop) ? 'down' : 'up';

			_forceRender = false;

			var listenerParams = {
				curTop: renderTop,
				lastTop: _lastTop,
				maxTop: _maxKeyFrame,
				direction: _direction
			};

			//Tell the listener we are about to render.
			var continueRendering = _listeners.beforerender && _listeners.beforerender.call(_instance, listenerParams);

			//The beforerender listener function is able the cancel rendering.
			if(continueRendering !== false) {
				//Now actually interpolate all the styles.
				_calcSteps(renderTop, _instance.getScrollTop());

				//Remember when we last rendered.
				_lastTop = renderTop;

				if(_listeners.render) {
					_listeners.render.call(_instance, listenerParams);
				}
			}

			if(afterAnimationCallback) {
				afterAnimationCallback.call(_instance, false);
			}
		}

		_lastRenderCall = now;
	};

	/**
	 * Parses the properties for each key frame of the given skrollable.
	 */
	var _parseProps = function(skrollable) {
		//Iterate over all key frames
		for(var keyFrameIndex = 0; keyFrameIndex < skrollable.keyFrames.length; keyFrameIndex++) {
			var frame = skrollable.keyFrames[keyFrameIndex];
			var easing;
			var value;
			var prop;
			var props = {};

			var match;

			while((match = rxPropValue.exec(frame.props)) !== null) {
				prop = match[1];
				value = match[2];

				easing = prop.match(rxPropEasing);

				//Is there an easing specified for this prop?
				if(easing !== null) {
					prop = easing[1];
					easing = easing[2];
				} else {
					easing = DEFAULT_EASING;
				}

				//Exclamation point at first position forces the value to be taken literal.
				value = value.indexOf('!') ? _parseProp(value) : [value.slice(1)];

				//Save the prop for this key frame with his value and easing function
				props[prop] = {
					value: value,
					easing: easings[easing]
				};
			}

			frame.props = props;
		}
	};

	/**
	 * Parses a value extracting numeric values and generating a format string
	 * for later interpolation of the new values in old string.
	 *
	 * @param val The CSS value to be parsed.
	 * @return Something like ["rgba(?%,?%, ?%,?)", 100, 50, 0, .7]
	 * where the first element is the format string later used
	 * and all following elements are the numeric value.
	 */
	var _parseProp = function(val) {
		var numbers = [];

		//One special case, where floats don't work.
		//We replace all occurences of rgba colors
		//which don't use percentage notation with the percentage notation.
		rxRGBAIntegerColor.lastIndex = 0;
		val = val.replace(rxRGBAIntegerColor, function(rgba) {
			return rgba.replace(rxNumericValue, function(n) {
				return n / 255 * 100 + '%';
			});
		});

		//Handle prefixing of "gradient" values.
		//For now only the prefixed value will be set. Unprefixed isn't supported anyway.
		rxGradient.lastIndex = 0;
		val = val.replace(rxGradient, function(s) {
			return theDashedCSSPrefix + s;
		});


		//Now parse ANY number inside this string and create a format string.
		val = val.replace(rxNumericValue, function(n) {
			numbers.push(+n);
			return '{?}';
		});

		//Add the formatstring as first value.
		numbers.unshift(val);

		return numbers;
	};

	/**
	 * Fills the key frames with missing left and right hand properties.
	 * If key frame 1 has property X and key frame 2 is missing X,
	 * but key frame 3 has X again, then we need to assign X to key frame 2 too.
	 *
	 * @param sk A skrollable.
	 */
	var _fillProps = function(sk) {
		//Will collect the properties key frame by key frame
		var propList = {};
		var keyFrameIndex;

		//Iterate over all key frames from left to right
		for(keyFrameIndex = 0; keyFrameIndex < sk.keyFrames.length; keyFrameIndex++) {
			_fillPropForFrame(sk.keyFrames[keyFrameIndex], propList);
		}

		//Now do the same from right to fill the last gaps

		propList = {};

		//Iterate over all key frames from right to left
		for(keyFrameIndex = sk.keyFrames.length - 1; keyFrameIndex >= 0; keyFrameIndex--) {
			_fillPropForFrame(sk.keyFrames[keyFrameIndex], propList);
		}
	};

	var _fillPropForFrame = function(frame, propList) {
		var key;

		//For each key frame iterate over all right hand properties and assign them,
		//but only if the current key frame doesn't have the property by itself
		for(key in propList) {
			//The current frame misses this property, so assign it.
			if(!hasProp.call(frame.props, key)) {
				frame.props[key] = propList[key];
			}
		}

		//Iterate over all props of the current frame and collect them
		for(key in frame.props) {
			propList[key] = frame.props[key];
		}
	};

	/**
	 * Calculates the new values for two given values array.
	 */
	var _calcInterpolation = function(val1, val2, progress) {
		//They both need to have the same length
		if(val1.length !== val2.length) {
			throw 'Can\'t interpolate between "' + val1[0] + '" and "' + val2[0] + '"';
		}

		//Add the format string as first element.
		var interpolated = [val1[0]];

		for(var valueIndex = 1; valueIndex < val1.length; valueIndex++) {
			//That's the line where the two numbers are actually interpolated.
			interpolated[valueIndex] = val1[valueIndex] + ((val2[valueIndex] - val1[valueIndex]) * progress);
		}

		return interpolated;
	};

	/**
	 * Interpolates the numeric values into the format string.
	 */
	var _interpolateString = function(val) {
		var valueIndex = 1;

		rxInterpolateString.lastIndex = 0;

		return val[0].replace(rxInterpolateString, function() {
			return val[valueIndex++];
		});
	};

	/**
	 * Set the CSS property on the given element. Sets prefixed properties as well.
	 */
	skrollr.setStyle = function(el, prop, val) {
		var style = el.style;

		//Camel case.
		prop = prop.replace(rxCamelCase, rxCamelCaseFn).replace('-', '');

		//Make sure z-index gets a <integer>.
		//This is the only <integer> case we need to handle.
		if(prop === 'zIndex') {
			//Floor
			style[prop] = '' + (val | 0);
		}
		//#64: "float" can't be set across browsers. Needs to use "cssFloat" for all except IE.
		else if(prop === 'float') {
			style.styleFloat = style.cssFloat = val;
		}
		else {
			//Need try-catch for old IE.
			try {
				//Set prefixed property.
				style[theCSSPrefix + prop.slice(0,1).toUpperCase() + prop.slice(1)] = val;

				//Set unprefixed.
				style[prop] = val;
			} catch(ignore) {}
		}
	};

	/**
	 * Cross browser event handling.
	 */
	var _addEvent = function(name, fn) {
		if(window.addEventListener) {
			window.addEventListener(name, fn, false);
		} else {
			window.attachEvent('on' + name, fn);
		}
	};

	/**
	 * Returns a string of space separated classnames for the current element.
	 * Works with SVG as well.
	 */
	var _getClass = function(element) {
		var prop = 'className';

		//SVG support by using className.baseVal instead of just className
		if(window.SVGElement && element instanceof window.SVGElement) {
			element = element[prop];
			prop = 'baseVal';
		}

		return element[prop];
	};

	/**
	 * Adds and removes a CSS classes.
	 * Works with SVG as well.
	 * add and remove are either arrays of strings,
	 * or if remove is ommited add is a string and overwrites all classes.
	 */
	var _updateClass = function(element, add, remove) {
		var prop = 'className';

		//SVG support by using className.baseVal instead of just className
		if(window.SVGElement && element instanceof window.SVGElement) {
			element = element[prop];
			prop = 'baseVal';
		}

		//When remove is ommited, we want to overwrite/set the classes.
		if(remove === undefined) {
			element[prop] = add;
			return;
		}

		//Cache current classes. We will work on a string before passing back to DOM.
		var val = element[prop];

		//All classes to be added.
		for(var classAddIndex = 0; classAddIndex < add.length; classAddIndex++) {
			//Only add if el not already has class.
			if(_untrim(val).indexOf(_untrim(add[classAddIndex])) === -1) {
				val += ' ' + add[classAddIndex];
			}
		}

		//All classes to be removed.
		for(var classRemoveIndex = 0; classRemoveIndex < remove.length; classRemoveIndex++) {
			val = _untrim(val).replace(_untrim(remove[classRemoveIndex]), ' ');
		}

		element[prop] = _trim(val);
	};

	var _trim = function(a) {
		return a.replace(rxTrim, '$1');
	};

	/**
	 * Adds a space before and after the string.
	 */
	var _untrim = function(a) {
		return ' ' + a + ' ';
	};

	var _now = Date.now || function() {
		return +new Date();
	};

	var _keyFrameComparator = function(a, b) {
		return a.frame - b.frame;
	};

	/*
	 * Private variables.
	 */

	//Singleton
	var _instance;

	/*
		A list of all elements which should be animated associated with their the metadata.
		Exmaple skrollable with two key frames animating from 100px width to 20px:

		skrollable = {
			element: <the DOM element>,
			styleAttr: <style attribute of the element before skrollr>,
			classAttr: <class attribute of the element before skrollr>,
			keyFrames: [
				{
					frame: 100,
					props: {
						width: {
							value: ['{?}px', 100],
							easing: <reference to easing function>
						}
					},
					mode: "absolute"
				},
				{
					frame: 200,
					props: {
						width: {
							value: ['{?}px', 20],
							easing: <reference to easing function>
						}
					},
					mode: "absolute"
				}
			]
		};
	*/
	var _skrollables;

	var _listeners;
	var _forceHeight;
	var _maxKeyFrame = 0;
	var _reflow;

	var _scale = 1;
	var _constants;

	//Current direction (up/down).
	var _direction = 'down';

	//The last top offset value. Needed to determine direction.
	var _lastTop = -1;

	//The last time we called the render method (doesn't mean we rendered!).
	var _lastRenderCall = _now();

	//Will contain data about a running scrollbar animation, if any.
	var _scrollAnimation;

	var _smoothScrollingEnabled;

	//Will contain settins for smooth scrolling if enabled.
	var _smoothScrolling;

	//Can be set by any operation/event to force rendering even if the scrollbar didn't move.
	var _forceRender;

	//Each skrollable gets an unique ID incremented for each skrollable.
	//The ID is the index in the _skrollables array.
	var _skrollableIdCounter = 0;
}(window, document));

