import { taskViewControl } from "../controls/taskViewControl";
import { itemPreviewControl } from "../controls/itemPreviewControl";
import { itemDetail } from "./itemDetail";
import { Collection } from "../models/collection"
import { todoItem } from "../models/item";
import { itemPreview } from "./itemPreview";
import { listControl } from "../controls/listControl";
import format from "date-fns/format";

import './styles/taskView.css';

type vType = 0 | 1 | 2;

class taskView{

  private objCache: Array<any>;
  constructor(private _target: Collection) {
    this._target = _target;
    this.objCache = []
  }

  genViewBoard() {
    const viewBoard = document.createElement('div');
    viewBoard.className = 'viewBoard';
    return viewBoard;
  }

  gentaskViewOptionsTitle(taskViewType: string) {
    const taskViewOptionsTitleContainer = document.createElement('div');
    taskViewOptionsTitleContainer.className = 'taskView-options-title-container';

    const taskViewOptionsTitle = document.createElement('h1');
    taskViewOptionsTitle.className = 'taskView-options-title';
    taskViewOptionsTitle.textContent = taskViewType;

    taskViewOptionsTitleContainer.appendChild(taskViewOptionsTitle);

    return taskViewOptionsTitleContainer;
  }

  gentaskViewIcons() {
    const iconsContainer = document.createElement('div');
    iconsContainer.className = 'icons-container';

    const filterContainer = document.createElement('div');
    filterContainer.className = 'taskView-options-filter-container taskView-options-icon';
    filterContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 20q-.425 0-.713-.288T10 19v-6L4.2 5.6q-.375-.5-.113-1.05T5 4h14q.65 0 .913.55T19.8 5.6L14 13v6q0 .425-.288.713T13 20h-2Zm1-7.7L16.95 6h-9.9L12 12.3Zm0 0Z"/></svg>`
    filterContainer.addEventListener('click', (e) => {listControl.openFilterDropDown(e, true)});
    iconsContainer.appendChild(filterContainer);

    const selectAllContainer = document.createElement('div');
    selectAllContainer.className = 'taskView-options-selectAll-container taskView-options-icon';
    selectAllContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M2 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Zm2 15a2 2 0 0 1-1.732-1H14a3 3 0 0 0 3-3V4.268A2 2 0 0 1 18 6v8a4 4 0 0 1-4 4H6Zm6.376-10.67a.5.5 0 0 0-.752-.66l-3.148 3.598l-1.622-1.622a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .73-.025l3.5-4Z"/></svg>`;
    selectAllContainer.addEventListener('click', listControl.selectAllItems);
    iconsContainer.appendChild(selectAllContainer);

    const deSelectAllContainer = document.createElement('div');
    deSelectAllContainer.className = 'taskView-options-deSelectAll-container taskView-options-icon';
    deSelectAllContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 13v-2h2v2H3Zm4 8v-2h2v2H7Zm4-16V3h2v2h-2Zm8 0V3q.825 0 1.413.588T21 5h-2ZM5 21q-.825 0-1.413-.588T3 19h2v2Zm-2-4v-2h2v2H3Zm8 4v-2h2v2h-2Zm8-8v-2h2v2h-2Zm0-4V7h2v2h-2Zm-4-4V3h2v2h-2ZM9 3v2H7.825L7 4.175V3h2Zm12 12v2h-1.175L19 16.175V15h2ZM9 15h3.175L9 11.825V15Zm6 6v-2h2v2h-2Zm2-6.825l-2-2V9h-3.175l-2-2H16q.425 0 .713.288T17 8v6.175ZM3 9V7h2v2H3Zm16.075 12.9l-4.9-4.9H8q-.425 0-.713-.288T7 16V9.825l-4.9-4.9q-.275-.275-.275-.687t.275-.713q.3-.3.713-.3t.712.3L20.5 20.5q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288Z"/></svg>`;
    deSelectAllContainer.addEventListener('click', listControl.deSelectAllItems);
    iconsContainer.appendChild(deSelectAllContainer);

    const deleteContainer = document.createElement('div');
    deleteContainer.className = 'taskView-options-delete-container taskView-options-icon';
    deleteContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z"/></svg>`;
    deleteContainer.addEventListener('click', taskViewControl.deleteItems);
    iconsContainer.appendChild(deleteContainer);

    return iconsContainer;
  }


