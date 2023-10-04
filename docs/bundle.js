/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoItem": () => (/* binding */ todoItem)
/* harmony export */ });
var todoItem = /** @class */ (function () {
    function todoItem(props) {
        this.props = props;
        this.props = props;
    }
    Object.defineProperty(todoItem.prototype, "completed", {
        // getters
        get: function () { return this.props.completed; },
        // setters
        set: function (newValue) { this.props.completed = newValue; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(todoItem.prototype, "title", {
        get: function () { return this.props.title; },
        set: function (newValue) { this.props.title = newValue; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(todoItem.prototype, "createdDate", {
        get: function () { return this.props.createdDate; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(todoItem.prototype, "dueDate", {
        get: function () { return this.props.dueDate; },
        set: function (newValue) { this.props.dueDate = newValue; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(todoItem.prototype, "itemId", {
        get: function () { return this.props.itemId; },
        set: function (newValue) { this.props.itemId = newValue; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(todoItem.prototype, "priority", {
        get: function () { return this.props.priority; },
        set: function (newValue) { this.props.priority = newValue; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(todoItem.prototype, "notes", {
        get: function () { return this.props.notes; },
        set: function (newValue) { this.props.notes = newValue; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(todoItem.prototype, "listId", {
        get: function () { return this.props.listId; },
        set: function (newValue) { this.props.listId = newValue; },
        enumerable: false,
        configurable: true
    });
    return todoItem;
}());



/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoList": () => (/* binding */ todoList)
/* harmony export */ });
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_0__);

var todoList = /** @class */ (function () {
    function todoList(_listName) {
        this._listName = _listName;
        this._items = [];
        this._listId = uniqid__WEBPACK_IMPORTED_MODULE_0__();
        this._listName = _listName;
    }
    Object.defineProperty(todoList.prototype, "items", {
        get: function () { return this._items; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(todoList.prototype, "listId", {
        get: function () { return this._listId; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(todoList.prototype, "listName", {
        get: function () { return this._listName; },
        set: function (newName) { this._listName = newName; },
        enumerable: false,
        configurable: true
    });
    todoList.prototype.add = function (newItem) {
        newItem.listId = this._listId;
        this._items.push(newItem);
    };
    todoList.prototype.remove = function (item) {
        var idx = this._items.indexOf(item);
        this._items.splice(idx, 1);
    };
    todoList.prototype.clearList = function () {
        this._items = [];
    };
    return todoList;
}());

// const test = document.querySelector('') as HTMLElement
// test.loc


/***/ }),
/* 3 */
/***/ ((module) => {

/* 
(The MIT License)
Copyright (c) 2014-2021 Halász Ádám <adam@aimform.com>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//  Unique Hexatridecimal ID Generator
// ================================================

//  Dependencies
// ================================================
var pid = typeof process !== 'undefined' && process.pid ? process.pid.toString(36) : '' ;
var address = '';
if(false){ var i, networkInterfaces, mac, os; } 

//  Exports
// ================================================
module.exports = module.exports["default"] = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); }

//  Helpers
// ================================================
function now(){
    var time = Date.now();
    var last = now.last || time;
    return now.last = time > last ? time : last + 1;
}


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Collection": () => (/* binding */ Collection)
/* harmony export */ });
var Collection = /** @class */ (function () {
    function Collection() {
        this._lists = [];
        this._allTasks = [];
        this._tasksToday = [];
        this._tasksToday = [];
        this._tasksThisWeek = [];
        this.objCache = [];
    }
    Object.defineProperty(Collection.prototype, "lists", {
        get: function () { return this._lists; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "allTasks", {
        get: function () { return this._allTasks; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "tasksToday", {
        get: function () { return this._tasksToday; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "tasksThisWeek", {
        get: function () { return this._tasksThisWeek; },
        enumerable: false,
        configurable: true
    });
    Collection.prototype.add = function (newList) {
        this._lists.push(newList);
        this._allTasks = this._allTasks.concat(newList.items);
        var now = Date.now();
        var oneDayLater = now + 3600 * 24 * 1000;
        var oneWeekLater = now + 3600 * 24 * 7 * 1000;
        var tasksToday = [];
        var tasksThisWeek = [];
        for (var _i = 0, _a = this._allTasks; _i < _a.length; _i++) {
            var task = _a[_i];
            var dueDate = task.dueDate.getTime();
            if (dueDate <= oneDayLater) {
                tasksToday.push(task);
            }
            if (dueDate <= oneWeekLater) {
                tasksThisWeek.push(task);
            }
        }
        this._tasksToday = tasksToday;
        this._tasksThisWeek = tasksThisWeek;
        tasksToday = null;
        tasksThisWeek = null;
    };
    Collection.prototype.remove = function (targetList) {
        var idx = this._lists.indexOf(targetList);
        this._lists.splice(idx, 1);
    };
    return Collection;
}());



/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "collectionView": () => (/* binding */ collectionView)
/* harmony export */ });
/* harmony import */ var _controls_collectionControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _styles_collectionView_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62);


var collectionView = /** @class */ (function () {
    function collectionView(_target) {
        this._target = _target;
        this._target = _target;
    }
    Object.defineProperty(collectionView.prototype, "targetCollection", {
        get: function () { return this._target; },
        enumerable: false,
        configurable: true
    });
    collectionView.prototype.genCollectionsItemOptionsIcon = function () {
        var collectionItemIconWrapper = document.createElement('div');
        collectionItemIconWrapper.className = 'collection-item-icon-wrapper';
        var collectionItemIconContainer = document.createElement('div');
        collectionItemIconContainer.addEventListener('click', _controls_collectionControl__WEBPACK_IMPORTED_MODULE_0__.collectionControl.openDropdown);
        collectionItemIconContainer.className = 'collection-item-icon-container';
        collectionItemIconContainer.innerHTML = "<svg class=\"collectionOptionsIcon\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\">\n                                                <path class=\"collectionOptionsIcon\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.865 11.153c1.03 0 1.864.8 1.864 1.787 0 .987-.835 1.787-1.864 1.787-1.03 0-1.865-.8-1.865-1.787 0-.987.835-1.787 1.865-1.787zm0-5.566c1.03 0 1.864.8 1.864 1.787 0 .987-.835 1.787-1.864 1.787C6.835 9.16 6 8.36 6 7.374c0-.987.835-1.787 1.865-1.787zm1.871-3.8C9.736.8 8.901 0 7.871 0S6.007.8 6.007 1.787c0 .987.835 1.787 1.864 1.787 1.03 0 1.865-.8 1.865-1.787z\" fill=\"transparent\">\n                                                </path>\n                                             </svg>";
        collectionItemIconWrapper.appendChild(collectionItemIconContainer);
        return collectionItemIconWrapper;
    };
    collectionView.prototype.genListPreview = function (targetList) {
        var collectionItemWrapper = document.createElement('div');
        collectionItemWrapper.className = 'sideNav-select-item collection-item';
        collectionItemWrapper.id = targetList.listId;
        var collectionItemTitle = document.createElement('div');
        collectionItemTitle.className = 'collection-item-title';
        collectionItemTitle.id = targetList.listId;
        collectionItemTitle.textContent = targetList.listName;
        var CollectionItemIconWrapper = this.genCollectionsItemOptionsIcon();
        collectionItemWrapper.appendChild(collectionItemTitle);
        collectionItemWrapper.appendChild(CollectionItemIconWrapper);
        collectionItemWrapper.addEventListener('mousedown', _controls_collectionControl__WEBPACK_IMPORTED_MODULE_0__.collectionControl.mouseDown);
        return collectionItemWrapper;
    };
    collectionView.prototype.genHtml = function () {
        var _this = this;
        var viewList = document.querySelector('.view-list');
        var createListBtn = document.querySelector('.createListsBtn');
        var cancelBtn = document.querySelector('.new-list-cancel-container');
        var addBtn = document.querySelector('.new-list-submit-container');
        createListBtn.addEventListener('click', _controls_collectionControl__WEBPACK_IMPORTED_MODULE_0__.collectionControl.openNewListModal);
        cancelBtn.addEventListener('click', _controls_collectionControl__WEBPACK_IMPORTED_MODULE_0__.collectionControl.closeNewListModal);
        addBtn.addEventListener('click', function (e) { _controls_collectionControl__WEBPACK_IMPORTED_MODULE_0__.collectionControl.addNewList(e, _this._target); });
        viewList.addEventListener('click', function (e) { _controls_collectionControl__WEBPACK_IMPORTED_MODULE_0__.collectionControl.openList(e, _this._target); });
        var listsCollection = document.createElement('div');
        listsCollection.className = 'lists-collection';
        for (var _i = 0, _a = this._target.lists; _i < _a.length; _i++) {
            var list = _a[_i];
            var newChild = this.genListPreview(list);
            listsCollection.appendChild(newChild);
        }
        return listsCollection;
    };
    return collectionView;
}());



/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "collectionControl": () => (/* binding */ collectionControl)
/* harmony export */ });
/* harmony import */ var _models_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _views_collectionView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _views_listView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _itemPreviewControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);




var collectionControl = /** @class */ (function () {
    function collectionControl() {
    }
    collectionControl.isAbove = function (nodeA, nodeB) {
        var rectA = nodeA.getBoundingClientRect();
        var rectB = nodeB.getBoundingClientRect();
        return (rectA.height / 2 + rectA.top) < (rectB.height / 2 + rectB.top);
    };
    collectionControl.mouseMove = function (e) {
        e.stopPropagation();
        collectionControl.itemRect = collectionControl.targetItem.getBoundingClientRect();
        if (!collectionControl.dragging) {
            collectionControl.dragging = true;
            collectionControl.placeholder = document.createElement('div');
            collectionControl.placeholder.classList.add('list-preview-placeholder');
            collectionControl.targetItem.parentNode.insertBefore(collectionControl.placeholder, collectionControl.targetItem.nextSibling);
            // collectionControl.targetItem.style.width = `${collectionControl.itemRect.width}px`;
            collectionControl.placeholder.style.minHeight = "".concat(collectionControl.itemRect.height, "px");
            collectionControl.placeholder.style.width = "".concat(collectionControl.itemRect.width, "px");
        }
        collectionControl.targetItem.style.position = 'absolute';
        collectionControl.targetItem.style.left = "calc(".concat(e.pageX - collectionControl.varX, "px)");
        collectionControl.targetItem.style.top = "".concat(e.pageY - collectionControl.varY, "px");
        collectionControl.prev = collectionControl.targetItem.previousElementSibling;
        collectionControl.next = collectionControl.targetItem.nextElementSibling.nextElementSibling;
        if (collectionControl.prev && collectionControl.isAbove(collectionControl.targetItem, collectionControl.prev)) {
            collectionControl.placeholder.parentNode.insertBefore(collectionControl.prev, collectionControl.placeholder.nextElementSibling);
            return;
        }
        if (collectionControl.next && collectionControl.isAbove(collectionControl.next, collectionControl.targetItem)) {
            collectionControl.next.parentNode.insertBefore(collectionControl.placeholder, collectionControl.next.nextElementSibling);
            collectionControl.next.parentNode.insertBefore(collectionControl.targetItem, collectionControl.placeholder);
        }
    };
    collectionControl.mouseUp = function (e) {
        e.stopPropagation();
        if (collectionControl.placeholder && collectionControl.placeholder.parentNode) {
            collectionControl.placeholder.parentNode.removeChild(collectionControl.placeholder);
        }
        // return item to list upon release of mouse button:
        collectionControl.targetItem.style.removeProperty('position');
        collectionControl.targetItem.style.removeProperty('top');
        collectionControl.targetItem.style.removeProperty('left');
        collectionControl.varX = null, collectionControl.varY = null, collectionControl.targetItem = null, collectionControl.dragging = false;
        document.removeEventListener('mousemove', collectionControl.mouseMove);
        document.removeEventListener('mouseup', collectionControl.mouseUp);
    };
    collectionControl.mouseDown = function (e) {
        e.stopPropagation();
        collectionControl.targetItem = e.target;
        while (collectionControl.targetItem.parentElement.className !== 'lists-collection') {
            collectionControl.targetItem = collectionControl.targetItem.parentElement;
        }
        var rect = collectionControl.targetItem.getBoundingClientRect();
        // space outside page x: mu = px - (L0 + u)
        // space outside page y: nu = py - (T0 + v)
        collectionControl.varX = e.pageX - rect.left; // px - L0 = (u + mu) lhs is nonconstant while rhs is
        collectionControl.varY = e.pageY - rect.top; // py - T0 = (v + nu)
        document.addEventListener('mousemove', collectionControl.mouseMove);
        document.addEventListener('mouseup', collectionControl.mouseUp);
    };
    // static focusItem (e: Event): void {
    //   const { target } = e;
    //   if (target instanceof HTMLElement) {
    //       let finalTarget = target;
    //       if (!finalTarget.classList.contains('collection-item')) {
    //         while (!finalTarget.classList.contains('collection-item')) {
    //           finalTarget = finalTarget.parentElement;
    //         }}
    //       const classList = Array.from(finalTarget.classList);
    //       if (classList.includes('collection-item-selected')){
    //         finalTarget.classList.remove('collection-item-selected');
    //       } else {
    //         finalTarget.classList.add('collection-item-selected');
    //       }
    //   }
    // }
    collectionControl.openDropdown = function (e) {
        var modalContainer = document.querySelector('.list-dropdown-modal-container');
        var viewList = document.querySelector('.view-list');
        var delList = document.querySelector('.del-list');
        var target = e.target;
        var finalTarget = target;
        while (!finalTarget.classList.contains('collection-item')) {
            finalTarget = finalTarget.parentElement;
        }
        var itemId = finalTarget.id;
        viewList.setAttribute('id', itemId);
        delList.setAttribute('id', itemId);
        var rect = target.getBoundingClientRect();
        modalContainer.style.position = 'absolute';
        modalContainer.style.top = "".concat(rect.bottom, "px");
        modalContainer.style.left = "".concat(rect.left, "px");
        modalContainer.classList.add('show');
        e.stopPropagation();
    };
    collectionControl.openList = function (e, collection) {
        var contentContainer = document.querySelector('.content-container');
        var content = document.querySelector('.content');
        // const listOptionsModal = document.querySelector('.list-options-modal');
        // listOptionsModal.remove();
        var children = Array.from(contentContainer.children);
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            while (child.firstChild) {
                child.removeChild(child.firstChild);
            }
        }
        var listModalContainer = document.querySelector('.list-dropdown-modal-container');
        listModalContainer.classList.remove('show');
        var viewList = e.target;
        if (content.firstChild) {
            if (content.children[0].id === viewList.id) {
                return;
            }
        }
        var targetList = collection.lists.find(function (list) { return list.listId === viewList.id; });
        this.objCache.push(new _views_listView__WEBPACK_IMPORTED_MODULE_2__.listView(targetList));
        //let newListViewObj = new listView(targetList); 
        var newListView = this.objCache[this.objCache.length - 1].genHtml();
        var viewItem = document.querySelector('.view-item');
        var viewItemClone = viewItem.cloneNode(true);
        viewItemClone.addEventListener('click', function (e) {
            _itemPreviewControl__WEBPACK_IMPORTED_MODULE_3__.itemPreviewControl.openDetail(e, targetList.items);
        });
        viewItem.replaceWith(viewItemClone);
        var delItem = document.querySelector('.del-item');
        var delItemClone = delItem.cloneNode(true);
        delItemClone.addEventListener('click', function (e) {
            _itemPreviewControl__WEBPACK_IMPORTED_MODULE_3__.itemPreviewControl.delItem(e, targetList.items);
        });
        delItem.replaceWith(delItemClone);
        if (content.children.length > 1) {
            content.children[1].remove();
        }
        if (content.firstChild) {
            content.children[0].remove();
        }
        content.appendChild(newListView);
        //newListViewObj = null;
    };
    collectionControl.changePreviewTitle = function (e, targetList) {
        var oldName = targetList.listName;
        var listOptionsTitle = e.target;
        if (listOptionsTitle.value.trim().length < 1) {
            listOptionsTitle.value = oldName;
            return;
        }
        var listPreviewTitleArr = Array.from(document.querySelectorAll('.collection-item-title'));
        var listPreviewTitle = listPreviewTitleArr.find(function (preview) { return preview.id === targetList.listId; });
        listPreviewTitle.textContent = listOptionsTitle.value;
        targetList.listName = listOptionsTitle.value;
    };
    collectionControl.openNewListModal = function () {
        var createListModalCanvas = document.querySelector('.popup-modal-canvas');
        var createListModalContainer = document.querySelector('.create-list-modal-container');
        createListModalCanvas.classList.add('active');
        createListModalContainer.classList.add('active');
    };
    collectionControl.closeNewListModal = function () {
        var createListModalCanvas = document.querySelector('.popup-modal-canvas');
        var createListModalContainer = document.querySelector('.create-list-modal-container');
        createListModalCanvas.classList.remove('active');
        createListModalContainer.classList.remove('active');
    };
    collectionControl.addNewList = function (e, collection) {
        var newTitle = document.querySelector('.new-list-title');
        if (newTitle.value.trim().length < 1) {
            return;
        }
        var newList = new _models_list__WEBPACK_IMPORTED_MODULE_0__.todoList(newTitle.value);
        collection.add(newList);
        this.objCache.push(new _views_collectionView__WEBPACK_IMPORTED_MODULE_1__.collectionView(collection));
        //let newListPreviewObj = new collectionView(collection);
        var newListPreview = this.objCache[this.objCache.length - 1].genListPreview(newList);
        var listsCollection = document.querySelector('.lists-collection');
        listsCollection.appendChild(newListPreview);
        newTitle.value = '';
        this.closeNewListModal();
        //newListPreviewObj = null;
    };
    collectionControl.targetItem = null;
    collectionControl.varX = 0;
    collectionControl.varY = 0;
    collectionControl.dragging = false;
    collectionControl.placeholder = null;
    collectionControl.itemRect = null;
    collectionControl.prev = null;
    collectionControl.next = null;
    collectionControl.objCache = [];
    return collectionControl;
}());



/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listView": () => (/* binding */ listView)
/* harmony export */ });
/* harmony import */ var _itemPreview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _controls_itemPreviewControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _controls_listControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59);
/* harmony import */ var _styles_listView_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60);
/* harmony import */ var _controls_collectionControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);





var listView = /** @class */ (function () {
    function listView(target) {
        this.target = target;
        this.target = target;
        this.objCache = [];
    }
    listView.prototype.genListOptionsTitle = function () {
        var _this = this;
        var listOptionsTitleContainer = document.createElement('div');
        listOptionsTitleContainer.className = 'list-options-title-container';
        var listOptionsTitle = document.createElement('input');
        listOptionsTitle.className = 'list-options-title';
        listOptionsTitle.type = 'text';
        listOptionsTitle.spellcheck = false;
        listOptionsTitle.id = this.target.listId;
        listOptionsTitle.value = this.target.listName;
        listOptionsTitle.addEventListener('change', function (e) {
            _controls_collectionControl__WEBPACK_IMPORTED_MODULE_4__.collectionControl.changePreviewTitle(e, _this.target);
        });
        listOptionsTitleContainer.appendChild(listOptionsTitle);
        return listOptionsTitleContainer;
    };
    listView.prototype.genListIcons = function () {
        var _this = this;
        var iconsContainer = document.createElement('div');
        iconsContainer.className = 'icons-container';
        var filterContainer = document.createElement('div');
        filterContainer.className = 'list-options-filter-container list-options-icon';
        filterContainer.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M11 20q-.425 0-.713-.288T10 19v-6L4.2 5.6q-.375-.5-.113-1.05T5 4h14q.65 0 .913.55T19.8 5.6L14 13v6q0 .425-.288.713T13 20h-2Zm1-7.7L16.95 6h-9.9L12 12.3Zm0 0Z\"/></svg>";
        filterContainer.addEventListener('click', _controls_listControl__WEBPACK_IMPORTED_MODULE_2__.listControl.openFilterDropDown);
        iconsContainer.appendChild(filterContainer);
        var selectAllContainer = document.createElement('div');
        selectAllContainer.className = 'list-options-selectAll-container list-options-icon';
        selectAllContainer.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"><path fill=\"currentColor\" d=\"M2 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Zm2 15a2 2 0 0 1-1.732-1H14a3 3 0 0 0 3-3V4.268A2 2 0 0 1 18 6v8a4 4 0 0 1-4 4H6Zm6.376-10.67a.5.5 0 0 0-.752-.66l-3.148 3.598l-1.622-1.622a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .73-.025l3.5-4Z\"/></svg>";
        selectAllContainer.addEventListener('click', _controls_listControl__WEBPACK_IMPORTED_MODULE_2__.listControl.selectAllItems);
        iconsContainer.appendChild(selectAllContainer);
        var deSelectAllContainer = document.createElement('div');
        deSelectAllContainer.className = 'list-options-deSelectAll-container list-options-icon';
        deSelectAllContainer.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M3 13v-2h2v2H3Zm4 8v-2h2v2H7Zm4-16V3h2v2h-2Zm8 0V3q.825 0 1.413.588T21 5h-2ZM5 21q-.825 0-1.413-.588T3 19h2v2Zm-2-4v-2h2v2H3Zm8 4v-2h2v2h-2Zm8-8v-2h2v2h-2Zm0-4V7h2v2h-2Zm-4-4V3h2v2h-2ZM9 3v2H7.825L7 4.175V3h2Zm12 12v2h-1.175L19 16.175V15h2ZM9 15h3.175L9 11.825V15Zm6 6v-2h2v2h-2Zm2-6.825l-2-2V9h-3.175l-2-2H16q.425 0 .713.288T17 8v6.175ZM3 9V7h2v2H3Zm16.075 12.9l-4.9-4.9H8q-.425 0-.713-.288T7 16V9.825l-4.9-4.9q-.275-.275-.275-.687t.275-.713q.3-.3.713-.3t.712.3L20.5 20.5q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288Z\"/></svg>";
        deSelectAllContainer.addEventListener('click', _controls_listControl__WEBPACK_IMPORTED_MODULE_2__.listControl.deSelectAllItems);
        iconsContainer.appendChild(deSelectAllContainer);
        var deleteContainer = document.createElement('div');
        deleteContainer.className = 'list-options-delete-container list-options-icon';
        deleteContainer.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 256 256\"><path fill=\"currentColor\" d=\"M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z\"/></svg>";
        deleteContainer.addEventListener('click', function () { _controls_listControl__WEBPACK_IMPORTED_MODULE_2__.listControl.deleteItems(_this.target); });
        iconsContainer.appendChild(deleteContainer);
        return iconsContainer;
    };
    listView.prototype.genListOptions = function () {
        var listOptionsModal = document.createElement('div');
        listOptionsModal.className = 'list-options-modal';
        var listOptionsTitleContainer = this.genListOptionsTitle();
        var iconsContainer = this.genListIcons();
        listOptionsModal.appendChild(listOptionsTitleContainer);
        listOptionsModal.appendChild(iconsContainer);
        return listOptionsModal;
    };
    listView.prototype.configureSortIcons = function () {
        var _this = this;
        var priorityFilterAsc = document.querySelector(".priorityAscendingIconContainer");
        var priorityFilterDesc = document.querySelector(".priorityDescendingIconContainer");
        var priorityFilterAscClone = priorityFilterAsc.cloneNode(true);
        var priorityFilterDescClone = priorityFilterDesc.cloneNode(true);
        priorityFilterAscClone.addEventListener('click', function () {
            _controls_listControl__WEBPACK_IMPORTED_MODULE_2__.listControl.sortItemsByPriority(_this.target.items, true);
            _controls_listControl__WEBPACK_IMPORTED_MODULE_2__.listControl.updateListView(_this.target);
        });
        priorityFilterDescClone.addEventListener('click', function () {
            _controls_listControl__WEBPACK_IMPORTED_MODULE_2__.listControl.sortItemsByPriority(_this.target.items, false);
            _controls_listControl__WEBPACK_IMPORTED_MODULE_2__.listControl.updateListView(_this.target);
        });
        priorityFilterAsc.replaceWith(priorityFilterAscClone);
        priorityFilterDesc.replaceWith(priorityFilterDescClone);
        var createdDateFilterAsc = document.querySelector(".createdDateAscendingIconContainer");
        var createdDateFilterDesc = document.querySelector(".createdDateDescendingIconContainer");
        var createdDateFilterAscClone = createdDateFilterAsc.cloneNode(true);
        var createdDateFilterDescClone = createdDateFilterDesc.cloneNode(true);
        createdDateFilterAscClone.addEventListener('click', function () {
            _controls_listControl__WEBPACK_IMPORTED_MODULE_2__.listControl.sortItemsByCreatedDate(_this.target.items, true);
            _controls_listControl__WEBPACK_IMPORTED_MODULE_2__.listControl.updateListView(_this.target);
        });
        createdDateFilterDescClone.addEventListener('click', function () {
            _controls_listControl__WEBPACK_IMPORTED_MODULE_2__.listControl.sortItemsByCreatedDate(_this.target.items, false);
            _controls_listControl__WEBPACK_IMPORTED_MODULE_2__.listControl.updateListView(_this.target);
        });
        createdDateFilterAsc.replaceWith(createdDateFilterAscClone);
        createdDateFilterDesc.replaceWith(createdDateFilterDescClone);
        var dateFilterAsc = document.querySelector(".dateAscendingIconContainer");
        var dateFilterDesc = document.querySelector(".dateDescendingIconContainer");
        var dateFilterAscClone = dateFilterAsc.cloneNode(true);
        var dateFilterDescClone = dateFilterDesc.cloneNode(true);
        dateFilterAscClone.addEventListener('click', function () {
            _controls_listControl__WEBPACK_IMPORTED_MODULE_2__.listControl.sortItemsByDate(_this.target.items, true);
            _controls_listControl__WEBPACK_IMPORTED_MODULE_2__.listControl.updateListView(_this.target);
        });
        dateFilterDescClone.addEventListener('click', function () {
            _controls_listControl__WEBPACK_IMPORTED_MODULE_2__.listControl.sortItemsByDate(_this.target.items, false);
            _controls_listControl__WEBPACK_IMPORTED_MODULE_2__.listControl.updateListView(_this.target);
        });
        dateFilterAsc.replaceWith(dateFilterAscClone);
        dateFilterDesc.replaceWith(dateFilterDescClone);
    };
    listView.prototype.configureItemPreviewDropdown = function (list) {
        var _this = this;
        var viewItem = document.querySelector('.view-item');
        var viewItemClone = viewItem.cloneNode(true);
        viewItem.replaceWith(viewItemClone);
        viewItemClone.addEventListener('click', function (e) {
            _controls_itemPreviewControl__WEBPACK_IMPORTED_MODULE_1__.itemPreviewControl.openDetail(e, _this.target.items);
        });
        var delItem = document.querySelector('.del-item');
        var delItemClone = delItem.cloneNode(true);
        delItem.replaceWith(delItemClone);
        delItemClone.addEventListener('click', function (e) {
            _controls_itemPreviewControl__WEBPACK_IMPORTED_MODULE_1__.itemPreviewControl.delItem(e, _this.target.items);
        });
        var icons = Array.from(list.querySelectorAll('path.optionsIcon'));
        var svgs = Array.from(list.querySelectorAll('svg.optionsIcon'));
        svgs.forEach(function (svg) {
            svg.addEventListener('click', _controls_itemPreviewControl__WEBPACK_IMPORTED_MODULE_1__.itemPreviewControl.stop);
            svg.addEventListener('click', _controls_itemPreviewControl__WEBPACK_IMPORTED_MODULE_1__.itemPreviewControl.openDropdown);
        });
        icons.forEach(function (icon) {
            icon.addEventListener('click', _controls_itemPreviewControl__WEBPACK_IMPORTED_MODULE_1__.itemPreviewControl.stop);
            icon.addEventListener('click', _controls_itemPreviewControl__WEBPACK_IMPORTED_MODULE_1__.itemPreviewControl.openDropdown);
        });
    };
    listView.prototype.genItemTitleInput = function () {
        var newItemTitleInput = document.createElement('input');
        newItemTitleInput.className = 'newItemTitleInput';
        newItemTitleInput.type = 'text';
        newItemTitleInput.placeholder = 'Enter Task...';
        newItemTitleInput.placeholder;
        function setFmtPlaceHolder(e) {
            var target = e.target;
            target.placeholder = 'priority (opt) | title (req) | due datetime (opt)';
        }
        function removeFmtPlaceHolder(e) {
            var target = e.target;
            target.placeholder = 'Enter Task...';
        }
        newItemTitleInput.addEventListener('focus', setFmtPlaceHolder);
        newItemTitleInput.addEventListener('blur', removeFmtPlaceHolder);
        return newItemTitleInput;
    };
    listView.prototype.genInputPriorityLevel = function () {
        var priorityLevel = document.createElement('select');
        priorityLevel.className = 'priorityLevelInput';
        var highPriority = document.createElement('option');
        highPriority.className = 'optItem';
        highPriority.value = 'High';
        highPriority.textContent = 'High';
        var MedPriority = document.createElement('option');
        MedPriority.className = 'optItem';
        MedPriority.value = 'Medium';
        MedPriority.textContent = 'Medium';
        var lowPriority = document.createElement('option');
        lowPriority.className = 'optItem';
        lowPriority.value = 'Low';
        lowPriority.textContent = 'Low';
        var noPriority = document.createElement('option');
        noPriority.className = 'optItem';
        noPriority.value = 'None';
        noPriority.textContent = 'None';
        var placeholder = document.createElement('option');
        placeholder.className = 'optItem';
        placeholder.value = 'None';
        placeholder.textContent = 'Priority';
        placeholder.hidden = true;
        placeholder.selected = true;
        priorityLevel.appendChild(placeholder);
        priorityLevel.appendChild(noPriority);
        priorityLevel.appendChild(lowPriority);
        priorityLevel.appendChild(MedPriority);
        priorityLevel.appendChild(highPriority);
        return priorityLevel;
    };
    listView.prototype.genListControlPanel = function () {
        var _this = this;
        var listControlPanel = document.createElement('div');
        listControlPanel.className = 'listControlPanel';
        var inputContainer = document.createElement('div');
        inputContainer.className = 'inputContainer';
        var priorityLevel = this.genInputPriorityLevel();
        var newItemTitleInput = this.genItemTitleInput();
        inputContainer.appendChild(priorityLevel);
        inputContainer.appendChild(newItemTitleInput);
        var dateInput = document.createElement('input');
        dateInput.type = 'datetime-local';
        dateInput.className = 'dateInput';
        inputContainer.appendChild(dateInput);
        var submitButton = document.createElement('button');
        submitButton.className = 'submitButton';
        submitButton.innerHTML = "<svg width=\"15\" height=\"17\" viewBox=\"0 0 15 17\"><path fill=\"#fff\" d=\"M8.438 3.563l4.593 4.593a.928.928 0 001.312-1.313L8.16.66a.933.933 0 00-1.32 0L.656 6.844a.928.928 0 001.312 1.313l4.595-4.594v10.504c0 .515.417.933.933.933h.008a.933.933 0 00.934-.933V3.563z\"></path></svg>";
        submitButton.addEventListener('click', function (e) { _controls_listControl__WEBPACK_IMPORTED_MODULE_2__.listControl.addItem(e, _this.target); });
        newItemTitleInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                _controls_listControl__WEBPACK_IMPORTED_MODULE_2__.listControl.addItem(e, _this.target);
            }
        });
        listControlPanel.appendChild(inputContainer);
        listControlPanel.appendChild(submitButton);
        return listControlPanel;
    };
    listView.prototype.genHtml = function () {
        var optionsModalContainer = document.querySelector('.options-modal-container');
        var listOptions = this.genListOptions();
        optionsModalContainer.appendChild(listOptions);
        this.configureSortIcons();
        var listContainer = document.createElement('div');
        listContainer.className = 'listContainer';
        listContainer.id = this.target.listId;
        var list = document.createElement('div');
        list.className = 'todoList';
        for (var i = 0; i < this.target.items.length; i += 1) {
            var item = this.target.items[i];
            this.objCache.push(new _itemPreview__WEBPACK_IMPORTED_MODULE_0__.itemPreview(item));
            var preview = this.objCache[this.objCache.length - 1].genHtml();
            preview.addEventListener('mousedown', _controls_listControl__WEBPACK_IMPORTED_MODULE_2__.listControl.mouseDown);
            list.appendChild(preview);
            this.objCache.pop();
        }
        this.configureItemPreviewDropdown(list);
        listContainer.appendChild(list);
        var listControlPanel = this.genListControlPanel();
        listContainer.appendChild(listControlPanel);
        return listContainer;
    };
    return listView;
}());



/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "itemPreview": () => (/* binding */ itemPreview)
/* harmony export */ });
/* harmony import */ var _controls_itemPreviewControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var _styles_itemPreview_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57);



var itemPreview = /** @class */ (function () {
    function itemPreview(target) {
        this.target = target;
        this.target = target;
    }
    // get title (): string { return this.target.title }
    // get completed (): boolean { return this.target.completed }
    itemPreview.prototype.genHtml = function () {
        var _this = this;
        var outDiv = document.createElement('div');
        outDiv.className = 'itemPreview';
        outDiv.addEventListener('click', _controls_itemPreviewControl__WEBPACK_IMPORTED_MODULE_0__.itemPreviewControl.focusItem);
        var leftSide = document.createElement('div');
        leftSide.className = 'leftSide';
        var previewCheckbox = document.createElement('div');
        previewCheckbox.className = 'previewCheckboxContainer';
        var checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.checked = this.target.completed;
        checkbox.className = 'previewCheckbox';
        previewCheckbox.appendChild(checkbox);
        previewCheckbox.addEventListener('change', function (e) { _controls_itemPreviewControl__WEBPACK_IMPORTED_MODULE_0__.itemPreviewControl.checkboxClick(e, _this.target); });
        previewCheckbox.addEventListener('click', _controls_itemPreviewControl__WEBPACK_IMPORTED_MODULE_0__.itemPreviewControl.stop);
        leftSide.appendChild(previewCheckbox);
        var previewTitle = document.createElement('div');
        previewTitle.className = 'previewTitleContainer';
        var title = document.createElement('div');
        title.textContent = this.target.title;
        title.className = 'previewTitle';
        previewTitle.appendChild(title);
        var iconContainer = document.createElement('div');
        iconContainer.className = 'iconContainer';
        var priorityIcon = _controls_itemPreviewControl__WEBPACK_IMPORTED_MODULE_0__.itemPreviewControl.genPriorityIcon(this.target);
        iconContainer.innerHTML = priorityIcon;
        leftSide.appendChild(iconContainer);
        leftSide.appendChild(previewTitle);
        outDiv.appendChild(leftSide);
        var previewOptions = document.createElement('div');
        previewOptions.className = 'previewOptionsContainer';
        var previewDueDateContainer = document.createElement('div');
        previewDueDateContainer.id = this.target.itemId;
        previewDueDateContainer.className = 'previewDueDateContainer';
        var previewDueDate = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_2__["default"])(this.target.dueDate, 'MM/dd/yyyy');
        previewDueDateContainer.textContent = "Due: ".concat(previewDueDate);
        2;
        previewOptions.appendChild(previewDueDateContainer);
        var options = document.createElement('button');
        options.className = 'previewOptions';
        options.innerHTML += "\n    <svg class=\"optionsIcon\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" style=\"display: block; float: right;\">\n      <path class=\"optionsIcon\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.865 11.153c1.03 0 1.864.8 1.864 1.787 0 .987-.835 1.787-1.864 1.787-1.03 0-1.865-.8-1.865-1.787 0-.987.835-1.787 1.865-1.787zm0-5.566c1.03 0 1.864.8 1.864 1.787 0 .987-.835 1.787-1.864 1.787C6.835 9.16 6 8.36 6 7.374c0-.987.835-1.787 1.865-1.787zm1.871-3.8C9.736.8 8.901 0 7.871 0S6.007.8 6.007 1.787c0 .987.835 1.787 1.864 1.787 1.03 0 1.865-.8 1.865-1.787z\" fill=\"currentColor\">\n      </path>\n    </svg>";
        previewOptions.appendChild(options);
        // const viewItem = document.querySelector('.view-item') as HTMLDivElement;
        // viewItem.addEventListener('click', (e) => {
        //   itemPreviewControl.openDetail(e, this.target);
        // });
        // const delItem = document.querySelector('.del-item') as HTMLDivElement;
        // delItem.addEventListener('click', (e) => {
        //   itemPreviewControl.delItem(e, this.target.items)
        // });
        outDiv.appendChild(previewOptions);
        outDiv.setAttribute('data-key', "".concat(this.target.itemId));
        return outDiv;
    };
    return itemPreview;
}());



/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "itemPreviewControl": () => (/* binding */ itemPreviewControl)
/* harmony export */ });
/* harmony import */ var _views_itemDetail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);

var itemPreviewControl = /** @class */ (function () {
    function itemPreviewControl() {
    }
    itemPreviewControl.checkboxClick = function (e, item) {
        var checkbox = e.target;
        var content = document.querySelector('.content');
        var iconContainer = checkbox.parentElement.nextElementSibling;
        var textContentContainer = iconContainer.nextElementSibling;
        var path = (iconContainer.querySelector('svg > path') === null) ? iconContainer.querySelector('svg > g') : iconContainer.querySelector('svg > path');
        var itemDetailView = content.querySelector('.itemDetail');
        if (checkbox.checked) {
            if (path) {
                path.classList.add('completed');
                item.completed = true;
            }
            textContentContainer.classList.add('completed');
        }
        else {
            if (path) {
                path.classList.remove('completed');
            }
            textContentContainer.classList.remove('completed');
            item.completed = false;
        }
        if (content.children.length > 1) {
            if (itemDetailView.dataset['key'] === item.itemId) {
                itemDetailView.remove();
                this.objCache.push(new _views_itemDetail__WEBPACK_IMPORTED_MODULE_0__.itemDetail(item));
                //let newItemDetail = new itemDetail(item);
                var newItemDetailView = this.objCache[this.objCache.length - 1].genHtml();
                if (item.completed) {
                    newItemDetailView.classList.add('completed');
                }
                content.appendChild(newItemDetailView);
                this.objCache.pop();
                //newItemDetail = null;
            }
        }
    };
    itemPreviewControl.focusItem = function (e) {
        var target = e.target;
        if (target instanceof HTMLElement) {
            var finalTarget = target;
            if (!finalTarget.classList.contains('itemPreview')) {
                while (!finalTarget.classList.contains('itemPreview')) {
                    finalTarget = finalTarget.parentElement;
                }
            }
            var classList = Array.from(finalTarget.classList);
            if (classList.includes('selected')) {
                finalTarget.classList.remove('selected');
            }
            else {
                finalTarget.classList.add('selected');
            }
        }
    };
    itemPreviewControl.openDropdown = function (e) {
        e.stopPropagation();
        var modalContainer = document.querySelector('.dropdown-modal-container');
        var viewItem = document.querySelector('.view-item');
        var delItem = document.querySelector('.del-item');
        var target = e.target;
        var finalTarget = target;
        while (!finalTarget.classList.contains('itemPreview')) {
            finalTarget = finalTarget.parentElement;
        }
        var itemId = finalTarget.dataset['key'];
        viewItem.setAttribute('id', itemId);
        delItem.setAttribute('id', itemId);
        var rect = target.getBoundingClientRect();
        modalContainer.style.position = 'absolute';
        modalContainer.style.top = "".concat(rect.bottom, "px");
        modalContainer.style.left = "".concat(rect.left, "px");
        modalContainer.classList.add('show');
    };
    itemPreviewControl.openDetail = function (e, items) {
        var content = document.querySelector('.content');
        if (content.children.length > 1) {
            content.children[1].remove();
        }
        var viewItem = e.target;
        var item = items.find(function (todo) { return todo.itemId === viewItem.id; });
        //let detailViewObj = new itemDetail(item);
        this.objCache.push(new _views_itemDetail__WEBPACK_IMPORTED_MODULE_0__.itemDetail(item));
        var detailView = this.objCache[this.objCache.length - 1].genHtml();
        if (item.completed) {
            detailView.classList.add('completed');
        }
        content.appendChild(detailView);
        var modalContainer = document.querySelector('.dropdown-modal-container');
        modalContainer.classList.remove('show');
        this.objCache.pop();
        //detailViewObj = null;
    };
    itemPreviewControl.delItem = function (e, items) {
        var delItem = e.target;
        var content = document.querySelector('.content');
        if (content.children.length > 1) {
            var currentDetail = content.children[1];
            if (currentDetail.dataset['key'] === delItem.id) {
                currentDetail.remove();
            }
        }
        var item = items.find(function (todo) { return todo.itemId === delItem.id; });
        var idx = items.indexOf(item);
        items.splice(idx, 1);
        var target = document.querySelector("[data-key='".concat(delItem.id, "'].itemPreview"));
        target.remove();
        var modalContainer = document.querySelector('.dropdown-modal-container');
        modalContainer.classList.remove('show');
    };
    itemPreviewControl.genPriorityIcon = function (item, completed) {
        if (completed === void 0) { completed = ''; }
        // icon source https://icon-sets.iconify.design/flat-color-icons/
        var dimensions = 22;
        var highPriority = "<svg id=".concat(item.itemId, " class=\"highPriorityIcon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"").concat(dimensions, "\" height=\"").concat(dimensions, "\" viewBox=\"0 0 48 48\"><path fill=\"#F44336\" class=\"").concat(completed, "\" d=\"m21.2 44.8l-18-18c-1.6-1.6-1.6-4.1 0-5.7l18-18c1.6-1.6 4.1-1.6 5.7 0l18 18c1.6 1.6 1.6 4.1 0 5.7l-18 18c-1.6 1.6-4.2 1.6-5.7 0z\"/><path id=\"exclamationMark\" fill=\"#fff\" d=\"M21.6 32.7c0-.3.1-.6.2-.9c.1-.3.3-.5.5-.7c.2-.2.5-.4.8-.5s.6-.2 1-.2s.7.1 1 .2c.3.1.6.3.8.5c.2.2.4.4.5.7c.1.3.2.6.2.9s-.1.6-.2.9s-.3.5-.5.7c-.2.2-.5.4-.8.5c-.3.1-.6.2-1 .2s-.7-.1-1-.2s-.5-.3-.8-.5c-.2-.2-.4-.4-.5-.7s-.2-.5-.2-.9zm4.2-4.6h-3.6L21.7 13h4.6l-.5 15.1z\"/></svg>");
        var medPriority = "<svg id=".concat(item.itemId, " class=\"medPriorityIcon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"").concat(dimensions, "\" height=\"").concat(dimensions, "\" viewBox=\"0 0 48 48\"><path fill=\"#FFC107\" class=\"").concat(completed, "\" d=\"m21.2 44.8l-18-18c-1.6-1.6-1.6-4.1 0-5.7l18-18c1.6-1.6 4.1-1.6 5.7 0l18 18c1.6 1.6 1.6 4.1 0 5.7l-18 18c-1.6 1.6-4.2 1.6-5.7 0z\"/><g fill=\"#37474F\"><circle cx=\"24\" cy=\"24\" r=\"2\"/><circle cx=\"32\" cy=\"24\" r=\"2\"/><circle cx=\"16\" cy=\"24\" r=\"2\"/></g></svg>");
        var lowPriority = "<svg id=".concat(item.itemId, " class=\"lowPriorityIcon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"").concat(dimensions, "\" height=\"").concat(dimensions, "\" viewBox=\"0 0 48 48\"><path fill=\"#4CAF50\" class=\"").concat(completed, "\" d=\"m21.2 44.8l-18-18c-1.6-1.6-1.6-4.1 0-5.7l18-18c1.6-1.6 4.1-1.6 5.7 0l18 18c1.6 1.6 1.6 4.1 0 5.7l-18 18c-1.6 1.6-4.2 1.6-5.7 0z\"/><g fill=\"#fff\"><path d=\"M24 33.4L17 25h14z\"/><path d=\"M22 14.8h4v12.3h-4z\"/></g></svg>");
        var noPriority = "<svg id=".concat(item.itemId, " class=\"noPriorityIcon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"").concat(dimensions - 2, "\" height=\"").concat(dimensions - 2, "\" viewBox=\"0 0 14 14\"><g class=\"").concat(completed, "\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m7.5 9l-3 .54L5 6.5L10.73.79a1 1 0 0 1 1.42 0l1.06 1.06a1 1 0 0 1 0 1.42Z\"/><path class=\"").concat(completed, "\" d=\"M12 9.5v3a1 1 0 0 1-1 1H1.5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3\"/></g></svg>");
        var itemPriority = item.priority;
        var priorityIcon;
        switch (itemPriority) {
            case 'High':
                priorityIcon = highPriority;
                break;
            case 'Medium':
                priorityIcon = medPriority;
                break;
            case 'Low':
                priorityIcon = lowPriority;
                break;
            case 'None':
                priorityIcon = noPriority;
                break;
        }
        return priorityIcon;
    };
    itemPreviewControl.stop = function (e) {
        e.stopPropagation();
    };
    itemPreviewControl.iconBlend = function (e) {
        var parent = e.target;
        var icon = parent.querySelector('#noneIcon');
        icon.setAttribute('fill', 'rgba(0, 0, 0, 0.1)');
    };
    itemPreviewControl.objCache = [];
    return itemPreviewControl;
}());



/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "itemDetail": () => (/* binding */ itemDetail)
/* harmony export */ });
/* harmony import */ var _controls_itemPreviewControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _controls_itemDetailControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var _styles_itemDetail_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);




var itemDetail = /** @class */ (function () {
    function itemDetail(target) {
        this.target = target;
        this.target = target;
    }
    itemDetail.prototype.genHtml = function () {
        var _this = this;
        var itemDetail = document.createElement('div');
        var topSection = document.createElement('div');
        itemDetail.className = 'itemDetail';
        topSection.className = 'topSection';
        var closeBtn = document.createElement('span');
        closeBtn.className = 'close';
        closeBtn.innerHTML = "&times;";
        closeBtn.addEventListener('click', _controls_itemDetailControl__WEBPACK_IMPORTED_MODULE_1__.itemDetailControl.closeDetail);
        var topLeft = document.createElement('div');
        topLeft.className = 'topLeft';
        topLeft.textContent = "id: ".concat(this.target.itemId);
        topSection.appendChild(topLeft);
        topSection.appendChild(closeBtn);
        itemDetail.appendChild(topSection);
        var itemDetailContent = document.createElement('div');
        itemDetailContent.className = 'itemDetailContent';
        var itemTitleContainer = document.createElement('div');
        var itemTitle = document.createElement('input');
        itemTitle.type = 'text';
        itemTitle.value = this.target.title;
        itemTitle.spellcheck = false;
        itemTitle.className = 'itemTitle';
        itemTitle.addEventListener('change', function (e) { _controls_itemDetailControl__WEBPACK_IMPORTED_MODULE_1__.itemDetailControl.editTitle(e, _this.target); });
        var priorityIconContainer = document.createElement('div');
        priorityIconContainer.className = 'priorityIconContainer';
        var priorityIcon = _controls_itemPreviewControl__WEBPACK_IMPORTED_MODULE_0__.itemPreviewControl.genPriorityIcon(this.target);
        priorityIconContainer.innerHTML = priorityIcon;
        itemTitleContainer.appendChild(priorityIconContainer);
        itemTitleContainer.appendChild(itemTitle);
        itemTitleContainer.className = 'itemTitleContainer';
        var priorityLevelContainer = document.createElement('div');
        var priorityLevelLabel = document.createElement('label');
        priorityLevelLabel.htmlFor = 'priority';
        priorityLevelLabel.textContent = 'Priority:';
        var priorityLevel = document.createElement('select');
        priorityLevel.id = 'priority';
        var highPriority = document.createElement('option');
        highPriority.className = 'optItem';
        highPriority.value = 'High';
        highPriority.textContent = 'High';
        var MedPriority = document.createElement('option');
        MedPriority.className = 'optItem';
        MedPriority.value = 'Medium';
        MedPriority.textContent = 'Medium';
        var lowPriority = document.createElement('option');
        lowPriority.className = 'optItem';
        lowPriority.value = 'Low';
        lowPriority.textContent = 'Low';
        var noPriority = document.createElement('option');
        noPriority.className = 'optItem';
        noPriority.value = 'None';
        noPriority.textContent = 'None';
        priorityLevel.appendChild(noPriority);
        priorityLevel.appendChild(lowPriority);
        priorityLevel.appendChild(MedPriority);
        priorityLevel.appendChild(highPriority);
        priorityLevel.addEventListener('change', function (e) { _controls_itemDetailControl__WEBPACK_IMPORTED_MODULE_1__.itemDetailControl.editPriority(e, _this.target); });
        priorityLevelContainer.className = 'priorityLevelContainer';
        priorityLevel.className = 'priorityLevel';
        priorityLevel.value = "".concat(this.target.priority);
        priorityLevelContainer.appendChild(priorityLevelLabel);
        priorityLevelContainer.appendChild(priorityLevel);
        itemDetail.setAttribute('data-key', "".concat(this.target.itemId));
        var completedMsg = (this.target.completed === true) ? 'Complete' : 'Incomplete';
        var completedMsgContainer = document.createElement('div');
        completedMsgContainer.className = 'completedMsgContainer';
        var statusMsgDisplay = document.createElement('div');
        statusMsgDisplay.className = 'statusMsgDisplay';
        statusMsgDisplay.textContent = "Status: ".concat(completedMsg);
        completedMsgContainer.appendChild(statusMsgDisplay);
        var creationDateContainer = document.createElement('div');
        creationDateContainer.className = 'creationDateContainer';
        var creationDate = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_3__["default"])(this.target.createdDate, 'MM/dd/yyyy');
        //const creationDate = this.target.createdDate.toLocaleString();
        creationDateContainer.textContent = "Created On: ".concat(creationDate);
        var dueDateContainer = document.createElement('div');
        dueDateContainer.className = 'dueDateContainer';
        var itemDueDate = document.createElement('input');
        itemDueDate.className = 'itemDueDate';
        itemDueDate.id = "".concat(this.target.itemId);
        itemDueDate.type = 'datetime-local';
        itemDueDate.addEventListener('change', function (e) { _controls_itemDetailControl__WEBPACK_IMPORTED_MODULE_1__.itemDetailControl.editDueDate(e, _this.target); });
        var dueDateLabel = document.createElement('label');
        dueDateLabel.textContent = 'Due: ';
        dueDateLabel.htmlFor = itemDueDate.id;
        var rawDateValue = this.target.dueDate;
        var rawStringValue = new Date(rawDateValue.getTime() - (rawDateValue.getTimezoneOffset() * 60000)).toISOString();
        var inputString = rawStringValue.substring(0, 16);
        itemDueDate.value = inputString;
        rawStringValue = null;
        dueDateContainer.appendChild(dueDateLabel);
        dueDateContainer.appendChild(itemDueDate);
        var notesContainer = document.createElement('div');
        notesContainer.className = 'notesContainer';
        var notesLabel = document.createElement('label');
        notesLabel.textContent = 'Notes:';
        notesLabel.htmlFor = 'itemNotes';
        var notes = document.createElement('textarea');
        notes.className = 'itemNotes';
        notes.id = 'itemNotes';
        notes.value = this.target.notes;
        notes.spellcheck = false;
        notes.rows = 12;
        notes.addEventListener('change', function (e) { _controls_itemDetailControl__WEBPACK_IMPORTED_MODULE_1__.itemDetailControl.editNotes(e, _this.target); });
        notesContainer.appendChild(notesLabel);
        notesContainer.appendChild(notes);
        itemDetailContent.appendChild(itemTitleContainer);
        itemDetailContent.appendChild(priorityLevelContainer);
        itemDetailContent.appendChild(completedMsgContainer);
        itemDetailContent.appendChild(creationDateContainer);
        itemDetailContent.appendChild(dueDateContainer);
        itemDetailContent.appendChild(notesContainer);
        itemDetail.appendChild(itemDetailContent);
        return itemDetail;
    };
    return itemDetail;
}());



/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "itemDetailControl": () => (/* binding */ itemDetailControl)
/* harmony export */ });
/* harmony import */ var _itemPreviewControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);

