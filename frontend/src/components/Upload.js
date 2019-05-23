import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import * as yup from 'yup'
import {DigitText, DigitForm, DigitDesign,
        DigitFormField, DigitTextField, DigitCheckbox,
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
                onSubmit={(values, actions) => {
                  // Send values to the backend to be stored in the database
                  console.log(values);
                  // Converts string into int
                  values.recipetime = parseInt(values.recipetime, 10);
                  // Consider sending a notifaction before reset
                  actions.resetForm();
                }}
                validationSchema={yup.object().shape({
                  recipename: yup.string().required(),
                  recipetime: yup.string().required(),
                  recipeingredients: yup.string().required(),
                  recipeinstructions: yup.string().required()
                })}
                submitText={"Upload recipe"}
                keysOrder={["recipename", "recipetime", "recipeingredients",
                            "recipedescription", "recipeinstructions"]}
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
                  recipedescription: {
                      component: DigitTextArea,
                      componentProps: {
                        filled: true,
                        upperLabel: "Recipedescription"
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
