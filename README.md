# GitHub User Search
------

![screenshot of project running](screenshot.jpg)


Search for GitHub User repositories by entering their username.
<br/>

##Setup/Installation Instructions
------

####Creating Personal Access Tokens

* Login to your github account and go to setting
* Select Personal Access Tokens from the sidebar, and hit Generate New Token
* Select Generate Token with no options checked to receive a unique access token.
* Place your access token in an .env file at the top level of your directory.
* You must name your API key variable exports.apiKey in your .env file and store it in the root of the project directory

`exports.apiKey="YOUR-ACCESS-TOKEN";`

* In command prompt enter: git clone https://github.com/VanessaSharma/gituser
* In command prompt enter: cd gituser
* Create an .env file in your project directory to include your key. Put this in your env file with your actual api-key:
  exports.apiKey = "your-github-api-key";
* In command prompt enter: npm init 
* In command prompt enter: npm install
* In command prompt enter: bower install
* In command prompt enter: gulp build
* In command prompt enter: gulp serve

<br/>

### Known Bugs
------

No known bugs as of now.

<br/>

### Specifications
------

This application will allow users to search github users and their repositories.

### Support and Contact Details
------

If you have any questions, please contact Vanessa Palacios Sharma at vanelunapalacios@live.com

<br/>

### Technology Used
------

JavaScript, Gulp, GitHub, Node, Bower, JSON, & HTML.

<br/>


Copyright (c) 2016 **_Vanessa Palacios Sharma_**