var itemDetailControl = /** @class */ (function () {
    function itemDetailControl() {
    }
    itemDetailControl.closeDetail = function (e) {
        var modalCanvas = document.querySelector('.popup-modal-canvas');
        var viewDetailModalContainer = document.querySelector('.view-detail-modal-container');
        if (viewDetailModalContainer.classList.contains('active')) {
            viewDetailModalContainer.classList.remove('active');
            modalCanvas.style.display = 'none';
            return;
        }
        var target = e.target;
        var parent = target.parentElement;
        while (!parent.classList.contains('itemDetail')) {
            parent = parent.parentElement;
        }
        parent.remove();
    };
    itemDetailControl.editTitle = function (e, target) {
        e.preventDefault();
        var sourceTarget = e.target;
        var finalTarget = e.target;
        while (!finalTarget.classList.contains('itemDetail')) {
            finalTarget = finalTarget.parentElement;
        }
        var itemId = finalTarget.dataset['key'];
        var targetArr = Array.from(document.querySelectorAll('.itemPreview')).find(function (item) { return item.dataset['key'] === itemId; });
        targetArr.querySelector('.previewTitle').textContent = sourceTarget.value;
        // const items = targetList.items;
        // const item = items.find((todo) => todo.itemId === itemId);
        target.title = sourceTarget.value;
    };
    itemDetailControl.editPriority = function (e, item) {
        var target = e.target;
        var priority = target.value;
        item.priority = priority;
        var itemId = item.itemId;
        var targetItemView = Array.from(document.querySelectorAll('.itemPreview')).find(function (item) { return item.dataset['key'] === itemId; });
        var iconContainer = targetItemView.querySelector('div.leftSide > div.iconContainer');
        var oldIcon = targetItemView.querySelector('div.leftSide > div.iconContainer > svg');
        var oldIconPath = targetItemView.querySelector('div.leftSide > div.iconContainer > svg > path');
        var oldIconG = targetItemView.querySelector('div.leftSide > div.iconContainer > svg > g');
        var check = (oldIconPath === null) ? oldIconG : oldIconPath;
        var newIcon;
        if (check.classList.contains('completed')) {
            newIcon = _itemPreviewControl__WEBPACK_IMPORTED_MODULE_0__.itemPreviewControl.genPriorityIcon(item, 'completed');
        }
        else {
            newIcon = _itemPreviewControl__WEBPACK_IMPORTED_MODULE_0__.itemPreviewControl.genPriorityIcon(item);
        }
        oldIcon.remove();
        iconContainer.innerHTML = newIcon;
        var targetDetailViewOldIconContainer = document.querySelector('.itemDetail > .itemDetailContent > .itemTitleContainer > .priorityIconContainer');
        var targetDetailViewOldIcon = document.querySelector('.itemDetail > .itemDetailContent > .itemTitleContainer > .priorityIconContainer > svg');
        targetDetailViewOldIcon.remove();
        targetDetailViewOldIconContainer.innerHTML = newIcon;
    };
    itemDetailControl.editDueDate = function (e, item) {
        var target = e.target;
        var newDateValue = target.value;
        var updatedDate = new Date(newDateValue);
        item.dueDate = updatedDate;
        //update item preview due date here
        var itemId = item.itemId;
        var dueDatePreviewUpdate = Array.from(document.querySelectorAll('.previewDueDateContainer')).find(function (item) { return item.id === itemId; });
        dueDatePreviewUpdate.textContent = "Due: ".concat(updatedDate.toLocaleDateString());
        updatedDate = null;
    };
    itemDetailControl.editNotes = function (e, item) {
        var target = e.target;
        item.notes = target.value;
    };
    return itemDetailControl;
}());



