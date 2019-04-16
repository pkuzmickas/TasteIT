// Express and Port assignment
const express = require('express')
const app = express()
const port = 4000

// PostgreSQL and Node.js connector
const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'postgresdb',
  database: 'tasteit',
  password: 'yeet',
  port: 5432,
})
client.connect();

//Json reading
const fs = require("fs");

// Querys for recipes are rid, rname, rimgurl, ringurl, rscore, rtimereq, rhowto
// Ingdocs reads: every line starts with % and ends with & and every entry is described as
// amount:measurement:name and are separeted by :

/// ALL app.get's


    app.get('/', (req, res) => {rootRoute(res)});
    app.get('/recipe/:id', (req, res) => {recipeRoute(req, res)});
   // app.get('/ingredient/:id', (req, res) => {ingredientRoute(req, res)});
    app.get('/test', (req, res) => {testRoute(req, res)}); 
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));


/// ALL ROUTE FUNCTIONS

function testRoute(req, res){
    fs.readFile("./ingredients/test.json", (err, data) => {
        res.send(data);
        console.log("File read error: " + err);
    })
}

function rootRoute(res){
    getAllRecipes().then(result => {
        res.json(result.data)
     }).catch(() => console.log("get(/) did not recive data"));
}

function recipeRoute(req, res){
    getRecipe(req.params.id).then(result => {
        res.json(result.data)
    })
    
}

function ingredientRoute(req, res){
    getIngredients(req.params.id).then(result => {
        res.json(result.data)
    })
}


/// RECIPE HANDLING

/// Returns JSON object with all recipes
async function getAllRecipes(){    
    let response;
    await client.query('SELECT * FROM recipes').then( res=> {
        response = res.rows;
    });
    return {
        data: response
    }       
}

/// Returns JSON object with one specific recipe, takes the id for the recipe
async function getRecipe(id){
    let response;
    await client.query(`SELECT * FROM recipes WHERE rid=${id}`).then(res => {
        response = res.rows;
    });
    return {
        data: response
    } ;
}

/// INGREDIENT HANDLING

async function getIngredientObj(name){
    let file;
    await fs.readFile("./ingredients/test.txt", (err, data) => {
        file = data.toString();
    });

}

function ingredientsToObjArray(file){

}

/// MISC


function newRecipeObj(obj){
    let recipe = {
        recipeid: JSON.parse(obj.recipeid),
        name: removeQuotes(JSON.stringify(obj.name)),
        ingredientref: JSON.parse(obj.ingredientref),
        instructions: removeQuotes(JSON.stringify(obj.instructions)),
        imageurl: removeQuotes(JSON.stringify(obj.imageurl)),
        timereq: JSON.parse(obj.timereq),
        rating: JSON.parse(obj.rating)
    }
    return recipe;
}

function newIngredientObj(obj){
    let ingredient = {
        inname: removeQuotes(JSON.stringify(obj.inname)),
        inmeasure: removeQuotes(JSON.stringify(obj.inmeasure)),
        inamount: JSON.parse(obj.inamount),
        
    }
    return ingredient;
}

function removeQuotes(string){
    return string.slice(1, string.length -1);
}
