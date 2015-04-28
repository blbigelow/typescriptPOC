# Blake's Typescript, Angular 1.4 & Angular New Router Demo

This is a sample project setting up Typescript and Angular to use the new component style of routing.
The idea is to have all compiling and unit testing setup so that you can have gulp do all the work for you
as files change.

## Setup

Run the following:

* `npm install http-server -g`
* `npm install tsd -g`
* `npm install`
* `bower install`
* `tsd install`

## Running

To run the demo appication:

* Run default gulp task. This will do the initial compilation and population of the public directory. The task will
also watch the src contents to compile and copy files as needed when making changes to the code.
* Run `http-server -p 3000`
* load [http://localhost:3000](http://localhost:3000) in your browser


## Development

The default gulp task will handle all of the basic needs of your development. If needed you can delete all of the
generated code by running `clean-all`. If you need to just clean the html files `clean-html`.

