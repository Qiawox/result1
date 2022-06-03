const todo = {
    //   main() {

    // //   this.save();
    // // },




    action(e) {
        const target = e.target;
        if (target.classList.contains('todo__action')) {
            const action = target.dataset.todoAction;
            const elemItem = target.closest('.todo__item');

            if (action === 'deleted' && elemItem.dataset.todoState === 'deleted') {
                elemItem.remove();
            } else {
                elemItem.dataset.todoState = action;
            }
            this.save();
        } else if (target.classList.contains('create')) {
            console.log('rrr');
            this.add();
            this.save();
            // this.create();
            // this.create1();
            // this.create2();
            console.log('clown');

        } else if (target.classList.contains('save')) {
            console.log('rrr');
            this.add();
            this.save();
        }
    },
    add() {
        const divik = document.createElement('div');
        divik.classList.add('divik');
        // while (document.querySelector('.bl[data-todo-state="active"]')) {
        document.querySelector('.bl[data-todo-state="active"]').setAttribute('data-todo-state', 'completed');
        const elemDesc = document.querySelector('.rrr');
        const spic = document.createElement('li');
        const scan = document.createElement('div');
        scan.classList.add('scan');
        scan.setAttribute('data', 'active')
        spic.appendChild(scan);
        const scan1 = document.createElement('div');
        scan1.classList.add('scan1');
        spic.appendChild(scan1);
        $('.rrr').each(function(index, element) {
            console.log('Индекс элемента div:' + index + '; значение = ' + $(element).val())
            scan.insertAdjacentHTML('beforeend', '<span class ="text">' + $(element).val() + '</span><br>');
            divik.appendChild(spic);
        });
        const elemNumber = document.querySelector('.number');
        $('.number').each(function(index, element) {
            console.log('Индекс элемента num:' + index + '; значение = ' + '<span class="num">' + $(element).val() + '</span><br>')
            scan1.insertAdjacentHTML('beforeend', '<span class="num">' + $(element).val() + '</span>');
        });
        document.querySelector('.bl[data-todo-state="completed"]').style.display = 'none';

        // }
        localStorage.setItem('todo', document.querySelector('.result').innerHTML);
        const elemText = document.querySelector('.name');
        divik.insertAdjacentHTML('afterbegin', this.create(elemText.value));
        elemText.value = '';
        document.querySelector('.result').appendChild(divik);
        divik.insertAdjacentHTML('beforeend', this.create3());
        // const desc = document.querySelector('.rrr').value;
        // const number = document.querySelector('.number').value;
        // const object = {
        //     desc: desc,
        //     number: number
        // }
        // localStorage.setItem('value', JSON.stringify(object));

        // document.querySelector('.bl').style.display = 'none';
        // console.log('win2');

        // document.querySelector('.bl').setAttribute('data-todo-state', 'off');
    },
    create(text) {
        // document.querySelector('.bl[data-todo-state="active"]').style.display = 'none';
        document.querySelector('.bl[data-todo-state="completed"]').style.display = 'none';
        // document.querySelector('.bl[data-todo-state="active"]').setAttribute('data-todo-state', 'completed');
        console.log('lek');
        return `<span class="todo__task"><b class="t1">${text}</b></span><br>`;
    },
    create1(desc) {
        return `<span class="t2">${desc}`;
    },
    create2(number) {
        return `<span> - <p class="t3">${number}</p>h</span><br><br>`;
    },
    create3() {
        return `<button class="bts" onclick="click1(event)">Load</button>
        <button class="bts1" onclick="Delete(event)">Delete</button>`;
    },
    init() {
        const fromStorage = localStorage.getItem('todo');
        if (fromStorage) {
            document.querySelector('.result').innerHTML = fromStorage;
        }
        // document.querySelector('.todo__options').addEventListener('change', this.update);
        document.addEventListener('click', this.action.bind(this));
    },
    update() {
        const option = document.querySelector('.todo__options').value;
        document.querySelector('.todo__items').dataset.todoOption = option;
        document.querySelector('.todo__text').disabled = option !== 'active';
    },
    save() {
        localStorage.setItem('todo', document.querySelector('.result').innerHTML);
    }
}
$("button.mmm").on('click', function() {
    localStorage.clear();
    document.querySelector('.todo__items').innerHTML = '';
})

todo.init();