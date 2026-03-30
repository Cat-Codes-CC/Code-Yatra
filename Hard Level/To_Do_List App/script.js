function addItem() {
    let input_by_user = document.getElementById('input-from-user');
    let input_text = input_by_user.value;

    if (input_text === '') {
        alert('Type Something First');
    } else {
        let list_item = document.createElement('li');
        list_item.className = 'item';

        list_item.innerHTML = input_text + '';

        let delete_btn = document.createElement('button');
        delete_btn.innerHTML = 'Delete';

        delete_btn.addEventListener('click', del);

        function del() {
            list_item.remove()
        }

        list_item.addEventListener('click', finished);

        function finished() {
            list_item.classList.toggle('done');
        }

        list_item.appendChild(delete_btn);

        document.getElementById('todo-list').appendChild(list_item);

        input_by_user.value = ''
    }
}