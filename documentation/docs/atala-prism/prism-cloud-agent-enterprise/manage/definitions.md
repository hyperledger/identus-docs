# Definitions

## Credential Schemas

A credential schema is a standardised specification or template that defines the structure, format, and properties of a digital credential. It outlines the necessary attributes, data elements, and metadata that should be included in a credential to ensure consistency and interoperability.

PRISM Manage allows you to to easily and visually create a  credential schema, and allow you to decide: 
- Which data attributes are included
- What rules to apply to each attribute

These schemas are then stored as JSON in specific format per this [specification](https://json-schema.org/), and can subsequently be used to issue credentials using the Issue Credential APIs.

## Attributes 

In a credential schema, attributes refer to the properties or characteristics associated with a credential.

Attributes provide additional information and metadata about the credential, such as its title, issuer, issuance date, description, and any other relevant details. 

Attributes help define and describe the credential in a structured manner, allowing for clear identification, validation, and organization of the credential data. They provide a standardized way to represent and exchange information about the credential, ensuring consistency and interoperability.

### Attribute Types

Each Attribute has to be one of the following type;

#### **Integer**
An integer attribute is used to define a property that expects a whole number as its value. It represents numeric values without any fractional or decimal component. Integers can be positive or negative, including zero. The JSON specification does not impose any specific limitation on the minimum or maximum.This means that any integer value would be considered valid for that attribute. 

#### **Number**
A number attribute is used to define a property that expects a numeric value. This numeric value can include both whole numbers (integers) and decimal numbers. A number attribute can have any number of decimal points. The JSON specification does not impose any specific limit on the precision or number of decimal places for numeric values.

#### **String**
A string attribute is used to define a property that expects textual data as its value, such as words, sentences, or any sequence of characters. The JSON specification does not impose any specific limitation on the maximum number of characters a string attribute can have.

#### **Object**
An object attribute is used to define a property that expects a complex data structure consisting of key-value pairs, allowing for the organization and representation of structured data.

#### **Array** 
An array attribute is used to define a property that expects an ordered collection of values, allowing for the representation of multiple items or elements within a single property.

#### **Boolean**
A boolean attribute is used to define a property that expects a value that can be either true or false, representing binary logic or conditions.

### Attribute Rules 

Each Attribute can have a set of rules applied. The types of rules that are available include: 

#### **Required**
The "required" rule specifies which attributes must be included or present in a credential for it to be considered valid or complete. 

- Option to set True (Mandatory)
- Option to set False (Optional)

#### **Minimum/Maximum**
The "Minimum" and "Maximum" rules define numeric constraints on attribute values. They allow specifying the minimum and maximum allowed values for numeric attributes within a credential. 
- Option to set Minimum value 
- Option to set Maximum value 

#### **Format**
The "format" rule ensures that the attribute values representing integers are within the expected bit size range. This helps maintain data integrity and enables consistent interpretation and handling of integer values in the context of the credential. 

For int32, which represents a 32-bit signed integer, the attribute value should conform to this format. The value should be within the range of -2,147,483,648 to 2,147,483,647, as dictated by the 32-bit signed integer representation.

For int64, representing a 64-bit signed integer, the attribute value should fall within the range of -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807, adhering to the 64-bit signed integer representation.

- Option to set to int32 
- Option to set to int64	

#### **multipleOf**
The "multipleOf" rule defines a constraint on numeric attribute values, specifying that they must be a multiple of a given number. 
- Option to set MultipleOf

#### **eNum**
The "enum" rule is used to define a list of allowable or valid values for an attribute. It restricts the attribute value to be one of the specified options, ensuring that it conforms to a predefined set of choices.
- Option to set fixed set of values


#### **Format (Strings)**
The "format" rule specifies the expected format or pattern for attribute values that represent specific data types, such as dates, email addresses, URLs, or custom formats. It allows for the validation and enforcement of a particular structure or pattern for attribute values.
- Date (Attribute must be a string representing a valid  Date in format  "YYYY-MM-DD")
- Date-time (Attribute must be a string representing a valid Date in format "YYYY-MM-DDTHH:MM:SSZ" (ISO 8601 format) 
- Time  (Attribute must be a string representing a valid Date in format   "HH:MM:SS" 
- Email  (Attribute must be a string representing a valid email address) 
- URL 
- Hostname (Attribute must be a string representing a valid hostname)
- Ipv4 (Attribute must be a string representing a valid IPv4 address)	
- Ipv6  (Attribute must be a string representing a valid  IPv6 address)
- uuid  (Attribute must be a string representing a valid UUID)

#### **RegEx**
The "regex" rule allows the definition of a custom validation pattern using a regular expression. Regular expressions (regex) are powerful string matching patterns that specify the format or pattern that an attribute value must follow.
- Option to set fixed set regular expression
- Enter as text

#### **AllowAdditionalProperties**
The "additionalProperties" rule allows you to define whether additional properties, which are not explicitly defined in the schema, are allowed or disallowed within the credential.
- Option to set True (Allow additional properties)
- Option to set False (Disallow additional properties)


#### **Unique Items**
The "uniqueItems" rule is used to enforce that the elements within an array attribute must be unique. It ensures that there are no duplicate values present in the array.
- Option to set True (Allow Unique Items)
- Option to set False (Do Not Allow Unique Items)

#### **Default Value**
The "default" rule allows you to specify a default value for an attribute. The default value is used when no explicit value is provided for that attribute in the credential.
- Option to set Default value 

### Applicable Rules Per Attribute

 Below summarises the rules applicable for each attribute 

**Integer**
- Required 
- Min/Max Value
- Format
- multipleOf
- eNum

**Number**
- Required 
- Min/Max Value
- Format
- multipleOf
- eNum

**String**
- Required 
- Format
- Min/Max Length 
- multipleOf
- RegEx

**Object** 
- Min/Max Properties	
- AllowAdditionalProperties

**Array**
- Required 
- Min/Max Items
- Unique Items

**Boolean**
- Default Value

## Verification Policies
Verification Policies enable verifiers to define the specific data that they require for their business processes and that they will request from holders. 

Verification Policies are flexible in that you can request only the specific data you need from a holder.

When you create a verification policy, you can decide:
- From what specific credential schemas  you require the data from 
- From which specific issuer you require the data from

## DIDs
Create and manage PRISM DIDs easily using PRISM Manage. Easily publish or deactivate your PRISM DIDs






