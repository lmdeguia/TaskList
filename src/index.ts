import { todoItem, Todo } from "./modules/models/item";
import { todoList } from "./modules/models/list";
import { listView } from "./modules/views/listView";
import { Collection } from "./modules/models/collection";
import { collectionView } from "./modules/views/collectionView";

import { taskView } from "./modules/views/taskView";
import { taskViewControl } from "./modules/controls/taskViewControl";

import uniqid from 'uniqid';


function unitIntervalMap(a: number, b: number, x: number): number {
  return (b - a)*x + a;
 }


function getRandomDate(timeSpan: number): Date{
  const minDate = Date.now();
  const timeStamp = Math.floor(unitIntervalMap(minDate, minDate + timeSpan, Math.random()));
  return new Date(timeStamp);
}


const todo1 = new todoList("Test List");
const todo2 = new todoList("2 Test 2 List");
const todo3 = new todoList("Test List Oriental Twist");

type discretePriority = "High" | "Medium" | "Low" | "None";
const priorityChoices = ['Low', 'Medium', 'High', 'None'] as Array<discretePriority>;

const hundredYearsLater = 3600*24*365*100*1000;

const oneWeekLater = 3600*24*7*1000;
const twoWeeksLater = 3600*24*14*1000;

const itemAmount = 3;
for (let i = 0; i < itemAmount; i++) {
  const params : Todo =  {
    completed: false,
    title: `Test Todo Item ${i+1}`,
    createdDate: new Date(),
    dueDate: getRandomDate(twoWeeksLater),
    itemId: `${uniqid()}`,
    priority: priorityChoices[i % 4],
    notes: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  };
  const newItem = new todoItem(params);
  todo1.add(newItem);
}

const itemAmount2 = 15;
for (let i = 0; i < itemAmount2; i++) {
  const params : Todo =  {
    completed: false,
    title: `2 Test 2 Todo Item ${i+1}`,
    createdDate: new Date(),
    dueDate: getRandomDate(twoWeeksLater),
    itemId: `${uniqid()}`,
    priority: priorityChoices[(i+3) % 4],
    notes: `I said-a hip, hop, the hippie, the hippie
    To the hip hip hop-a you don't stop the rock
    It to the bang-bang boogie, say up jump the boogie
    To the rhythm of the boogie, the beat`,
  };
  const newItem = new todoItem(params);
  todo2.add(newItem);
}

const itemAmount3 = 9;
for (let i = 0; i < itemAmount3; i++) {
  const params : Todo =  {
    completed: false,
    title: `Test Todo Item Oriental Twist ${i+1}`,
    createdDate: new Date(),
    dueDate: getRandomDate(twoWeeksLater),
    itemId: `${uniqid()}`,
    priority: priorityChoices[(i+3) % 4],
    notes: `1.古池や 蛙飛び込む 水の音 · 2.春の海 ひねもすのたり のたりかな · 3. · 4.菜の花や 月は東に 日は西に`};
  const newItem = new todoItem(params);
  todo3.add(newItem);
}

// for sideBar Nav

const listsCollectionWrapper = document.querySelector('.lists-collection-wrapper');

const listsCollection = new Collection();
listsCollection.add(todo1);
listsCollection.add(todo2);
listsCollection.add(todo3);

taskViewControl.initializeCollection(listsCollection);

let collectionViewObj = new collectionView(listsCollection);
const newCollectionView = collectionViewObj.genHtml()
listsCollectionWrapper.appendChild(newCollectionView);
collectionViewObj = null;

taskViewControl.viewAllTasks();



