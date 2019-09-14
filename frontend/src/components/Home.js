import React, { Component } from "react";
import { DigitLayout } from "@cthit/react-digit-components";
import NewWindow from "react-new-window";
import ReactDOM from "react-dom";
import RecipeGridView from "./elements/home/RecipeGridView";
import Recipe from "./Recipe";
import EditRecipe from "./Edit";
import axios from "axios";
import "./styles/Home.css";

class Home extends Component {
    constructor(props) {
        super(props);
        /*
      Currently hardcoded until backend is connected
      Format of recipe:
        name
        time
        servings
        ingredients [ingredient, amount, meassurement]
        description
        instructions
        creator (preferably in form of cid)
    */
        this.state = {
            recipes: [
                {
                    name: "Dragon Chicken",
                    time: "30",
                    servings: "10",
                    ingredients: [
                        ["Chicken", "10", "st"],
                        ["Dragon", "10", "st"]
                    ],
                    description: "DrawIT's signature dish",
                    instructions:
                        "Slice and fry chicken\nSprinkle freshly chopped dragon leaves",
                    creator: "schan",
                    id: "07e36c28-baad-11e9-a2a3-2a2ae2dbcce4"
                },
                {
                    name: "Kragon Chicken",
                    time: "30",
                    servings: "10",
                    ingredients: [["Chicken", "10"], ["Dragon", "10"]],
                    description: "DrawIT's signature dish",
                    instructions:
                        "Slice and fry chicken\nSprinkle freshly chopped dragon leaves",
                    creator: "schan",
                    id: "07e36e80-baad-11e9-a2a3-2a2ae2dbcce4"
                },
                {
                    name: "Eragon Chicken",
                    time: "30",
                    servings: "10",
                    ingredients: [["Chicken", "10"], ["Dragon", "10"]],
                    description: "DrawIT's signature dish",
                    instructions:
                        "Slice and fry chicken\nSprinkle freshly chopped dragon leaves",
                    creator: "schan",
                    id: "07e36fd4-baad-11e9-a2a3-2a2ae2dbcce4"
                },
                {
                    name: "Mragon Chicken",
                    time: "30",
                    servings: "10",
                    ingredients: [["Chicken", "10"], ["Dragon", "10"]],
                    description: "DrawIT's signature dish",
                    instructions:
                        "Slice and fry chicken\nSprinkle freshly chopped dragon leaves",
                    creator: "schan",
                    id: "07e37100-baad-11e9-a2a3-2a2ae2dbcce4"
                },
                {
                    name: "Aragon Chicken",
                    time: "30",
                    servings: "10",
                    ingredients: [["Chicken", "10"], ["Dragon", "10"]],
                    description: "DrawIT's signature dish",
                    instructions:
                        "Slice and fry chicken\nSprinkle freshly chopped dragon leaves",
                    creator: "schan",
                    id: "07e3722c-baad-11e9-a2a3-2a2ae2dbcce4"
                },
                {
                    name: "Oragon Chicken",
                    time: "30",
                    servings: "10",
                    ingredients: [["Chicken", "10"], ["Dragon", "10"]],
                    description: "DrawIT's signature dish",
                    instructions:
                        "Slice and fry chicken\nSprinkle freshly chopped dragon leaves",
                    creator: "schan",
                    id: "07e375a6-baad-11e9-a2a3-2a2ae2dbcce4"
                }
            ]
        };
    }

    isUserCreator = creator => {
        /*
      Checks if the creator of recipe is the current user, currently
      hardcoded
    */
        return true;
    };

    handleMenu = choice => recipe => {
        if (choice === "edit_recipe") {
            localStorage.setItem("recipeData", recipe);
            // Route to edit page
            window.open("/edit", "_blank");
        } else {
            this.handleDeleteRecipe(recipe);
        }
    };

    handleDeleteRecipe = recipe => {
        let currentRecipes = this.state.recipes;
        const index = currentRecipes.findIndex(r => r.id === recipe.id);
        currentRecipes.splice(index, 1);
        this.setState({
            recipes: currentRecipes
        });

        /*
        for (let i = 0; i < currentRecipes.length; i++) {
            if (JSON.stringify(currentRecipes[i]) === JSON.stringify(recipe)) {
                currentRecipes.splice(i, 1);
                this.setState({
                    recipes: currentRecipes
                });
            }
        }
        */
        // Send to backend
    };

    handleOpenRecipe = recipe => {
        localStorage.setItem("recipeData", JSON.stringify(recipe));
        window.open("/recipe", "_self");
    };

    render() {
        return (
            <RecipeGridView
                recipes={this.state.recipes}
                isUserCreator={this.isUserCreator}
                handleMenu={this.handleMenu}
                handleDeleteRecipe={this.handleDeleteRecipe}
                handleOpenRecipe={this.handleOpenRecipe}
            />
        );
    }
}

export default Home;
