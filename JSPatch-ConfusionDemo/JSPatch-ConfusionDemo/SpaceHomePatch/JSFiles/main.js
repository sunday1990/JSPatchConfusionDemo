
//http://jspatch.com/Docs/SDK

//https://github.com/bang590/JSPatch

defineClass("ViewController", {
            viewDidLoad:function(){
                self.ORIGviewDidLoad();
                console.log("patch success");
            }
            
            }, {});

