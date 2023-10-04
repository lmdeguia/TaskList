import { todoItem, Todo, discretePriority } from "../models/item";
import { todoList } from "../models/list";
import { itemPreview } from "../views/itemPreview";
import { listView } from "../views/listView";
import { itemPreviewControl } from "./itemPreviewControl";
import * as uniqid from "uniqid";


class listControl{
  
  static targetItem: HTMLElement = null;
  static varX: number = 0; 
  static varY: number = 0; 
  static dragging: boolean = false;
  static placeholder: HTMLDivElement = null;
  static itemRect: DOMRect = null;
  static prev: HTMLElement = null;
  static next: HTMLElement = null;

  static taskViewFlag: boolean = false;

  static objCache: Array<any> = [];
  

  static isAbove(nodeA: HTMLElement, nodeB: HTMLElement): boolean { // criteria for switching list items
    const rectA = nodeA.getBoundingClientRect();
    const rectB = nodeB.getBoundingClientRect();
  
    return (rectA.height / 2 + rectA.top) < (rectB.height / 2 + rectB.top);
  }

  
  static mouseMove(e: MouseEvent): void {
    e.stopPropagation();
    listControl.itemRect = listControl.targetItem.getBoundingClientRect();
    //console.log(listControl.itemRect);
    if (!listControl.dragging) {
      listControl.dragging = true;
      listControl.placeholder = document.createElement('div');
      listControl.placeholder.classList.add('placeholder');
      listControl.targetItem.parentNode.insertBefore(
        listControl.placeholder, 
        listControl.targetItem.nextSibling);
      listControl.placeholder.style.minHeight = `${listControl.itemRect.height}px`;
      listControl.placeholder.style.width = `${listControl.itemRect.width}px`;



      listControl.targetItem.style.width = `${window.getComputedStyle(listControl.targetItem).getPropertyValue("width")}`;
      //listControl.targetItem.style.innerw
    }
  
    listControl.targetItem.style.position = 'absolute';


    if (!listControl.taskViewFlag) {
      listControl.targetItem.style.left = `${e.pageX - listControl.varX}px`;
      listControl.targetItem.style.top = `${e.pageY - listControl.varY}px`;
    } else {
      listControl.targetItem.style.left = `${e.pageX - listControl.varX}px`;
      listControl.targetItem.style.top = `${e.pageY - listControl.varY}px`;
    }
  
    listControl.prev = listControl.targetItem.previousElementSibling as HTMLElement;
    listControl.next = listControl.targetItem.nextElementSibling.nextElementSibling as HTMLElement;
  
    if (listControl.prev && listControl.isAbove(listControl.targetItem, listControl.prev)) {
      listControl.placeholder.parentNode.insertBefore(listControl.prev, listControl.placeholder.nextElementSibling);
      return;
    }
  
    if (listControl.next && listControl.isAbove(listControl.next, listControl.targetItem)) {
      listControl.next.parentNode.insertBefore(listControl.placeholder, listControl.next.nextElementSibling);
      listControl.next.parentNode.insertBefore(listControl.targetItem, listControl.placeholder);
    }
    
    
  }
  
  
  static mouseUp(e: MouseEvent): void {
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
  }

  static mouseDown(e: MouseEvent): void {
    e.stopPropagation();
    listControl.targetItem = e.target as HTMLElement;
    while (listControl.targetItem.parentElement.className !== 'todoList' && listControl.targetItem.parentElement.className !== 'viewBoard') {
      listControl.targetItem = listControl.targetItem.parentElement;
    }

    if (listControl.targetItem.parentElement.className === 'viewBoard') {
      listControl.taskViewFlag = true;
    }

    const rect = listControl.targetItem.getBoundingClientRect();
    // space outside page x: mu = px - (L0 + u)
    // space outside page y: nu = py - (T0 + v)
    listControl.varX = e.pageX - rect.left; // px - L0 = (u + mu) lhs is nonconstant while rhs is
    listControl.varY = e.pageY - rect.top; // py - T0 = (v + nu)
  
    document.addEventListener('mousemove', listControl.mouseMove);
    document.addEventListener('mouseup', listControl.mouseUp);
  }

  static addItem(e: Event, targetList: todoList) {
    const titleInput = document.querySelector('.newItemTitleInput') as HTMLInputElement;
    const priorityInput = document.querySelector('.priorityLevelInput') as HTMLSelectElement;
    const dateInput = document.querySelector('.dateInput') as HTMLInputElement;
  
    const textInput = titleInput.value;
    const priority = priorityInput.value as discretePriority;
    const date = dateInput.value;

    const setDate = (date.length > 0) ? new Date(date) : new Date();

    if ((priority.length < 1) || (textInput.trim().length < 1)) {
      return;
    }

    const params : Todo =  {
      completed: false,
      title: textInput,
      itemId: `${uniqid()}`,
      createdDate: new Date(),
      priority: priority,
      dueDate: setDate,
      notes: '',
      listId: `${targetList.listId}`,
    };

    const newItem = new todoItem(params);
    targetList.items.push(newItem);

    this.objCache.push(new itemPreview(newItem));
    //let newItemViewObj = new itemPreview(newItem);
    const newItemView = this.objCache[this.objCache.length - 1].genHtml();

    const listView = document.querySelector('.todoList') as HTMLElement;
    const firstChild = listView.children[0];

    const svg = newItemView.querySelector('svg.optionsIcon');
    svg.addEventListener('click', itemPreviewControl.stop);
    svg.addEventListener('click', itemPreviewControl.openDropdown);

    const icon = newItemView.querySelector('path.optionsIcon');
    icon.addEventListener('click', itemPreviewControl.stop);
    icon.addEventListener('click', itemPreviewControl.openDropdown);

    newItemView.addEventListener('mousedown', listControl.mouseDown);

    listView.insertBefore(newItemView, firstChild);

    // newItemViewObj = null;
    this.objCache.pop();


    titleInput.value = '';
    priorityInput.value = 'None';
    dateInput.value = '';
  }


