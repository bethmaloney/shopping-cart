# Shopping Site

[![Build status](https://dev.azure.com/bethmaloney/shopping-cart/_apis/build/status/Storyboard)](https://dev.azure.com/bethmaloney/shopping-cart/_build/latest?definitionId=1)

Very basic frontend for an online shopping/eCommerce site. Implemented using React, Typescript and Bootstrap.

## Hosting

The site can be viewed at https://shoppingcart.bethanymaloney.com

Storybook is used for viewing components individually. Components can be viewed at http://sb.shoppingcart.bethanymaloney.com

The frontend is hosted on an AWS S3 bucket. I use Route 53 and ACM to register the domains and create the SSL certificates. The site is served from a Cloudfront distribution. I'm using Cloudfront + S3 as Cloudfront allows me force HTTP connections to upgrade to HTTPS and for multiple domains to point to the one S3 bucket.

## Technology

Bootstrap and Sass are used for styling the components. Sass stylesheets are created at the component level and loaded using CSS modules. Sass allows for the overriding of Bootstrap default settings as needed. CSS modules prevent name collisions and allow the isolation of styles.

[hookrouter](https://www.npmjs.com/package/hookrouter) is used instead of React Router as React Router currently doesn't support hooks.

## CI/CD

Azure Devops automatically builds every push to master and any pull requests. Additionally a commit to master will result in the automatic deployment to an S3 bucket as part of a CI/CD pipeline. Currently there's no tests but I hope to add them and on failure cause the build to fail and prevent push to production.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
