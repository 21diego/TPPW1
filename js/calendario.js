 document.addEventListener('DOMContentLoaded', function() {
    var initialLocaleCode = 'es';
    var localeSelectorEl = document.getElementById('locale-selector');
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list' ],
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
      },
      defaultDate: '2019-11-01',
      locale: initialLocaleCode,
      buttonIcons: false, 
      weekNumbers: true,
      navLinks: true, 
      editable: true,
      eventLimit: true,
      events: [
        {
          title: 'Introduccion \n html5 Basico',
          start: '2019-11-01'
        },
        {
          title: 'Curso Basico de HTML5',
          start: '2019-11-04',
          end: '2019-11-09'
        },
         {
          title: 'Curso java',
          start: '2019-11-04',
        },
         {
          title: 'curso java',
          start: '2019-11-06',
        },
         {
          title: 'curso java',
          start: '2019-11-08',
        },
         {
          title: 'Curso Basico de Css3',
          start: '2019-11-11',
          end: '2019-11-16'
        },
        {
          title: 'Introduccion \n Css3 Intermedio',
          start: '2019-11-18'
        },
         {
          title: 'curso java',
          start: '2019-11-20',
        },
         {
          title: 'curso java',
          start: '2019-11-22',
        },
         {
          title: 'curso java',
          start: '2019-11-11',
        },
         {
          title: 'curso java',
          start: '2019-11-25',
        },
         {
          title: 'curso java',
          start: '2019-11-27',
        },
         {
          title: 'curso java',
          start: '2019-11-29',
        },
         {
          title: 'curso java',
          start: '2019-12-02',
        },
         {
          title: 'curso java',
          start: '2019-12-04',
        },
         {
          title: 'curso java',
          start: '2019-12-06',
        },
         {
          title: 'Curso Intermedio de Css3',
          start: '2019-12-02',
          end: '2019-12-07'
        },
         {
          title: 'Curso Avanzado de Css3',
          start: '2019-12-09',
          end: '2019-12-14'
        },
         {
          title: 'Curso JavaScript',
          start: '2019-12-16',
          end: '2019-12-21'
        },
         {
          title: 'Curso JavaScript Avanzado',
          start: '2020-02-03',
          end: '2020-02-08'
        },
         {
          title: 'Curso MySQL',
          start: '2020-02-03',
          end: '2020-02-08'
        },
         {
          title: 'Curso Net',
          start: '2020-02-10',
          end: '2020-02-15'
        },
         {
          title: 'Curso PHP',
          start: '2020-02-17',
          end: '2020-02-22'
        },
         
      ]
    });

    calendar.render();

    // build the locale selector's options
    calendar.getAvailableLocaleCodes().forEach(function(localeCode) {
      var optionEl = document.createElement('option');
      optionEl.value = localeCode;
      optionEl.selected = localeCode == initialLocaleCode;
      optionEl.innerText = localeCode;
      localeSelectorEl.appendChild(optionEl);
    });

    // when the selected option changes, dynamically change the calendar option
    localeSelectorEl.addEventListener('change', function() {
      if (this.value) {
        calendar.setOption('locale', this.value);
      }
    });

  });