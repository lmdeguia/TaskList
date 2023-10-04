import { todoItem } from "../models/item";
import { todoList } from "../models/list";
import { itemDetail } from "../views/itemDetail";

type discretePriority = "High" | "Medium" | "Low" | "None";

class itemPreviewControl {

  static objCache: Array<any> = [];

  static checkboxClick (e: Event, item: todoItem): void {
    
    const checkbox = e.target as HTMLInputElement;
    const content = document.querySelector('.content');
    const iconContainer = checkbox.parentElement.nextElementSibling as HTMLElement;
    const textContentContainer = iconContainer.nextElementSibling as HTMLElement;
    const path = (iconContainer.querySelector('svg > path') === null) ? iconContainer.querySelector('svg > g') : iconContainer.querySelector('svg > path');

    const itemDetailView = content.querySelector('.itemDetail') as HTMLDivElement;

    if (checkbox.checked) {
      if (path) {
        path.classList.add('completed');
        item.completed = true;
      }
      textContentContainer.classList.add('completed');
    } else {
      if (path) {
        path.classList.remove('completed');
      }
      textContentContainer.classList.remove('completed');
      item.completed = false;
    }

    if (content.children.length > 1) {
      if (itemDetailView.dataset['key'] === item.itemId ){
        itemDetailView.remove();
        this.objCache.push(new itemDetail(item));
        //let newItemDetail = new itemDetail(item);
        const newItemDetailView = this.objCache[this.objCache.length - 1].genHtml();
        if (item.completed) {
          newItemDetailView.classList.add('completed');
        }
        content.appendChild(newItemDetailView);
        this.objCache.pop();
        //newItemDetail = null;
      }
      
    }
    
  } 



  static focusItem (e: Event): void {
    const { target } = e;
    if (target instanceof HTMLElement) {
        let finalTarget = target;
        if (!finalTarget.classList.contains('itemPreview')) {
          while (!finalTarget.classList.contains('itemPreview')) {
            finalTarget = finalTarget.parentElement;
          }}
        
        const classList = Array.from(finalTarget.classList);
        if (classList.includes('selected')){
          finalTarget.classList.remove('selected');
        } else {
          finalTarget.classList.add('selected');
        }
    }
  }

  static openDropdown (e: Event): void {
    e.stopPropagation();
    const modalContainer = document.querySelector('.dropdown-modal-container') as HTMLDivElement;
    const viewItem = document.querySelector('.view-item') as HTMLDivElement;
    const delItem = document.querySelector('.del-item') as HTMLDivElement;

    const target = e.target as HTMLElement;
    let finalTarget = target;
    while(!finalTarget.classList.contains('itemPreview')){
      finalTarget = finalTarget.parentElement;
    }

    const itemId = finalTarget.dataset['key'];
    viewItem.setAttribute('id', itemId);
    delItem.setAttribute('id', itemId);

    const rect = target.getBoundingClientRect();
    modalContainer.style.position = 'absolute';
    modalContainer.style.top = `${rect.bottom}px`;
    modalContainer.style.left = `${rect.left}px`;
    modalContainer.classList.add('show');
  }



  static openDetail(e: Event, items: Array<todoItem>) {
    const content = document.querySelector('.content');
    if (content.children.length > 1) {
      content.children[1].remove();
    }


    const viewItem = e.target as HTMLElement;

    const item = items.find((todo) => todo.itemId === viewItem.id);
    //let detailViewObj = new itemDetail(item);
    this.objCache.push(new itemDetail(item));
    const detailView = this.objCache[this.objCache.length - 1].genHtml();
    
    if (item.completed) {
      detailView.classList.add('completed');
    }

    content.appendChild(detailView);

    const modalContainer = document.querySelector('.dropdown-modal-container');
    modalContainer.classList.remove('show');

    this.objCache.pop();
    //detailViewObj = null;

  }

