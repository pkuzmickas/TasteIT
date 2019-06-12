import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import * as yup from 'yup'
import {DigitText, DigitForm, DigitDesign,
        DigitFormField, DigitSelect,
        DigitTextField, DigitCheckbox,
        DigitButton, DigitTextArea, DigitEditData,
        DigitToast, DigitToasActions} from '@cthit/react-digit-components'
import "./Upload.css"

class Upload extends Component {
  render() {
    return (
      <div className="upload">
          <DigitText.Heading3 text="Upload recipe" />
          <div className="uploadform">
            <DigitEditData
                marginVertical="10px"
                absWidth="450px"
                onSubmit={(values, actions) => {
                  // Send values to the backend to be stored in the database
                  console.log(values);
                  // Converts string into int
                  values.recipeamount = parseInt(values.recipeamount, 10);
                  values.recipetime = parseInt(values.recipetime, 10);
                  // Consider sending a notifaction before reset
                  actions.resetForm();
                }}
                validationSchema={yup.object().shape({
                  recipename: yup.string().required(),
                  recipetime: yup.string().required(),
                  recipetime: yup.string().required(),
                  recipeingredients: yup.string().required(),
                  recipeinstructions: yup.string().required()
                })}
                submitText={"Upload recipe"}
                keysOrder={["recipename", "recipetime", "recipeamount",
                            "recipeingredients", "recipedescription",
                            "recipeinstructions"]}
                keysComponentData={{
                  recipename: {
                      component: DigitTextField,
                      componentProps: {
                          filled: true,
                          upperLabel: "Recipename",
                          lowerLabel: "Name of the recipe"
                      }
                  },
                  recipetime: {
                      component: DigitTextField,
                      componentProps: {
                        filled: true,
                        upperLabel: "Recipetime",
                        lowerLabel: "Cooking time"
                      }
                  },
                  recipeamount: {
                    component: DigitSelect,
                    componentProps: {
                      lowerLabel: "Amount of portions",
                      valueToTextMap: {
                        1: "1",
                        2: "2",
                        3: "3",
                        4: "4",
                        5: "5",
                        6: "6",
                        7: "7",
                        8: "8",
                        9: "9",
                        10: "10"
                      },
                      filled: true
                    }
                  },
                  recipeingredients: {
                      component: DigitTextArea,
                      componentProps: {
                        filled: true,
                        upperLabel: "Recipe Ingredients",
                        lowerLabel: "The ingredients to use"
                      }
                  },
                  recipedescription: {
                      component: DigitTextArea,
                      componentProps: {
                        filled: true,
                        upperLabel: "Recipedescription",
                        lowerLabel: "Description of the recipe (Optional)"
                      }
                  },
                  recipeinstructions: {
                      component: DigitTextArea,
                      componentProps: {
                        filled: true,
                        upperLabel: "Recipe Instructions",
                        lowerLabel: "Instruction in how to cook the recipe"
                      }
                  }
                }}
                />
          </div>
      </div>
    );
  }
}

export default Upload;
