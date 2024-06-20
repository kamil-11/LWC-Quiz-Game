import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    optionValue;
    selected ={}; //For storing Answers
    correctAnswer = 0;
    isSubmitted =false;
    myQuestion =[
        {
        id:'Question1',
        question:'Which one of the following is not a template?',
        answers:{
            a:'for each',
            b:'iterator',
            c:'map loop'
        },
        correctAnswer:'c'
    },
    {
        id:'Question2',
        question:'Which one of the file is invalid LWC component folder?',
        answers:{
            a:'.svg',
            b:'.apex',
            c:'.js'
        },
        correctAnswer:'b'
    },{
        id:'Question3',
        question:'Which one of the following is not a directive?',
        answers:{
            a:'for:each',
            b:'if:true',
            c:'@track'
        },
        correctAnswer:'c'
    }
    ]
    
    get allNotSelected()
    {
        return !(Object.keys(this.selected).length === this.myQuestion.length)
    }
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestion.length === this.correctAnswer?'slds-text-color_success':'slds-text-color_error'}`
    }
    changeHandler(event)
    {
        console.log('Name : '+event.target.name)
        console.log('value : '+event.target.value);

        const {name,value} =event.target;

        this.selected = {...this.selected,[name]:value};
        console.log(selected);

    }
    
    submitHandler(event){
        event.preventDefault();
        let correct = this.myQuestion.filter(item => this.selected[item.id] === item.correctAnswer);
        this.correctAnswer = correct.length;
        console.log("correctAnswer - " + this.correctAnswer);
        this.isSubmitted = true;

    }
    resetHandler(event){
        this.selected = {};
        this.correctAnswer = 0;
        this.isSubmitted =false;
    }
  

}