/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_itemDetail_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_itemDetail_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_itemDetail_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_itemDetail_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_itemDetail_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 13 */
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 14 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 15 */
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 17 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 18 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 19 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n  --sm-pad-spacing: 30px;\n}\n\n.itemDetail{\n  background-color: #edf2f7;\n  /* border: 1px solid black; */\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  /* padding-bottom: 20px; */\n  padding-left: 20px;\n  padding-right: 20px;\n  border-radius: 16px;\n  height: 80vh;\n  width: 30vw;\n  overflow: hidden;\n  overflow-y: scroll;\n}\n\n\n.itemDetail.completed, \n.itemDetail.completed > input{\n  color: #d5d2d2;\n}\n\n.itemDetail.completed > .itemDetailContent > .itemTitleContainer > input{\n  text-decoration: line-through;\n  color: #d5d2d2;\n}\n\n.itemDetail.completed > .itemDetailContent > .itemTitleContainer > .priorityIconContainer > svg > path{\n  fill: #d5d2d2;\n}\n\n.itemDetail.completed > .itemDetailContent > .itemTitleContainer > .priorityIconContainer > svg > g.completed{\n  fill: #d5d2d2;\n}\n\n.transparent{\n  fill: transparent !important;\n}\n\n#exclamationMark{\n  fill: #FFFFFF !important;\n}\n\n.topSection{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 20px;\n  width: 100%;\n}\n\n.topLeft{\n  user-select: none;\n  font-size: 14px;\n  color: #d5d2d2;\n  padding-left: var(--sm-pad-spacing);\n}\n\n.priorityLevelContainer{\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 90%;\n  padding-left: var(--sm-pad-spacing);\n}\n\n.itemDetail.completed .priorityLevel{\n  outline: none;\n  color: #d5d2d2;\n  border-color: #d5d2d2;\n}\n\n.itemDetailContent{\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  gap: 40px;\n}\n\n.itemTitleContainer{\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  border-radius: 10px;\n  width: 90%;\n  padding-left: 20px;\n  gap: 10px;\n}\n\n.itemTitleContainer:hover{\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n\n.itemTitle{\n  font-size: 1.2rem;\n  font-weight: bold;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  border: 0;\n  outline: none;\n  background-color: transparent;\n}\n\n\n.close{\n  cursor: pointer;\n  position: relative;\n  color: #aaaaaa;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover{\n  color: #4a4a4a; \n}\n\n\n.priorityLevelContainer{\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 90%;\n  padding-left: var(--sm-pad-spacing);\n}\n\n.priorityLevel{\n  background-color: #fafafa;\n  margin-left: 5px;\n}\n\n\n\n\n.completedMsgContainer{\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 90%;\n  padding-left: var(--sm-pad-spacing);\n}\n\n.creationDateContainer{\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 90%;\n  padding-left: var(--sm-pad-spacing);\n}\n\n\n.dueDateContainer{\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 90%;\n  padding-left: var(--sm-pad-spacing);\n  gap: 5px;\n}\n\n.notesContainer{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  width: 90%;\n  padding-left: var(--sm-pad-spacing);\n  gap: 5px;\n}\n\n.itemDueDate{\n  background-color: #edf2f7;\n  font-family: Arial, Helvetica, sans-serif;\n  border: none;\n  outline: none;\n}\n\n.itemDetail.completed .itemDueDate{\n  color: #d5d2d2;\n}\n\n.itemNotes{\n  background-color: #edf2f7;\n  font-family:Arial, Helvetica, sans-serif;\n  outline: none;\n  resize: none;\n  border: rgba(74, 74, 74, 0.2) solid 1px;\n  text-align: start;\n  min-width: 90%;\n  height: 100%;\n  border-radius: 10px;\n  overflow: hidden;\n  overflow-y: scroll;\n}\n\n\n.itemDetail.completed .itemNotes{\n  color: #d5d2d2;\n}\n\n\n.itemDetail::-webkit-scrollbar,\n.itemNotes::-webkit-scrollbar{\n  width: 8px;\n  height: 10vh;\n}\n\n.itemDetail::-webkit-scrollbar-thumb,\n.itemNotes::-webkit-scrollbar-thumb{\n  left: 40px;\n  background: transparent;\n  border-radius: 16px;\n}\n\n.itemDetail::-webkit-scrollbar-thumb:hover,\n.itemNotes::-webkit-scrollbar-thumb:hover{\n  cursor: pointer;\n  background: rgba(153, 153, 153, 0.5);\n  border-right: 2px solid white;\n}\n\n.itemDetail::-webkit-scrollbar-track,\n.itemNotes::-webkit-scrollbar-track{\n  height: 50vh;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  background: transparent;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 20 */
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 21 */
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38);
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37);
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(44);
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43);
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40);
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(56);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];

    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33);






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || _typeof(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};

