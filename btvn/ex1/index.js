var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Note = /** @class */ (function () {
    function Note(title, content) {
        this.title = title;
        this.content = content;
    }
    Note.prototype.addNote = function () {
        return {
            title: this.title,
            content: this.content
        };
    };
    return Note;
}());
var NoteList = /** @class */ (function (_super) {
    __extends(NoteList, _super);
    function NoteList(title, content) {
        return _super.call(this, title, content) || this;
    }
    NoteList.prototype.addNoteToList = function () {
        return this.addNote();
    };
    return NoteList;
}(Note));
var arrayNoteList = [];
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
for (var i = 0; i < arrayNoteList.length; i++) {
    console.log(arrayNoteList[i]);
}
