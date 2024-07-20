function showTab(tabName) {
    var tabs = document.querySelectorAll('.tabcontent');
    tabs.forEach(tab => {
      tab.style.display = 'none';
    });
  
    document.getElementById(tabName).style.display = 'grid';
    
    var tablinks = document.querySelectorAll('.tablink');
    tablinks.forEach(tablink => {
      tablink.classList.remove('active');
    });
    
    event.currentTarget.classList.add('active');
  }