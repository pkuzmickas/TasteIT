import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import * as yup from 'yup'
import {DigitText, DigitForm, DigitDesign,
        DigitFormField, DigitTextField, DigitCheckbox,
        DigitButton, DigitTextArea, DigitEditData} from '@cthit/react-digit-components'
import "./Upload.css"

class Upload extends Component {
  render() {
    return (
      <div className="upload">
          <DigitText.Heading3 text="Upload recept" />
          <div className="uploadform">
            <DigitEditData
                initialValues={{
                  recipename: "Name of the recipe",
                  recipetime: "Time required by the recipe",
                  recipeingredients: "Ingredients used by the recipe",
                  recipeinstructions: "Instruction"
                }}
                onSubmit={(values, actions) => {
                  // Send values to the backend to be stored in the database
                  console.log(values);
                  // Consider sending a notifaction before reset
                  actions.resetForm();
                }}
                validationSchema={yup.object().shape({
                  recipename: yup.string().required(),
                  recipetime: yup.string().required(),
                  recipeingredients: yup.string().required(),
                  recipeinstructions: yup.string().required()
                })}
                titleText={"placeholder"}
                submitText={"Upload recipe"}
                keysOrder={["recipename", "recipetime",
                            "recipeingredients", "recipeinstructions"]}
                keysComponentData={{
                  recipename: {
                      component: DigitTextField,
                      componentProps: {
                          filled: true,
                          upperLabel: "Recipename"
                      }
                  },
                  recipetime: {
                      component: DigitTextField,
                      componentProps: {
                        filled: true,
                        upperLabel: "Recipetime"
                      }
                  },
                  recipeingredients: {
                      component: DigitTextArea,
                      componentProps: {
                        filled: true,
                        upperLabel: "Recipe Ingredients"
                      }
                  },
                  recipeinstructions: {
                      component: DigitTextArea,
                      componentProps: {
                        filled: true,
                        upperLabel: "Recipe Instructions"
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
