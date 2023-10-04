import { todoList } from "../models/list";
import { itemPreview } from "./itemPreview";
import { itemPreviewControl } from "../controls/itemPreviewControl";
import { listControl } from "../controls/listControl";
import "./styles/listView.css";

import { collectionControl } from "../controls/collectionControl";

class listView {
  private objCache: Array<any>;

  constructor(private target: todoList) {
    this.target = target;
    this.objCache = [];
  }


  genListOptionsTitle() {
    const listOptionsTitleContainer = document.createElement('div');
    listOptionsTitleContainer.className = 'list-options-title-container';

    const listOptionsTitle = document.createElement('input');
    listOptionsTitle.className = 'list-options-title';
    listOptionsTitle.type = 'text';
    listOptionsTitle.spellcheck = false;

    listOptionsTitle.id = this.target.listId;
    listOptionsTitle.value = this.target.listName;

    listOptionsTitle.addEventListener('change', (e) => {
      collectionControl.changePreviewTitle(e, this.target);
    });

    listOptionsTitleContainer.appendChild(listOptionsTitle);

    return listOptionsTitleContainer;
  }


  genListIcons() {
    const iconsContainer = document.createElement('div');
    iconsContainer.className = 'icons-container';

    const filterContainer = document.createElement('div');
    filterContainer.className = 'list-options-filter-container list-options-icon';
    filterContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 20q-.425 0-.713-.288T10 19v-6L4.2 5.6q-.375-.5-.113-1.05T5 4h14q.65 0 .913.55T19.8 5.6L14 13v6q0 .425-.288.713T13 20h-2Zm1-7.7L16.95 6h-9.9L12 12.3Zm0 0Z"/></svg>`
    filterContainer.addEventListener('click', listControl.openFilterDropDown);
    iconsContainer.appendChild(filterContainer);

    const selectAllContainer = document.createElement('div');
    selectAllContainer.className = 'list-options-selectAll-container list-options-icon';
    selectAllContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M2 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Zm2 15a2 2 0 0 1-1.732-1H14a3 3 0 0 0 3-3V4.268A2 2 0 0 1 18 6v8a4 4 0 0 1-4 4H6Zm6.376-10.67a.5.5 0 0 0-.752-.66l-3.148 3.598l-1.622-1.622a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .73-.025l3.5-4Z"/></svg>`;
    selectAllContainer.addEventListener('click', listControl.selectAllItems);
    iconsContainer.appendChild(selectAllContainer);

    const deSelectAllContainer = document.createElement('div');
    deSelectAllContainer.className = 'list-options-deSelectAll-container list-options-icon';
    deSelectAllContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 13v-2h2v2H3Zm4 8v-2h2v2H7Zm4-16V3h2v2h-2Zm8 0V3q.825 0 1.413.588T21 5h-2ZM5 21q-.825 0-1.413-.588T3 19h2v2Zm-2-4v-2h2v2H3Zm8 4v-2h2v2h-2Zm8-8v-2h2v2h-2Zm0-4V7h2v2h-2Zm-4-4V3h2v2h-2ZM9 3v2H7.825L7 4.175V3h2Zm12 12v2h-1.175L19 16.175V15h2ZM9 15h3.175L9 11.825V15Zm6 6v-2h2v2h-2Zm2-6.825l-2-2V9h-3.175l-2-2H16q.425 0 .713.288T17 8v6.175ZM3 9V7h2v2H3Zm16.075 12.9l-4.9-4.9H8q-.425 0-.713-.288T7 16V9.825l-4.9-4.9q-.275-.275-.275-.687t.275-.713q.3-.3.713-.3t.712.3L20.5 20.5q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288Z"/></svg>`;
    deSelectAllContainer.addEventListener('click', listControl.deSelectAllItems);
    iconsContainer.appendChild(deSelectAllContainer);

    const deleteContainer = document.createElement('div');
    deleteContainer.className = 'list-options-delete-container list-options-icon';
    deleteContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z"/></svg>`;
    deleteContainer.addEventListener('click', () => {listControl.deleteItems(this.target)});
    iconsContainer.appendChild(deleteContainer);

    return iconsContainer;
  }


