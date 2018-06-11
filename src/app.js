//INPUTS AND FORMS
const app = {
    title: 'Task Manager',
    subtitle: 'Un task manager de toda la vida',
    options: ['eat','code','sleep']
}

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;
    
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
    
    console.log('Form Submitted');
};

const removeAll = () => {
    app.options = [];
    render();
}

const onMake = () => {
    
}

const activateModal = () => {
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

    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    
    console.log(randomNum);
    
    // show modal
    mui.overlay('on', modalEl);
};

const container = document.getElementById('container1');

//JSX template
const render = () => {
const template = (
    <div className="mui-container">
        <div className="mui-panel g-rounded">
            <form className="mui-col-md-8 mui-form" onSubmit={onFormSubmit}>
                <legend className="mui--text-center g-header"><span className="g-header-a">ADD</span> <span className="g-header-task">TASK</span></legend>
                <hr/>
                <div className="mui-textfield mui-textfield--float-label">
                    <input type="text" name="option"/>
                    <label>Write a task ...</label>
                </div>
                <button className="mui-btn mui-btn--raised"><span className="g-header-a">ADD</span> <span className="g-header-task">TASK</span></button>
    
                <button disabled={app.options.length === 0} onClick={activateModal} className="mui-btn mui-btn--raised"><span className="g-header-a">What </span><span className="g-header-task">should I do?</span></button>
    
                <button onClick={removeAll} className="mui-btn mui-btn--raised"><span className="g-header-a">REMOVE </span><span className="g-header-task">ALL</span></button>
                <br/>
                <br/>
                <label><span className="g-number">{app.options.length}</span> tasks created </label>
                <br/>
                <br/>
                <div className="mui-panel">
                    <ol>
                        {app.options.map((task)=>{
                            return <li key={task}>{task}<hr/></li>;
                        })}
                    </ol>
                </div>
            </form>
            <div className="mui-panel mui-col-md-4">
                <div className="mui-panel g-rounded">
                    <a target="_blank" href="https://reactjs.org/docs/introducing-jsx.html"><img className="g-img" src='img/react.png'/></a>
                </div>
                <div className="mui-panel g-rounded">
                    <a target="_blank" href="https://www.udemy.com/react-2nd-edition/"><img className="g-img" src='img/react2.jpg'/></a>
                </div>
            </div>
        </div>
    </div>
);
    ReactDOM.render(template, container);
}

render();


