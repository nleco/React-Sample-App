# Sam's Notes

First, thank you for letting me interview with Twitch. I am a gamer and am pretty excited at the chance of being able to work at a fun company. As I had told James Chiorello, I am heavily learning more on React/TypeScript/Node/Sass. I consider myself a quick learner and a tinkerer. I have done other assignments with ES5/6. TypeScript is definetly a more stong typed language, with defined interfaces and paramater types. On my spare time, I have installed and played around with node, express, npm, brew, etc... I am also looking at Angular, but React has taken my main focus.

I am hoping I can be given a chance to prove myself as a good team player with an easy going attitude.

## Installation/README.md

I found a few inconsistencies between the documentation and the project, but they were very minor. I used my best judgement to implement what was asked. I also had to resolve a few package issues since I may have had other versions of packages installed. The app did not install flawlessly out of the box. It just meant more fun trying to debug. :)

## New Assets
- added Curse header image
- imported a CDN hosted version of material design icons. we could also have included this via a package, but this was easier.
- imported the Open Sans font
- added a new normalize.scss file

## UI Considerations

My goal was to present the task in an easy to understand way. I took some color schemes from the official curse website.

I made the header similar in look to the website. I then looked at what we wanted to do, which was to display the game information. Seeing that there was not too much, I tried to maximize the space so the user could see more games. I chose the 'card' layout. This allowed me to show them in a nice grid (using a flexbox). I kept each card certain width and centered them.

Clicking a game card would take you to the actual page.  Here, I show the same card, so that the user is still familiar with the basic info.  I then added the Categories this belongs too, in a comma separated list right under.  After that, I simply showed the files in this game. I kept the width of the page to a minimum because otherwise things would look way too spread out, confusing the reader. My understanding of the 'slug' was to 'show' it in the URL itself, and not on the page contents. If this was intended, then my appologies. This is something I'd clarify more with the UX/UI person.

## Implementation Considerations

### Components

I tried to separate major components out. In some cases, the items were so small and trivial (like the search box) that I decided to just leave it as is.  In a larger project, we'd definetly divide the sections out into better components, and also decide where states need to live, whether in redux or not.

### CSS/SCSS

I separated each component into it's own SCSS file. It makes it easier to know what belongs to that component. I could have also separated the main app.scss file into files such as "utilities.scss", "vendors.scss", "variables.scss", ... etc..  In a production environment, this would be a must in order to keep things clean. Here, there's so few rules, I kept them in one page and commented it.

### API Loading

I load the api data once when the App component loads. Then, every so often (based on a config), I check the data again to see if the 'timestamp' field has changed. A better approach would be to only fetch the headers (mode: HEAD in fetch) and store and compare the 'Expires' or 'Last-Modified' response header. We would only fetch the entire api contents once we knew that the data actually changed or expired. For this exercise, I simply kept the timestamp and chose not to render if the timestamp was the same.

### Searching

I did a very simple search on the GameList page. as you typed, I kept track of the 'keyword', storing it in the redux store. This was done so that when you click on a game, and then come back, we'd keep track of what the keyword was and kept the filtered games. The filtering is simply done on the 'Name' field. If the keyword is contained within the 'Name', then let's keep it. Otherwise, throw the rest away.  Then we render those. A keyword search triggers the store update, causing a new render. No new data was stored.

### Jest Testing

I am not too familiar with Jest. I ran a few tests on the simple 'actions'. I did not pursue this because it would have taken me a little longer to complete the task on time.