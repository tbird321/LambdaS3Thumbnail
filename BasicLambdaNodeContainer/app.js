
var edge = require('edge');

//var helloWorld = edge.func(function () {/*
//    async (input) => { 
//        return ".NET Welcomes " + input.ToString(); 
//    }
//*/});

//helloWorld('JavaScript', function (error, result) {
//    if (error) throw error;
//    console.log(result);
//});

var clrMethod = edge.func({
    assemblyFile: './NonCoreDLL/BasicNonCore.dll',
    typeName: 'BasicNonCore.Startup',
    methodName: 'Invoke' // This must be Func<object,Task<object>>
});

clrMethod(1, function (error, result) {    
    console.log(result);
});

//var exec = require('child_process').exec;
//console.log('Starting App');
//var context = {};
//context.done = function () {
//    console.log("Lambda Function Complete");
//}

//handler = function (event, context,callback) {
//    child = exec("BasicLambda.dll", { cwd: 'CoreDLL' }, function (error,stdout,stderr) {
//        if (stderr) {
//            console.log("call failed");
//        }
//        else {
//            console.log("Completed call");
//        }
//    });
//    child.stdout.on('data', console.log);
//    child.stderr.on('data', console.error);
//}

//handler(null, context);
