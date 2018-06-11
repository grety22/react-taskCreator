//counter
let counter = 0;
//add function
const add = () => {
    counter++;
    renderFx();
}

const wrapper = document.getElementById('container1');
             
const renderFx = () => {
      const template = (
            <div className="mui--text-center">
                 <button className="mui--text-display3 mui-btn mui-btn--fab mui-btn--primary" onClick={add}>
                    {counter}
                 </button>             
            </div>
      ); 
      ReactDOM.render(template,wrapper);         
};
             
renderFx();     
          