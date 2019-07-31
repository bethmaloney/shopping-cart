# Shopping Site

[![Build status](https://dev.azure.com/bethmaloney/shopping-cart/_apis/build/status/Storyboard)](https://dev.azure.com/bethmaloney/shopping-cart/_build/latest?definitionId=1)

Simple drop down cart preview which are common on ecommerce sites. Implemented using React and Typescript.

Bootstrap and Sass are used for styling the components. Sass stylesheets are created at the component level and loaded using CSS modules. Sass allows for the overriding of Bootstrap default settings as needed. CSS modules prevent name collisions and allow the isolation of styles.

Storybook is used for viewing components individually. Components can be viewed at http://storyboard.shoppingcart.bethanymaloney.com

Azure Devops automatically builds every push to main and any pull requests. Additionally a commit to main will result in the automatic deployment of to an S3 bucket as part of a CI/CD pipeline. DNS is registered through Route 53.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
