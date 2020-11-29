
let renderer = {

    qrender(question) {
        if (document.querySelector('.questionBox') != null) {
            document.querySelector('.questionBox').remove();
        }
        render = `
        <div class="questionBox">
            <div class="description">${question.title}</div>
            <div class="answers" data-id="1">${question.answer1}</div>
            <div class="answers" data-id="2">${question.answer2}</div>
            <div class="answers" data-id="3">${question.answer3}</div>
            <div class="answers" data-id="4">${question.answer4}</div>
        </div>
        `;

        let marker = document.querySelector('.Question');
        marker.insertAdjacentHTML('afterbegin', render);
    }
};
