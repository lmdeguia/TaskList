import { Collection } from "../models/collection";
import { taskView } from "../views/taskView";
import { listView } from "../views/listView";
import { itemPreviewControl } from "./itemPreviewControl";
import { todoItem, Todo, discretePriority } from "../models/item";
import { itemDetail } from "../views/itemDetail";

import uniqid from 'uniqid';


class taskViewControl{

  static optionsModalContainer = document.querySelector('.options-modal-container') as HTMLDivElement;
  static contentContainer = document.querySelector('.content-container') as HTMLDivElement;
  static content = document.querySelector('.content') as HTMLDivElement;
  static allTasksTab = document.querySelector('.allTasks') as HTMLDivElement;
  static tasksTodayTab = document.querySelector('.tasksToday') as HTMLDivElement;
  static tasksThisWeekTab = document.querySelector('.tasksThisWeek') as HTMLDivElement;

  static objCache: Array<any> = [];
  static currentTab = this.allTasksTab;
  static listsCollection: Collection;


  static updateTaskView(type?: string): void{
    const modalContainer = document.querySelector('.filter-modal-container') as HTMLDivElement;
    taskViewControl.objCache.push(document.querySelector('.taskView-options-modal'));
    taskViewControl.objCache[taskViewControl.objCache.length - 1].remove();
    taskViewControl.objCache.pop();
    taskViewControl.viewAllTasks();
    modalContainer.classList.remove('show');
  }

  static viewAllTasks(): void{
    taskViewControl.currentTab.classList.remove('sideNav-selected-tab');
    taskViewControl.currentTab = taskViewControl.allTasksTab;
    taskViewControl.currentTab.classList.add('sideNav-selected-tab');
    const children = Array.from(taskViewControl.contentContainer.children) as Array<HTMLElement>;
    for (let child of children) {
      while (child.firstChild) {
        child.removeChild(child.firstChild);
      }
    }

    taskViewControl.objCache.push(new taskView(taskViewControl.listsCollection));

    const tasksViewOptions = taskViewControl.objCache[taskViewControl.objCache.length - 1].gentaskViewOptions('All Tasks');
    taskViewControl.optionsModalContainer.appendChild(tasksViewOptions);
    taskViewControl.objCache[taskViewControl.objCache.length - 1].configureSortIcons();
    const allTasksview = taskViewControl.objCache[taskViewControl.objCache.length - 1].genTasksView(0);
    taskViewControl.content.appendChild(allTasksview);
    taskViewControl.objCache.pop();
  }

  static viewTasksToday(): void{
    taskViewControl.currentTab.classList.remove('sideNav-selected-tab');
    taskViewControl.currentTab = taskViewControl.tasksTodayTab;
    taskViewControl.currentTab.classList.add('sideNav-selected-tab');
    const children = Array.from(taskViewControl.contentContainer.children) as Array<HTMLElement>;
    for (let child of children) {
      while (child.firstChild) {
        child.removeChild(child.firstChild);
      }
    }

    taskViewControl.objCache.push(new taskView(taskViewControl.listsCollection));

    const tasksViewOptions = taskViewControl.objCache[taskViewControl.objCache.length - 1].gentaskViewOptions('Tasks Today');
    taskViewControl.optionsModalContainer.appendChild(tasksViewOptions);
    taskViewControl.objCache[taskViewControl.objCache.length - 1].configureSortIcons();
    const allTasksview = taskViewControl.objCache[taskViewControl.objCache.length - 1].genTasksView(1);
    taskViewControl.content.appendChild(allTasksview);
    taskViewControl.objCache.pop();
  }

  static viewTasksThisWeek(): void{
    taskViewControl.currentTab.classList.remove('sideNav-selected-tab');
    taskViewControl.currentTab = taskViewControl.tasksThisWeekTab;
    taskViewControl.currentTab.classList.add('sideNav-selected-tab');
    const children = Array.from(taskViewControl.contentContainer.children) as Array<HTMLElement>;
    for (let child of children) {
      while (child.firstChild) {
        child.removeChild(child.firstChild);
      }
    }

    taskViewControl.objCache.push(new taskView(taskViewControl.listsCollection));

    const tasksViewOptions = taskViewControl.objCache[taskViewControl.objCache.length - 1].gentaskViewOptions('Tasks This Week');
    taskViewControl.optionsModalContainer.appendChild(tasksViewOptions);
    taskViewControl.objCache[taskViewControl.objCache.length - 1].configureSortIcons();
    const allTasksview = taskViewControl.objCache[taskViewControl.objCache.length - 1].genTasksView(2);
    taskViewControl.content.appendChild(allTasksview);
    taskViewControl.objCache.pop();
  }

  public static initializeCollection(inputCollection: Collection): void {
    this.listsCollection = inputCollection;
    this.currentTab.classList.add('sideNav-selected-tab');
    this.allTasksTab.addEventListener('click', (e) => {taskViewControl.viewAllTasks();});
    this.tasksTodayTab.addEventListener('click', (e) => {taskViewControl.viewTasksToday();});
    this.tasksThisWeekTab.addEventListener('click', (e) => {taskViewControl.viewTasksThisWeek();});
  }


