/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */

    
  // tutorialSidebar2: [
  //   {
  //     type: 'category',
  //     label: 'Tutorial',
  //     items: ['hello'],
  //   },
  // ],
  
};

module.exports = {
  mySidebar: [
    {
      "Getting started": ["introduction", "quickstart", "dashboard", "search", "search/display-type", "search/report" ],
    },
    {
      "Oracle": ["document", "oracle/document-oracle", "oracle/transactions", "oracle/purchasing-transactions","oracle/document-ebs-r12", "oracle/transactions-ebs-r12", "oracle/ebs-reports"],

    },
    {
      "SAP": [  "sap/document-sap","sap/sap-transactions", "sap/sap-config", "sap/new_movement_type"],

    },
    {
      "Other Applications": [ "document-d365bc", "snow/document-snow", "sforce/document-sforce"],
    },
    {
      "Configuration": ["admin/configuration", "admin/go-rest-builder", "install-ebs-rest", "related-data-in-tabs", 
      "admin/input-type", "admin/default-config-ora-cloud", "admin/default-config-ora-ebs",
      "admin/default-config-sap", "admin/default-config-d365", "admin/default-config-snow", "admin/default-config-sforce"],
    },
    {
      "Customization": ["customization/server", "customization/client",  "customization/custom-application"],
    },
    {
      "About": ["privacy", "download"] 
    },
    {
      type: 'link',
      label: 'OneApp',
      href: 'http://docs.rikdata.com',
    },
  ],
};

//module.exports = sidebars;
