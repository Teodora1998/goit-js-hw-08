!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in l)return l[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return l[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a);var r=a("eaxEB"),o="feedback-form-state",i=document.querySelector(".feedback-form");i.addEventListener("input",e(r)((function(e){e.preventDefault(),u={email:d.value,message:s.value},localStorage.setItem(o,JSON.stringify(u))}),500)),i.addEventListener("submit",e(r)((function(e){e.preventDefault(),console.log({email:d.value,message:s.value}),(""===d.value||""===s.value)&&alert("Please fill in the field")}),500));var u=JSON.parse(localStorage.getItem(o)),f=i.elements,d=f.email,s=f.message}();
//# sourceMappingURL=03-feedback.44db99d6.js.map
