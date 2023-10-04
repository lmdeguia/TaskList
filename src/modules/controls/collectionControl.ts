import { Collection } from "../models/collection";
import { todoList } from "../models/list";
import { collectionView } from "../views/collectionView";
import { listView } from "../views/listView";
import { itemPreviewControl } from "./itemPreviewControl";

class collectionControl{

  static targetItem: HTMLElement = null;
  static varX: number = 0; 
  static varY: number = 0; 
  static dragging: boolean = false;
  static placeholder: HTMLDivElement = null;
  static itemRect: DOMRect = null;
  static prev: HTMLElement = null;
  static next: HTMLElement = null;

  static objCache: Array<any> = [];


  static isAbove(nodeA: HTMLElement, nodeB: HTMLElement): boolean { // criteria for switching list items
    const rectA = nodeA.getBoundingClientRect();
    const rectB = nodeB.getBoundingClientRect();
  
    return (rectA.height / 2 + rectA.top) < (rectB.height / 2 + rectB.top);
  }
  
  
  static mouseMove(e: MouseEvent): void {
    e.stopPropagation();
    collectionControl.itemRect = collectionControl.targetItem.getBoundingClientRect();
  
    if (!collectionControl.dragging) {
      collectionControl.dragging = true;
      collectionControl.placeholder = document.createElement('div');
      collectionControl.placeholder.classList.add('list-preview-placeholder');
      collectionControl.targetItem.parentNode.insertBefore(
        collectionControl.placeholder, 
        collectionControl.targetItem.nextSibling);
      // collectionControl.targetItem.style.width = `${collectionControl.itemRect.width}px`;
      collectionControl.placeholder.style.minHeight = `${collectionControl.itemRect.height}px`;
      collectionControl.placeholder.style.width = `${collectionControl.itemRect.width}px`;
    }
  
    collectionControl.targetItem.style.position = 'absolute';
    collectionControl.targetItem.style.left = `calc(${e.pageX - collectionControl.varX}px)`
    collectionControl.targetItem.style.top = `${e.pageY - collectionControl.varY}px`
  
    collectionControl.prev = collectionControl.targetItem.previousElementSibling as HTMLElement;
    collectionControl.next = collectionControl.targetItem.nextElementSibling.nextElementSibling as HTMLElement;
  
    if (collectionControl.prev && collectionControl.isAbove(collectionControl.targetItem, collectionControl.prev)) {
      collectionControl.placeholder.parentNode.insertBefore(collectionControl.prev, collectionControl.placeholder.nextElementSibling);
      return;
    }
  
    if (collectionControl.next && collectionControl.isAbove(collectionControl.next, collectionControl.targetItem)) {
      collectionControl.next.parentNode.insertBefore(collectionControl.placeholder, collectionControl.next.nextElementSibling);
      collectionControl.next.parentNode.insertBefore(collectionControl.targetItem, collectionControl.placeholder);
    }
    
    
  }
  
  
  static mouseUp(e: MouseEvent): void {
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
  }
  
  static mouseDown(e: MouseEvent): void {
    e.stopPropagation();
    collectionControl.targetItem = e.target as HTMLElement;
    while (collectionControl.targetItem.parentElement.className !== 'lists-collection') {
      collectionControl.targetItem = collectionControl.targetItem.parentElement;
    }
    const rect = collectionControl.targetItem.getBoundingClientRect();
    // space outside page x: mu = px - (L0 + u)
    // space outside page y: nu = py - (T0 + v)
    collectionControl.varX = e.pageX - rect.left; // px - L0 = (u + mu) lhs is nonconstant while rhs is
    collectionControl.varY = e.pageY - rect.top; // py - T0 = (v + nu)
  
    document.addEventListener('mousemove', collectionControl.mouseMove);
    document.addEventListener('mouseup', collectionControl.mouseUp);
  }

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