var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};

var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55);
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53);
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49);
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51);
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46);
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */
var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48);
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36);
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50);



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48);
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),
/* 52 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48);
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50);
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),
/* 54 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),
/* 56 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),
/* 57 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_itemPreview_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_itemPreview_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_itemPreview_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_itemPreview_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_itemPreview_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 58 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.itemPreviewContainer{\n  width: 100%;\n}\n\n.itemPreview{\n  white-space: nowrap;\n  border: 1px solid transparent;\n  user-select: none;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  width: 98%;\n  min-height: 50px;\n  border-radius: 10px;\n  overflow-x: hidden;\n}\n\n.itemPreview:hover{\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.selected, .selected:hover{\n  border: 1px solid #0074e0;\n  /* background-color: rgba(0, 255, 255, 0.3); */\n}\n\n.leftSide{\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-left: 10px;\n  gap: 5px;\n}\n\n.previewCheckbox{\n  cursor: pointer;\n}\n\n/* style checkbox later */\n\n.previewCheckbox:checked{ \n  accent-color: #d5d2d2;\n}\n\n.previewOptionsContainer{\n  margin-right: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.previewDueDateContainer{\n  font-size: 0.8em;\n  color: #d5d2d2;\n}\n\n.previewOptions{\n  cursor: pointer;\n  background-color: inherit;\n  border: none;\n}\n\n.previewOptions > svg{\n  position: sticky;\n  color: transparent;\n}\n\n/* .previewTitleContainer{\n  max-width: 90%;\n} */\n\n.previewTitleContainer, \n.previewTitle{\n  max-width: 140px;\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n}\n\n\n\n.previewTitleContainer.completed{\n  color: #d5d2d2;\n  text-decoration: line-through;\n}\n\nsvg > path.completed{\n  fill: #d5d2d2;\n}\n\n/* g.completed{\n  fill: #d5d2d2;\n} */\n\nsvg > g.completed{\n  stroke: #d5d2d2;\n}\n\n.itemPreview:hover svg.optionsIcon{\n  color: #d5d2d2;\n}\n\n/* .itemPreview:hover .previewDueDateContainer{\n  color: #d5d2d2;\n} */\n\n/* .selected .previewDueDateContainer{\n  border: 1px solid #0074e0;\n  color: #d5d2d2;\n} */\n\n.itemPreview:hover svg.optionsIcon:hover{\n  color: #0074e0;\n}\n\n\n\n/* dropdown */\n/* https://www.w3schools.com/howto/howto_js_dropdown.asp */\n\n\n\n.dropdown-content {\n  display: none;\n  position: relative;\n  left: 40px;\n  top: 40px;\n  background-color: #f1f1f1;\n  width: 120px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  border-radius: 10px;\n  z-index: 2;\n}\n\n.dropdown-content div{\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block !important;\n}\n\n.dropdown-content div:nth-child(1) {\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.dropdown-content div:nth-child(2) {\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.disabled{\n  color: transparent !important;\n}\n\n.dropdown-content div:hover {background-color: #ddd;}\n\n.show {display: block;}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 59 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listControl": () => (/* binding */ listControl)
/* harmony export */ });
/* harmony import */ var _models_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _views_itemPreview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _views_listView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _itemPreviewControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_4__);





