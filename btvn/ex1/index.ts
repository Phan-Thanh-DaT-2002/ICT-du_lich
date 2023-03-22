class Note {
  title: string;
  content: string
  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
  addNote(): object {
    return {
      title: this.title,
      content: this.content
    }
  }
}

class NoteList extends Note {
  constructor(title: string, content: string) {
    super(title, content);
  }
  addNoteToList(): object {
    return this.addNote()
  }
}

let arrayNoteList: Array | object = [];

var noteList1 = new NoteList(" tieu de 1", " xin chao 1");
var noteList2 = new NoteList(" tieu de 2", " xin chao 2");
var noteList3 = new NoteList(" tieu de 3", " xin chao 3");
var noteList4 = new NoteList(" tieu de 4", " xin chao 4");
var noteList5 = new NoteList(" tieu de 5", " xin chao 5");



arrayNoteList.push(noteList1.addNoteToList());
arrayNoteList.push(noteList2.addNoteToList());
arrayNoteList.push(noteList3.addNoteToList());
arrayNoteList.push(noteList4.addNoteToList());
arrayNoteList.push(noteList5.addNoteToList());

for (let i = 0; i < arrayNoteList.length; i++) {
  console.log(arrayNoteList[i]);
}