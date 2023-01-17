# Ricky & Morty Api

## Run the project locally
### Requirements
- [git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)

#### Download the repository on your machine
1. `git clone `

#### Start the project
Inside the directory cloned go to bc-audio-player an run:  
1. `npm install`
2. `npm start`

**NB:** point 2 run the local server and open with the default browser the url http://localhost:3000/ of the project.


## Tools Used:
- [react](https://it.reactjs.org/)
- [react-materialize](http://react-materialize.github.io/)
- [EditorConfig](https://editorconfig.org/)



## Deploy
After a commit in main or develop branch, the post-commit action create the build script and save to our CDN (AWS S3).
- branch **main**: run `npm run build` and the url of the 
- branch **develop**: run `npm run test` and the url of the 