  static openDropdown (e: Event): void {
    const modalContainer = document.querySelector('.list-dropdown-modal-container') as HTMLDivElement;
    const viewList = document.querySelector('.view-list') as HTMLDivElement;
    const delList = document.querySelector('.del-list') as HTMLDivElement;

    const target = e.target as HTMLElement;
    let finalTarget = target;
    while(!finalTarget.classList.contains('collection-item')){
      finalTarget = finalTarget.parentElement;
    }

    const itemId = finalTarget.id;
    viewList.setAttribute('id', itemId);
    delList.setAttribute('id', itemId);

    const rect = target.getBoundingClientRect();
    modalContainer.style.position = 'absolute';
    modalContainer.style.top = `${rect.bottom}px`;
    modalContainer.style.left = `${rect.left}px`;
    modalContainer.classList.add('show');
    e.stopPropagation();
  }

  static openList(e: Event, collection: Collection): void {
    const contentContainer = document.querySelector('.content-container') as HTMLDivElement;
    const content = document.querySelector('.content') as HTMLDivElement;
    // const listOptionsModal = document.querySelector('.list-options-modal');
    // listOptionsModal.remove();
    const children = Array.from(contentContainer.children) as Array<HTMLElement>;
    for (let child of children) {
      while (child.firstChild) {
        child.removeChild(child.firstChild);
      }
    }

    const listModalContainer = document.querySelector('.list-dropdown-modal-container')
    listModalContainer.classList.remove('show');

    const viewList = e.target as HTMLElement;
    
    if (content.firstChild){
      if (content.children[0].id === viewList.id){
        return;
      }
    }

    const targetList = collection.lists.find((list) => list.listId === viewList.id);
    this.objCache.push(new listView(targetList));
    //let newListViewObj = new listView(targetList); 
    const newListView = this.objCache[this.objCache.length - 1].genHtml();

    const viewItem = document.querySelector('.view-item') as HTMLDivElement;
    const viewItemClone = viewItem.cloneNode(true);
    viewItemClone.addEventListener('click', (e) => {
      itemPreviewControl.openDetail(e, targetList.items);
    });
    viewItem.replaceWith(viewItemClone);
    

    const delItem = document.querySelector('.del-item') as HTMLDivElement;
    const delItemClone = delItem.cloneNode(true);
    delItemClone.addEventListener('click', (e) => {
      itemPreviewControl.delItem(e, targetList.items)
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

  }

  static changePreviewTitle(e: Event, targetList: todoList):void {
    const oldName = targetList.listName;
    const listOptionsTitle = e.target as HTMLInputElement

    if (listOptionsTitle.value.trim().length < 1) {
      listOptionsTitle.value = oldName;
      return;
    }

    const listPreviewTitleArr = Array.from(document.querySelectorAll('.collection-item-title'));
    const listPreviewTitle = listPreviewTitleArr.find((preview) => preview.id === targetList.listId);
    listPreviewTitle.textContent = listOptionsTitle.value;

    targetList.listName = listOptionsTitle.value;


  }


  static openNewListModal() {
    const createListModalCanvas = document.querySelector('.popup-modal-canvas');
    const createListModalContainer = document.querySelector('.create-list-modal-container');
    createListModalCanvas.classList.add('active');
    createListModalContainer.classList.add('active');
  }

  static closeNewListModal() {
    const createListModalCanvas = document.querySelector('.popup-modal-canvas');
    const createListModalContainer = document.querySelector('.create-list-modal-container');
    createListModalCanvas.classList.remove('active');
    createListModalContainer.classList.remove('active');
  }


  static addNewList(e: Event, collection: Collection) {
    const newTitle = document.querySelector('.new-list-title') as HTMLInputElement;
    if (newTitle.value.trim().length < 1) {
      return;
    }

    const newList = new todoList(newTitle.value);
    collection.add(newList);

    this.objCache.push(new collectionView(collection));
    //let newListPreviewObj = new collectionView(collection);
    const newListPreview = this.objCache[this.objCache.length - 1].genListPreview(newList);

    const listsCollection = document.querySelector('.lists-collection');
    listsCollection.appendChild(newListPreview);
    newTitle.value = '';
    this.closeNewListModal();
    //newListPreviewObj = null;
  }

}

export { collectionControl }