var listControl = /** @class */ (function () {
    function listControl() {
    }
    listControl.isAbove = function (nodeA, nodeB) {
        var rectA = nodeA.getBoundingClientRect();
        var rectB = nodeB.getBoundingClientRect();
        return (rectA.height / 2 + rectA.top) < (rectB.height / 2 + rectB.top);
    };
    listControl.mouseMove = function (e) {
        e.stopPropagation();
        listControl.itemRect = listControl.targetItem.getBoundingClientRect();
        //console.log(listControl.itemRect);
        if (!listControl.dragging) {
            listControl.dragging = true;
            listControl.placeholder = document.createElement('div');
            listControl.placeholder.classList.add('placeholder');
            listControl.targetItem.parentNode.insertBefore(listControl.placeholder, listControl.targetItem.nextSibling);
            listControl.placeholder.style.minHeight = "".concat(listControl.itemRect.height, "px");
            listControl.placeholder.style.width = "".concat(listControl.itemRect.width, "px");
            listControl.targetItem.style.width = "".concat(window.getComputedStyle(listControl.targetItem).getPropertyValue("width"));
            //listControl.targetItem.style.innerw
        }
        listControl.targetItem.style.position = 'absolute';
        if (!listControl.taskViewFlag) {
            listControl.targetItem.style.left = "".concat(e.pageX - listControl.varX, "px");
            listControl.targetItem.style.top = "".concat(e.pageY - listControl.varY, "px");
        }
        else {
            listControl.targetItem.style.left = "".concat(e.pageX - listControl.varX, "px");
            listControl.targetItem.style.top = "".concat(e.pageY - listControl.varY, "px");
        }
        listControl.prev = listControl.targetItem.previousElementSibling;
        listControl.next = listControl.targetItem.nextElementSibling.nextElementSibling;
        if (listControl.prev && listControl.isAbove(listControl.targetItem, listControl.prev)) {
            listControl.placeholder.parentNode.insertBefore(listControl.prev, listControl.placeholder.nextElementSibling);
            return;
        }
        if (listControl.next && listControl.isAbove(listControl.next, listControl.targetItem)) {
            listControl.next.parentNode.insertBefore(listControl.placeholder, listControl.next.nextElementSibling);
            listControl.next.parentNode.insertBefore(listControl.targetItem, listControl.placeholder);
        }
    };
    listControl.mouseUp = function (e) {
        e.stopPropagation();
        if (listControl.placeholder && listControl.placeholder.parentNode) {
            listControl.placeholder.parentNode.removeChild(listControl.placeholder);
        }
        // return item to list upon release of mouse button:
        listControl.targetItem.style.removeProperty('position');
        listControl.targetItem.style.removeProperty('top');
        listControl.targetItem.style.removeProperty('left');
        listControl.taskViewFlag = false;
        listControl.varX = null, listControl.varY = null, listControl.targetItem = null, listControl.dragging = false;
        document.removeEventListener('mousemove', listControl.mouseMove);
        document.removeEventListener('mouseup', listControl.mouseUp);
    };
    listControl.mouseDown = function (e) {
        e.stopPropagation();
        listControl.targetItem = e.target;
        while (listControl.targetItem.parentElement.className !== 'todoList' && listControl.targetItem.parentElement.className !== 'viewBoard') {
            listControl.targetItem = listControl.targetItem.parentElement;
        }
        if (listControl.targetItem.parentElement.className === 'viewBoard') {
            listControl.taskViewFlag = true;
        }
        var rect = listControl.targetItem.getBoundingClientRect();
        // space outside page x: mu = px - (L0 + u)
        // space outside page y: nu = py - (T0 + v)
        listControl.varX = e.pageX - rect.left; // px - L0 = (u + mu) lhs is nonconstant while rhs is
        listControl.varY = e.pageY - rect.top; // py - T0 = (v + nu)
        document.addEventListener('mousemove', listControl.mouseMove);
        document.addEventListener('mouseup', listControl.mouseUp);
    };
    listControl.addItem = function (e, targetList) {
        var titleInput = document.querySelector('.newItemTitleInput');
        var priorityInput = document.querySelector('.priorityLevelInput');
        var dateInput = document.querySelector('.dateInput');
        var textInput = titleInput.value;
        var priority = priorityInput.value;
        var date = dateInput.value;
        var setDate = (date.length > 0) ? new Date(date) : new Date();
        if ((priority.length < 1) || (textInput.trim().length < 1)) {
            return;
        }
        var params = {
            completed: false,
            title: textInput,
            itemId: "".concat(uniqid__WEBPACK_IMPORTED_MODULE_4__()),
            createdDate: new Date(),
            priority: priority,
            dueDate: setDate,
            notes: '',
            listId: "".concat(targetList.listId),
        };
        var newItem = new _models_item__WEBPACK_IMPORTED_MODULE_0__.todoItem(params);
        targetList.items.push(newItem);
        this.objCache.push(new _views_itemPreview__WEBPACK_IMPORTED_MODULE_1__.itemPreview(newItem));
        //let newItemViewObj = new itemPreview(newItem);
        var newItemView = this.objCache[this.objCache.length - 1].genHtml();
        var listView = document.querySelector('.todoList');
        var firstChild = listView.children[0];
        var svg = newItemView.querySelector('svg.optionsIcon');
        svg.addEventListener('click', _itemPreviewControl__WEBPACK_IMPORTED_MODULE_3__.itemPreviewControl.stop);
        svg.addEventListener('click', _itemPreviewControl__WEBPACK_IMPORTED_MODULE_3__.itemPreviewControl.openDropdown);
        var icon = newItemView.querySelector('path.optionsIcon');
        icon.addEventListener('click', _itemPreviewControl__WEBPACK_IMPORTED_MODULE_3__.itemPreviewControl.stop);
        icon.addEventListener('click', _itemPreviewControl__WEBPACK_IMPORTED_MODULE_3__.itemPreviewControl.openDropdown);
        newItemView.addEventListener('mousedown', listControl.mouseDown);
        listView.insertBefore(newItemView, firstChild);
        // newItemViewObj = null;
        this.objCache.pop();
        titleInput.value = '';
        priorityInput.value = 'None';
        dateInput.value = '';
    };
    listControl.selectAllItems = function () {
        var listViewItems = document.querySelectorAll('.itemPreview');
        listViewItems.forEach(function (item) {
            item.classList.add('selected');
        });
    };
    listControl.deSelectAllItems = function () {
        var listViewItems = document.querySelectorAll('.itemPreview');
        listViewItems.forEach(function (item) {
            item.classList.remove('selected');
        });
    };
    listControl.deleteItems = function (targetList) {
        var targetItems = Array.from(document.querySelectorAll('.itemPreview.selected'));
        var itemDetail = document.querySelector('.itemDetail');
        var targetIds = targetItems.map(function (item) {
            return item.dataset['key'];
        });
        var detailId;
        if (itemDetail) {
            detailId = itemDetail.dataset['key'];
            if (targetIds.includes(detailId)) {
                itemDetail.remove();
            }
        }
        targetItems.forEach(function (item) {
            item.remove();
        });
        var _loop_1 = function (id) {
            var targetItem = targetList.items.find(function (item) { return item.itemId === id; });
            targetList.remove(targetItem);
        };
        //console.log(targetList);
        for (var _i = 0, targetIds_1 = targetIds; _i < targetIds_1.length; _i++) {
            var id = targetIds_1[_i];
            _loop_1(id);
        }
    };
    listControl.openFilterDropDown = function (e, taskViewFlag) {
        if (taskViewFlag === void 0) { taskViewFlag = false; }
        var modalContainer = document.querySelector('.filter-modal-container');
        var target = e.target;
        if (taskViewFlag) {
            var selectList = document.querySelector('.select-list');
            selectList.style.removeProperty('display');
        }
        var rect = target.getBoundingClientRect();
        modalContainer.classList.add('show');
        modalContainer.style.position = 'absolute';
        //console.log(taskViewFlag);
        var offSet = (taskViewFlag) ? '130' : '100';
        modalContainer.style.left = "calc(".concat(rect.left, "px - ").concat(offSet, "px)");
        modalContainer.style.top = "".concat(rect.bottom, "px");
        e.stopPropagation();
    };
    listControl.sortItemsByCreatedDate = function (items, ascending) {
        if (ascending) {
            items.sort(function (itemA, itemB) { return Math.round(itemA.createdDate.getTime() / 1000) - Math.round(itemB.createdDate.getTime() / 1000); });
        }
        else {
            items.sort(function (itemA, itemB) { return Math.round(itemB.createdDate.getTime() / 1000) - Math.round(itemA.createdDate.getTime() / 1000); });
        }
    };
    listControl.sortItemsByDate = function (items, ascending) {
        if (ascending) {
            items.sort(function (itemA, itemB) { return Math.round(itemA.dueDate.getTime() / 1000) - Math.round(itemB.dueDate.getTime() / 1000); });
        }
        else {
            items.sort(function (itemA, itemB) { return Math.round(itemB.dueDate.getTime() / 1000) - Math.round(itemA.dueDate.getTime() / 1000); });
        }
    };
    listControl.sortItemsByPriority = function (items, ascending) {
        var map = { 'None': 0, 'Low': 1, 'Medium': 2, 'High': 3 };
        if (ascending) {
            items.sort(function (itemA, itemB) { return map[itemA.priority] - map[itemB.priority]; });
        }
        else {
            items.sort(function (itemA, itemB) { return map[itemB.priority] - map[itemA.priority]; });
        }
    };
    listControl.updateListView = function (list) {
        var modalContainer = document.querySelector('.filter-modal-container');
        var listContainer = document.querySelector('.listContainer');
        this.objCache.push(document.querySelector('.list-options-modal'));
        this.objCache[this.objCache.length - 1].remove();
        this.objCache.pop();
        //**PSA: DO NOT DO THE FOLLOWING COMMENTED OUT CODE! PERFORMANCE IS TERRIBLE!** 
        // for some reason I couldn't figure out, garbage collector does not delete the unused listView obj 
        // **solution: temporarily push obj in an array and pop out when done (I implemented this in other parts of the app)
        //  
        //  let newListViewObj = new listView(list);
        //  const newListView = newListViewObj.genhtml();
        //               
        // like this vvvvv
        this.objCache.push(new _views_listView__WEBPACK_IMPORTED_MODULE_2__.listView(list));
        var newListView = this.objCache[this.objCache.length - 1].genHtml();
        listContainer.replaceWith(newListView);
        this.objCache.pop();
        modalContainer.classList.remove('show');
        var viewItem = document.querySelector('.view-item');
        var viewItemClone = viewItem.cloneNode(true);
        viewItemClone.addEventListener('click', function (e) {
            _itemPreviewControl__WEBPACK_IMPORTED_MODULE_3__.itemPreviewControl.openDetail(e, list.items);
        });
        viewItem.replaceWith(viewItemClone);
        var delItem = document.querySelector('.del-item');
        var delItemClone = delItem.cloneNode(true);
        delItemClone.addEventListener('click', function (e) {
            _itemPreviewControl__WEBPACK_IMPORTED_MODULE_3__.itemPreviewControl.delItem(e, list.items);
        });
        delItem.replaceWith(delItemClone);
    };
    listControl.targetItem = null;
    listControl.varX = 0;
    listControl.varY = 0;
    listControl.dragging = false;
    listControl.placeholder = null;
    listControl.itemRect = null;
    listControl.prev = null;
    listControl.next = null;
    listControl.taskViewFlag = false;
    listControl.objCache = [];
    return listControl;
}());



