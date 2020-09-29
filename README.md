# j-parser

`j-parser` - translate any data serialization language into another. 
  - Most npm parsers out there are only single purpose parsers such as:
    - `js-yaml`: parses yaml files into a json object and also dumps json objects into a yaml file
    - `fast-xml-parser`: parses xml files into a json object and dumps json objects into an xml file
    - `table-to-json`: parses html tables into a json object and vice versa.
  - `j-parser` will be a wrapper around these libraries that exposes an api that allows a seemless conversion of one format to another. Starting with `yaml` and `xml`, through time, it'll be able to support conversions between more and more data serialization languages. 
