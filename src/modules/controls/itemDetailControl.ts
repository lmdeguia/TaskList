import { todoItem } from "../models/item";
import { todoList } from "../models/list";
import { itemDetail } from "../views/itemDetail";
import { itemPreviewControl } from "./itemPreviewControl";

class itemDetailControl{
  static closeDetail(e: Event) {
    const modalCanvas = document.querySelector('.popup-modal-canvas') as HTMLDivElement;
    const viewDetailModalContainer = document.querySelector('.view-detail-modal-container') as HTMLDivElement;
    if (viewDetailModalContainer.classList.contains('active')) {
      viewDetailModalContainer.classList.remove('active');
      modalCanvas.style.display = 'none';
      return;
    }
    const target = e.target as HTMLElement;
    let parent = target.parentElement as HTMLElement;
    while(!parent.classList.contains('itemDetail')){
      parent = parent.parentElement;
    }
    parent.remove();
  }

  static editTitle(e: Event, target: todoItem) {
    e.preventDefault();
    const sourceTarget = e.target as HTMLInputElement;
    let finalTarget = e.target as HTMLElement;
    while(!finalTarget.classList.contains('itemDetail')){
      finalTarget = finalTarget.parentElement;
    }
    const itemId = finalTarget.dataset['key'];

    const targetArr = Array.from(document.querySelectorAll('.itemPreview')).find(
      (item: HTMLElement) => item.dataset['key'] === itemId
    ) as HTMLElement;

    targetArr.querySelector('.previewTitle').textContent = sourceTarget.value;
    
    // const items = targetList.items;
    // const item = items.find((todo) => todo.itemId === itemId);
    target.title = sourceTarget.value;
  }

  static editPriority(e: Event, item: todoItem) {
    const target = e.target as HTMLSelectElement;
    type discretePriority = "High" | "Medium" | "Low" | "None";
    const priority = target.value as discretePriority;
    item.priority = priority;

    const itemId = item.itemId;
    
    const targetItemView = Array.from(document.querySelectorAll('.itemPreview')).find(
      (item: HTMLElement) => item.dataset['key'] === itemId
    ) as HTMLElement;
    const iconContainer = targetItemView.querySelector('div.leftSide > div.iconContainer');
    const oldIcon = targetItemView.querySelector('div.leftSide > div.iconContainer > svg');
    const oldIconPath = targetItemView.querySelector('div.leftSide > div.iconContainer > svg > path');
    const oldIconG = targetItemView.querySelector('div.leftSide > div.iconContainer > svg > g');
    const check = (oldIconPath === null) ? oldIconG : oldIconPath;

    let newIcon;
    if (check.classList.contains('completed')) {
      newIcon = itemPreviewControl.genPriorityIcon(item, 'completed');
    } else{
      newIcon = itemPreviewControl.genPriorityIcon(item);
    }
    
    oldIcon.remove();
    iconContainer.innerHTML = newIcon;

    const targetDetailViewOldIconContainer = document.querySelector('.itemDetail > .itemDetailContent > .itemTitleContainer > .priorityIconContainer');
    const targetDetailViewOldIcon = document.querySelector('.itemDetail > .itemDetailContent > .itemTitleContainer > .priorityIconContainer > svg');
    targetDetailViewOldIcon.remove();
    targetDetailViewOldIconContainer.innerHTML = newIcon;
  }

  static editDueDate (e: Event, item: todoItem) {
    const target = e.target as HTMLInputElement;
    const newDateValue = target.value;
    let updatedDate = new Date(newDateValue);
    item.dueDate = updatedDate;

    //update item preview due date here
    const itemId = item.itemId;
    const dueDatePreviewUpdate = Array.from(document.querySelectorAll('.previewDueDateContainer')).find((item) => item.id === itemId);
    dueDatePreviewUpdate.textContent = `Due: ${updatedDate.toLocaleDateString()}`;
    updatedDate = null;
  }

  static editNotes (e: Event, item: todoItem) {
    const target = e.target as HTMLTextAreaElement;
    item.notes = target.value;
  }

}

export{ itemDetailControl }