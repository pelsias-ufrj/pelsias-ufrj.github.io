$('.nav-link').on('click', (e) => {
    setTimeout(function(){ $(window).trigger('resize'); }, 200);
})


$(document).on('ready', () => {
    $('select.select2').select2({theme: 'classic'});
    $('#select-edit').select2({
        width: '40%',
        allowClear: true, 
        placeholder: "",
        minimumInputLength: 1,
        theme: "classic",
        // tags: true,
        ajax: {
          headers: {"Content-Type": "application/json" },
          url: `http://localhost:5000/api/posttitles`,
          dataType: 'json',
          delay: 300,
          width: '100%',
          data: function (params) {
            var query = {};
            query['text'] = params['term'];
            
            return query;
          },
          processResults: function (data) {
            let resList = []
            data.forEach(function (c) {
                if (c!==undefined){
                    resList.push({ 'id': c.id, 'text': c.title });
                }
            });
            return {
              results: resList
            };
          },
        },
      })
})