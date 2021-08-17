var pronoun = ['the','our','my','this'];
var adj = ['great', 'big', 'fat', 'smart', 'dumb', 'sexy' ];
var noun = ['jogger','racoon','lion', 'fox', 'hammer', 'coin'];

for(i of pronoun){
    for(e of adj){
        for(u of noun){
            let dom = `${i}`+`${e}`+`${u}`;
            console.log(dom+`.com`);
        }
    }
}