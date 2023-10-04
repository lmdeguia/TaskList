import { itemPreviewControl } from "../controls/itemPreviewControl";
import { itemDetailControl } from "../controls/itemDetailControl";
import { todoItem } from "../models/item";
import { todoList } from "../models/list";
import format from "date-fns/format";
import './styles/itemDetail.css';

class itemDetail {

  constructor(private target: todoItem) {
    this.target = target;
  }

  genHtml (): HTMLDivElement {

    const itemDetail = document.createElement('div');


    const topSection = document.createElement('div');
    itemDetail.className = 'itemDetail';
    topSection.className = 'topSection';

    const closeBtn = document.createElement('span');
    closeBtn.className = 'close';
    closeBtn.innerHTML = "&times;";
    closeBtn.addEventListener('click', itemDetailControl.closeDetail);
    const topLeft = document.createElement('div');
    topLeft.className = 'topLeft';
    topLeft.textContent = `id: ${this.target.itemId}`;

    topSection.appendChild(topLeft);
    topSection.appendChild(closeBtn);
    itemDetail.appendChild(topSection);
    

    const itemDetailContent = document.createElement('div');
    itemDetailContent.className = 'itemDetailContent';
    const itemTitleContainer = document.createElement('div');
    const itemTitle = document.createElement('input');
    itemTitle.type = 'text';
    itemTitle.value = this.target.title;
    itemTitle.spellcheck = false;
    itemTitle.className = 'itemTitle';

    itemTitle.addEventListener('change', (e) => {itemDetailControl.editTitle(e, this.target)});
    
    const priorityIconContainer = document.createElement('div');
    priorityIconContainer.className = 'priorityIconContainer';
    const priorityIcon = itemPreviewControl.genPriorityIcon(this.target);
    priorityIconContainer.innerHTML = priorityIcon;

    itemTitleContainer.appendChild(priorityIconContainer);
    itemTitleContainer.appendChild(itemTitle);



    itemTitleContainer.className = 'itemTitleContainer';

    const priorityLevelContainer = document.createElement('div');

    const priorityLevelLabel = document.createElement('label');
    priorityLevelLabel.htmlFor = 'priority';
    priorityLevelLabel.textContent = 'Priority:';

    const priorityLevel = document.createElement('select');
    priorityLevel.id = 'priority';

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

    priorityLevel.appendChild(noPriority);
    priorityLevel.appendChild(lowPriority);
    priorityLevel.appendChild(MedPriority);
    priorityLevel.appendChild(highPriority);
    priorityLevel.addEventListener('change', (e) => {itemDetailControl.editPriority(e, this.target)})
    priorityLevelContainer.className = 'priorityLevelContainer';
    priorityLevel.className = 'priorityLevel';
    priorityLevel.value = `${this.target.priority}`;
    


    priorityLevelContainer.appendChild(priorityLevelLabel);
    priorityLevelContainer.appendChild(priorityLevel);


    
    itemDetail.setAttribute('data-key', `${this.target.itemId}`);
    
    const completedMsg = (this.target.completed === true) ? 'Complete' : 'Incomplete';
    const completedMsgContainer = document.createElement('div');
    completedMsgContainer.className = 'completedMsgContainer';

    const statusMsgDisplay = document.createElement('div');
    statusMsgDisplay.className = 'statusMsgDisplay';
    statusMsgDisplay.textContent = `Status: ${completedMsg}`;
    completedMsgContainer.appendChild(statusMsgDisplay);


    const creationDateContainer = document.createElement('div');
    creationDateContainer.className = 'creationDateContainer';

    const creationDate = format(this.target.createdDate, 'MM/dd/yyyy');
    //const creationDate = this.target.createdDate.toLocaleString();
    creationDateContainer.textContent = `Created On: ${creationDate}`;

    const dueDateContainer = document.createElement('div');
    dueDateContainer.className = 'dueDateContainer';
    const itemDueDate = document.createElement('input');
    itemDueDate.className = 'itemDueDate';
    itemDueDate.id = `${this.target.itemId}`;
    itemDueDate.type = 'datetime-local';
    itemDueDate.addEventListener('change', (e) => {itemDetailControl.editDueDate(e, this.target)});

    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due: ';
    dueDateLabel.htmlFor = itemDueDate.id;
    const rawDateValue = this.target.dueDate;
    let rawStringValue = new Date(rawDateValue.getTime() - (rawDateValue.getTimezoneOffset() * 60000)).toISOString();
    const inputString = rawStringValue.substring(0, 16);
    itemDueDate.value = inputString;
    rawStringValue  = null;

    dueDateContainer.appendChild(dueDateLabel);
    dueDateContainer.appendChild(itemDueDate);

    const notesContainer = document.createElement('div');
    notesContainer.className = 'notesContainer';
    const notesLabel = document.createElement('label');
    notesLabel.textContent = 'Notes:';
    notesLabel.htmlFor = 'itemNotes';
    const notes = document.createElement('textarea');
    notes.className = 'itemNotes';
    notes.id = 'itemNotes';
    notes.value = this.target.notes;
    notes.spellcheck = false;
    notes.rows = 12;

    notes.addEventListener('change', (e) => {itemDetailControl.editNotes(e, this.target)});
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
  }
}

export { itemDetail }