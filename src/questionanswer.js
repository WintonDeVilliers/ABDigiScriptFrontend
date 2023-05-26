
        // var questionContainer = ['This is a question right here','This is the answer to that question','Another question right here','answer to that question']

        // function questionAnswer(){
        //     var randomNumber = Math.floor(Math.random() * (questionContainer.length));
        //     document.getElemtnById('questionDisplay').innerHTML = questionContainer[randomNumber];
        // }
        

        
        //     var randomNumber = Math.floor(Math.random() * (data.length));
    // document.getElementById('questionDisplay').innerHTML = data[randomNumber];
 
       {questions.map((question) => {
          return (
            <div key={question.question}>
              {question.answer}

            </div>
          )        

       })}

    //    {questions.find(question => question.id ==1) }