  static viewDetail(e: Event, collection: Collection) {
    const viewItem = e.target as HTMLElement;
    const item = collection.allTasks.find((todo) => todo.itemId === viewItem.id);
    this.objCache.push(new itemDetail(item));
    const detailView = this.objCache[this.objCache.length - 1].genHtml() as HTMLDivElement;


    const modalContainer = document.querySelector('.dropdown-modal-container');
    modalContainer.classList.remove('show');

    const modalCanvas = document.querySelector('.popup-modal-canvas') as HTMLDivElement;
    modalCanvas.style.display = 'block';

    const viewDetailModal = document.querySelector('.view-detail-modal') as HTMLDivElement;
    if (viewDetailModal.firstChild) {
      viewDetailModal.removeChild(viewDetailModal.firstChild);
    }
    detailView.style.transform = 'scale(1.2)';
    viewDetailModal.appendChild(detailView);

    const viewDetailModalContainer = document.querySelector('.view-detail-modal-container') as HTMLDivElement;
    viewDetailModalContainer.classList.add('active');
    this.objCache.pop();
  }

  static sortItemsByList(tasks: Array<todoItem>, ascending: boolean = false) {
    const ascendingReturn = (ascending) ? -1 : 1;
    tasks.sort((a, b) => {
      if (a.listId < b.listId) {
        return ascendingReturn;
      }
      if (a.listId > b.listId) {
        return -ascendingReturn;
      }
      return 0;
    })
  }

  static addItem(e: Event) {
    const titleInput = document.querySelector('.taskView-newItemTitleInput') as HTMLInputElement;
    const priorityInput = document.querySelector('.taskView-priorityLevelInput') as HTMLSelectElement;
    const targetListInput = document.querySelector('.targetListInput') as HTMLSelectElement;
    const dateInput = document.querySelector('.taskView-dateInput') as HTMLInputElement;
  
    const textInput = titleInput.value;
    const priority = priorityInput.value as discretePriority;
    
    const date = dateInput.value;

    const setDate = (date.length > 0) ? new Date(date) : new Date();

    if ((targetListInput.value === '' ) || (textInput.trim().length < 1)) {
      return;
    }

    const targetListId = targetListInput.value;

    const params : Todo =  {
      completed: false,
      title: textInput,
      itemId: `${uniqid()}`,
      createdDate: new Date(),
      priority: priority,
      dueDate: setDate,
      notes: '',
      listId: `${targetListId}`,
    };

    const targetList = taskViewControl.listsCollection.lists.find((list) => list.listId === targetListId);
    
    const newItem = new todoItem(params);
    taskViewControl.listsCollection.allTasks.push(newItem);
    targetList.items.push(newItem);

    taskViewControl.viewAllTasks();
  }



  static delItem(e: Event, collection: Collection, multiSelect: boolean = false, inputId: string = '') {
    const delItem = (e) ? e.target as HTMLElement : null;
    const targetId = (multiSelect) ?  inputId : delItem.id;
    const item = collection.allTasks.find((todo) => todo.itemId === targetId);
    const listId = item.listId;

    const list = collection.lists.find((todoList) => todoList.listId === listId);
    const items = list.items;

    const idx = items.indexOf(item);
    items.splice(idx, 1);
    const target = document.querySelector(`[data-key='${targetId}'].itemPreview`);
    target.remove();

    const modalContainer = document.querySelector('.dropdown-modal-container');
    modalContainer.classList.remove('show');
  }


  
  static deleteItems() {
    let targetItems = Array.from(document.querySelectorAll('.itemPreview.selected')) as Array<HTMLElement>;
    targetItems.forEach(
      (divItem) => {
        taskViewControl.delItem(null, taskViewControl.listsCollection, true, divItem.dataset['key']);
      }
    )
    targetItems = null;
  }



  public static configureItemPreviewDropdown(tasks: Array<todoItem>, viewBoard: HTMLDivElement) {
    const viewItem = document.querySelector('.view-item') as HTMLDivElement;
    const delItem = document.querySelector('.del-item') as HTMLDivElement;

    const viewItemClone = viewItem.cloneNode(true);
    const delItemClone = delItem.cloneNode(true);

    viewItem.replaceWith(viewItemClone);
    delItem.replaceWith(delItemClone);

    viewItemClone.addEventListener('click', (e) => {
      taskViewControl.viewDetail(e, taskViewControl.listsCollection);
    })

    delItemClone.addEventListener('click', (e) => {
      taskViewControl.delItem(e, taskViewControl.listsCollection);
    });


    const icons = Array.from(viewBoard.querySelectorAll('path.optionsIcon'));
    const svgs = Array.from(viewBoard.querySelectorAll('svg.optionsIcon'));

    svgs.forEach((svg) => {
      svg.addEventListener('click', itemPreviewControl.stop);
      svg.addEventListener('click', itemPreviewControl.openDropdown);
    });

    icons.forEach((icon) => {
      icon.addEventListener('click', itemPreviewControl.stop);
      icon.addEventListener('click', itemPreviewControl.openDropdown);
    });
  }
}

export { taskViewControl }