  gentaskViewOptions(taskViewType: string) {
    const taskViewOptionsModal = document.createElement('div');
    taskViewOptionsModal.className = 'taskView-options-modal';

    const taskViewOptionsTitleContainer = this.gentaskViewOptionsTitle(taskViewType); 
    const iconsContainer = this.gentaskViewIcons();
    
    taskViewOptionsModal.appendChild(taskViewOptionsTitleContainer);
    taskViewOptionsModal.appendChild(iconsContainer);

    return taskViewOptionsModal;
  }

  configureSortIcons() {
    const priorityFilterAsc = document.querySelector(".priorityAscendingIconContainer");
    const priorityFilterDesc = document.querySelector(".priorityDescendingIconContainer");

    const priorityFilterAscClone = priorityFilterAsc.cloneNode(true);
    const priorityFilterDescClone = priorityFilterDesc.cloneNode(true);

    priorityFilterAscClone.addEventListener('click', () => {
      listControl.sortItemsByPriority(this._target.allTasks, true);
      taskViewControl.updateTaskView();
    })
    priorityFilterDescClone.addEventListener('click', () => {
      listControl.sortItemsByPriority(this._target.allTasks, false);
      taskViewControl.updateTaskView();
    })

    priorityFilterAsc.replaceWith(priorityFilterAscClone);
    priorityFilterDesc.replaceWith(priorityFilterDescClone);

    const createdDateFilterAsc = document.querySelector(".createdDateAscendingIconContainer");
    const createdDateFilterDesc = document.querySelector(".createdDateDescendingIconContainer");

    const createdDateFilterAscClone = createdDateFilterAsc.cloneNode(true);
    const createdDateFilterDescClone = createdDateFilterDesc.cloneNode(true);

    createdDateFilterAscClone.addEventListener('click', () => {
      listControl.sortItemsByCreatedDate(this._target.allTasks, true);
      taskViewControl.updateTaskView();
    })

    createdDateFilterDescClone.addEventListener('click', () => {
      listControl.sortItemsByCreatedDate(this._target.allTasks, false);
      taskViewControl.updateTaskView();
    })

    createdDateFilterAsc.replaceWith(createdDateFilterAscClone);
    createdDateFilterDesc.replaceWith(createdDateFilterDescClone);

    const dateFilterAsc = document.querySelector(".dateAscendingIconContainer");
    const dateFilterDesc = document.querySelector(".dateDescendingIconContainer");

    const dateFilterAscClone = dateFilterAsc.cloneNode(true);
    const dateFilterDescClone = dateFilterDesc.cloneNode(true);

    dateFilterAscClone.addEventListener('click', () => {
      listControl.sortItemsByDate(this._target.allTasks, true);
      taskViewControl.updateTaskView();
    })

    dateFilterDescClone.addEventListener('click', () => {
      listControl.sortItemsByDate(this._target.allTasks, false);
      taskViewControl.updateTaskView();
    })

    dateFilterAsc.replaceWith(dateFilterAscClone);
    dateFilterDesc.replaceWith(dateFilterDescClone);

    const listFilterAsc = document.querySelector(".listAscendingIconContainer");
    const listFilterDesc = document.querySelector(".listDescendingIconContainer");

    const listFilterAscClone = listFilterAsc.cloneNode(true);
    const listFilterDescClone = listFilterDesc.cloneNode(true);

    listFilterAscClone.addEventListener('click', () => {
      taskViewControl.sortItemsByList(this._target.allTasks, true);
      taskViewControl.updateTaskView();
    })
    listFilterDescClone.addEventListener('click', () => {
      taskViewControl.sortItemsByList(this._target.allTasks, false);
      taskViewControl.updateTaskView();
    })

    listFilterAsc.replaceWith(listFilterAscClone);
    listFilterDesc.replaceWith(listFilterDescClone);

  }

