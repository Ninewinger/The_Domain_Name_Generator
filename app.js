var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];

for(i of pronoun){
    for(e of adj){
        for(u of noun){
            let dom = `${i}`+`${e}`+`${u}`;
            console.log(dom+`.com`);
        }
    }
}