/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_listView_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_listView_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_listView_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_listView_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_listView_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 61 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n  --scrollbar-foreground: #999;\n  --scrollbar-background: #333;\n  --list-height: 93%;\n}\n\n.list-options-modal{\n  background-color: #edf2f7;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  width: 20vw;\n  padding-left: 1vh;\n  padding-right: 1vh;\n  padding-top: 0.2vh;\n  padding-bottom: 0.2vh;\n  border-radius: 16px;\n}\n\n.list-options-title-container{\n  flex: 1;\n}\n\n.list-options-title{\n  user-select: none;\n  background-color: #edf2f7;\n  font-weight: 600;\n  font-size: 1rem;\n  width: 85%;\n  border: none;\n  outline: none;\n}\n\n.icons-container{\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n}\n\n\n/* icon behavior */\n\n.list-options-icon{\n  cursor: pointer;\n}\n\n.list-options-icon:hover{\n  transform: scale(1.1);\n}\n\n.listContainer{\n  background-color: #edf2f7;\n\n  /* border: 1px solid black; */\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  border-radius: 16px;\n  padding-left: 20px;\n  padding-right: 20px;\n  height: 80vh;\n  width: 30vw;\n  overflow: hidden;\n}\n\n.placeholder{\n  background-color: #edf2f7;\n  border: 1px dashed #cbd5e0;\n  border-radius: 12px;\n}\n\n\n.todoList{\n  background-color: inherit;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 5px;\n  border-radius: 16px;\n  height: var(--list-height);\n  width: 100%;\n  padding-top: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n  overflow: hidden;\n  overflow-y: scroll;\n}\n\n.listControlPanel{\n  position: relative;\n  width: 100%;\n  height: calc(100% - var(--list-height));\n  background-color: #edf2f7;\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-top: 1px solid rgba(0, 0, 0, 0.2);\n  border-bottom-left-radius: 16px;\n  border-bottom-right-radius: 16px;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.inputContainer{\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: #fafafa;\n  color: #030303;\n  border-radius:10px;\n  padding: 5px;\n  outline: none;\n  border: 1px solid #cbd5e0;\n  width: 99%;\n}\n\n.priorityLevelInput{\n  width: 20%;\n  cursor: pointer;\n  border: 0;\n  background-color: #fafafa;\n  color: #030303;\n  outline: none;\n}\n\n.dateInput{\n  width: 4%;\n  background-color: transparent;\n  border: none;\n}\n\n\n.newItemTitleInput{\n  flex: 1;\n  padding-left: 10px;\n  width: 76%;\n  background-color: #fafafa;\n  color: #030303;\n  outline: none;\n  border: 0;\n}\n\n.newItemTitleInput::placeholder{\n  font-style: italic;\n}\n\n\n\n.submitButton{\n  cursor: pointer;\n  border: 0;\n  width: 2rem;\n  height: 2rem;\n  background-color: #0083ff;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.submitButton:hover{\n  background-color: #0074e0;;\n}\n\n\n\n\n\n\n\n/* scrollbar */\n\n\n.todoList::-webkit-scrollbar{\n  position: relative;\n  right: 40px;\n  width: 8px;\n  height: 10vh;\n}\n\n.todoList::-webkit-scrollbar-thumb{\n  background: transparent;\n  border-radius: 16px;\n}\n\n.todoList::-webkit-scrollbar-thumb:hover{\n  border: 2px solid white;\n  background: rgba(153, 153, 153, 0.5);\n}\n\n.todoList::-webkit-scrollbar-track{\n  height: 50vh;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  background: transparent;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 62 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_collectionView_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_collectionView_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_collectionView_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_collectionView_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_collectionView_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 63 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n  --item-title-width: 45%;\n}\n\n\n.sideNav-selected-tab{\n  color: #0083ff;\n} \n\n\n.lists-collection{\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 3px;\n}\n\n\n.collection-item-container{\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.collection-item{\n  user-select: none;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  padding-left: 1vw;\n  padding-right: 2vw;\n  font-weight: bold;\n\n  width: 80%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  border-radius: 8px;\n  padding-right: 4px;\n  border: 1px solid transparent;\n}\n\n.collection-item-selected, .collection-item-selected:hover{\n  border: 1px solid #0074e0;\n}\n\n.collection-item-title{\n  font-size: 16px;\n  background-color: transparent;\n  width: var(--item-title-width);\n  border: none;\n  outline: none;\n  font-weight: bold;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.collection-item-icon-wrapper{\n  width: calc(100% - var(--item-title-width));\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.list-preview-placeholder{\n  background-color: #edf2f7;\n  border: 1px dashed #cbd5e0;\n  border-radius: 12px;\n}\n\n.collection-item:hover > .collection-item-icon-wrapper > .collection-item-icon-container > svg > path{\n  fill: #d5d2d2;\n}\n\n.collection-item:hover > .collection-item-icon-wrapper > .collection-item-icon-container:hover > svg > path{\n  fill: #0074e0;\n}\n\n\n\n\n.listsHeadingIconContainer > svg > path{\n  fill: #d5d2d2;\n}\n\n.listsHeadingIconContainer:hover > svg > path{\n  fill: black;\n}\n\n.listsHeadingIconContainer{\n  cursor: pointer;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskViewControl": () => (/* binding */ taskViewControl)
/* harmony export */ });
/* harmony import */ var _views_taskView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _itemPreviewControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _models_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _views_itemDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_4__);





var taskViewControl = /** @class */ (function () {
    function taskViewControl() {
    }
    taskViewControl.updateTaskView = function (type) {
        var modalContainer = document.querySelector('.filter-modal-container');
        taskViewControl.objCache.push(document.querySelector('.taskView-options-modal'));
        taskViewControl.objCache[taskViewControl.objCache.length - 1].remove();
        taskViewControl.objCache.pop();
        taskViewControl.viewAllTasks();
        modalContainer.classList.remove('show');
    };
    taskViewControl.viewAllTasks = function () {
        taskViewControl.currentTab.classList.remove('sideNav-selected-tab');
        taskViewControl.currentTab = taskViewControl.allTasksTab;
        taskViewControl.currentTab.classList.add('sideNav-selected-tab');
        var children = Array.from(taskViewControl.contentContainer.children);
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            while (child.firstChild) {
                child.removeChild(child.firstChild);
            }
        }
        taskViewControl.objCache.push(new _views_taskView__WEBPACK_IMPORTED_MODULE_0__.taskView(taskViewControl.listsCollection));
        var tasksViewOptions = taskViewControl.objCache[taskViewControl.objCache.length - 1].gentaskViewOptions('All Tasks');
        taskViewControl.optionsModalContainer.appendChild(tasksViewOptions);
        taskViewControl.objCache[taskViewControl.objCache.length - 1].configureSortIcons();
        var allTasksview = taskViewControl.objCache[taskViewControl.objCache.length - 1].genTasksView(0);
        taskViewControl.content.appendChild(allTasksview);
        taskViewControl.objCache.pop();
    };
    taskViewControl.viewTasksToday = function () {
        taskViewControl.currentTab.classList.remove('sideNav-selected-tab');
        taskViewControl.currentTab = taskViewControl.tasksTodayTab;
        taskViewControl.currentTab.classList.add('sideNav-selected-tab');
        var children = Array.from(taskViewControl.contentContainer.children);
        for (var _i = 0, children_2 = children; _i < children_2.length; _i++) {
            var child = children_2[_i];
            while (child.firstChild) {
                child.removeChild(child.firstChild);
            }
        }
        taskViewControl.objCache.push(new _views_taskView__WEBPACK_IMPORTED_MODULE_0__.taskView(taskViewControl.listsCollection));
        var tasksViewOptions = taskViewControl.objCache[taskViewControl.objCache.length - 1].gentaskViewOptions('Tasks Today');
        taskViewControl.optionsModalContainer.appendChild(tasksViewOptions);
        taskViewControl.objCache[taskViewControl.objCache.length - 1].configureSortIcons();
        var allTasksview = taskViewControl.objCache[taskViewControl.objCache.length - 1].genTasksView(1);
        taskViewControl.content.appendChild(allTasksview);
        taskViewControl.objCache.pop();
    };
    taskViewControl.viewTasksThisWeek = function () {
        taskViewControl.currentTab.classList.remove('sideNav-selected-tab');
        taskViewControl.currentTab = taskViewControl.tasksThisWeekTab;
        taskViewControl.currentTab.classList.add('sideNav-selected-tab');
        var children = Array.from(taskViewControl.contentContainer.children);
        for (var _i = 0, children_3 = children; _i < children_3.length; _i++) {
            var child = children_3[_i];
            while (child.firstChild) {
                child.removeChild(child.firstChild);
            }
        }
        taskViewControl.objCache.push(new _views_taskView__WEBPACK_IMPORTED_MODULE_0__.taskView(taskViewControl.listsCollection));
        var tasksViewOptions = taskViewControl.objCache[taskViewControl.objCache.length - 1].gentaskViewOptions('Tasks This Week');
        taskViewControl.optionsModalContainer.appendChild(tasksViewOptions);
        taskViewControl.objCache[taskViewControl.objCache.length - 1].configureSortIcons();
        var allTasksview = taskViewControl.objCache[taskViewControl.objCache.length - 1].genTasksView(2);
        taskViewControl.content.appendChild(allTasksview);
        taskViewControl.objCache.pop();
    };
    taskViewControl.initializeCollection = function (inputCollection) {
        this.listsCollection = inputCollection;
        this.currentTab.classList.add('sideNav-selected-tab');
        this.allTasksTab.addEventListener('click', function (e) { taskViewControl.viewAllTasks(); });
        this.tasksTodayTab.addEventListener('click', function (e) { taskViewControl.viewTasksToday(); });
        this.tasksThisWeekTab.addEventListener('click', function (e) { taskViewControl.viewTasksThisWeek(); });
    };
    taskViewControl.viewDetail = function (e, collection) {
        var viewItem = e.target;
        var item = collection.allTasks.find(function (todo) { return todo.itemId === viewItem.id; });
        this.objCache.push(new _views_itemDetail__WEBPACK_IMPORTED_MODULE_3__.itemDetail(item));
        var detailView = this.objCache[this.objCache.length - 1].genHtml();
        var modalContainer = document.querySelector('.dropdown-modal-container');
        modalContainer.classList.remove('show');
        var modalCanvas = document.querySelector('.popup-modal-canvas');
        modalCanvas.style.display = 'block';
        var viewDetailModal = document.querySelector('.view-detail-modal');
        if (viewDetailModal.firstChild) {
            viewDetailModal.removeChild(viewDetailModal.firstChild);
        }
        detailView.style.transform = 'scale(1.2)';
        viewDetailModal.appendChild(detailView);
        var viewDetailModalContainer = document.querySelector('.view-detail-modal-container');
        viewDetailModalContainer.classList.add('active');
        this.objCache.pop();
    };
    taskViewControl.sortItemsByList = function (tasks, ascending) {
        if (ascending === void 0) { ascending = false; }
        var ascendingReturn = (ascending) ? -1 : 1;
        tasks.sort(function (a, b) {
            if (a.listId < b.listId) {
                return ascendingReturn;
            }
            if (a.listId > b.listId) {
                return -ascendingReturn;
            }
            return 0;
        });
    };
    taskViewControl.addItem = function (e) {
        var titleInput = document.querySelector('.taskView-newItemTitleInput');
        var priorityInput = document.querySelector('.taskView-priorityLevelInput');
        var targetListInput = document.querySelector('.targetListInput');
        var dateInput = document.querySelector('.taskView-dateInput');
        var textInput = titleInput.value;
        var priority = priorityInput.value;
        var date = dateInput.value;
        var setDate = (date.length > 0) ? new Date(date) : new Date();
        if ((targetListInput.value === '') || (textInput.trim().length < 1)) {
            return;
        }
        var targetListId = targetListInput.value;
        var params = {
            completed: false,
            title: textInput,
            itemId: "".concat(uniqid__WEBPACK_IMPORTED_MODULE_4___default()()),
            createdDate: new Date(),
            priority: priority,
            dueDate: setDate,
            notes: '',
            listId: "".concat(targetListId),
        };
        var targetList = taskViewControl.listsCollection.lists.find(function (list) { return list.listId === targetListId; });
        var newItem = new _models_item__WEBPACK_IMPORTED_MODULE_2__.todoItem(params);
        taskViewControl.listsCollection.allTasks.push(newItem);
        targetList.items.push(newItem);
        taskViewControl.viewAllTasks();
    };
    taskViewControl.delItem = function (e, collection, multiSelect, inputId) {
        if (multiSelect === void 0) { multiSelect = false; }
        if (inputId === void 0) { inputId = ''; }
        var delItem = (e) ? e.target : null;
        var targetId = (multiSelect) ? inputId : delItem.id;
        var item = collection.allTasks.find(function (todo) { return todo.itemId === targetId; });
        var listId = item.listId;
        var list = collection.lists.find(function (todoList) { return todoList.listId === listId; });
        var items = list.items;
        var idx = items.indexOf(item);
        items.splice(idx, 1);
        var target = document.querySelector("[data-key='".concat(targetId, "'].itemPreview"));
        target.remove();
        var modalContainer = document.querySelector('.dropdown-modal-container');
        modalContainer.classList.remove('show');
    };
    taskViewControl.deleteItems = function () {
        var targetItems = Array.from(document.querySelectorAll('.itemPreview.selected'));
        targetItems.forEach(function (divItem) {
            taskViewControl.delItem(null, taskViewControl.listsCollection, true, divItem.dataset['key']);
        });
        targetItems = null;
    };
    taskViewControl.configureItemPreviewDropdown = function (tasks, viewBoard) {
        var viewItem = document.querySelector('.view-item');
        var delItem = document.querySelector('.del-item');
        var viewItemClone = viewItem.cloneNode(true);
        var delItemClone = delItem.cloneNode(true);
        viewItem.replaceWith(viewItemClone);
        delItem.replaceWith(delItemClone);
        viewItemClone.addEventListener('click', function (e) {
            taskViewControl.viewDetail(e, taskViewControl.listsCollection);
        });
        delItemClone.addEventListener('click', function (e) {
            taskViewControl.delItem(e, taskViewControl.listsCollection);
        });
        var icons = Array.from(viewBoard.querySelectorAll('path.optionsIcon'));
        var svgs = Array.from(viewBoard.querySelectorAll('svg.optionsIcon'));
        svgs.forEach(function (svg) {
            svg.addEventListener('click', _itemPreviewControl__WEBPACK_IMPORTED_MODULE_1__.itemPreviewControl.stop);
            svg.addEventListener('click', _itemPreviewControl__WEBPACK_IMPORTED_MODULE_1__.itemPreviewControl.openDropdown);
        });
        icons.forEach(function (icon) {
            icon.addEventListener('click', _itemPreviewControl__WEBPACK_IMPORTED_MODULE_1__.itemPreviewControl.stop);
            icon.addEventListener('click', _itemPreviewControl__WEBPACK_IMPORTED_MODULE_1__.itemPreviewControl.openDropdown);
        });
    };
    var _a;
    _a = taskViewControl;
    taskViewControl.optionsModalContainer = document.querySelector('.options-modal-container');
    taskViewControl.contentContainer = document.querySelector('.content-container');
    taskViewControl.content = document.querySelector('.content');
    taskViewControl.allTasksTab = document.querySelector('.allTasks');
    taskViewControl.tasksTodayTab = document.querySelector('.tasksToday');
    taskViewControl.tasksThisWeekTab = document.querySelector('.tasksThisWeek');
    taskViewControl.objCache = [];
    taskViewControl.currentTab = _a.allTasksTab;
    return taskViewControl;
}());



