type discretePriority = "High" | "Medium" | "Low" | "None";

interface Todo {
  completed: boolean, 
  title: string, 
  itemId: string,
  createdDate: Date,
  priority: discretePriority
  dueDate?: Date,
  notes?: string,
  listId?: string,
}

class todoItem{

  constructor(private props: Todo) {
    this.props = props;
  }

  // getters
  get completed () : boolean { return this.props.completed; }
  get title () : string { return this.props.title; }
  get createdDate () : Date { return this.props.createdDate; }
  get dueDate () : Date { return this.props.dueDate; }
  get itemId () : string { return this.props.itemId; }
  get priority () : discretePriority { return this.props.priority; }
  get notes () : string { return this.props.notes; }
  get listId () : string { return this.props.listId; }
  
  // setters
  set completed (newValue: boolean) { this.props.completed  = newValue;}
  set title (newValue: string) { this.props.title = newValue; }
  set dueDate (newValue: Date) { this.props.dueDate = newValue; }
  set itemId (newValue: string) { this.props.itemId = newValue; }
  set priority (newValue: discretePriority){ this.props.priority = newValue; }
  set notes (newValue: string)  { this.props.notes = newValue; }
  set listId (newValue: string) { this.props.listId = newValue; }

}


export { todoItem, Todo, discretePriority }