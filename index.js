console.log('Development Week EG');

const sumar = (...args)=>{
    return args.reduce((a,b)=>a+b);
};

module.exports = sumar;
//export sumar;
