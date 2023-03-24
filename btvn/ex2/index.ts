class toDo {
  works: Array[];
  date: string;
  constructor(date: string, works: Array) {
    this.date = date;
    this.works = works;
  }
  addTodo(): object {
    return {
      date: this.date,
      works: this.works
    };
  }
}


// let todo = new toDo("11/11/2222", ['lam viec 1', ' lam viec 2']);
// console.log(todo.addTodo());

class toDoList extends toDo {
  listTodo: Array<toDo> = [];
  addToDoList(): object {
    return this.addTodo()
  }
}

function check_date(date: string, toDoList: []): boolean {
  let check: boolean = true;
  for (let i = 0; i < toDoList.length; i++) {
    if (toDoList[i].date === date) {
      check = false;
      break;
    }
  }
  return check;
}