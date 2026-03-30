let user_score = 0;
let comp_score = 0;

// The Choice selected by the user 

const choices = document.querySelectorAll('button');

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const user_choice = choice.getAttribute("id");
        show_results(user_choice);
    })
})


// The Choice Selected By the Computer

const generateCompChoice = () => {
    const options = ['stone', 'paper', 'scissors'];
    const index = Math.floor(Math.random() * 3);
    return options[index];
}


const show_results = (user_choice) => {


    let existingBox = document.querySelector('.result-box');
    if (existingBox) {
        existingBox.remove();
    }

    const choice_of_comp = generateCompChoice();




    // Result Div
    let result_box = document.createElement('div');
    result_box.className = 'result-box';
    result_box.style.backgroundColor = 'white';
    result_box.style.width = '600px';
    result_box.style.height = '400px';
    result_box.style.borderRadius = '5px';
    result_box.style.color = 'black';








    // P Tags inside the result box

    let user_selected_p = document.createElement('p');
    user_selected_p.className = 'user_selected_p';
    user_selected_p.innerHTML = `You:  ${user_choice}`;
    user_selected_p.style.color = 'black';
    user_selected_p.style.textAlign = 'center';
    user_selected_p.style.fontSize = 'x-large';
    user_selected_p.style.textTransform = 'capitalize';

    result_box.appendChild(user_selected_p);





    let compu_selected_p = document.createElement('p');
    compu_selected_p.className = 'compu_selected_p';
    compu_selected_p.innerHTML = `Computer:  ${choice_of_comp}`;
    compu_selected_p.style.color = 'black';
    compu_selected_p.style.textAlign = 'center';
    compu_selected_p.style.fontSize = 'x-large';
    compu_selected_p.style.textTransform = 'capitalize';

    result_box.appendChild(compu_selected_p);





    const equals = () => {
        let equal_win_p = document.createElement('p');
        equal_win_p.innerHTML = "It is a Draw!";
        equal_win_p.style.color = 'black';
        equal_win_p.style.textAlign = 'center';
        equal_win_p.style.fontSize = 'x-large';
        equal_win_p.style.textTransform = 'capitalize';
        result_box.appendChild(equal_win_p);
    }




    const wins_user = () => {
        let user_win_p = document.createElement('p');
        user_win_p.innerHTML = "You Won!";
        user_win_p.style.color = 'black';
        user_win_p.style.textAlign = 'center';
        user_win_p.style.fontSize = 'x-large';
        user_win_p.style.textTransform = 'capitalize';
        result_box.appendChild(user_win_p);
        user_score++;
    }



    const computer_win = () => {
        let comp_win_p = document.createElement('p');
        comp_win_p.innerHTML = 'Computer Wins!';
        comp_win_p.style.color = 'black';
        comp_win_p.style.textAlign = 'center';
        comp_win_p.style.fontSize = 'x-large';
        comp_win_p.style.textTransform = 'capitalize';
        result_box.appendChild(comp_win_p);
        comp_score++;
    }


    if (user_choice === choice_of_comp) {
        equals()

    } else if (user_choice === 'stone' && choice_of_comp === 'paper') {
        computer_win()

    } else if (user_choice === 'stone' && choice_of_comp === 'scissors') {
        wins_user()

    } else if (user_choice === 'paper' && choice_of_comp === 'stone') {
        wins_user()

    } else if (user_choice === 'paper' && choice_of_comp === 'scissors') {
        computer_win()

    } else if (user_choice === 'scissors' && choice_of_comp === 'stone') {
        computer_win()

    } else if (user_choice === 'scissors' && choice_of_comp === 'paper') {
        wins_user()
    }

    if (user_choice === undefined) {
        result_box.style.display = 'none';

    } else {
        result_box.style.display = 'block';

    }

    document.body.appendChild(result_box);

    let score_person = document.getElementById('human').innerHTML = `You: ${user_score}`;
    let score_bot = document.getElementById('bot').innerHTML = `Computer: ${comp_score}`;


}
