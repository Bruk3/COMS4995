# j-parser

### A comprehensive data serialization language parser
![GitHub](https://img.shields.io/github/license/bruk3/j-parser)
![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/bruk3/j-parser/CI/master)
![nycrc config on GitHub](https://img.shields.io/nycrc/bruk3/j-parser?config=.nycrc.json)
![Read the Docs](https://img.shields.io/readthedocs/j-parser)

#### What is it? 
`j-parser` is a javascript library that allows a seemless conversion of one data serialization language to another. 

----
Most npm parser libraries out there are single purpose parsers that provide conversion capabilites from only one target data serialization language into JSON. `j-parser` is a wrapper around some of the most widely used npm parser libraries out there: `js-yaml`, `fast-xml-parser`, and `table-to-json`. It exposes a simple API which will be used to translate from one format to another.  

#### Target Features
 - `YAML` to `JSON` 
 - `XML` to `JSON`
 - `YAML` to `XML` 
 - `HTML tables` to `JSON`
 - And for all of the above features, the reverse translation will also be available.
