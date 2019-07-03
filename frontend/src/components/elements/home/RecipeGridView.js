import React, { Component } from "react";
import { DigitLayout } from "@cthit/react-digit-components";
import RecipeGridItem from "./RecipeGridItem";
import "./RecipeGridView.css";

class RecipeGridView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: this.props.recipes
        };
    }

    handleMenu = choice => recipe => {
        this.props.handleMenu(choice, recipe);
    };

    handleDelete = recipe => {
        this.props.handleDelete(recipe);
    };

    handleOpenRecipe = recipe => {
        this.props.handleOpenRecipe(recipe);
    };

    renderGridElements = item => {
        return (
            <RecipeGridItem
                recipe={item}
                isUserCreator={this.props.isUserCreator(item.creator)}
                handleMenu={this.handleMenu}
                handleDelete={this.handleDelete}
                handleOpenRecipe={this.handleOpenRecipe}
            />
        );
    };

    render() {
        let toBeRendered = this.state.recipes;
        let gridElements = toBeRendered.map(this.renderGridElements);

        return (
            <div className="recipeGrid">
                <DigitLayout.UniformGrid
                    minItemWidth="300px"
                    minItemHeight="200px"
                    rowGap="30px"
                    columnGap="30px"
                >
                    {gridElements}
                </DigitLayout.UniformGrid>
            </div>
        );
    }
}

export default RecipeGridView;
