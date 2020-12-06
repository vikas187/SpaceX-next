This is a starter template for [Learn Next.js](https://nextjs.org/learn).


This is a server side rendered app built using Next.js  which is using React in the front-end

inside components folder we have 2 React components named 'Home' and 'Launches'

'Home' component renders filters part using jsx and it also imports 'Launches' component and renders that also.

we have some function in 'Home' component which gets triggered when filters are clicked and then this changes the state of 'Home' Component. This state is then passed the 'Launches' component which calls the api based on the values of the filters.

We have 'style' folder as well for the styling part and it uses css preprocessor 'SASS' to make use of features such as variables and mixins and importing .scss files.

Inside 'style' folder we have main 'style.scss' files which imports all the necessary style files and we have some folder as well such as 'abstracts' folder which holds a mixin which is used for repsponsive layout. There is a folder named 'base' which holds the base.scss file which has style for our home page and 'settings.scss' which holds colors and size variables. Then we have a folder 'Component' which has a style file for component 'Launches'.