/***/ }),
/* 65 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskView": () => (/* binding */ taskView)
/* harmony export */ });
/* harmony import */ var _controls_taskViewControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _itemPreview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _controls_listControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59);
/* harmony import */ var _styles_taskView_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66);




var taskView = /** @class */ (function () {
    function taskView(_target) {
        this._target = _target;
        this._target = _target;
        this.objCache = [];
    }
    taskView.prototype.genViewBoard = function () {
        var viewBoard = document.createElement('div');
        viewBoard.className = 'viewBoard';
        return viewBoard;
    };
    taskView.prototype.gentaskViewOptionsTitle = function (taskViewType) {
        var taskViewOptionsTitleContainer = document.createElement('div');
        taskViewOptionsTitleContainer.className = 'taskView-options-title-container';
        var taskViewOptionsTitle = document.createElement('h1');
        taskViewOptionsTitle.className = 'taskView-options-title';
        taskViewOptionsTitle.textContent = taskViewType;
        taskViewOptionsTitleContainer.appendChild(taskViewOptionsTitle);
        return taskViewOptionsTitleContainer;
    };
    taskView.prototype.gentaskViewIcons = function () {
        var iconsContainer = document.createElement('div');
        iconsContainer.className = 'icons-container';
        var filterContainer = document.createElement('div');
        filterContainer.className = 'taskView-options-filter-container taskView-options-icon';
        filterContainer.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M11 20q-.425 0-.713-.288T10 19v-6L4.2 5.6q-.375-.5-.113-1.05T5 4h14q.65 0 .913.55T19.8 5.6L14 13v6q0 .425-.288.713T13 20h-2Zm1-7.7L16.95 6h-9.9L12 12.3Zm0 0Z\"/></svg>";
        filterContainer.addEventListener('click', function (e) { _controls_listControl__WEBPACK_IMPORTED_MODULE_2__.listControl.openFilterDropDown(e, true); });
        iconsContainer.appendChild(filterContainer);
        var selectAllContainer = document.createElement('div');
        selectAllContainer.className = 'taskView-options-selectAll-container taskView-options-icon';
        selectAllContainer.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"><path fill=\"currentColor\" d=\"M2 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Zm2 15a2 2 0 0 1-1.732-1H14a3 3 0 0 0 3-3V4.268A2 2 0 0 1 18 6v8a4 4 0 0 1-4 4H6Zm6.376-10.67a.5.5 0 0 0-.752-.66l-3.148 3.598l-1.622-1.622a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .73-.025l3.5-4Z\"/></svg>";
        selectAllContainer.addEventListener('click', _controls_listControl__WEBPACK_IMPORTED_MODULE_2__.listControl.selectAllItems);
        iconsContainer.appendChild(selectAllContainer);
        var deSelectAllContainer = document.createElement('div');
        deSelectAllContainer.className = 'taskView-options-deSelectAll-container taskView-options-icon';
        deSelectAllContainer.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M3 13v-2h2v2H3Zm4 8v-2h2v2H7Zm4-16V3h2v2h-2Zm8 0V3q.825 0 1.413.588T21 5h-2ZM5 21q-.825 0-1.413-.588T3 19h2v2Zm-2-4v-2h2v2H3Zm8 4v-2h2v2h-2Zm8-8v-2h2v2h-2Zm0-4V7h2v2h-2Zm-4-4V3h2v2h-2ZM9 3v2H7.825L7 4.175V3h2Zm12 12v2h-1.175L19 16.175V15h2ZM9 15h3.175L9 11.825V15Zm6 6v-2h2v2h-2Zm2-6.825l-2-2V9h-3.175l-2-2H16q.425 0 .713.288T17 8v6.175ZM3 9V7h2v2H3Zm16.075 12.9l-4.9-4.9H8q-.425 0-.713-.288T7 16V9.825l-4.9-4.9q-.275-.275-.275-.687t.275-.713q.3-.3.713-.3t.712.3L20.5 20.5q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288Z\"/></svg>";
        deSelectAllContainer.addEventListener('click', _controls_listControl__WEBPACK_IMPORTED_MODULE_2__.listControl.deSelectAllItems);
        iconsContainer.appendChild(deSelectAllContainer);
        var deleteContainer = document.createElement('div');
        deleteContainer.className = 'taskView-options-delete-container taskView-options-icon';
        deleteContainer.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 256 256\"><path fill=\"currentColor\" d=\"M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z\"/></svg>";
        deleteContainer.addEventListener('click', _controls_taskViewControl__WEBPACK_IMPORTED_MODULE_0__.taskViewControl.deleteItems);
        iconsContainer.appendChild(deleteContainer);
        return iconsContainer;
    };
    taskView.prototype.gentaskViewOptions = function (taskViewType) {
        var taskViewOptionsModal = document.createElement('div');
        taskViewOptionsModal.className = 'taskView-options-modal';
        var taskViewOptionsTitleContainer = this.gentaskViewOptionsTitle(taskViewType);
        var iconsContainer = this.gentaskViewIcons();
        taskViewOptionsModal.appendChild(taskViewOptionsTitleContainer);
        taskViewOptionsModal.appendChild(iconsContainer);
        return taskViewOptionsModal;
    };
    taskView.prototype.configureSortIcons = function () {
        var _this = this;
        var priorityFilterAsc = document.querySelector(".priorityAscendingIconContainer");
        var priorityFilterDesc = document.querySelector(".priorityDescendingIconContainer");
        var priorityFilterAscClone = priorityFilterAsc.cloneNode(true);
        var priorityFilterDescClone = priorityFilterDesc.cloneNode(true);
        priorityFilterAscClone.addEventListener('click', function () {
            _controls_listControl__WEBPACK_IMPORTED_MODULE_2__.listControl.sortItemsByPriority(_this._target.allTasks, true);
            _controls_taskViewControl__WEBPACK_IMPORTED_MODULE_0__.taskViewControl.updateTaskView();
        });
        priorityFilterDescClone.addEventListener('click', function () {
            _controls_listControl__WEBPACK_IMPORTED_MODULE_2__.listControl.sortItemsByPriority(_this._target.allTasks, false);
            _controls_taskViewControl__WEBPACK_IMPORTED_MODULE_0__.taskViewControl.updateTaskView();
        });
        priorityFilterAsc.replaceWith(priorityFilterAscClone);
        priorityFilterDesc.replaceWith(priorityFilterDescClone);
        var createdDateFilterAsc = document.querySelector(".createdDateAscendingIconContainer");
        var createdDateFilterDesc = document.querySelector(".createdDateDescendingIconContainer");
        var createdDateFilterAscClone = createdDateFilterAsc.cloneNode(true);
        var createdDateFilterDescClone = createdDateFilterDesc.cloneNode(true);
        createdDateFilterAscClone.addEventListener('click', function () {
            _controls_listControl__WEBPACK_IMPORTED_MODULE_2__.listControl.sortItemsByCreatedDate(_this._target.allTasks, true);
            _controls_taskViewControl__WEBPACK_IMPORTED_MODULE_0__.taskViewControl.updateTaskView();
        });
        createdDateFilterDescClone.addEventListener('click', function () {
            _controls_listControl__WEBPACK_IMPORTED_MODULE_2__.listControl.sortItemsByCreatedDate(_this._target.allTasks, false);
            _controls_taskViewControl__WEBPACK_IMPORTED_MODULE_0__.taskViewControl.updateTaskView();
        });
        createdDateFilterAsc.replaceWith(createdDateFilterAscClone);
        createdDateFilterDesc.replaceWith(createdDateFilterDescClone);
        var dateFilterAsc = document.querySelector(".dateAscendingIconContainer");
        var dateFilterDesc = document.querySelector(".dateDescendingIconContainer");
        var dateFilterAscClone = dateFilterAsc.cloneNode(true);
        var dateFilterDescClone = dateFilterDesc.cloneNode(true);
        dateFilterAscClone.addEventListener('click', function () {
            _controls_listControl__WEBPACK_IMPORTED_MODULE_2__.listControl.sortItemsByDate(_this._target.allTasks, true);
            _controls_taskViewControl__WEBPACK_IMPORTED_MODULE_0__.taskViewControl.updateTaskView();
        });
        dateFilterDescClone.addEventListener('click', function () {
            _controls_listControl__WEBPACK_IMPORTED_MODULE_2__.listControl.sortItemsByDate(_this._target.allTasks, false);
            _controls_taskViewControl__WEBPACK_IMPORTED_MODULE_0__.taskViewControl.updateTaskView();
        });
        dateFilterAsc.replaceWith(dateFilterAscClone);
        dateFilterDesc.replaceWith(dateFilterDescClone);
        var listFilterAsc = document.querySelector(".listAscendingIconContainer");
        var listFilterDesc = document.querySelector(".listDescendingIconContainer");
        var listFilterAscClone = listFilterAsc.cloneNode(true);
        var listFilterDescClone = listFilterDesc.cloneNode(true);
        listFilterAscClone.addEventListener('click', function () {
            _controls_taskViewControl__WEBPACK_IMPORTED_MODULE_0__.taskViewControl.sortItemsByList(_this._target.allTasks, true);
            _controls_taskViewControl__WEBPACK_IMPORTED_MODULE_0__.taskViewControl.updateTaskView();
        });
        listFilterDescClone.addEventListener('click', function () {
            _controls_taskViewControl__WEBPACK_IMPORTED_MODULE_0__.taskViewControl.sortItemsByList(_this._target.allTasks, false);
            _controls_taskViewControl__WEBPACK_IMPORTED_MODULE_0__.taskViewControl.updateTaskView();
        });
        listFilterAsc.replaceWith(listFilterAscClone);
        listFilterDesc.replaceWith(listFilterDescClone);
    };
    taskView.prototype.genItemTitleInput = function () {
        var newItemTitleInput = document.createElement('input');
        newItemTitleInput.className = 'taskView-newItemTitleInput';
        newItemTitleInput.type = 'text';
        newItemTitleInput.placeholder = 'Enter Task...';
        newItemTitleInput.placeholder;
        function setFmtPlaceHolder(e) {
            var target = e.target;
            target.placeholder = 'priority (opt) | list (req) | title (req) | due datetime (opt)';
        }
        function removeFmtPlaceHolder(e) {
            var target = e.target;
            target.placeholder = 'Enter Task...';
        }
        newItemTitleInput.addEventListener('focus', setFmtPlaceHolder);
        newItemTitleInput.addEventListener('blur', removeFmtPlaceHolder);
        return newItemTitleInput;
    };
    taskView.prototype.genInputPriorityLevel = function () {
        var priorityLevel = document.createElement('select');
        priorityLevel.className = 'taskView-priorityLevelInput';
        var highPriority = document.createElement('option');
        highPriority.className = 'optItem';
        highPriority.value = 'High';
        highPriority.textContent = 'High';
        var MedPriority = document.createElement('option');
        MedPriority.className = 'optItem';
        MedPriority.value = 'Medium';
        MedPriority.textContent = 'Medium';
        var lowPriority = document.createElement('option');
        lowPriority.className = 'optItem';
        lowPriority.value = 'Low';
        lowPriority.textContent = 'Low';
        var noPriority = document.createElement('option');
        noPriority.className = 'optItem';
        noPriority.value = 'None';
        noPriority.textContent = 'None';
        var placeholder = document.createElement('option');
        placeholder.className = 'optItem';
        placeholder.value = 'None';
        placeholder.textContent = 'Priority';
        placeholder.hidden = true;
        placeholder.selected = true;
        priorityLevel.appendChild(placeholder);
        priorityLevel.appendChild(noPriority);
        priorityLevel.appendChild(lowPriority);
        priorityLevel.appendChild(MedPriority);
        priorityLevel.appendChild(highPriority);
        return priorityLevel;
    };
    taskView.prototype.genInputTargetList = function () {
        var targetList = document.createElement('select');
        targetList.className = 'targetListInput';
        var placeholder = document.createElement('option');
        placeholder.className = 'optionPlaceholder';
        placeholder.value = '';
        placeholder.textContent = 'Select List';
        placeholder.hidden = true;
        placeholder.selected = true;
        targetList.appendChild(placeholder);
        for (var _i = 0, _a = this._target.lists; _i < _a.length; _i++) {
            var list = _a[_i];
            var targetListOption = document.createElement('option');
            targetListOption.className = 'targetListOptItem';
            targetListOption.value = "".concat(list.listId);
            targetListOption.textContent = "".concat(list.listName);
            targetListOption.id = "".concat(list.listId);
            targetList.appendChild(targetListOption);
        }
        return targetList;
    };
    taskView.prototype.gentaskViewControlPanel = function () {
        var taskViewControlPanel = document.createElement('div');
        taskViewControlPanel.className = 'taskViewControlPanel';
        var inputContainer = document.createElement('div');
        inputContainer.className = 'taskView-inputContainer';
        var priorityLevel = this.genInputPriorityLevel();
        var targetList = this.genInputTargetList();
        var newItemTitleInput = this.genItemTitleInput();
        inputContainer.appendChild(priorityLevel);
        inputContainer.appendChild(targetList);
        inputContainer.appendChild(newItemTitleInput);
        var dateInput = document.createElement('input');
        dateInput.type = 'datetime-local';
        dateInput.className = 'taskView-dateInput';
        inputContainer.appendChild(dateInput);
        var submitButton = document.createElement('button');
        submitButton.className = 'taskView-submitButton';
        submitButton.innerHTML = "<svg width=\"15\" height=\"17\" viewBox=\"0 0 15 17\"><path fill=\"#fff\" d=\"M8.438 3.563l4.593 4.593a.928.928 0 001.312-1.313L8.16.66a.933.933 0 00-1.32 0L.656 6.844a.928.928 0 001.312 1.313l4.595-4.594v10.504c0 .515.417.933.933.933h.008a.933.933 0 00.934-.933V3.563z\"></path></svg>";
        submitButton.addEventListener('click', function (e) { _controls_taskViewControl__WEBPACK_IMPORTED_MODULE_0__.taskViewControl.addItem(e); });
        newItemTitleInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                _controls_taskViewControl__WEBPACK_IMPORTED_MODULE_0__.taskViewControl.addItem(e);
            }
        });
        taskViewControlPanel.appendChild(inputContainer);
        taskViewControlPanel.appendChild(submitButton);
        return taskViewControlPanel;
    };
    taskView.prototype.genTasksView = function (viewType) {
        if (viewType === void 0) { viewType = 0; }
        var map = { 0: this._target.allTasks, 1: this._target.tasksToday, 2: this._target.tasksThisWeek };
        var itemList = map[viewType];
        var viewBoardContainer = document.createElement('div');
        viewBoardContainer.className = 'viewBoardContainer';
        var viewBoard = this.genViewBoard();
        var _loop_1 = function (item) {
            this_1.objCache.push(new _itemPreview__WEBPACK_IMPORTED_MODULE_1__.itemPreview(item));
            var newItemPreview = this_1.objCache[this_1.objCache.length - 1].genHtml();
            newItemPreview.setAttribute('data-listId', "".concat(item.listId));
            var listNameContainer = document.createElement('div');
            listNameContainer.className = 'listNameContainer';
            var targetListName = this_1._target.lists.find(function (list) { return list.listId === item.listId; }).listName;
            listNameContainer.textContent = "(List Name: ".concat(targetListName, ")");
            var leftSide = newItemPreview.querySelector('.leftSide');
            leftSide.appendChild(listNameContainer);
            newItemPreview.addEventListener('mousedown', _controls_listControl__WEBPACK_IMPORTED_MODULE_2__.listControl.mouseDown);
            viewBoard.appendChild(newItemPreview);
            this_1.objCache.pop();
        };
        var this_1 = this;
        for (var _i = 0, itemList_1 = itemList; _i < itemList_1.length; _i++) {
            var item = itemList_1[_i];
            _loop_1(item);
        }
        _controls_taskViewControl__WEBPACK_IMPORTED_MODULE_0__.taskViewControl.configureItemPreviewDropdown(itemList, viewBoard);
        var taskViewControlPanel = this.gentaskViewControlPanel();
        viewBoardContainer.appendChild(viewBoard);
        viewBoardContainer.appendChild(taskViewControlPanel);
        return viewBoardContainer;
    };
    return taskView;
}());



