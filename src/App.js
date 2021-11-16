import React from 'react';
import BookList from './BookList';

function App() {
  const books = [
    {id:1, title:'Тит Андроник', originalTitle:'Titus Andronicus', year:1594},
    {id:2, title:'Ромео и Джульетта', originalTitle:'Romeo and Juliet', year:1596},
    {id:3, title:'Юлий Цезарь', originalTitle:'Julius Caesar', year:1599},
    {id:4, title:'Гамлет', originalTitle:'Hamlet', year:1601},
    {id:5, title:'Отелло', originalTitle:'Othello', year:1604},
    {id:6, title:'Король Лир', originalTitle:'King Lear', year:1606},
    {id:7, title:'Макбет', originalTitle:'Macbeth', year:1606},
    {id:8, title:'Антоний и Клеопатра', originalTitle:'Antony and Cleopatra', year:1607},
    {id:9, title:'Кориолан', originalTitle:'Coriolanus', year:1608}
  ];
  const books2 = [
    {id:1, title:'Тит Андроник', originalTitle:'Titus Andronicus', year:1594},
    {id:2, title:'Ромео и Джульетта', originalTitle:'Romeo and Juliet', year:1596},
    {id:3, title:'Юлий Цезарь', originalTitle:'Julius Caesar', year:1599},
    {id:4, title:'Гамлет', originalTitle:'Hamlet', year:1601},
    {id:5, title:'Отелло', originalTitle:'Othello', year:1604},
    {id:6, title:'Король Лир', originalTitle:'King Lear', year:1606},
    {id:7, title:'Макбет', originalTitle:'Macbeth', year:1606},
    {id:8, title:'Антоний и Клеопатра', originalTitle:'Antony and Cleopatra', year:1607},
    {id:9, title:'Кориолан', originalTitle:'Coriolanus', year:1608}
  ];
  
  return (
    <div className="App">
      <h1>Библиография Шекспира</h1>
      <BookList books={books} title='Трагедия'/>
      <BookList books={books2} title='Комедии'/>
    </div>
  );
}

export default App;
