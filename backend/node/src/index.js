// Express and Port assignment
const express = require('express')
const app = express()
const port = 4000

// PostgreSQL and Node.js connector
/* const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'postgres',
  database: 'tasteit',
  password: '',
  port: 5432,
})
client.connect(err => console.log("Connecting ERROR: " + err)); */

//Json reading
const fs = require("fs");
const fsp = fs.promises;

// The parts should be 
// Ingdocs reads: every line starts with % and ends with & and every entry is described as
// amount:measurement:name and are separeted by :

/// ALL app.get's

    console.log(process.env.testing);


    app.get('/', (req, res) => {rootRoute(res)});
    app.get('/getAllNames', (req, res) => {allNamesRoute(res)});
    app.get('/getRecipe/:name', (req, res) => {getRecipeRoute(req, res)});
    app.get('/insertRecipe/:name/:data', (req, res) => {insertRecipeRoute(req, res)});
    app.get('/getAllRecipes', (req, res) => {getAllRecipesRoute(req, res)});
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));


/// ALL ROUTE FUNCTIONS

function testRoute(req, res){
    fs.readFile("./data/test.json", (err, data) => {
        res.send(data);
        console.log("File read error: " + err);
    })
}

function rootRoute(res){
    /* getAllRecipes().then(result => {
        res.json(result.data)
     }).catch(() => console.log("get(/) did not recive data")); */
     res.send("Yes")
}


function allNamesRoute(res){
    getAllNames()
    .then( data => res.send(data))
    .catch(err => {console.log("allNamesRoute Error: " + err)});
}

function getRecipeRoute(req, res) {
    getRecipe(req)
    .then((data) => res.send(data))
    .catch((err) => {res.send( "This error probably occured because of a faulty URL, URL should consist of the name.json <br>" + err);  console.log(err)})
}

function insertRecipeRoute(req, res){
    insertRecipe(req).then(data => res.send(data))
}

function getAllRecipesRoute(req, res){
    getAllRecipes(req)
    .then(data => {res.send(data)})
    .catch(err => {console.log(err)});
}




/// RECIPE HANDLING
/// name - time - servings - ingredients ([ingredient, amount, meassurement]) - description - instructions - creator


// RETURNS ONE SPECIFIC RECIPIE ACCORDING TO NAME
async function getRecipe(req){
    let response;
    let name = req.params.name;
    const data = await fsp.readFile(`./data/${name}`, "");
    response = JSON.parse(data);
    return response;
}

async function getRecipeLocal(name){
    return response = await fsp.readFile(`./data/${name}`, "");
}


// RETURNS THE NAME OF ALL RECIPIES
async function getAllNames() {
    const r = {
        recipes:  []
    }
    const data = await fsp.readdir("./data");


    data.forEach(name => {
        r.recipes.push(name)
    });
    return r;
}

async function insertRecipe(req){
    let response;
    let data = req.params;
    console.log(data)
    fsp.writeFile(`./data/${data.name}.json`, data)
    .then(() => console.log("Created"))
    .catch((err) => console.log(err));
    return "writen";
}

async function getAllRecipes(req){
    const {recipes} = await getAllNames();
    return await Promise.all(recipes.map(name => getRecipeLocal(name)));
    
    
   /*  for (let name of recipes) {

    }
    let response = "{\"recipes\" : [";
    const rNames = await getAllNames();
    const names = rNames.recipe;
    for(let i = 0; i < 3; i++){
        response += await getRecipeLocal(names[i]);
        response += ",";
    }
    response = response.slice(0, -1);
    response += "]}";
    console.log(JSON.parse(response));
    return JSON.parse(response); */

}
