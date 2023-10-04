import { todoItem } from "./item";
import * as uniqid from "uniqid";

class todoList {

  private _items: Array<todoItem>;

  private _listId: string;

  constructor(private _listName: string) {
    this._items = [];
    this._listId = uniqid();
    this._listName = _listName;
  }
  
  get items (): Array<todoItem> { return this._items; }
  get listId (): string { return this._listId; }
  get listName (): string { return this._listName; }

  set listName (newName: string) { this._listName = newName; }

  add (newItem: todoItem): void {
    newItem.listId = this._listId;
    this._items.push(newItem);
  }

  remove (item: todoItem): void {
    const idx = this._items.indexOf(item);
    this._items.splice(idx, 1);
  }

  clearList (): void {
    this._items = [];
  }
}

export { todoList }

// const test = document.querySelector('') as HTMLElement
// test.loc