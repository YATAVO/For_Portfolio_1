            
function handleClick(event) {
    let action = this.dataset.action; 
                
    switch(action) {
        case 'info':
            alert('You Info');
            break;
        case 'order':
            alert('order info');
            break;
        default:
        alert('ERROR 404');
        }
                
        event.preventDefault();
            }
    
            
document.querySelectorAll('.wid a').forEach(function(button) {
    button.addEventListener('click', handleClick);
    });