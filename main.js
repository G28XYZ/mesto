(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},t=[],n=document.querySelector(".popup_type_edit"),r=document.querySelector(".popup_type_add"),o=document.querySelector(".popup_type_avatar"),i=document.querySelector(".profile"),a=i.querySelector(".profile__edit-button"),u=i.querySelector(".profile__add-button"),c=i.querySelector(".profile__avatar-container");function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(){function e(t,n,r,o,i,a){var u=this,c=t.name,s=t.link,p=t.likes,f=t._id,h=t.owner;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"_handleOpenPopup",(function(){u._onOpenPopup({name:u._name,link:u._link})})),l(this,"_handleDeleteCard",(function(){u._onOpenPopupDelete(u._cardId,u._card)})),l(this,"_handleClickLike",(function(e){u._isLiked?u._removeLike(e):u._addLike(e)})),this._name=c,this._link=s,this._cardTemplate=n,this._image=null,this._cardId=f,this._onOpenPopup=r,this._likesLength=p.length,this._isLiked=p.some((function(e){return o===e._id})),this._isUserCard=h._id===o,this._onOpenPopupDelete=i,this._api=a}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplate).content.querySelector(".place").cloneNode(!0)}},{key:"_removeLike",value:function(e){var t=this;e.target.classList.remove("place__like_active"),this._api.deleteLike(this._cardId).then((function(e){return t._likeCount.textContent=e.likes.length})).catch((function(e){return console.log("Ошибка удаления лайка: ".concat(e))})),this._isLiked=!1}},{key:"_addLike",value:function(e){var t=this;e.target.classList.add("place__like_active"),this._api.putLike(this._cardId).then((function(e){return t._likeCount.textContent=e.likes.length})).catch((function(e){return console.log("Ошибка добавления лайка: ".concat(e))})),this._isLiked=!0}},{key:"_setHandlerListeners",value:function(){this._card.querySelector(".place__like").addEventListener("click",this._handleClickLike),this._isUserCard?this._deleteButton.addEventListener("click",this._handleDeleteCard):this._deleteButton.remove(),this._image.addEventListener("click",this._handleOpenPopup)}},{key:"generateCard",value:function(){return this._card=this._getTemplate(),this._card.querySelector(".place__title").textContent=this._name,this._likeCount=this._card.querySelector(".place__like-count"),this._likeCount.textContent=this._likesLength,this._deleteButton=this._card.querySelector(".place__delete"),this._isLiked&&this._card.querySelector(".place__like").classList.add("place__like_active"),this._image=this._card.querySelector(".place__image"),this._image.src=this._link,this._image.alt=this._name,this._setHandlerListeners(),this._card}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),h(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),h(this,"_toggleButton",(function(){r._hasInvalidInputs()?(r._submitButton.classList.add(r._inactiveButtonClass),r._submitButton.disabled=!0):(r._submitButton.classList.remove(r._inactiveButtonClass),r._submitButton.disabled=!1)})),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._submitButton=this._form.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"setDefaultForm",value:function(){var e=this;this._toggleButton(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_showInputError",value:function(e,t){var n=this._form.querySelector(".popup__error-".concat(e.name));e.classList.add(this._inputErrorClass),n.classList.add(this._errorClass),n.textContent=t}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".popup__error-".concat(e.name));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_hasInvalidInputs",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){return t.addEventListener("input",(function(){e._toggleButton(),e._checkInputValidity(t)}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const v=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),y(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),y(this,"_handleCloseByOverlay",(function(e){e.target.classList.contains("popup")&&n.close()})),y(this,"close",(function(){n._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",n._handleEscClose)})),this._popup=document.querySelector(t),this._popupCloseBtn=this._popup.querySelector(".popup__close")}var t,n;return t=e,(n=[{key:"setEventListeners",value:function(){this._popup.addEventListener("click",this._handleCloseByOverlay),this._popupCloseBtn.addEventListener("click",this.close)}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function S(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}const E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&w(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".popup__image"),t._subtitle=t._popup.querySelector(".popup__subtitle"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;g(O(a.prototype),"open",this).call(this),this._subtitle.textContent=t,this._image.src=n,this._image.alt=t}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(v);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=j(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function j(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function I(e,t){return I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},I(e,t)}function q(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return R(e)}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}const T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&I(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function a(e,t){var n,r,o,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),u=function(e){n._onSubmit(e,n._getInputValues())},(o="_onSubmitHandler")in(r=R(n=i.call(this,e)))?Object.defineProperty(r,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[o]=u,n._onSubmit=t,n._popupForm=n._popup.querySelector(".popup__form"),n._inputList=Array.from(n._popupForm.querySelectorAll(".popup__input")),n}return t=a,n=[{key:"_getInputValues",value:function(){return this._inputList.reduce((function(e,t){return e[t.name]=t.value,e}),{})}},{key:"setEventListeners",value:function(){C(B(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",this._onSubmitHandler)}},{key:"open",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};C(B(a.prototype),"open",this).call(this),this._inputList.forEach((function(t){t.value=e[t.name]||""}))}},{key:"close",value:function(){this._popupForm.reset(),C(B(a.prototype),"close",this).call(this)}}],n&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(v);function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=U(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},A.apply(this,arguments)}function U(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=N(e)););return e}function F(e,t){return F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},F(e,t)}function H(e,t){if(t&&("object"===D(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return V(e)}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}var J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&F(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=N(r);if(o){var n=N(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return H(this,e)});function a(e,t){var n,r,o,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),u=function(e){n._onSubmit(e,{cardId:n._cardId,card:n._card})},(o="_onSubmitHandler")in(r=V(n=i.call(this,e)))?Object.defineProperty(r,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[o]=u,n._onSubmit=t,n._popupForm=n._popup.querySelector(".popup__form"),n}return t=a,(n=[{key:"setEventListeners",value:function(){A(N(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",this._onSubmitHandler)}},{key:"open",value:function(e,t){A(N(a.prototype),"open",this).call(this),this._cardId=e,this._card=t}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(v);function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const z=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}}])&&M(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function $(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const G=function(){function e(t){var n=t.nameProfileSelector,r=t.infoProfileSelector,o=t.avatarProfileSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userInfo=document.querySelector(r),this._avatar=document.querySelector(o),this._userId=""}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._userInfo.textContent,userId:this._userId}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar,o=e._id;this._userName.textContent=t,this._userInfo.textContent=n,this._avatar.src=r,this._userId=o}}])&&$(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var W=new(function(){function e(t){var n,r,o=t.address,i=t.token;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))},(n="_handleResponse")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._address=o,this._token=i,this._headers={authorization:this._token,"Content-Type":"application/json"}}var t,n;return t=e,(n=[{key:"getCards",value:function(){return fetch("".concat(this._address,"/cards"),{headers:this._headers}).then(this._handleResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._address,"/users/me"),{headers:this._headers}).then(this._handleResponse)}},{key:"patchProfile",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:n})}).then(this._handleResponse)}},{key:"postCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._address,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:n})}).then(this._handleResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}},{key:"putLike",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._handleResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}},{key:"patchAvatar",value:function(e){return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",body:JSON.stringify({avatar:e}),headers:this._headers}).then(this._handleResponse)}}])&&K(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({address:"https://mesto.nomoreparties.co/v1/cohort-35",token:"0a82637d-8f3a-4a9c-b501-7fa9f5bac73e"}),X=new T(".popup_type_edit",(function(e,t){e.preventDefault(),ce(e.target.querySelector(".popup__button")),W.patchProfile(t).then((function(e){return ne.setUserInfo(e)})).catch((function(e){return console.log("Ошибка редактирование профиля: ".concat(e))})).finally((function(){X.close(),ce(e.target.querySelector(".popup__button"),"Сохранить")}))})),Y=new T(".popup_type_add",(function(e,t){e.preventDefault(),ce(e.target.querySelector(".popup__button")),W.postCard(t).then((function(e){var t=ue(e);ae.addItem(t)})).catch((function(e){return console.log("Ошибка добавление карточки: ".concat(e))})).finally((function(){Y.close(),re.setDefaultForm(),ce(e.target.querySelector(".popup__button"),"Создать")}))})),Z=new T(".popup_type_avatar",(function(e,t){var n=t.link;e.preventDefault(),ce(e.target.querySelector(".popup__button")),W.patchAvatar(n).then((function(e){return ne.setUserInfo(e)})).catch((function(e){return console.log("Ошибка при изменении аватар: ".concat(e))})).finally((function(){ce(e.target.querySelector(".popup__button")),Z.close()}))})),ee=new J(".popup_type_delete",(function(e,t){var n=t.cardId,r=t.card;e.preventDefault(),W.deleteCard(n).catch((function(e){return console.log("Ошибка при удалении карточки: ".concat(e))})).finally((function(){r.remove(),ee.close()}))})),te=new E(".popup_type_image");X.setEventListeners(),Y.setEventListeners(),Z.setEventListeners(),te.setEventListeners(),ee.setEventListeners();var ne=new G({nameProfileSelector:".profile__name",infoProfileSelector:".profile__job",avatarProfileSelector:".profile__avatar"}),re=new d(e,r),oe=new d(e,n),ie=new d(e,o);re.enableValidation(),oe.enableValidation(),ie.enableValidation();var ae=new z({items:t,renderer:function(e){var t=ue(e);ae.addItem(t)}},".gallery");function ue(e){return new p(e,"#place-template",(function(){return te.open(e)}),ne.getUserInfo().userId,(function(e,t){return ee.open(e,t)}),W).generateCard()}function ce(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";e.disabled=!e.disabled,e.textContent=t}W.getUserInfo().then((function(e){ne.setUserInfo(e)})).catch((function(e){return console.log("Ошибка получения данных пользователя: ".concat(e))})).finally((function(){W.getCards().then((function(e){var n;t.push.apply(t,function(e){if(Array.isArray(e))return Q(e)}(n=e.reverse())||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(e,t){if(e){if("string"==typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(e,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())})).catch((function(e){return console.log(e)})).finally((function(){ae.renderItems()}))})),a.addEventListener("click",(function(){X.open(ne.getUserInfo()),oe.setDefaultForm()})),u.addEventListener("click",(function(){Y.open(),re.setDefaultForm()})),c.addEventListener("click",(function(){Z.open(),ie.setDefaultForm()}))})();