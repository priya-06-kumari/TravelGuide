// function wrapAsync(fn){
//     return function(req,res,next){
//         fn(req,res,next).catch(next);
//     }
// }

//we can directly export this function
module.exports = (fn) =>{
    return (req,res,next)=>{
        fn(req,res,next).catch(next);
    };
};
