function addingEventListener() {
    // Get the input element with the id 'button'
    const button = document.getElementById('button');
  
    // Add an event listener for the 'click' event
    button.addEventListener('click', function() {
      alert('Button clicked!');
    });
  }
  
  // Call the function to set up the event listener
  addingEventListener();