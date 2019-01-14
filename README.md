# My zemoga-test

UI candidates test v2.0: [https://github.com/zemoga/ui-test](https://github.com/zemoga/ui-test)

Project bootstrapped with _[Create-React-App](https://github.com/facebook/create-react-app)_.

---
This exercise will be made outside Zemoga and delivered between the next 3 days that follows this test.

##  Requirements

### Layout HTML-CSS:
- [ ] Media queries.
- [ ] Non safe web font used: Lato.
- [ ] Preprocessors/transpilers (LESS/SASS).
- [ ] Clicking on one of the links of the main menu redirects the user to the other pages (only provided comp for main page. Use white pages with the title section on them).

### Interaction - JS
Just add interaction in the middle voting boxes: Kanye West, Mark Zuckerberg, Cristina Fernández de Kirchner and Malala Yousafzai.
- [ ] Create a data feed in JSON format with the structure that best suits the content for the voting boxes and populate the initial content from it.
- [ ] The user can select either thumb up or thumb down button on each of the boxes (when the button is selected, a white border is displayed as featured in the comp)
- [ ] Once the user clicks on the "Vote now” button, a message is displayed saying “Thank you for voting!” as well as a vote again button to vote again.
- [ ] There is no limit in the amount of votes
- [ ] Percentage bars change depending on the up/or downs votes.
- [ ] Think on a way to persist the current votes so if the page is refreshed the data is not lost. (could be local in the browser or server side if you have those skills)
- [ ] We want to see your vanilla/DOM JS skills so please do not use jQuery.
- [ ] You can solve this part with either full Vanilla JS and some patterns, OR any sort of framework such as Angular, React, Vuejs, Ember, etc. Use the one you feel more confortable with.
- [ ] Bonus points: Some sort of Test (E2E, BDD, etc)

## NodeJS
**Only** for NodeJS or any other server side technology applies, or if you want to also show skills in this part:

- [ ] Activate the Login/Signup link in the main menu by showing a basic login dialog.
- [ ] If the user is already logged in, this link should be switched to a logout link.
- [ ] The login box presents a basic user/pwd form and a button to switch to a signup (registration form with user, pwd, age and marriage status).
- [ ] Persist the user data in the server side.
- [ ] Only logged in users can vote. (maximum 3 votes x box x user), and votes are persisted per user.
- [ ] Create the authentication system and an API with CRUD operations that allows to modify the user information.
- [ ] Create an API endpoint that shows votes x user.
- [ ] For this part you don't need to apply fancy styles. Just raw boxes and forms.

---

### Available Scripts
See any lint errors in the console.

`npm test` launches the test runner in the interactive watch mode. [More information](https://facebook.github.io/create-react-app/docs/running-tests).

`npm run build` builds the app for production to the `/build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. 
Your app is ready to be deployed! [More information about deployment](https://facebook.github.io/create-react-app/docs/deployment)

`npm run eject` **Note:** this is a one-way operation. Once you `eject`, you can’t go back! If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project. Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own. You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

**Code Splitting** [info](https://facebook.github.io/create-react-app/docs/code-splitting)

**Analyzing the Bundle Size** [info](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

**Making a Progressive Web App** [info](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

**Advanced Configuration** [info](https://facebook.github.io/create-react-app/docs/advanced-configuration)

**Deployment** [info](https://facebook.github.io/create-react-app/docs/deployment)

**`npm run build` fails to minify** [info](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
