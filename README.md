To create table using mui library based on example:

regions

2017 2018 2019
xx yy zz xx yy zz xx yy zz
Kyivska
Odeska
Lvivska
And fill in this table by data from Notepad.
2) Open popup window by click on cell with value (use method window.open);
3) In popup window should be one more table with simple structure – few rows and 4 columns:
You can fill in it by any data
And the last row should consist of
- input for numbers in first column;
- in 2nd column- date by default (autofill);
- 3
rd – user by default (autofill or select);
- 4
th – input for text.
value date user comment
4 20.02.2022 Petro any
5 21.02.2022 Roman
6 22.02.2022 Anna
input for
numbers
date
(today)

user by
default
input
(text)

4) Create button “Add” on the right side of table that will add data from last row when it’s filled
and your table will get new row with added data;
Or even show in console the data from inputs, if inputs empty – show in console any default
data;
5) Create button “Close” near button “Add” that will close the popup.
