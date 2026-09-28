# Web Development Project 2 - CodeCards

Submitted by: **Animesh Niraula**

This web app: **CodeCards is a React flashcard study app designed to help users practice JavaScript, React, and web development concepts. Users can click a card to reveal the answer, click again to return to the question, and use the Next Random Card button to receive a randomly selected flashcard. Cards also display different difficulty levels such as Easy, Medium, and Hard.**

Time spent: **4 hours** spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed
  - [x] A short description of the card set is displayed
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed
  - [x] Card set is represented as a list of card pairs (an array of objects where each object contains a question and answer)

- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time

- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information
  - [x] Clicking on a flipped card again flips it back, showing the front

- [x] **Clicking on the next button displays a random new card**

## Optional Features

The following **optional** features are implemented:

- [ ] Cards contain images in addition to or in place of text
  - [ ] Some or all cards have images in place of or in addition to text

- [x] Cards have different visual styles such as color based on their category
  - [x] Cards are categorized by difficulty: Easy, Medium, and Hard
  - [x] Difficulty categories have different colors and visual styles

## Additional Features

The following **additional** features are implemented:

- [x] The website has a responsive design for different screen sizes
- [x] The flashcards include hover animations
- [x] The card changes its visual appearance when it is flipped
- [x] The Next Random Card button prevents the same card from immediately appearing again
- [x] The card automatically returns to the question side when a new random card is selected
- [x] The app includes instructions telling the user how to interact with the flashcards
- [x] The layout and buttons include responsive styling for mobile devices

## Video Walkthrough

Here's a walkthrough of implemented required features:

<div>
    <a href="https://www.loom.com/share/1c01f25c3c7c43888ea68a221b74937f">
    </a>
    <a href="https://www.loom.com/share/1c01f25c3c7c43888ea68a221b74937f">
      <img style="max-width:300px;" src="https://www.loom.com/v1/videos/1c01f25c3c7c43888ea68a221b74937f/thumbnail.gif">
    </a>
  </div>

<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux.
-->

## Notes

One challenge I encountered while building the app was figuring out how to randomly select a new flashcard without showing the same card repeatedly. I solved this by generating a random index and checking that it was different from the current card before updating the state.

Another challenge was controlling whether the question or answer should be displayed. I used React's `useState()` hook to keep track of whether the card was flipped. This helped me understand how state can control what is displayed on the screen.

I also spent some time working on the CSS so the app would be easy to use and look good on both desktop and smaller screens.

## License

    Copyright 2026 Animesh Niraula

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
