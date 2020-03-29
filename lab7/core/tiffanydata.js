let someData = "<ul><li><ol>One<li>First Movie</li><li>Cinema Paradiso</li><li>Giuseppe Tornatore</li><li>1988</li><li>Italy</li></ol></li><li><ol>Two<li>Second Movie</li><li>The Godfather</li><li>Francis Ford Coppola</li><li>1972</li><li>USA</li></ol></li><li><ol>Three<li>Third Movie</li><li>Schindler's List</li><li>Steven Spielberg</li><li>1993</li><li>USA</li></ol></li><li><ol>Four<li>Fourth Movie</li><li>Forrest Gump</li><li>Robert Zemeckis</li><li>1994</li><li>USA</li></ol></li><li><ol>Five<li>Fifth Movie</li><li>Gone with the Wind</li><li>Victor Fleming</li><li>1939</li><li>Britain</li></ol></li><li><ol>Six<li>Sixth Movie</li><li>The Sound of Music</li><li>Robert Wise</li><li>1965</li><li>USA</li></ol></li><li><ol>Seven<li>Seventh Movie</li><li>Star Wars</li><li>George Lucas</li><li>1977</li><li>USA</li></ol></li><li><ol>Eight<li>Eighth Movie</li><li>Titanic</li><li>James Cameron</li><li>1997</li><li>USA</li></ol></li><li><ol>Nine<li>Ninth Movie</li><li>Saving Private Ryan</li><li>Steven Spielberg</li><li>1998</li><li>USA</li></ol></li><li><ol>Ten<li>Tenth Movie</li><li>Downfall</li><li>Oliver Hirschbiegel</li><li>2004</li><li>Germany</li></ol></li></ul>";

let someOtherData = [{"Number": "One", 
                     "Title": "The Great Gatsby", 
                     "Author": "F. Scott Fitzgerald", 
                     "Year": "1925", 
                     "Level": "Beginner"
                     },
                     
                     {"Number": "Two", 
                     "Title": "The Lord of the Rings", 
                     "Author": "Tolkien", 
                     "Year": "1956", 
                     "Level": "Beginner"
                     },
                     {"Number": "Three", 
                     "Title": "Anna Karenina", 
                     "Author": "Leo Tolstoy", 
                     "Year": "1878", 
                     "Level": "Beginner"
                     },
                     {"Number": "Four", 
                     "Title": "The Adventures of Huckleberry Finn", 
                     "Author": "Mark Twain", 
                     "Year": "1884", 
                     "Level": "Beginner"
                     },
                     {"Number": "Five", 
                     "Title": "And Quiet Flows the Don", 
                     "Author": "Mikhail Sholokhov", 
                     "Year": "1928", 
                     "Level": "Hard"
                     },
                     {"Number": "Six", 
                     "Title": "One Hundred Years of Solitude", 
                     "Author": "Gabriel García Márquez", 
                     "Year": "1967", 
                     "Level": "Medium"
                     },
                     {"Number": "Seven", 
                     "Title": "Pride and Prejudice", 
                     "Author": "Jane Austen", 
                     "Year": "1813", 
                     "Level": "Beginner"
                     },
                     {"Number": "Eight", 
                     "Title": "The Divine Comedy", 
                     "Author": "Dante Alighieri", 
                     "Year": "1320", 
                     "Level": "Hard"
                     },
                     {"Number": "Nine", 
                     "Title": "The Canterbury Tales", 
                     "Author": "Geoffrey Chaucer", 
                     "Year": "1400", 
                     "Level": "Beginner"
                     },
                     {"Number": "Ten", 
                     "Title": "Paradise Lost", 
                     "Author": "John Milton", 
                     "Year": "1667", 
                     "Level": "Hard"
                     },
                    
                    ];

module.exports = {
  getHTML: function () {
      console.log("called: getHTML");
      // Note: this could be from a DB, for now it's just hard-coded
      return someData;
  },
  getJSON: function () {
      console.log("called: getJSON");
      // Note: this could be from a DB, for now it's just hard-coded
      return someOtherData;
  }
};




var someOtherFunction = function () {
    console.log("Can't touch this!");
}