  static delItem(e: Event, items: Array<todoItem>) {
    const delItem = e.target as HTMLElement;
    const content = document.querySelector('.content');
    
    if (content.children.length > 1) {
      const currentDetail = content.children[1] as HTMLElement;
      if (currentDetail.dataset['key'] === delItem.id){
        currentDetail.remove();
      }  
    }
    const item = items.find((todo) => todo.itemId === delItem.id);
    const idx = items.indexOf(item);
    items.splice(idx, 1);
    const target = document.querySelector(`[data-key='${delItem.id}'].itemPreview`);
    target.remove();

    const modalContainer = document.querySelector('.dropdown-modal-container');
    modalContainer.classList.remove('show');
  }

  

  static genPriorityIcon(item: todoItem, completed: string = '') {
    // icon source https://icon-sets.iconify.design/flat-color-icons/
    const dimensions = 22;
    const highPriority = `<svg id=${item.itemId} class="highPriorityIcon" xmlns="http://www.w3.org/2000/svg" width="${dimensions}" height="${dimensions}" viewBox="0 0 48 48"><path fill="#F44336" class="${completed}" d="m21.2 44.8l-18-18c-1.6-1.6-1.6-4.1 0-5.7l18-18c1.6-1.6 4.1-1.6 5.7 0l18 18c1.6 1.6 1.6 4.1 0 5.7l-18 18c-1.6 1.6-4.2 1.6-5.7 0z"/><path id="exclamationMark" fill="#fff" d="M21.6 32.7c0-.3.1-.6.2-.9c.1-.3.3-.5.5-.7c.2-.2.5-.4.8-.5s.6-.2 1-.2s.7.1 1 .2c.3.1.6.3.8.5c.2.2.4.4.5.7c.1.3.2.6.2.9s-.1.6-.2.9s-.3.5-.5.7c-.2.2-.5.4-.8.5c-.3.1-.6.2-1 .2s-.7-.1-1-.2s-.5-.3-.8-.5c-.2-.2-.4-.4-.5-.7s-.2-.5-.2-.9zm4.2-4.6h-3.6L21.7 13h4.6l-.5 15.1z"/></svg>`
    const medPriority = `<svg id=${item.itemId} class="medPriorityIcon" xmlns="http://www.w3.org/2000/svg" width="${dimensions}" height="${dimensions}" viewBox="0 0 48 48"><path fill="#FFC107" class="${completed}" d="m21.2 44.8l-18-18c-1.6-1.6-1.6-4.1 0-5.7l18-18c1.6-1.6 4.1-1.6 5.7 0l18 18c1.6 1.6 1.6 4.1 0 5.7l-18 18c-1.6 1.6-4.2 1.6-5.7 0z"/><g fill="#37474F"><circle cx="24" cy="24" r="2"/><circle cx="32" cy="24" r="2"/><circle cx="16" cy="24" r="2"/></g></svg>`
    const lowPriority = `<svg id=${item.itemId} class="lowPriorityIcon" xmlns="http://www.w3.org/2000/svg" width="${dimensions}" height="${dimensions}" viewBox="0 0 48 48"><path fill="#4CAF50" class="${completed}" d="m21.2 44.8l-18-18c-1.6-1.6-1.6-4.1 0-5.7l18-18c1.6-1.6 4.1-1.6 5.7 0l18 18c1.6 1.6 1.6 4.1 0 5.7l-18 18c-1.6 1.6-4.2 1.6-5.7 0z"/><g fill="#fff"><path d="M24 33.4L17 25h14z"/><path d="M22 14.8h4v12.3h-4z"/></g></svg>`
    const noPriority = `<svg id=${item.itemId} class="noPriorityIcon" xmlns="http://www.w3.org/2000/svg" width="${dimensions - 2}" height="${dimensions - 2}" viewBox="0 0 14 14"><g class="${completed}" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 9l-3 .54L5 6.5L10.73.79a1 1 0 0 1 1.42 0l1.06 1.06a1 1 0 0 1 0 1.42Z"/><path class="${completed}" d="M12 9.5v3a1 1 0 0 1-1 1H1.5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3"/></g></svg>`;

    let itemPriority = item.priority as discretePriority;
    let priorityIcon;
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
  }


  static stop(e: Event) : void {
    e.stopPropagation();
  }

  static iconBlend(e: Event) : void {
    const parent = e.target as HTMLElement;
    const icon = parent.querySelector('#noneIcon');
    icon.setAttribute('fill', 'rgba(0, 0, 0, 0.1)');
  }

}

export { itemPreviewControl }