/***/ }),
/* 66 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_taskView_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_taskView_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_taskView_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_taskView_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_taskView_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 67 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n  --taskView-height: 96%;\n}\n\n\n.viewBoardContainer{\n  background-color: #edf2f7;\n  border-radius: 16px;\n  height: 80vh;\n  width: 50vw;\n  padding-top: 5px;\n  padding-bottom: 10px;\n  overflow: hidden;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.viewBoard{\n  background-color: inherit;\n  border-radius: 16px;\n  height: var(--taskView-height);\n  width: 100%;\n  padding-top: 5px;\n  overflow: hidden;\n  overflow-y: scroll;\n  padding-bottom: 10px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n\n  gap: 5px;\n}\n\n\n.view-detail-modal{\n  color: rgba(0, 0, 0, 0.7);\n  background-color: #edf2f7;\n  position: absolute;\n  text-align: center;\n  border-radius: 10px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 4vh;\n}\n\n.listNameContainer{\n  color: #d5d2d2;\n  font-size: 0.7rem;\n  padding-left: 1vw;\n}\n\n\n.taskView-options-modal{\n  background-color: #edf2f7;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  width: 95%;\n  height: 90%;\n  padding-left: 1vh;\n  padding-right: 1vh;\n  border-radius: 10px;\n}\n\n.taskView-options-title-container{\n  flex: 1;\n}\n\n.taskView-options-title{\n  user-select: none;\n  background-color: #edf2f7;\n  font-weight: 600;\n  font-size: 1rem;\n  width: 85%;\n  border: none;\n  outline: none;\n}\n\n.icons-container{\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n}\n\n\n/* icon behavior */\n\n.taskView-options-icon{\n  cursor: pointer;\n}\n\n.taskView-options-icon:hover{\n  transform: scale(1.1);\n}\n\n\n\n\n\n/* taskView Control Panel */\n\n.taskViewControlPanel{\n  position: relative;\n  width: 95%;\n  height: calc(100% - var(--taskView-height));\n  background-color: #edf2f7;\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-top: 1px solid rgba(0, 0, 0, 0.2);\n  border-bottom-left-radius: 16px;\n  border-bottom-right-radius: 16px;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.taskView-inputContainer{\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: #fafafa;\n  color: #030303;\n  border-radius:10px;\n  padding: 5px;\n  outline: none;\n  border: 1px solid #cbd5e0;\n  width: 100%;\n}\n\n.taskView-priorityLevelInput, \n.targetListInput{\n  cursor: pointer;\n  border: 0;\n  background-color: #fafafa;\n  color: #030303;\n  outline: none;\n}\n\n\n\n.targetListInput{\n  width: 15%;\n}\n\n\n.taskView-dateInput{\n  width: 2%;\n  background-color: transparent;\n  border: none;\n}\n\n\n.taskView-newItemTitleInput{\n  flex: 1;\n  padding-left: 10px;\n  width: 76%;\n  background-color: #fafafa;\n  color: #030303;\n  outline: none;\n  border: 0;\n}\n\n.taskView-newItemTitleInput::placeholder{\n  font-style: italic;\n}\n\n\n\n.taskView-submitButton{\n  cursor: pointer;\n  border: 0;\n  width: 2rem;\n  height: 2rem;\n  background-color: #0083ff;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.taskView-submitButton:hover{\n  background-color: #0074e0;;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n.viewBoard::-webkit-scrollbar{\n  position: relative;\n  right: 40px;\n  width: 8px;\n  height: 10vh;\n}\n\n.viewBoard::-webkit-scrollbar-thumb{\n  background: transparent;\n  border-radius: 16px;\n}\n\n.viewBoard::-webkit-scrollbar-thumb:hover{\n  border: 2px solid white;\n  background: rgba(153, 153, 153, 0.5);\n}\n\n.viewBoard::-webkit-scrollbar-track{\n  height: 50vh;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  background: transparent;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_models_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_models_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _modules_models_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _modules_views_collectionView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _modules_controls_taskViewControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64);
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_5__);






function unitIntervalMap(a, b, x) {
    return (b - a) * x + a;
}
function getRandomDate(timeSpan) {
    var minDate = Date.now();
    var timeStamp = Math.floor(unitIntervalMap(minDate, minDate + timeSpan, Math.random()));
    return new Date(timeStamp);
}
var todo1 = new _modules_models_list__WEBPACK_IMPORTED_MODULE_1__.todoList("Test List");
var todo2 = new _modules_models_list__WEBPACK_IMPORTED_MODULE_1__.todoList("2 Test 2 List");
var todo3 = new _modules_models_list__WEBPACK_IMPORTED_MODULE_1__.todoList("Test List Oriental Twist");
var priorityChoices = ['Low', 'Medium', 'High', 'None'];
var hundredYearsLater = 3600 * 24 * 365 * 100 * 1000;
var oneWeekLater = 3600 * 24 * 7 * 1000;
var twoWeeksLater = 3600 * 24 * 14 * 1000;
var itemAmount = 3;
for (var i = 0; i < itemAmount; i++) {
    var params = {
        completed: false,
        title: "Test Todo Item ".concat(i + 1),
        createdDate: new Date(),
        dueDate: getRandomDate(twoWeeksLater),
        itemId: "".concat(uniqid__WEBPACK_IMPORTED_MODULE_5___default()()),
        priority: priorityChoices[i % 4],
        notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    };
    var newItem = new _modules_models_item__WEBPACK_IMPORTED_MODULE_0__.todoItem(params);
    todo1.add(newItem);
}
var itemAmount2 = 15;
for (var i = 0; i < itemAmount2; i++) {
    var params = {
        completed: false,
        title: "2 Test 2 Todo Item ".concat(i + 1),
        createdDate: new Date(),
        dueDate: getRandomDate(twoWeeksLater),
        itemId: "".concat(uniqid__WEBPACK_IMPORTED_MODULE_5___default()()),
        priority: priorityChoices[(i + 3) % 4],
        notes: "I said-a hip, hop, the hippie, the hippie\n    To the hip hip hop-a you don't stop the rock\n    It to the bang-bang boogie, say up jump the boogie\n    To the rhythm of the boogie, the beat",
    };
    var newItem = new _modules_models_item__WEBPACK_IMPORTED_MODULE_0__.todoItem(params);
    todo2.add(newItem);
}
var itemAmount3 = 9;
for (var i = 0; i < itemAmount3; i++) {
    var params = {
        completed: false,
        title: "Test Todo Item Oriental Twist ".concat(i + 1),
        createdDate: new Date(),
        dueDate: getRandomDate(twoWeeksLater),
        itemId: "".concat(uniqid__WEBPACK_IMPORTED_MODULE_5___default()()),
        priority: priorityChoices[(i + 3) % 4],
        notes: "1.\u53E4\u6C60\u3084 \u86D9\u98DB\u3073\u8FBC\u3080 \u6C34\u306E\u97F3 \u00B7 2.\u6625\u306E\u6D77 \u3072\u306D\u3082\u3059\u306E\u305F\u308A \u306E\u305F\u308A\u304B\u306A \u00B7 3. \u00B7 4.\u83DC\u306E\u82B1\u3084 \u6708\u306F\u6771\u306B \u65E5\u306F\u897F\u306B"
    };
    var newItem = new _modules_models_item__WEBPACK_IMPORTED_MODULE_0__.todoItem(params);
    todo3.add(newItem);
}
// for sideBar Nav
var listsCollectionWrapper = document.querySelector('.lists-collection-wrapper');
var listsCollection = new _modules_models_collection__WEBPACK_IMPORTED_MODULE_2__.Collection();
listsCollection.add(todo1);
listsCollection.add(todo2);
listsCollection.add(todo3);
_modules_controls_taskViewControl__WEBPACK_IMPORTED_MODULE_4__.taskViewControl.initializeCollection(listsCollection);
var collectionViewObj = new _modules_views_collectionView__WEBPACK_IMPORTED_MODULE_3__.collectionView(listsCollection);
var newCollectionView = collectionViewObj.genHtml();
listsCollectionWrapper.appendChild(newCollectionView);
collectionViewObj = null;
_modules_controls_taskViewControl__WEBPACK_IMPORTED_MODULE_4__.taskViewControl.viewAllTasks();

})();

/******/ })()
;