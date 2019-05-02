import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import * as yup from 'yup'
import {DigitText, DigitForm, DigitDesign,
        DigitFormField, DigitTextField, DigitCheckbox,
        DigitButton, DigitTextArea} from '@cthit/react-digit-components'
import "./Upload.css"

class Upload extends Component {
  render() {
    return (
      <div className="upload">
          <DigitText.Heading3 text="Ladda upp recept" />
          <div className="uploadform">
            <DigitForm
              onSubmit={(values, actions) => {
                console.log(values);
              }}
              initialValues={{ recipeName: "text", agreement: false }}
              validationSchema={yup.object().shape({
                text: yup.string().required("This can't be empty"),
                agreement: yup.boolean().required("You need to accept")
              })}
              render={({ errors }) => (
                <DigitDesign.Card absWidth="500px" absHeight="500px">
                  <DigitDesign.CardBody>
                    <DigitFormField
                      name="recipeName"
                      component={DigitTextField}
                      componentProps={{
                        upperLabel: "Receptnamn"
                      }}
                    />
                    <DigitFormField
                      name="recipeTime"
                      component={DigitTextField}
                      componentProps={{
                        upperLabel: "Tid"
                      }}
                    />
                    <DigitFormField
                      name="recipeInstructions"
                      component={DigitTextArea}
                      componentProps={{
                        upperLabel: "Receptinstruktioner",
                        lowerLabel: "Fyll i instruktioner"
                      }}
                    />
                    <DigitFormField
                      name="agreement"
                      component={DigitCheckbox}
                      componentProps={{ primary: true, label:"Agreement" }}
                    />
                  </DigitDesign.CardBody>
                  <DigitDesign.CardButtons>
                    <DigitButton primary raised submit text="Lägg till recept" />
                  </DigitDesign.CardButtons>
                </DigitDesign.Card>
              )}
            />;
        </div>
      </div>
    );
  }
}

export default Upload;
