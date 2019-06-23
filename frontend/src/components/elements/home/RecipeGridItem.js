import React, { Component } from "react";
import {
    DigitText,
    DigitButton,
    DigitMenu,
    DigitDesign
} from "@cthit/react-digit-components";
import "./RecipeGridItem.css";

class RecipeGridItem extends Component {
    constructor(props) {
        super(props);
        let recipe = this.props.recipe;
        this.state = {
            recipeName: recipe.name,
            recipeTime: recipe.time,
            // Rest of props are to be sent to recipe page
            recipeAmount: recipe.amount,
            recipeIngredients: recipe.ingredients,
            recipeDescription: recipe.description,
            recipeInstructions: recipe.instructions,
            recipeCreator: recipe.creator
        };
    }

    openRecipePage = () => {
        // TODO: Figure out how send data
        window.open("/recipe");
    };

    formatTime = () => {
        var str = "Time: ";
        var returnStr = str.concat(this.state.recipeTime, " min");
        return returnStr;
    };

    handleEditMenu = choice => {
        this.props.handleEdit(choice);
    };

    handleDeleteRecipe = () => {
        this.props.handleDelete();
    };

    renderMenuIfCreator = () => {
        let isCreator = this.props.isUserCreator;
        if (isCreator) {
            return (
                <DigitMenu
                    onClick={value => {
                        console.log(value + " has been selected");
                    }}
                    valueToTextMap={{
                        edit_recipe: "Edit recipe",
                        delete_recipe: "Delete recipe"
                    }}
                />
            );
        } else {
            return <div />;
        }
    };

    render() {
        return (
            <DigitDesign.Card absWidth="320px" absHeight="220px">
                <div className="recipeGridItem">
                    <div className="recipeTitle">
                        <DigitText.Title
                            className="recipeTitle"
                            text={this.state.recipeName}
                        />
                    </div>
                    <div className="recipeMenu">
                        {this.renderMenuIfCreator()}
                    </div>
                    <DigitText.Text text={this.formatTime()} />
                    <div className="buttonDiv">
                        <DigitButton
                            text="Open recipe"
                            onClick={this.openRecipePage}
                            raised
                        />
                    </div>
                </div>
            </DigitDesign.Card>
        );
    }
}

export default RecipeGridItem;
