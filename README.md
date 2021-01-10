# Quiz Game

This app is created in just for fun

## It Does

Can be provided an api with axios.create(), but if api is not provided uses dummy questions just for example..

### questions list from api

questions : List of objects,
     question is an object with properties: 
        id : Number
        question : string,
        choices : optional list of strings,
        answer : string (should match one of the choices if choices are provided),
        image: src to image if needed
        meta :string (if the question needs  further explanation after the anser is shown)

example :
 questions : [
     {
         id: 1,
         question : "What are you doing",
         choices : ["nothing","something"],
         answer : "nothing",
         meta : "this is an explanation if needed",
         image: "https://images.com/someimage.png"
     },
     {
         //.....
     }
 ]

### questions list from api
    Whats next? I dunno- perhaps some styling or business logic. This is not ment to be bulletproof
    - Main purpose is to have a little competition with friends