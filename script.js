function toggleTabs(command) {
  switch (command) {
    case 'switchToPersonal':
      document.getElementById('professional').style.display = 'none';
      document.getElementById('personal').style.display = 'block';
      document.getElementById('tab-personal').classList.add('tab-selected');
      document.getElementById('tab-professional').classList.add('tab-unselected');
      document.getElementById('tab-personal').classList.remove('tab-unselected');
      document.getElementById('tab-professional').classList.remove('tab-selected');
      break;
    case 'switchToProfessional':
      document.getElementById('professional').style.display = 'block';
      document.getElementById('personal').style.display = 'none';
      document.getElementById('tab-personal').classList.add('tab-unselected');
      document.getElementById('tab-professional').classList.add('tab-selected');
      document.getElementById('tab-personal').classList.remove('tab-selected');
      document.getElementById('tab-professional').classList.remove('tab-unselected');
      break;
  }
}