  static selectAllItems() {
    const listViewItems = document.querySelectorAll('.itemPreview');
    listViewItems.forEach((item) => {
      item.classList.add('selected');
    })

  }

  static deSelectAllItems() {
    const listViewItems = document.querySelectorAll('.itemPreview');
    listViewItems.forEach((item) => {
      item.classList.remove('selected');
    })
  }

  static deleteItems(targetList: todoList) {
    const targetItems = Array.from(document.querySelectorAll('.itemPreview.selected')) as Array<HTMLElement>;
    const itemDetail = document.querySelector('.itemDetail') as HTMLElement;

    const targetIds = targetItems.map((item) => {
      return item.dataset['key'];
    })

    let detailId;
    if (itemDetail) {
      detailId = itemDetail.dataset['key'];
      if (targetIds.includes(detailId)) {
        itemDetail.remove();
      }
    }

    targetItems.forEach((item) => {
      item.remove();
    })

    //console.log(targetList);
    for (let id of targetIds) {
      const targetItem = targetList.items.find((item) => item.itemId === id)
      targetList.remove(targetItem);
    }
  }


  static openFilterDropDown(e: Event, taskViewFlag: boolean = false): void {
    const modalContainer = document.querySelector('.filter-modal-container') as HTMLDivElement;
    const target = e.target as HTMLElement;

    if (taskViewFlag) {
      const selectList = document.querySelector('.select-list') as HTMLDivElement;
      selectList.style.removeProperty('display');
    }

    const rect = target.getBoundingClientRect();
    modalContainer.classList.add('show');
    modalContainer.style.position = 'absolute';
    //console.log(taskViewFlag);
    const offSet = (taskViewFlag) ? '130' : '100';



    modalContainer.style.left= `calc(${rect.left}px - ${offSet}px)`;
    modalContainer.style.top = `${rect.bottom}px`;
    e.stopPropagation();
  }

  static sortItemsByCreatedDate(items: Array<todoItem>, ascending: boolean) {
    if (ascending) {
      items.sort((itemA, itemB) => { return Math.round(itemA.createdDate.getTime()/1000) - Math.round(itemB.createdDate.getTime()/1000)} )
    } else {
      items.sort((itemA, itemB) => { return Math.round(itemB.createdDate.getTime()/1000) - Math.round(itemA.createdDate.getTime()/1000)} )
    }
  }

  static sortItemsByDate(items: Array<todoItem>, ascending: boolean) {
    if (ascending) {
      items.sort((itemA, itemB) => { return Math.round(itemA.dueDate.getTime()/1000) - Math.round(itemB.dueDate.getTime()/1000)} )
    } else {
      items.sort((itemA, itemB) => { return Math.round(itemB.dueDate.getTime()/1000) - Math.round(itemA.dueDate.getTime()/1000)} )
    }
  }

  static sortItemsByPriority(items: Array<todoItem>, ascending: boolean) {
    const map = {'None': 0, 'Low': 1, 'Medium': 2, 'High': 3};
    if (ascending){
      items.sort((itemA, itemB) => map[itemA.priority] - map[itemB.priority]);
    } else {
      items.sort((itemA, itemB) => map[itemB.priority] - map[itemA.priority]); 
    }
  }

  static updateListView(list: todoList) {
    const modalContainer = document.querySelector('.filter-modal-container') as HTMLDivElement;
    const listContainer = document.querySelector('.listContainer');

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
    this.objCache.push(new listView(list));
    const newListView = this.objCache[this.objCache.length - 1].genHtml();
    listContainer.replaceWith(newListView);
    this.objCache.pop();
    
    modalContainer.classList.remove('show');

    const viewItem = document.querySelector('.view-item') as HTMLDivElement;
    const viewItemClone = viewItem.cloneNode(true);
    viewItemClone.addEventListener('click', (e) => {
      itemPreviewControl.openDetail(e, list.items);
    });
    viewItem.replaceWith(viewItemClone);
    

    const delItem = document.querySelector('.del-item') as HTMLDivElement;
    const delItemClone = delItem.cloneNode(true);
    delItemClone.addEventListener('click', (e) => {
      itemPreviewControl.delItem(e, list.items)
    });
    delItem.replaceWith(delItemClone);
  }


  
}



export { listControl }