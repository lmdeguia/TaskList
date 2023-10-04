import { todoItem } from "../models/item";
import { itemPreviewControl } from "../controls/itemPreviewControl";
import format from "date-fns/format";
import './styles/itemPreview.css'

class itemPreview {
  constructor(private target: todoItem) {
    this.target = target;
  }

  // get title (): string { return this.target.title }
  // get completed (): boolean { return this.target.completed }


  genHtml (): HTMLDivElement {
    const outDiv = document.createElement('div');
    outDiv.className = 'itemPreview';
    outDiv.addEventListener('click', itemPreviewControl.focusItem);

    const leftSide = document.createElement('div');
    leftSide.className = 'leftSide';

    const previewCheckbox = document.createElement('div');
    previewCheckbox.className = 'previewCheckboxContainer';
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = this.target.completed;
    checkbox.className = 'previewCheckbox';
    previewCheckbox.appendChild(checkbox);
    previewCheckbox.addEventListener('change', (e) => {itemPreviewControl.checkboxClick(e, this.target)});
    previewCheckbox.addEventListener('click', itemPreviewControl.stop);
    leftSide.appendChild(previewCheckbox);

    const previewTitle = document.createElement('div');
    previewTitle.className = 'previewTitleContainer';
    const title = document.createElement('div');
    title.textContent = this.target.title;
    title.className = 'previewTitle';
    previewTitle.appendChild(title);
    
    const iconContainer = document.createElement('div');
    iconContainer.className = 'iconContainer';
    const priorityIcon = itemPreviewControl.genPriorityIcon(this.target);
    iconContainer.innerHTML = priorityIcon;

    leftSide.appendChild(iconContainer);
    leftSide.appendChild(previewTitle);
    outDiv.appendChild(leftSide);

    const previewOptions = document.createElement('div');
    previewOptions.className = 'previewOptionsContainer';

    const previewDueDateContainer = document.createElement('div');
    previewDueDateContainer.id = this.target.itemId;
    previewDueDateContainer.className = 'previewDueDateContainer';
    const previewDueDate = format(this.target.dueDate, 'MM/dd/yyyy');
    previewDueDateContainer.textContent = `Due: ${previewDueDate}`;
2
    previewOptions.appendChild(previewDueDateContainer);

    const options = document.createElement('button');
    options.className = 'previewOptions';

    options.innerHTML += `
    <svg class="optionsIcon" width="16" height="16" viewBox="0 0 16 16" fill="none" style="display: block; float: right;">
      <path class="optionsIcon" fill-rule="evenodd" clip-rule="evenodd" d="M7.865 11.153c1.03 0 1.864.8 1.864 1.787 0 .987-.835 1.787-1.864 1.787-1.03 0-1.865-.8-1.865-1.787 0-.987.835-1.787 1.865-1.787zm0-5.566c1.03 0 1.864.8 1.864 1.787 0 .987-.835 1.787-1.864 1.787C6.835 9.16 6 8.36 6 7.374c0-.987.835-1.787 1.865-1.787zm1.871-3.8C9.736.8 8.901 0 7.871 0S6.007.8 6.007 1.787c0 .987.835 1.787 1.864 1.787 1.03 0 1.865-.8 1.865-1.787z" fill="currentColor">
      </path>
    </svg>`;

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
    outDiv.setAttribute('data-key', `${this.target.itemId}`);
    return outDiv;
  }
}

export { itemPreview }
