import { Collection } from "../models/collection";
import { todoList } from "../models/list";
import { collectionControl } from "../controls/collectionControl";
import './styles/collectionView.css';


class collectionView{

  constructor(private _target: Collection) {
    this._target = _target;
  }

  get targetCollection(): Collection { return this._target; }

  private genCollectionsItemOptionsIcon() {
    const collectionItemIconWrapper = document.createElement('div');
    collectionItemIconWrapper.className = 'collection-item-icon-wrapper';
    const collectionItemIconContainer = document.createElement('div');
    collectionItemIconContainer.addEventListener('click', collectionControl.openDropdown);
    collectionItemIconContainer.className = 'collection-item-icon-container';
    collectionItemIconContainer.innerHTML = `<svg class="collectionOptionsIcon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path class="collectionOptionsIcon" fill-rule="evenodd" clip-rule="evenodd" d="M7.865 11.153c1.03 0 1.864.8 1.864 1.787 0 .987-.835 1.787-1.864 1.787-1.03 0-1.865-.8-1.865-1.787 0-.987.835-1.787 1.865-1.787zm0-5.566c1.03 0 1.864.8 1.864 1.787 0 .987-.835 1.787-1.864 1.787C6.835 9.16 6 8.36 6 7.374c0-.987.835-1.787 1.865-1.787zm1.871-3.8C9.736.8 8.901 0 7.871 0S6.007.8 6.007 1.787c0 .987.835 1.787 1.864 1.787 1.03 0 1.865-.8 1.865-1.787z" fill="transparent">
                                                </path>
                                             </svg>`

    collectionItemIconWrapper.appendChild(collectionItemIconContainer);
    return collectionItemIconWrapper;
  }

  genListPreview(targetList: todoList) {
    const collectionItemWrapper = document.createElement('div');
    collectionItemWrapper.className = 'sideNav-select-item collection-item';
    collectionItemWrapper.id = targetList.listId;

    const collectionItemTitle = document.createElement('div');
    collectionItemTitle.className = 'collection-item-title';
    collectionItemTitle.id = targetList.listId;
    collectionItemTitle.textContent = targetList.listName;

    const CollectionItemIconWrapper = this.genCollectionsItemOptionsIcon();

    collectionItemWrapper.appendChild(collectionItemTitle);
    collectionItemWrapper.appendChild(CollectionItemIconWrapper);
    collectionItemWrapper.addEventListener('mousedown', collectionControl.mouseDown);
    return collectionItemWrapper;
  }

  genHtml() {
    const viewList = document.querySelector('.view-list');
    const createListBtn = document.querySelector('.createListsBtn');
    const cancelBtn = document.querySelector('.new-list-cancel-container');
    const addBtn = document.querySelector('.new-list-submit-container');

    createListBtn.addEventListener('click', collectionControl.openNewListModal);
    cancelBtn.addEventListener('click', collectionControl.closeNewListModal);
    addBtn.addEventListener('click', (e) => {collectionControl.addNewList(e, this._target);})

    
    viewList.addEventListener('click', (e) => { collectionControl.openList(e, this._target) });

    const listsCollection = document.createElement('div')
    listsCollection.className = 'lists-collection';

    for (let list of this._target.lists) {
      const newChild = this.genListPreview(list);
      listsCollection.appendChild(newChild);
    }
    
    return listsCollection;
  }


}


export{ collectionView }