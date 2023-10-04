import { todoList } from "./list";
import { todoItem } from "./item";

class Collection{
  private _lists: Array<todoList>
  private _allTasks: Array<todoItem>;
  private _tasksToday: Array<todoItem>;
  private _tasksThisWeek: Array<todoItem>;
  private objCache: Array<any>;

  constructor() {
    this._lists = [];
    this._allTasks = [];
    this._tasksToday = [];
    this._tasksToday = [];
    this._tasksThisWeek = [];

    this.objCache = [];
  }

  get lists(): Array<todoList> { return this._lists; }
  get allTasks(): Array<todoItem>{ return this._allTasks; }
  get tasksToday(): Array<todoItem>{ return this._tasksToday; }
  get tasksThisWeek(): Array<todoItem>{ return this._tasksThisWeek; }



  add(newList: todoList): void {
    this._lists.push(newList);
    this._allTasks = this._allTasks.concat(newList.items);

    const now = Date.now();

    const oneDayLater = now + 3600*24*1000;
    const oneWeekLater = now +  3600*24*7*1000;

    let tasksToday: Array<todoItem> = [];
    let tasksThisWeek: Array<todoItem> = [];

    for (let task of this._allTasks) {
      const dueDate = task.dueDate.getTime();
      if (dueDate <= oneDayLater) {
        tasksToday.push(task);
      }

      if (dueDate <= oneWeekLater) {
        tasksThisWeek.push(task);
      }
    
    }

    this._tasksToday = tasksToday;
    this._tasksThisWeek = tasksThisWeek;
    tasksToday = null;
    tasksThisWeek = null;
  }

  remove(targetList: todoList): void {
    const idx = this._lists.indexOf(targetList);
    this._lists.splice(idx, 1);
  }

}

export { Collection }