# StarWarsAPI

<img src="./gitResources/1.png" align="right"
     alt="TodoList" width="150" height="150">

An API built in Node.js. It provides the user with Star Wars characters.

* **GET** Retrieve character info from the database.
* **GET** Retrieve character info based on their gender from the database.


## Technologies used in this project:

<img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
<img align="left" alt="Node.js" width="26px" src="./gitResources/hapi.png" />
<img align="left" alt="Hapi" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png" />
<img align="left" alt="MongoDB" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png" />

<br />

## Getting started:

Below we have the **directory tree** of the project.

<p align="center">
  <img src="./gitResources/2.png" align="center" alt="tree" width="400">
</p>

Make sure you have **mongodb** installed on your system. You can create a database and fill it with data related to characters based on the scheme provided in **config/db**. Move to the 
project directory **/StarWarsAPI/** using your terminal. Now make sure you first install the dependencies.

```shell
npm install
```

Now move to the src folder **/StarWarsAPI/src/** and run the project using **nodemon** if you have it installed.

```shell
nodemon app.js

OR

node app

```

---

Below you can see the result of a get request to the server using route **/characters**

<p align="center">
  <img src="./gitResources/3.png" alt="result" width="750">
</p>

Similarly using the dynamic route  **/{gender}** we can search the database based on the gender of characters. In the example below we searched for female characters.

<p align="center">
  <img src="./gitResources/4.png" alt="result" width="750">
</p>

The swagger documentation of our API can be visied under **http://localhost:3000/documentation** route. 

<p align="center">
  <img src="./gitResources/5.png" alt="result" width="750">
</p>

<br />

## Note

Feel free to download the project and build upon it. Happy coding!
