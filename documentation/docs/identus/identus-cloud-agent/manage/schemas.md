# Credential Schemas

## Create Credential Schema

On initial login the credential schema list will be empty

**ADD SCREENSHOT WITH EMPTY LIST** 

Select the Credential schemas option in the Menu Bar

Select '+ Create new button 

**ADD SCREENSHOT WITH CREATE NEW SCHEMA SCREEN**

Enter a Name for the Credential Schema. This is mandatory and should be unique and descriptive. The maximum length for a Schema name is 50 characters. 

You will get an error message “Unable to create schema” if you create a schema where there is an existing schema with the same name.

**Hint:** Ensure name is descriptive, for example “Employee Badge”

Enter a Description for the Credential Schema. This is mandatory and should give more details on the credential schema. The maximum length of description is 150 characters. 

**Hint:** Ensure description is clear and concise especially where there are multiple similar schemas. For example “The Employee Badge is to be issued to all employees on their first day of employment and is used for authorisation into physical parts of the office and to allow authentication into the company’s systems”

Start to add the credential attributes you require for the credential by selecting the '+' Add new attribute button. There is no limit on the amount of attributes you can add.

**Hint:** Ensure each attribute should have a description. The description is optional and has no limit in the number of characters.

Use the Applicable Rule Per Attribute table (add reference to above) above to guide you in creating the rules correctly that you need. 

Select the Save button to the credential schema

To edit a credential attribute select the 'Edit' button
To delete a credential attribute select the 'Delete' button

Select 'Save' buttononce you have added all the attributes. The credential schema has now been saved and added to the listing. 

**ADD SCREENSHOT WITH NEWLY CREATED SCHEMA**

## View Credential Schema

A list of all credential schemas that have been created already are viewable in the Credential Schema tab 

The First Schema created will be top of the list followed by schemas created in chronological order.

The schema name and description will be displayed in the list.

Select a credential schema to view its attributes and associate rules. 

## Duplicate Credential Schema

To create a duplicate of an existing credential schema, select the schema you want to copy and select “Duplicate” button.

You  can now add more attributes, or remove existing ones. The Schema name does not have to be unique. You can use the description field to differentiate between credentials of the same name

**ADD SCREENSHOT FOR DUPLICATING SCHEMA**

## Future Features

We have exciting features to add to PRISM Manage including:

### Preview Credential Schema

An ability to preview the credential schema in an easy manner and have the option to confirm creation or edit it if required.
Restrictions

### Validation of Attribute Rules

Currently there is minimal validation performed on the attribute rules. 

For example: 

- Entering a minimum and maximum value for integer attribute. No validation is done that the minimum value is less than the maximum value

- Entering a minimum and maximum value for a number attribute. No validation is done that the minimum value is less than the maximum number 

- Entering a minimum and maximum length value  for a string attribute. No validation is done that the minimum value is less than the maximum length value 

These validation checks will be added to a future iteration of PRISM Manage.