  private genItemTitleInput() {
    const newItemTitleInput = document.createElement('input');
    newItemTitleInput.className = 'taskView-newItemTitleInput';
    newItemTitleInput.type = 'text';

    newItemTitleInput.placeholder = 'Enter Task...';
    newItemTitleInput.placeholder

    function setFmtPlaceHolder(e: Event) {
      const target = e.target as HTMLInputElement;
      target.placeholder = 'priority (opt) | list (req) | title (req) | due datetime (opt)';
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
    priorityLevel.className = 'taskView-priorityLevelInput';

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

  private genInputTargetList() {
    const targetList = document.createElement('select') as HTMLSelectElement;
    targetList.className = 'targetListInput';

    const placeholder = document.createElement('option');
    placeholder.className = 'optionPlaceholder';
    placeholder.value = '';
    placeholder.textContent = 'Select List';
    placeholder.hidden = true;
    placeholder.selected = true;
    targetList.appendChild(placeholder);

    for (let list of this._target.lists) {
      const targetListOption = document.createElement('option');
      targetListOption.className = 'targetListOptItem';
      targetListOption.value = `${list.listId}`;
      targetListOption.textContent = `${list.listName}`;
      targetListOption.id = `${list.listId}`;
      targetList.appendChild(targetListOption);
    }

    return targetList;
  }



gentaskViewControlPanel() {
    const taskViewControlPanel = document.createElement('div');
    taskViewControlPanel.className = 'taskViewControlPanel';

    const inputContainer = document.createElement('div');
    inputContainer.className = 'taskView-inputContainer';
  
    const priorityLevel = this.genInputPriorityLevel();
    const targetList = this.genInputTargetList();
    const newItemTitleInput = this.genItemTitleInput();

    inputContainer.appendChild(priorityLevel);
    inputContainer.appendChild(targetList);
    inputContainer.appendChild(newItemTitleInput);
     
    
    const dateInput = document.createElement('input');
    dateInput.type = 'datetime-local';
    dateInput.className = 'taskView-dateInput';

    inputContainer.appendChild(dateInput);


    const submitButton = document.createElement('button');
    submitButton.className = 'taskView-submitButton';
    submitButton.innerHTML = `<svg width="15" height="17" viewBox="0 0 15 17"><path fill="#fff" d="M8.438 3.563l4.593 4.593a.928.928 0 001.312-1.313L8.16.66a.933.933 0 00-1.32 0L.656 6.844a.928.928 0 001.312 1.313l4.595-4.594v10.504c0 .515.417.933.933.933h.008a.933.933 0 00.934-.933V3.563z"></path></svg>`

    submitButton.addEventListener('click', (e) => {taskViewControl.addItem(e)});
    newItemTitleInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        taskViewControl.addItem(e);
      }
    })

    taskViewControlPanel.appendChild(inputContainer);
    taskViewControlPanel.appendChild(submitButton);

    return taskViewControlPanel;
  }

  

  genTasksView(viewType: vType = 0) {

    const map = {0 : this._target.allTasks, 1: this._target.tasksToday, 2: this._target.tasksThisWeek};

    const itemList = map[viewType];
    const viewBoardContainer = document.createElement('div');
    viewBoardContainer.className = 'viewBoardContainer';
    const viewBoard = this.genViewBoard();

    for (let item of itemList) {
      this.objCache.push(new itemPreview(item));
      const newItemPreview = this.objCache[this.objCache.length - 1].genHtml();

      newItemPreview.setAttribute('data-listId', `${item.listId}`);

      const listNameContainer = document.createElement('div');
      listNameContainer.className = 'listNameContainer';

      const targetListName = this._target.lists.find((list) => list.listId === item.listId).listName;

      listNameContainer.textContent = `(List Name: ${targetListName})`;


      const leftSide = newItemPreview.querySelector('.leftSide');
      leftSide.appendChild(listNameContainer);

      newItemPreview.addEventListener('mousedown', listControl.mouseDown);
      viewBoard.appendChild(newItemPreview);
      this.objCache.pop();
    }

    taskViewControl.configureItemPreviewDropdown(itemList, viewBoard);

    const taskViewControlPanel = this.gentaskViewControlPanel();

    viewBoardContainer.appendChild(viewBoard);
    viewBoardContainer.appendChild(taskViewControlPanel);

    return viewBoardContainer;
  }







}


export { taskView }