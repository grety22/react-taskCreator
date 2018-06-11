'use strict';

//INPUTS AND FORMS
var app = {
    title: 'Task Manager',
    subtitle: 'Un task manager de toda la vida',
    options: ['eat', 'code', 'sleep']
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }

    console.log('Form Submitted');
};

var removeAll = function removeAll() {
    app.options = [];
    render();
};

var onMake = function onMake() {};

var activateModal = function activateModal() {
    // initialize modal element
    var modalEl = document.createElement('div');
    modalEl.style.width = '300px';
    modalEl.style.height = '150px';
    modalEl.style.margin = '100px auto';
    modalEl.style.backgroundColor = '#fff';
    modalEl.style.borderTopLeftRadius = '15px';
    modalEl.style.borderTopRightRadius = '15px';
    modalEl.style.borderColor = '#8651cb';
    modalEl.style.borderBottomStyle = 'solid';
    modalEl.style.borderWidth = '10PX';

    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];

    console.log(randomNum);

    // show modal
    mui.overlay('on', modalEl);
};

var container = document.getElementById('container1');

//JSX template
var render = function render() {
    var template = React.createElement(
        'div',
        { className: 'mui-container' },
        React.createElement(
            'div',
            { className: 'mui-panel g-rounded' },
            React.createElement(
                'form',
                { className: 'mui-col-md-8 mui-form', onSubmit: onFormSubmit },
                React.createElement(
                    'legend',
                    { className: 'mui--text-center g-header' },
                    React.createElement(
                        'span',
                        { className: 'g-header-a' },
                        'ADD'
                    ),
                    ' ',
                    React.createElement(
                        'span',
                        { className: 'g-header-task' },
                        'TASK'
                    )
                ),
                React.createElement('hr', null),
                React.createElement(
                    'div',
                    { className: 'mui-textfield mui-textfield--float-label' },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'label',
                        null,
                        'Write a task ...'
                    )
                ),
                React.createElement(
                    'button',
                    { className: 'mui-btn mui-btn--raised' },
                    React.createElement(
                        'span',
                        { className: 'g-header-a' },
                        'ADD'
                    ),
                    ' ',
                    React.createElement(
                        'span',
                        { className: 'g-header-task' },
                        'TASK'
                    )
                ),
                React.createElement(
                    'button',
                    { disabled: app.options.length === 0, onClick: activateModal, className: 'mui-btn mui-btn--raised' },
                    React.createElement(
                        'span',
                        { className: 'g-header-a' },
                        'What '
                    ),
                    React.createElement(
                        'span',
                        { className: 'g-header-task' },
                        'should I do?'
                    )
                ),
                React.createElement(
                    'button',
                    { onClick: removeAll, className: 'mui-btn mui-btn--raised' },
                    React.createElement(
                        'span',
                        { className: 'g-header-a' },
                        'REMOVE '
                    ),
                    React.createElement(
                        'span',
                        { className: 'g-header-task' },
                        'ALL'
                    )
                ),
                React.createElement('br', null),
                React.createElement('br', null),
                React.createElement(
                    'label',
                    null,
                    React.createElement(
                        'span',
                        { className: 'g-number' },
                        app.options.length
                    ),
                    ' tasks created '
                ),
                React.createElement('br', null),
                React.createElement('br', null),
                React.createElement(
                    'div',
                    { className: 'mui-panel' },
                    React.createElement(
                        'ol',
                        null,
                        app.options.map(function (task) {
                            return React.createElement(
                                'li',
                                { key: task },
                                task,
                                React.createElement('hr', null)
                            );
                        })
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'mui-panel mui-col-md-4' },
                React.createElement(
                    'div',
                    { className: 'mui-panel g-rounded' },
                    React.createElement(
                        'a',
                        { target: '_blank', href: 'https://reactjs.org/docs/introducing-jsx.html' },
                        React.createElement('img', { className: 'g-img', src: 'img/react.png' })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'mui-panel g-rounded' },
                    React.createElement(
                        'a',
                        { target: '_blank', href: 'https://www.udemy.com/react-2nd-edition/' },
                        React.createElement('img', { className: 'g-img', src: 'img/react2.jpg' })
                    )
                )
            )
        )
    );
    ReactDOM.render(template, container);
};

render();