  genListOptions() {
    const listOptionsModal = document.createElement('div');
    listOptionsModal.className = 'list-options-modal';

    const listOptionsTitleContainer = this.genListOptionsTitle(); 
    const iconsContainer = this.genListIcons();
    
    listOptionsModal.appendChild(listOptionsTitleContainer);
    listOptionsModal.appendChild(iconsContainer);

    return listOptionsModal;
  }

  configureSortIcons() {
    const priorityFilterAsc = document.querySelector(".priorityAscendingIconContainer");
    const priorityFilterDesc = document.querySelector(".priorityDescendingIconContainer");

    const priorityFilterAscClone = priorityFilterAsc.cloneNode(true);
    const priorityFilterDescClone = priorityFilterDesc.cloneNode(true);

    priorityFilterAscClone.addEventListener('click', () => {
      listControl.sortItemsByPriority(this.target.items, true);
      listControl.updateListView(this.target);
    })
    priorityFilterDescClone.addEventListener('click', () => {
      listControl.sortItemsByPriority(this.target.items, false);
      listControl.updateListView(this.target);
    })

    priorityFilterAsc.replaceWith(priorityFilterAscClone);
    priorityFilterDesc.replaceWith(priorityFilterDescClone);

    const createdDateFilterAsc = document.querySelector(".createdDateAscendingIconContainer");
    const createdDateFilterDesc = document.querySelector(".createdDateDescendingIconContainer");

    const createdDateFilterAscClone = createdDateFilterAsc.cloneNode(true);
    const createdDateFilterDescClone = createdDateFilterDesc.cloneNode(true);

    createdDateFilterAscClone.addEventListener('click', () => {
      listControl.sortItemsByCreatedDate(this.target.items, true);
      listControl.updateListView(this.target);
    })

    createdDateFilterDescClone.addEventListener('click', () => {
      listControl.sortItemsByCreatedDate(this.target.items, false);
      listControl.updateListView(this.target);
    })

    createdDateFilterAsc.replaceWith(createdDateFilterAscClone);
    createdDateFilterDesc.replaceWith(createdDateFilterDescClone);

    const dateFilterAsc = document.querySelector(".dateAscendingIconContainer");
    const dateFilterDesc = document.querySelector(".dateDescendingIconContainer");

    const dateFilterAscClone = dateFilterAsc.cloneNode(true);
    const dateFilterDescClone = dateFilterDesc.cloneNode(true);

    dateFilterAscClone.addEventListener('click', () => {
      listControl.sortItemsByDate(this.target.items, true);
      listControl.updateListView(this.target);
    })

    dateFilterDescClone.addEventListener('click', () => {
      listControl.sortItemsByDate(this.target.items, false);
      listControl.updateListView(this.target);
    })

    dateFilterAsc.replaceWith(dateFilterAscClone);
    dateFilterDesc.replaceWith(dateFilterDescClone);
  }

  private configureItemPreviewDropdown(list: HTMLDivElement) {

    const viewItem = document.querySelector('.view-item') as HTMLDivElement;
    const viewItemClone = viewItem.cloneNode(true) as HTMLDivElement;
    viewItem.replaceWith(viewItemClone);
    viewItemClone.addEventListener('click', (e) => {
      itemPreviewControl.openDetail(e, this.target.items);
    });

    const delItem = document.querySelector('.del-item') as HTMLDivElement;
    const delItemClone = delItem.cloneNode(true) as HTMLDivElement;
    delItem.replaceWith(delItemClone);
    delItemClone.addEventListener('click', (e) => {
      itemPreviewControl.delItem(e, this.target.items)
    });

    const icons = Array.from(list.querySelectorAll('path.optionsIcon'));
    const svgs = Array.from(list.querySelectorAll('svg.optionsIcon'));

    svgs.forEach((svg) => {
      svg.addEventListener('click', itemPreviewControl.stop);
      svg.addEventListener('click', itemPreviewControl.openDropdown);
    });
    icons.forEach((icon) => {
      icon.addEventListener('click', itemPreviewControl.stop);
      icon.addEventListener('click', itemPreviewControl.openDropdown);
    });
  }

  private genItemTitleInput() {
    const newItemTitleInput = document.createElement('input');
    newItemTitleInput.className = 'newItemTitleInput';
    newItemTitleInput.type = 'text';

    newItemTitleInput.placeholder = 'Enter Task...';
    newItemTitleInput.placeholder

    function setFmtPlaceHolder(e: Event) {
      const target = e.target as HTMLInputElement;
      target.placeholder = 'priority (opt) | title (req) | due datetime (opt)';
    }

    function removeFmtPlaceHolder(e: Event) {
      const target = e.target as HTMLInputElement;
      target.placeholder = 'Enter Task...';
    }

    newItemTitleInput.addEventListener('focus', setFmtPlaceHolder);
    newItemTitleInput.addEventListener('blur', removeFmtPlaceHolder);

    return newItemTitleInput;
  }

  private genInputPriorityLevel() {
    const priorityLevel = document.createElement('select') as HTMLSelectElement;
    priorityLevel.className = 'priorityLevelInput';

    const highPriority = document.createElement('option')
    highPriority.className = 'optItem';
    highPriority.value = 'High';
    highPriority.textContent = 'High';

    const MedPriority = document.createElement('option')
    MedPriority.className = 'optItem';
    MedPriority.value = 'Medium';
    MedPriority.textContent = 'Medium';

    const lowPriority = document.createElement('option');
    lowPriority.className = 'optItem';
    lowPriority.value = 'Low';
    lowPriority.textContent = 'Low';

    const noPriority = document.createElement('option');
    noPriority.className = 'optItem';
    noPriority.value = 'None';
    noPriority.textContent = 'None';

    const placeholder = document.createElement('option');
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
  }

  private genListControlPanel() {
    const listControlPanel = document.createElement('div');
    listControlPanel.className = 'listControlPanel';

    const inputContainer = document.createElement('div');
    inputContainer.className = 'inputContainer';
  
    const priorityLevel = this.genInputPriorityLevel();
    const newItemTitleInput = this.genItemTitleInput();

    inputContainer.appendChild(priorityLevel);
    inputContainer.appendChild(newItemTitleInput);
     
    
    const dateInput = document.createElement('input');
    dateInput.type = 'datetime-local';
    dateInput.className = 'dateInput';

    inputContainer.appendChild(dateInput);


    const submitButton = document.createElement('button');
    submitButton.className = 'submitButton';
    submitButton.innerHTML = `<svg width="15" height="17" viewBox="0 0 15 17"><path fill="#fff" d="M8.438 3.563l4.593 4.593a.928.928 0 001.312-1.313L8.16.66a.933.933 0 00-1.32 0L.656 6.844a.928.928 0 001.312 1.313l4.595-4.594v10.504c0 .515.417.933.933.933h.008a.933.933 0 00.934-.933V3.563z"></path></svg>`

    submitButton.addEventListener('click', (e) => {listControl.addItem(e, this.target)});
    newItemTitleInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        listControl.addItem(e, this.target);
      }
    })

    listControlPanel.appendChild(inputContainer);
    listControlPanel.appendChild(submitButton);

    return listControlPanel;
  }


  genHtml() {
    const optionsModalContainer = document.querySelector('.options-modal-container');
    const listOptions = this.genListOptions();
    optionsModalContainer.appendChild(listOptions);

    this.configureSortIcons();

    const listContainer =document.createElement('div');
    listContainer.className = 'listContainer';
    listContainer.id = this.target.listId;

    const list = document.createElement('div');
    list.className = 'todoList';

    for (let i = 0; i < this.target.items.length; i += 1) {
      const item = this.target.items[i];
      this.objCache.push(new itemPreview(item));
      const preview = this.objCache[this.objCache.length - 1].genHtml()
      preview.addEventListener('mousedown', listControl.mouseDown);
      list.appendChild(preview);
      this.objCache.pop();
    }

    this.configureItemPreviewDropdown(list);
    listContainer.appendChild(list);

    const listControlPanel = this.genListControlPanel();

    listContainer.appendChild(listControlPanel);

    return listContainer;
  }


}

export { listView }